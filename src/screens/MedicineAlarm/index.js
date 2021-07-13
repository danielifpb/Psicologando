import React from 'react';
import { View, Text,FlatList,TouchableWithoutFeedback } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';
import {Feather, Ionicons} from '@expo/vector-icons';
import { FAB } from 'react-native-paper';
 
import { styles } from './styles';

import {Header} from '../../components/Header';
import {ListDivider} from '../../components/ListDivider';

const alarms = [
    {
        id: '0',
        title: 'Effexor',
        hour: '19',
        minute: '00',
    },
    {
        id: '1',
        title: 'Relax',
        hour: '07',
        minute: '00',
    },
    {
        id: '2',
        title: 'Diazepam',
        hour: '23',
        minute: '00',
    },
];
 
export function MedicineAlarm() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
             <Header 
                headerTitle="Alarme" 
            />
            

            <FlatList 
                data={alarms}
                keyExtractor={item=>item.id}
                renderItem={({item})=>
                    <TouchableWithoutFeedback>
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
                                        name="ios-pencil" 
                                        size={30} 
                                        color="black"  
                                        style={{right: 5}} 
                                        onPress={()=> navigation.navigate('EditAlarm', {
                                            title: item.title, 
                                            hour: item.hour,
                                            minute: item.minute,
                                        })}
                                    />
                                    <Ionicons  name="trash-outline" size={30} color="black" onPress={() => console.log(item.minute)} />
                                </View>
                            </View>
                            
                        </View>
                        
                    </TouchableWithoutFeedback> 
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