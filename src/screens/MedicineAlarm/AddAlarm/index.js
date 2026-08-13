import React, { useState } from 'react';
import { Alert, View, Text } from 'react-native'; 
import { BorderlessButton } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import { Feather  } from '@expo/vector-icons';
 
import { styles } from './styles';

import {Header} from '../../../components/Header';
import {Input} from '../../../components/Input';
import {SmallInput} from '../../../components/SmallInput';
import {Button} from '../../../components/Button';
import { useAlarms } from '../../../contexts/AlarmContext';


export function AddAlarm() {
    const navigation = useNavigation();
    const { addAlarm } = useAlarms();
    const [title, setTitle] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [saving, setSaving] = useState(false);

    async function handleAdd() {
        const parsedHour = Number(hour);
        const parsedMinute = Number(minute);
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
            const result = await addAlarm({ title, hour: parsedHour, minute: parsedMinute });
            if (!result.notificationsEnabled) {
                Alert.alert(
                    'Alarme salvo',
                    'O alarme foi salvo, mas as notificações estão desativadas. Autorize-as nas configurações do aparelho.',
                    [{ text: 'OK', onPress: () => navigation.goBack() }],
                );
            } else {
                navigation.goBack();
            }
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível salvar o alarme. Tente novamente.');
        } finally {
            setSaving(false);
        }
    }
    
    return (
        <View style={styles.container}>
             <Header 
                headerTitle="Adicionar Alarme"
                headerIcon={
                    <BorderlessButton onPress={()=> navigation.goBack()}>
                        <Feather
                            name="chevron-left"
                            size={24}
                            color={"black"}

                        />
                    </BorderlessButton>
                } 
            />
            <View style={styles.content}>
                <View >
                    <Text style={styles.title}>Nome</Text>
                    <Input value={title} onChangeText={setTitle} placeholder="Medicamento" />
                </View>

                <View style={{paddingTop: 30}}>
                    <Text style={styles.title}>Hora e minuto</Text>
                    <View style={styles.column}> 
                        <SmallInput value={hour} onChangeText={setHour} placeholder="00" />
                        <Text style={styles.divider}>:</Text>
                        <SmallInput value={minute} onChangeText={setMinute} placeholder="00" />
                    </View>
                </View>

                <View style={{paddingTop: 30}}>
                    <Button title="Adicionar" onPress={handleAdd} loading={saving} disabled={saving} />   
                </View>
            </View>

        
            
        </View>
    );
}
