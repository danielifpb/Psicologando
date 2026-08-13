import React, { useState } from 'react';
import { Alert, View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { Header } from '../../../components/Header';
import { Input } from '../../../components/Input';
import { SmallInput } from '../../../components/SmallInput';
import { Button } from '../../../components/Button';
import { useAlarms } from '../../../contexts/AlarmContext';

export function EditAlarm({ route }) {
    const navigation = useNavigation();
    const { alarms, updateAlarm } = useAlarms();
    const alarm = alarms.find(item => item.id === route.params?.alarmId);
    const [title, setTitle] = useState(alarm?.title ?? '');
    const [hour, setHour] = useState(alarm?.hour ?? '');
    const [minute, setMinute] = useState(alarm?.minute ?? '');
    const [saving, setSaving] = useState(false);

    async function handleSave() {
        const parsedHour = Number(hour);
        const parsedMinute = Number(minute);

        if (!alarm) {
            Alert.alert('Erro', 'Este alarme não existe mais.');
            navigation.goBack();
            return;
        }
        if (!title.trim()) {
            Alert.alert('Nome obrigatório', 'Informe o nome do medicamento.');
            return;
        }
        if (!/^\d{1,2}$/.test(hour) || parsedHour > 23 ||
            !/^\d{1,2}$/.test(minute) || parsedMinute > 59) {
            Alert.alert('Horário inválido', 'Use uma hora entre 00:00 e 23:59.');
            return;
        }

        setSaving(true);
        try {
            const result = await updateAlarm(alarm.id, {
                title,
                hour: parsedHour,
                minute: parsedMinute,
            });
            if (!result.notificationsEnabled) {
                Alert.alert(
                    'Alterações salvas',
                    'O alarme foi atualizado, mas as notificações estão desativadas no aparelho.',
                    [{ text: 'OK', onPress: () => navigation.goBack() }],
                );
            } else {
                navigation.goBack();
            }
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível atualizar o alarme.');
        } finally {
            setSaving(false);
        }
    }

    return (
        <View style={styles.container}>
            <Header
                headerTitle="Editar Alarme"
                headerIcon={
                    <BorderlessButton onPress={() => navigation.goBack()}>
                        <Feather name="chevron-left" size={24} color="black" />
                    </BorderlessButton>
                }
            />

            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>Nome</Text>
                    <Input value={title} onChangeText={setTitle} />
                </View>

                <View style={{ paddingTop: 30 }}>
                    <Text style={styles.title}>Hora e minuto</Text>
                    <View style={styles.column}>
                        <SmallInput value={hour} onChangeText={setHour} />
                        <Text style={styles.divider}>:</Text>
                        <SmallInput value={minute} onChangeText={setMinute} />
                    </View>
                </View>

                <View style={{ paddingTop: 30 }}>
                    <Button
                        title="Salvar Alterações"
                        onPress={handleSave}
                        loading={saving}
                        disabled={saving}
                    />
                </View>
            </View>
        </View>
    );
}
