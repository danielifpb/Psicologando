import React from 'react';
import { View, Text,FlatList,TouchableWithoutFeedback } from 'react-native'; 
import {Feather, Ionicons} from '@expo/vector-icons';
import { FAB } from 'react-native-paper';
 
import { styles } from './styles';

import {Header} from '../../components/Header';
import {ListDivider} from '../../components/ListDivider';

const anotacions = [
    {
        id: '0',
        day: '21',
        month: '06',
        year: '2021',
        hour: '21',
        minute: '32',
        note: '10',
        anexo: 'image',
    },
    {
        id: '1',
        day: '21',
        month: '06',
        year: '2021',
        hour: '13',
        minute: '49',
        note: '10',
        anexo: 'image',
    },
    {
        id: '2',
        day: '21',
        month: '06',
        year: '2021',
        hour: '19',
        minute: '53',
        note: '10',
        anexo: 'image',
    },
    
];

export function Diary() {
    return (
        <View style={styles.container}>
             <Header 
                headerTitle="Diário das Emoçõoes" 
            />

            <FlatList 
                data={anotacions}
                keyExtractor={item=>item.id}
                renderItem={({item})=>
                    <TouchableWithoutFeedback>
                        <View style={styles.content} >
                            
                            <Ionicons name="calendar" size={44} color="black" />


                            <View style={styles.contents}>
                                
                                <Text style={styles.title}>
                                        {item.day}/{item.month}/{item.year} {item.hour}:{item.minute}
                                </Text>
                                    
                                <View style={styles.icons}>
                                    <Ionicons  name="ios-pencil" size={30} color="black"  style={{right: 5}}/>
                                    <Ionicons  name="trash-outline" size={30} color="black" />
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
                
                onPress={() => console.log('Pressed')}
                
            />
        </View>
    );
}