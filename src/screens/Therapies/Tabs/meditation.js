import React from 'react';
import { View,Text, Image,ScrollView } from 'react-native'; 
import * as Linking from 'expo-linking';

import {styles} from './styles/styles';

import image0 from '../../../assets/imageTherapies/image0.jpg';
 

 
export function Meditation() {

    function handleOpenSite() {
        Linking.openURL("https://planodesaude.net.br/blog/meditacao-e-os-beneficios-para-saude-mental/");
    }

    return (
        <ScrollView>
                <View style={styles.content}>                    
                    <Image source={image0} style={styles.image}/>
                </View>

                <View style={styles.contents}>
                    <Text style={{maxWidth:300}}>
                        <Text style={styles.subtitle}>Sobre:    </Text> 
                        <Text style={styles.text}>Embora a meditação seja algo muito antigo e muito difundido pelas filosofias orientais, somente há pouco tempo a ciência comprovou sua eficácia e a incorporou nos tratamentos. Meditação é uma palavra de origem do latim “meditare”, que quer dizer “se desligar do mundo exterior e voltar a atenção para si mesmo”. Pouco a pouco, essa técnica vem sendo incorporada na medicina e aos tratamentos convencionais. Atualmente já se sabe que essa técnica é tão importante que pode até mesmo alterar a fisiologia do organismo. Assim, torna-se uma grande aliada na prevenção e no controle da depressão, da ansiedade, entre diversos outros problemas. Alguns estudos mostram que ela é importante também no tratamento de pessoas que têm hipertensão arterial, dor crônica, insônia, tensão pré-menstrual, dependência química, entre outras.</Text>
                    </Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.title} onPress={handleOpenSite}>Clique aqui para saber mais!</Text>
                </View>
                <View style={{marginTop:50}} />
            </ScrollView>
    );
}