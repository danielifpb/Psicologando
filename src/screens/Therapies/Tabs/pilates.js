import React from 'react';
import { View,Text, Image,ScrollView } from 'react-native'; 
import * as Linking from 'expo-linking';

import {styles} from './styles/styles';

import image6 from '../../../assets/imageTherapies/image6.jpeg';
 

 
export function Pilates() {

    function handleOpenSite() {
        Linking.openURL("https://revistapilates.com.br/saude-mental/");
    }

    return (
        <ScrollView>
                <View style={styles.content}>                    
                    <Image source={image6} style={styles.image}/>
                </View>

                <View style={styles.contents}>
                    <Text style={{maxWidth:300}}>
                        <Text style={styles.subtitle}>Sobre:    </Text> 
                        <Text style={styles.text}>Pilates é um método que trabalha corpo e mente em conjunto, com princípios como respiração, controle, precisão, concentração, força, alongamento, fluidez e tonificação. O foco do método é plena integração entre corpo e mente, auxiliando, portanto, na saúde mental e física. Os movimentos são realizados sem pressa, afastando o estresse e a exaustão. É um excelente exercício para aliviar as tensões do dia a dia, melhorando o humor e a disposição ao juntar técnicas de respiração e controle. Isso torna as pessoas menos ansiosas e estressadas e provoca relaxamento mental e aumento da autoestima ao longo do tempo de prática, contribuindo imensamente para o equilíbrio da saúde mental.</Text>
                    </Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.title} onPress={handleOpenSite}>Clique aqui para saber mais!</Text>
                </View>
                <View style={{marginTop:50}} />
            </ScrollView>
    );
}