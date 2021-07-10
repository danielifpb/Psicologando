import React from 'react'
import {View, Text, FlatList, TouchableWithoutFeedback} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {styles} from './styles';

import {ListDivider} from '../ListDivider';

const prof = [
    {
        id: '0',
        name: 'Dr Daniel Andrade',
        street: 'Francisco Bezerra',
        number: 119,
        district: 'Centro',
        city: 'Esperança-PB',
        landline: '4002-8922',
        whatsapp: '+5583993747315',
        email: 'daniel@daniel.com',
        desc: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.'

    },
    
]

export default function ListProfessionals(){
    const navigation = useNavigation();
    return(
        <View >
            <FlatList 
                data={prof}
                keyExtractor={item=>item.id}
                renderItem={({item})=>
                    <TouchableWithoutFeedback
                        
                        onPress={()=> navigation.navigate('DetailsProf', {
                            name: item.name,
                            street: item.street,
                            number: item.number,
                            district: item.district,
                            city: item.city,
                            landline: item.landline,
                            whatsapp: item.whatsapp,
                            email: item.email,
                            desc: item.desc
                            
                        })}
                    >
                        <View style={styles.container} >
                            <Ionicons  name="location-outline" size={48} color="black" />

                            <View style={styles.text}>
                                <Text style={styles.title}>
                                    {item.name}
                                </Text>
                                <Text style={styles.subtitle}>R: {item.street} Nº {item.number}</Text>
                                
                            </View>
                            
                        </View>
                        
                    </TouchableWithoutFeedback> 
                }
                ItemSeparatorComponent = {()=> <ListDivider />}
                showsVerticalScrollIndicator={false}
                
                

            />
           
        </View>
    )

}