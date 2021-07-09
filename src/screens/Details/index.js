import React from 'react';
import { View, Text,Image , ScrollView } from 'react-native'; 
import {useNavigation} from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather  } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
 
import { styles } from './styles';

import {Header} from '../../components/Header';

import image0 from '../../assets/imageBooks/image0.jpeg';
import image1 from '../../assets/imageBooks/image1.jpg'
import image2 from '../../assets/imageBooks/image2.jpeg';
import image3 from '../../assets/imageBooks/image3.jpeg';
import image4 from '../../assets/imageMovies/image0.jpg';
import image5 from '../../assets/imageMovies/image1.jpg';
import image6 from '../../assets/imageVideos/image0.jpg';
import image7 from '../../assets/imageVideos/image1.jpg';
import image8 from '../../assets/imageVideos/image2.jpg';
import image9 from '../../assets/imageVideos/image3.jpg';
import image10 from '../../assets/imageVideos/image4.jpg';
import image11 from '../../assets/imageVideos/image5.jpg';
import image12 from '../../assets/imageVideos/image6.jpg';
import image13 from '../../assets/imageVideos/image7.jpg';
import image14 from '../../assets/imagePodcasts/image0.jpg';
import image15 from '../../assets/imagePodcasts/image1.jpg';
import image16 from '../../assets/imagePodcasts/image2.jpg';
import image17 from '../../assets/imagePodcasts/image3.png';
 
export function Details({route}) {
    const navigation = useNavigation();
    const image = [image0,image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15,image16,image17];

    const vShow = route.params?.type;

    function handleOpenSite() {
        Linking.openURL(route.params?.link);
    }
    
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
                    { 
                        vShow?
                        <Image source={image[route.params?.image]} style={styles.imageHeight}/>
                        :
                        <Image source={image[route.params?.image]} style={styles.imageWidth}/>
                    }
                    
                </View>

                <View style={styles.contents}>
                    <Text style={styles.subtitle}>{route.params?.title}</Text>
                    <Text style={styles.text}>{route.params?.subtitle}</Text>
                </View>
                { 
                    route.params?.description?
                    <View style={styles.contents}>
                        <Text style={{maxWidth:318}}><Text style={styles.subtitle}>Descrição:</Text> <Text style={styles.text}>{route.params?.description}</Text></Text>
                    </View>
                    :
                    <View style={styles.content}>
                        <Text style={styles.great} onPress={handleOpenSite}>{route.params?.model} Agora</Text>
                    </View>

                }
                <View style={{marginTop:50}} />
            </ScrollView>

        </View>
    );
}