import React from 'react';
import { View, Text,Image , ScrollView } from 'react-native'; 
import {useNavigation} from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather  } from '@expo/vector-icons';
 
import { styles } from './styles';

import {Header} from '../../components/Header';

import image0 from '../../assets/imageBooks/image0.jpeg';
import image1 from '../../assets/imageBooks/image1.jpg'
import image2 from '../../assets/imageBooks/image2.jpeg';
import image3 from '../../assets/imageBooks/image3.jpeg';
import image4 from '../../assets/imageMovies/image0.jpg';
import image5 from '../../assets/imageMovies/image1.jpg';
 
export function Details({route}) {
    const navigation = useNavigation();
    const image = [image0,image1,image2,image3,image4,image5];

    
    return (
        <View style={styles.container}>
             <Header 
                headerTitle="Detalhes"
                headerIcon={
                    <BorderlessButton onPress={()=> navigation.goBack()}>
                        <Feather
                            name="chevron-left"
                            size={24}
                            color={"black"}

                        />
                    </BorderlessButton>
                } 
            />
            <ScrollView>
                <View style={styles.content}>
                    <Text style={styles.title}>{route.params?.name}</Text>
                    
                    <Image source={image[route.params?.image]} style={styles.image}/>
                </View>

                <View style={styles.contents}>
                    <Text style={styles.subtitle}>{route.params?.title}</Text>
                    <Text style={styles.text}>{route.params?.subtitle}</Text>
                </View>

                <View style={styles.contents}>
                    <Text style={{maxWidth:318}}><Text style={styles.subtitle}>Descrição:</Text> <Text style={styles.text}>{route.params?.description}</Text></Text>
                </View>
                <View style={{marginTop:50}} />
            </ScrollView>

        </View>
    );
}