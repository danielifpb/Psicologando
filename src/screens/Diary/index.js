import React from 'react';
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { Header } from '../../components/Header';
import { ListDivider } from '../../components/ListDivider';
import { useDiary } from '../../contexts/DiaryContext';

const EMOTIONS = {
    happy: { icon: 'happy-outline', label: 'Feliz' },
    sad: { icon: 'sad-outline', label: 'Triste' },
    calm: { icon: 'leaf-outline', label: 'Calmo(a)' },
    anxious: { icon: 'pulse-outline', label: 'Ansioso(a)' },
};

export function Diary() {
    const navigation = useNavigation();
    const { entries, loading, deleteEntry } = useDiary();

    function confirmDelete(item) {
        Alert.alert('Excluir registro', `Deseja excluir “${item.title}” e seus anexos?`, [
            { text: 'Cancelar', style: 'cancel' },
            {
                text: 'Excluir',
                style: 'destructive',
                onPress: async () => {
                    try {
                        await deleteEntry(item.id);
                    } catch (error) {
                        Alert.alert('Erro', 'Não foi possível excluir este registro.');
                    }
                },
            },
        ]);
    }

    return (
        <View style={styles.container}>
            <Header headerTitle="Diário das Emoções" />

            <FlatList
                data={entries}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    const emotion = EMOTIONS[item.emotion] ?? EMOTIONS.happy;
                    return (
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => navigation.navigate('DiaryEntry', { entryId: item.id })}
                        >
                            <View style={styles.content}>
                                <Ionicons name={emotion.icon} size={44} color="black" />
                                <View style={styles.contents}>
                                    <View style={styles.textContent}>
                                        <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                                        <Text style={styles.subtitle}>{item.date} · {emotion.label}</Text>
                                        {(item.photoUri || item.videoUri) && (
                                            <Text style={styles.attachments}>
                                                {item.photoUri ? 'Foto  ' : ''}{item.videoUri ? 'Vídeo' : ''}
                                            </Text>
                                        )}
                                    </View>
                                    <View style={styles.icons}>
                                        <Ionicons name="pencil-outline" size={28} color="black" />
                                        <Ionicons
                                            name="trash-outline"
                                            size={28}
                                            color="black"
                                            onPress={event => {
                                                event.stopPropagation();
                                                confirmDelete(item);
                                            }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    );
                }}
                ListEmptyComponent={!loading ? (
                    <View style={styles.emptyContainer}>
                        <Ionicons name="book-outline" size={52} color="#8F939A" />
                        <Text style={styles.emptyTitle}>Seu diário está vazio</Text>
                        <Text style={styles.emptySubtitle}>Toque no + para registrar como foi o seu dia.</Text>
                    </View>
                ) : null}
                ItemSeparatorComponent={() => <ListDivider />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 90 }}
            />

            <FAB
                style={styles.fab}
                color="black"
                icon="plus"
                onPress={() => navigation.navigate('DiaryEntry')}
            />
        </View>
    );
}
