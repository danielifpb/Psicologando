import React from 'react';
import { View, Text } from 'react-native'; 
import { BorderlessButton } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import { Feather  } from '@expo/vector-icons';
 
import { styles } from './styles';

import {Header} from '../../../components/Header';
import {Input} from '../../../components/Input';
import {SmallInput} from '../../../components/SmallInput';
import {Button} from '../../../components/Button';


export function AddAlarm() {
    const navigation = useNavigation();
    
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
                    <Input />
                </View>

                <View style={{paddingTop: 30}}>
                    <Text style={styles.title}>Hora e minuto</Text>
                    <View style={styles.column}> 
                        <SmallInput />
                        <Text style={styles.divider}>:</Text>
                        <SmallInput />
                    </View>
                </View>

                <View style={{paddingTop: 30}}>
                    <Button title="Adicionar" />   
                </View>
            </View>

        
            
        </View>
    );
}