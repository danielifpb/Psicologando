import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native'; 

import { styles } from './styles';

 import image0 from '../../../assets/imageVideos/image0.jpg';
 import image1 from '../../../assets/imageVideos/image1.jpg';
 import image2 from '../../../assets/imageVideos/image2.jpg';
 import image3 from '../../../assets/imageVideos/image3.jpg';
 import image4 from '../../../assets/imageVideos/image4.jpg';
 import image5 from '../../../assets/imageVideos/image5.jpg';
 import image6 from '../../../assets/imageVideos/image6.jpg';
 import image7 from '../../../assets/imageVideos/image7.jpg';
 
export function Videos() {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.content}>
                    <Image source={image0} style={styles.image}/>
                    <Text style={styles.title}>Ansiedade</Text>

                    <Image source={image1} style={styles.image}/>
                    <Text style={styles.title}>Depressão</Text>

                    <Image source={image2} style={styles.image}/>
                    <Text style={styles.title}>Causas de Ansiedade</Text>

                    <Image source={image3} style={styles.image}/>
                    <Text style={styles.title}>Como tratar a ansiedade passo a passo</Text>

                    <Image source={image4} style={styles.image}/>
                    <Text style={styles.title}>Sintomas da crise da ansiedade</Text>

                    <Image source={image5} style={styles.image}/>
                    <Text style={styles.title}>Diferença entre pânico e ansiedade</Text>

                    <Image source={image6} style={styles.image}/>
                    <Text style={styles.title}>Depressão</Text>

                    <Image source={image7} style={styles.image}/>
                    <Text style={styles.title}>Diferença entre tristeza e depressão</Text>
                    
                    
                    <View style={{marginTop:50}} />
                </View>
            </ScrollView>
        </View>
    );
}