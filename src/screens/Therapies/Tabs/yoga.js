import React from 'react';
import { View,Text, Image,ScrollView } from 'react-native'; 
import * as Linking from 'expo-linking';

import {styles} from './styles/styles';

import image5 from '../../../assets/imageTherapies/image5.jpeg';
 

 
export function Yoga() {

    function handleOpenSite() {
        Linking.openURL("https://minhasaude.proteste.org.br/yoga-saude-fisica-e-mental/");
    }

    return (
        <ScrollView>
                <View style={styles.content}>                    
                    <Image source={image5} style={styles.image}/>
                </View>

                <View style={styles.contents}>
                    <Text style={{maxWidth:300}}>
                        <Text style={styles.subtitle}>Sobre:    </Text> 
                        <Text style={styles.text}>A yoga acalma, reequilibra os sentidos, e pode ser a chave para quem precisa desacelerar. Para contribuir ainda mais com a saúde física e mental, a yoga aumenta a flexibilidade, melhora a postura e deixa os músculos mais definidos. De acordo com artigo publicado no site Hora do Treino, além do efeito reparador dos sistemas corpóreos, a prática é considerada um exercício muscular, já que os movimentos exigem força, equilíbrio e resistência. Além disso, o efeito antiestresse da prática é praticamente imediato. Para isso, é necessário um ambiente calmo, com ausência de música ou com baixos sons da natureza. Também é importante manter as vozes baixas, paredes com poucas imagens e o controle da respiração. Essa atmosfera ajuda a restabelecer os sentidos que costumam ser agredidos durante um dia normal em qualquer cidade urbana.</Text>
                    </Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.title} onPress={handleOpenSite}>Clique aqui para saber mais!</Text>
                </View>
                <View style={{marginTop:50}} />
            </ScrollView>
    );
}