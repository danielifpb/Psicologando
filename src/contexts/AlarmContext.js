import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Platform } from 'react-native';

const STORAGE_KEY = '@psicologando:alarms';
const CHANNEL_ID = 'medicine-alarms';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

const AlarmContext = createContext(null);

async function ensureNotificationPermission() {
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync(CHANNEL_ID, {
      name: 'Alarmes de medicamentos',
      description: 'Lembretes diários dos medicamentos cadastrados',
      importance: Notifications.AndroidImportance.MAX,
      sound: 'default',
      vibrationPattern: [0, 500, 250, 500],
      lightColor: '#EEC802',
    });
  }

  const current = await Notifications.getPermissionsAsync();
  if (current.status === 'granted') return true;

  const requested = await Notifications.requestPermissionsAsync();
  return requested.status === 'granted';
}

async function scheduleDailyNotification(alarm) {
  const granted = await ensureNotificationPermission();
  if (!granted) return null;

  return Notifications.scheduleNotificationAsync({
    content: {
      title: 'Hora do medicamento',
      body: `Está na hora de tomar ${alarm.title}.`,
      sound: 'default',
      color: '#EEC802',
      data: { alarmId: alarm.id },
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      hour: Number(alarm.hour),
      minute: Number(alarm.minute),
      channelId: CHANNEL_ID,
    },
  });
}

async function cancelNotification(notificationId) {
  if (notificationId) {
    await Notifications.cancelScheduledNotificationAsync(notificationId);
  }
}

export function AlarmProvider({ children }) {
  const [alarms, setAlarms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAlarms() {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        const savedAlarms = stored ? JSON.parse(stored) : [];

        if (savedAlarms.length === 0) {
          setAlarms([]);
          return;
        }

        const scheduled = await Notifications.getAllScheduledNotificationsAsync();
        const scheduledIds = new Set(scheduled.map(item => item.identifier));
        let changed = false;

        const reconciled = [];
        for (const alarm of savedAlarms) {
          if (alarm.notificationId && scheduledIds.has(alarm.notificationId)) {
            reconciled.push(alarm);
            continue;
          }

          const notificationId = await scheduleDailyNotification(alarm);
          reconciled.push({ ...alarm, notificationId });
          changed = true;
        }

        if (changed) {
          await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(reconciled));
        }
        setAlarms(reconciled);
      } catch (error) {
        console.warn('Não foi possível carregar os alarmes.', error);
        setAlarms([]);
      } finally {
        setLoading(false);
      }
    }

    loadAlarms();
  }, []);

  const addAlarm = useCallback(async ({ title, hour, minute }) => {
    const alarm = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      title: title.trim(),
      hour: String(hour).padStart(2, '0'),
      minute: String(minute).padStart(2, '0'),
      notificationId: null,
    };

    alarm.notificationId = await scheduleDailyNotification(alarm);
    const next = [...alarms, alarm];

    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setAlarms(next);
      return { notificationsEnabled: Boolean(alarm.notificationId) };
    } catch (error) {
      await cancelNotification(alarm.notificationId);
      throw error;
    }
  }, [alarms]);

  const updateAlarm = useCallback(async (id, values) => {
    const current = alarms.find(item => item.id === id);
    if (!current) throw new Error('Alarme não encontrado.');

    const updated = {
      ...current,
      title: values.title.trim(),
      hour: String(values.hour).padStart(2, '0'),
      minute: String(values.minute).padStart(2, '0'),
      notificationId: null,
    };

    updated.notificationId = await scheduleDailyNotification(updated);
    const next = alarms.map(item => item.id === id ? updated : item);

    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setAlarms(next);
      await cancelNotification(current.notificationId);
      return { notificationsEnabled: Boolean(updated.notificationId) };
    } catch (error) {
      await cancelNotification(updated.notificationId);
      throw error;
    }
  }, [alarms]);

  const deleteAlarm = useCallback(async (id) => {
    const current = alarms.find(item => item.id === id);
    const next = alarms.filter(item => item.id !== id);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setAlarms(next);
    await cancelNotification(current?.notificationId);
  }, [alarms]);

  const value = useMemo(() => ({
    alarms,
    loading,
    addAlarm,
    updateAlarm,
    deleteAlarm,
  }), [alarms, loading, addAlarm, updateAlarm, deleteAlarm]);

  return <AlarmContext.Provider value={value}>{children}</AlarmContext.Provider>;
}

export function useAlarms() {
  const context = useContext(AlarmContext);
  if (!context) throw new Error('useAlarms deve ser usado dentro de AlarmProvider.');
  return context;
}
