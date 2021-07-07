import React from 'react';
import { View,Text, Image,ScrollView } from 'react-native'; 
import * as Linking from 'expo-linking';

import {styles} from './styles/styles';

import image4 from '../../../assets/imageTherapies/image4.jpeg';
 

 
export function Art() {

    function handleOpenSite() {
        Linking.openURL("http://redehumanizasus.net/90110-arteterapia-a-arte-em-favor-da-saude-mental/");
    }

    return (
        <ScrollView>
                <View style={styles.content}>                    
                    <Image source={image4} style={styles.image}/>
                </View>

                <View style={styles.contents}>
                    <Text style={{maxWidth:300}}>
                        <Text style={styles.subtitle}>Sobre:    </Text> 
                        <Text style={styles.text}>A Arteterapia é um método terapêutico utilizado em diversas organizações na área da Saúde, Educação e Comunidade. A Associação Brasileira de Arteterapia a define como “um modo de trabalhar utilizando a linguagem artística como base da comunicação cliente-profissional. Sua essência é a criação estética e a elaboração artística em prol da saúde”. Para isso, utiliza as linguagens plástica, sonora, dramática, corporal e literária, envolvendo as técnicas de desenho, pintura, modelagem, construções, sonorização, música, dança, drama e poesia. A terapia através da arte tem sido utilizada em diferentes especialidades, como treinamento empresarial; psico-profilaxia e reabilitação psicopedagógica; arte-reabilitação física e mental; reabilitação psico-social; projetos comunitários de educação para saúde e em consultório e clínicas especializadas com doenças degenerativas; deficiências físicas e mentais; psicoterapias individuais e de grupo, entre outras especialidades.</Text>
                    </Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.title} onPress={handleOpenSite}>Clique aqui para saber mais!</Text>
                </View>
                <View style={{marginTop:50}} />
            </ScrollView>
    );
}