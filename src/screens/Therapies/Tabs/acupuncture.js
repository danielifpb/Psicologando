import React from 'react';
import { View,Text, Image,ScrollView } from 'react-native'; 
import * as Linking from 'expo-linking';

import {styles} from './styles/styles';

import image1 from '../../../assets/imageTherapies/image1.jpeg';
 

 
export function Acupuncture() {

    function handleOpenSite() {
        Linking.openURL("https://www.vittude.com/blog/acupuntura/");
    }

    return (
        <ScrollView>
                <View style={styles.content}>                    
                    <Image source={image1} style={styles.image}/>
                </View>

                <View style={styles.contents}>
                    <Text style={{maxWidth:300}}>
                        <Text style={styles.subtitle}>Sobre:    </Text> 
                        <Text style={styles.text}>Acupuntura é uma técnica milenar que integra a medicina tradicional chinesa. Os benefícios desse tratamento têm sido cada vez mais reconhecidos. Sua aplicação vem sendo expandida e utilizada para cuidar de diversas áreas da saúde humana, incluindo a saúde mental. Depressão, transtornos de ansiedade e até dependência química encontram na prática da acupuntura uma via alternativa para o cuidado terapêutico da mente e aumento do bem-estar emocional.</Text>
                    </Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.title} onPress={handleOpenSite}>Clique aqui para saber mais!</Text>
                </View>
                <View style={{marginTop:50}} />
            </ScrollView>
    );
}