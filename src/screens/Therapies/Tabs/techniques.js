import React from 'react';
import { View,Text, Image,ScrollView } from 'react-native'; 
import * as Linking from 'expo-linking';

import {styles} from './styles/styles';

import image3 from '../../../assets/imageTherapies/image3.jpeg';
 

 
export function Techniques() {

    function handleOpenSite() {
        Linking.openURL("https://www.clinicasoha.com/blog/2018/3/2/sade-mental-respirao-observao-e-meditao-1");
    }

    return (
        <ScrollView>
                <View style={styles.content}>                    
                    <Image source={image3} style={styles.image}/>
                </View>

                <View style={styles.contents}>
                    <Text style={{maxWidth:300}}>
                        <Text style={styles.subtitle}>Sobre:    </Text> 
                        <Text style={styles.text}>Quando você consegue perceber claramente se sua respiração está curta ou longa, superficial ou profunda, tensa ou tranquila, começa a sentir os próprios padrões internos e escolher como agir para melhorar o seu estado. É uma âncora para sua atenção, mostrando quando sua mente se dispersou, quando está entediado ou inquieto ou quando você está triste. É a forma de fazer contato consigo mesmo durante o dia. Você adquire mais consciência quando respira de forma atenta. E, estando mais atento, você observa e reconhece seus pensamentos e sentimentos. E consegue se relacionar melhor com eles.</Text>
                    </Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.title} onPress={handleOpenSite}>Clique aqui para saber mais!</Text>
                </View>
                <View style={{marginTop:50}} />
            </ScrollView>
    );
}