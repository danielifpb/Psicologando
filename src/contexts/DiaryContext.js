import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system/legacy';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = '@psicologando:diary';
const MEDIA_DIRECTORY = `${FileSystem.documentDirectory}diary-media/`;
const DiaryContext = createContext(null);

async function ensureMediaDirectory() {
  const info = await FileSystem.getInfoAsync(MEDIA_DIRECTORY);
  if (!info.exists) {
    await FileSystem.makeDirectoryAsync(MEDIA_DIRECTORY, { intermediates: true });
  }
}

async function persistMedia(sourceUri, type) {
  if (!sourceUri || sourceUri.startsWith(MEDIA_DIRECTORY)) return sourceUri || null;

  await ensureMediaDirectory();
  const cleanUri = sourceUri.split('?')[0];
  const detectedExtension = cleanUri.includes('.') ? cleanUri.split('.').pop() : '';
  const extension = detectedExtension && detectedExtension.length <= 5
    ? detectedExtension
    : type === 'photo' ? 'jpg' : 'mp4';
  const destination = `${MEDIA_DIRECTORY}${type}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}.${extension}`;
  await FileSystem.copyAsync({ from: sourceUri, to: destination });
  return destination;
}

async function removeMedia(uri) {
  if (!uri || !uri.startsWith(MEDIA_DIRECTORY)) return;
  const info = await FileSystem.getInfoAsync(uri);
  if (info.exists) await FileSystem.deleteAsync(uri, { idempotent: true });
}

export function DiaryProvider({ children }) {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then(value => setEntries(value ? JSON.parse(value) : []))
      .catch(error => {
        console.warn('Não foi possível carregar o diário.', error);
        setEntries([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const addEntry = useCallback(async values => {
    const photoUri = await persistMedia(values.photoUri, 'photo');
    let videoUri = null;

    try {
      videoUri = await persistMedia(values.videoUri, 'video');
      const entry = {
        ...values,
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        photoUri,
        videoUri,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      const next = [entry, ...entries];
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setEntries(next);
    } catch (error) {
      await Promise.all([removeMedia(photoUri), removeMedia(videoUri)]);
      throw error;
    }
  }, [entries]);

  const updateEntry = useCallback(async (id, values) => {
    const current = entries.find(item => item.id === id);
    if (!current) throw new Error('Registro não encontrado.');

    const photoUri = await persistMedia(values.photoUri, 'photo');
    let videoUri = null;

    try {
      videoUri = await persistMedia(values.videoUri, 'video');
      const updated = {
        ...current,
        ...values,
        photoUri,
        videoUri,
        updatedAt: new Date().toISOString(),
      };
      const next = entries.map(item => item.id === id ? updated : item);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setEntries(next);

      if (current.photoUri !== photoUri) await removeMedia(current.photoUri);
      if (current.videoUri !== videoUri) await removeMedia(current.videoUri);
    } catch (error) {
      if (photoUri !== current.photoUri) await removeMedia(photoUri);
      if (videoUri !== current.videoUri) await removeMedia(videoUri);
      throw error;
    }
  }, [entries]);

  const deleteEntry = useCallback(async id => {
    const current = entries.find(item => item.id === id);
    const next = entries.filter(item => item.id !== id);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setEntries(next);
    await Promise.all([removeMedia(current?.photoUri), removeMedia(current?.videoUri)]);
  }, [entries]);

  const value = useMemo(() => ({ entries, loading, addEntry, updateEntry, deleteEntry }),
    [entries, loading, addEntry, updateEntry, deleteEntry]);

  return <DiaryContext.Provider value={value}>{children}</DiaryContext.Provider>;
}

export function useDiary() {
  const context = useContext(DiaryContext);
  if (!context) throw new Error('useDiary deve ser usado dentro de DiaryProvider.');
  return context;
}
