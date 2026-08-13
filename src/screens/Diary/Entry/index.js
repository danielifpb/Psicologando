import React, { useState } from 'react';
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Linking,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { useVideoPlayer, VideoView } from 'expo-video';

import { styles } from './styles';
import { Header } from '../../../components/Header';
import { Button } from '../../../components/Button';
import { useDiary } from '../../../contexts/DiaryContext';

const EMOTIONS = [
    { id: 'happy', label: 'Feliz', icon: 'happy-outline' },
    { id: 'sad', label: 'Triste', icon: 'sad-outline' },
    { id: 'calm', label: 'Calmo(a)', icon: 'leaf-outline' },
    { id: 'anxious', label: 'Ansioso(a)', icon: 'pulse-outline' },
];

function formatToday() {
    const date = new Date();
    return [date.getDate(), date.getMonth() + 1, date.getFullYear()]
        .map((value, index) => index < 2 ? String(value).padStart(2, '0') : value)
        .join('/');
}

function isValidDate(value) {
    const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value);
    if (!match) return false;
    const [, day, month, year] = match.map(Number);
    const date = new Date(year, month - 1, day);
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}

function VideoPreview({ uri }) {
    const player = useVideoPlayer(uri);
    return <VideoView player={player} style={styles.video} nativeControls contentFit="contain" allowsFullscreen />;
}

export function DiaryEntry({ route }) {
    const navigation = useNavigation();
    const { entries, addEntry, updateEntry } = useDiary();
    const current = entries.find(item => item.id === route.params?.entryId);
    const editing = Boolean(current);

    const [title, setTitle] = useState(current?.title ?? '');
    const [date, setDate] = useState(current?.date ?? formatToday());
    const [emotion, setEmotion] = useState(current?.emotion ?? '');
    const [reflection, setReflection] = useState(current?.reflection ?? '');
    const [songName, setSongName] = useState(current?.songName ?? '');
    const [songArtist, setSongArtist] = useState(current?.songArtist ?? '');
    const [songLink, setSongLink] = useState(current?.songLink ?? '');
    const [photoUri, setPhotoUri] = useState(current?.photoUri ?? null);
    const [videoUri, setVideoUri] = useState(current?.videoUri ?? null);
    const [saving, setSaving] = useState(false);

    function handleDateChange(value) {
        const digits = value.replace(/\D/g, '').slice(0, 8);
        const formatted = digits.length > 4
            ? `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`
            : digits.length > 2
                ? `${digits.slice(0, 2)}/${digits.slice(2)}`
                : digits;
        setDate(formatted);
    }

    async function chooseMedia(kind) {
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permission.granted) {
            Alert.alert('Permissão necessária', 'Autorize o acesso à galeria para escolher este anexo.');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: kind === 'photo' ? ['images'] : ['videos'],
            allowsEditing: kind === 'photo',
            quality: kind === 'photo' ? 0.85 : 1,
        });

        if (result.canceled || !result.assets?.[0]?.uri) return;
        if (kind === 'photo') setPhotoUri(result.assets[0].uri);
        else setVideoUri(result.assets[0].uri);
    }

    async function openSongLink() {
        const normalized = /^https?:\/\//i.test(songLink) ? songLink : `https://${songLink}`;
        if (await Linking.canOpenURL(normalized)) await Linking.openURL(normalized);
        else Alert.alert('Link inválido', 'Não foi possível abrir esse endereço.');
    }

    async function handleSave() {
        if (!title.trim()) {
            Alert.alert('Título obrigatório', 'Dê um título para este dia ou emoção.');
            return;
        }
        if (!isValidDate(date)) {
            Alert.alert('Data inválida', 'Informe uma data válida no formato DD/MM/AAAA.');
            return;
        }
        if (!emotion) {
            Alert.alert('Emoção obrigatória', 'Escolha a emoção que melhor representa o dia.');
            return;
        }

        const values = {
            title: title.trim(),
            date,
            emotion,
            reflection: reflection.trim(),
            songName: songName.trim(),
            songArtist: songArtist.trim(),
            songLink: songLink.trim(),
            photoUri,
            videoUri,
        };

        setSaving(true);
        try {
            if (editing) await updateEntry(current.id, values);
            else await addEntry(values);
            navigation.goBack();
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível salvar este registro e seus anexos.');
        } finally {
            setSaving(false);
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <Header
                headerTitle={editing ? 'Editar registro' : 'Novo registro'}
                headerIcon={
                    <BorderlessButton onPress={() => navigation.goBack()}>
                        <Feather name="chevron-left" size={24} color="black" />
                    </BorderlessButton>
                }
            />

            <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
                <Text style={styles.label}>Título do dia ou emoção *</Text>
                <TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder="Como foi seu dia?" placeholderTextColor="#8F939A" />

                <Text style={styles.label}>Data *</Text>
                <TextInput style={styles.input} value={date} onChangeText={handleDateChange} placeholder="DD/MM/AAAA" keyboardType="number-pad" maxLength={10} placeholderTextColor="#8F939A" />

                <Text style={styles.label}>Emoção *</Text>
                <View style={styles.emotions}>
                    {EMOTIONS.map(item => (
                        <TouchableOpacity
                            key={item.id}
                            style={[styles.emotionButton, emotion === item.id && styles.emotionSelected]}
                            onPress={() => setEmotion(item.id)}
                        >
                            <Ionicons name={item.icon} size={26} color="black" />
                            <Text style={styles.emotionText}>{item.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <Text style={styles.label}>Reflexão</Text>
                <TextInput
                    style={[styles.input, styles.reflection]}
                    value={reflection}
                    onChangeText={setReflection}
                    placeholder="Escreva livremente sobre o seu dia..."
                    placeholderTextColor="#8F939A"
                    multiline
                    textAlignVertical="top"
                />

                <Text style={styles.sectionTitle}>Música do dia</Text>
                <TextInput style={styles.input} value={songName} onChangeText={setSongName} placeholder="Nome da música" placeholderTextColor="#8F939A" />
                <TextInput style={styles.input} value={songArtist} onChangeText={setSongArtist} placeholder="Artista" placeholderTextColor="#8F939A" />
                <View style={styles.linkRow}>
                    <TextInput style={[styles.input, styles.linkInput]} value={songLink} onChangeText={setSongLink} placeholder="Link opcional" autoCapitalize="none" keyboardType="url" placeholderTextColor="#8F939A" />
                    {Boolean(songLink) && <TouchableOpacity style={styles.openLink} onPress={openSongLink}><Ionicons name="open-outline" size={22} /></TouchableOpacity>}
                </View>

                <Text style={styles.sectionTitle}>Foto</Text>
                {photoUri && <Image source={{ uri: photoUri }} style={styles.photo} />}
                <View style={styles.mediaActions}>
                    <TouchableOpacity style={styles.mediaButton} onPress={() => chooseMedia('photo')}>
                        <Ionicons name="image-outline" size={22} />
                        <Text style={styles.mediaText}>{photoUri ? 'Trocar foto' : 'Escolher foto'}</Text>
                    </TouchableOpacity>
                    {photoUri && <TouchableOpacity style={styles.removeButton} onPress={() => setPhotoUri(null)}><Text>Remover</Text></TouchableOpacity>}
                </View>

                <Text style={styles.sectionTitle}>Vídeo</Text>
                {videoUri && <VideoPreview key={videoUri} uri={videoUri} />}
                <View style={styles.mediaActions}>
                    <TouchableOpacity style={styles.mediaButton} onPress={() => chooseMedia('video')}>
                        <Ionicons name="videocam-outline" size={22} />
                        <Text style={styles.mediaText}>{videoUri ? 'Trocar vídeo' : 'Escolher vídeo'}</Text>
                    </TouchableOpacity>
                    {videoUri && <TouchableOpacity style={styles.removeButton} onPress={() => setVideoUri(null)}><Text>Remover</Text></TouchableOpacity>}
                </View>

                <View style={styles.saveArea}>
                    <Button title={editing ? 'Salvar alterações' : 'Adicionar ao diário'} onPress={handleSave} loading={saving} disabled={saving} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
