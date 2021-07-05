import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native'; 

import { styles } from './styles';

 import image0 from '../../../assets/imageMovies/image0.jpg';
 import image1 from '../../../assets/imageMovies/image1.jpg';
 
export function Movies() {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.content}>
                    <Image source={image0} style={styles.image}/>
                    <Text style={styles.title}>Extraordinário</Text>

                    <Image source={image1} style={styles.image}/>
                    <Text style={styles.title}>Divertida Mente</Text>
                    
                    
                    <View style={{marginTop:50}} />
                </View>
            </ScrollView>
        </View>
    );
}