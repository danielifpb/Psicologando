import React from 'react';
import { View,Text, Image,ScrollView } from 'react-native'; 
import * as Linking from 'expo-linking';

import {styles} from './styles/styles';

import image2 from '../../../assets/imageTherapies/image2.jpeg';
 

 
export function Mindfulness() {

    function handleOpenSite() {
        Linking.openURL("https://www.medley.com.br/podecontar/preciso-ajuda/mindfulness-o-que-e");
    }

    return (
        <ScrollView>
                <View style={styles.content}>                    
                    <Image source={image2} style={styles.image}/>
                </View>

                <View style={styles.contents}>
                    <Text style={{maxWidth:300}}>
                        <Text style={styles.subtitle}>Sobre:    </Text> 
                        <Text style={styles.text}>A relação entre mindfulness e saúde mental é reforçada pelo Ministério da Saúde, pois “pode ser usada como terapia clínica em pessoas que sofrem com depressão, esquizofrenia, compulsão alimentar, dores crônicas e até com usuários de drogas”. Não se trata, no entanto, de uma substituição a tratamentos medicinais convencionais, mas sim de um complemento às demais formas de tratamento.</Text>
                    </Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.title} onPress={handleOpenSite}>Clique aqui para saber mais!</Text>
                </View>
                <View style={{marginTop:50}} />
            </ScrollView>
    );
}