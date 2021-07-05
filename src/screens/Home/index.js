import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Header} from '../../components/Header';

import { styles } from './styles'; 

import Image0 from '../../assets/imageHome/image0.jpg';
import Image1 from '../../assets/imageHome/image1.jpg';
import Image2 from '../../assets/imageHome/image2.jpg';
import Image3 from '../../assets/imageHome/image3.jpg';
import Image4 from '../../assets/imageHome/image4.jpg';
import Image5 from '../../assets/imageHome/image5.jpg';
import Image6 from '../../assets/imageHome/image6.jpg';

 
export function Home() {
    const navigation = useNavigation();

    const randomImage = Math.floor(Math.random() * 7);
    const image = [Image0,Image1,Image2,Image3,Image4,Image5,Image6];

    const randomPhrase = Math.floor(Math.random() * 10);
    const phrase = [
        "Você é incrível quando mesmo tendo todos os motivos para desistir, continua lutando!",
        "Comece acreditando que é possivel!",
        "Em momentos difíceis é preciso pensar em alguma coisa bonita.",
        "Sorria para o espelho.\nCUIDE-SE.\n AME-SE!",
        "Mantenha seus pensamentos positivos, porque seus pensamentos tornam-se suas palavras.",
        "A dor que você sente hoje será a sua força amanhã. Cada desafio enfrentado é uma oportunidade de crescimento.",
        "A tua felicidade é mais importante do que a opinião dos outros.",
        "Não Desista. Geralmente é a última chave no chaveiro que abre a porta.",
        "Não desista do amor, não desista de amar,\n não se entregue à dor, porque ela um dia vai passar…",
        "Não perca o ânimo nem a vontade de continuar;\n Os impossíveis só existem para quem desiste!"
    ];

    return (
        <View style={styles.container}>
            <Header 
                headerTitle="Psicologando"
            />
            
            <View style={styles.content}>
                
                <Text style={styles.title}>Imagem Motivacional</Text>
                <Image 
                    source={image[randomImage]}
                    style={styles.image}
                />
                <Text style={styles.title}>Frase Motivacional</Text>
                

                <Text style={styles.subtitle}>
                    {phrase[randomPhrase]}
                </Text>
            

            </View>
        </View>
    );
}