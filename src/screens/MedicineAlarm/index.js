import React from 'react';
import { Alert, View, Text, FlatList } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';
import {Feather, Ionicons} from '@expo/vector-icons';
import { FAB } from 'react-native-paper';
 
import { styles } from './styles';

import {Header} from '../../components/Header';
import {ListDivider} from '../../components/ListDivider';
import { useAlarms } from '../../contexts/AlarmContext';
 
export function MedicineAlarm() {
    const navigation = useNavigation();
    const { alarms, loading, deleteAlarm } = useAlarms();

    function confirmDelete(item) {
        Alert.alert('Excluir alarme', `Deseja excluir o alarme “${item.title}”?`, [
            { text: 'Cancelar', style: 'cancel' },
            {
                text: 'Excluir',
                style: 'destructive',
                onPress: async () => {
                    try {
                        await deleteAlarm(item.id);
                    } catch (error) {
                        Alert.alert('Erro', 'Não foi possível excluir o alarme.');
                    }
                },
            },
        ]);
    }
    return (
        <View style={styles.container}>
             <Header 
                headerTitle="Alarme" 
            />
            

            <FlatList 
                data={alarms}
                keyExtractor={item=>item.id}
                ListEmptyComponent={!loading ? (
                    <View style={styles.emptyContainer}>
                        <Ionicons name="alarm-outline" size={48} color="#8F939A" />
                        <Text style={styles.emptyTitle}>Nenhum alarme cadastrado</Text>
                        <Text style={styles.emptySubtitle}>Toque no + para adicionar um lembrete.</Text>
                    </View>
                ) : null}
                renderItem={({item})=>
                    <View>
                        <View style={styles.content} >
                            
                            <Feather  name="clock" size={44} color="black" />


                            <View style={styles.contents}>
                                <View style={styles.text}>
                                    <Text style={styles.title}>
                                        {item.title}
                                    </Text>
                                    <Text style={styles.subtitle}>{item.hour}:{item.minute}</Text>
                                    
                                </View>

                                <View style={styles.icons}>
                                    <Ionicons  
                                        name="pencil-outline" 
                                        size={30} 
                                        color="black"  
                                        style={{right: 5}} 
                                        onPress={()=> navigation.navigate('EditAlarm', {
                                            alarmId: item.id,
                                        })}
                                    />
                                    <Ionicons name="trash-outline" size={30} color="black" onPress={() => confirmDelete(item)} />
                                </View>
                            </View>
                            
                        </View>
                        
                    </View>
                }
                ItemSeparatorComponent = {()=> <ListDivider />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 70}}
                

            />

            <FAB
                style={styles.fab}
                color= 'black'
                icon= 'plus'
                
                onPress={() => navigation.navigate('AddAlarm')}
                
            />
            
            


        </View>
    );
}
