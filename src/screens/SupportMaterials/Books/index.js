import React from 'react';
import { View, Text,Image, ScrollView} from 'react-native'; 

import { styles } from './styles';

import image0 from '../../../assets/imageBooks/image0.jpeg';
import image1 from '../../../assets/imageBooks/image1.jpg';
import image2 from '../../../assets/imageBooks/image2.jpeg';
import image3 from '../../../assets/imageBooks/image3.jpeg';
 
 
export function Books() {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.content}>
                    <Image source={image0} style={styles.image}/>
                    <Text style={styles.title}>Depressão Causas e tratamentos</Text>

                    <Image source={image1} style={styles.image}/>
                    <Text style={styles.title}>O Demônio do meio-dia</Text>
                    
                    <Image source={image2} style={styles.image}/>
                    <Text style={styles.title}>FLORESCER - Uma nova compreensão da felicidade e do bem-estar</Text>

                    <Image source={image3} style={styles.image}/>
                    <Text style={styles.title}>Felicidade Autêntica</Text>
                    <View style={{marginTop:50}} />
                </View>
            </ScrollView>
        </View>
    );
}