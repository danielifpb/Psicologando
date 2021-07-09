import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'; 
import {useNavigation} from '@react-navigation/native';

import { styles } from './styles';

 import image0 from '../../../assets/imagePodcasts/image0.jpg';
 import image1 from '../../../assets/imagePodcasts/image1.jpg';
 import image2 from '../../../assets/imagePodcasts/image2.jpg';
 import image3 from '../../../assets/imagePodcasts/image3.png';

export function Podcasts() {
    const navigation = useNavigation();
    let typePod = false;

    const podObj=[
        {
            name:'Todo mundo é inseguro?', 
            image: 14,
            title: 'Plataforma:',
            subtitle:'Spotify',
            model: 'Ouvir', 
            link: 'https://open.spotify.com/episode/0siJ8CPe2KhhiI9VUst1TE'
        },
        {
            name:'Bom dia, obvious', 
            image: 15,
            title: 'Plataforma:',
            subtitle:'Spotify', 
            model: 'Ouvir',
            link: 'https://open.spotify.com/episode/0bIfMcr9G4Z7jqnSQkRhhH'
        },
        {
            name:'Psicologia Cotidiana', 
            image: 16,
            title: 'Plataforma:',
            subtitle:'Spotify', 
            model: 'Ouvir',
            link: 'https://open.spotify.com/episode/6VRjK4X1KcJY07lLnFF2i4'
        },
        {
            name:'[Autoconsciente] Mindfulness é estar no seu centro', 
            image: 17,
            title: 'Plataforma:',
            subtitle:'Spotify', 
            model: 'Ouvir',
            link: 'https://open.spotify.com/episode/78d0JNT1JdaKGS7IC7fKsW'
        },
        
    ]

    const handleOpenDetails = ()=> {
        navigation.navigate('Details', {
            type: typePod,
            name: podObj[0].name, 
            image: podObj[0].image,
            title: podObj[0].title,
            subtitle: podObj[0].subtitle,
            model: podObj[0].model,
            link: podObj[0].link
            })
    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.content}>

                <TouchableOpacity
                        activeOpacity={1}
                        onPress={()=> navigation.navigate('Details', {
                            type: typePod,
                            name: podObj[0].name, 
                            image: podObj[0].image,
                            title: podObj[0].title,
                            subtitle: podObj[0].subtitle,
                            model: podObj[0].model,
                            link: podObj[0].link
                            })}
                    >
                        <Image 
                            source={image0} 
                            style={styles.image}
                            
                        />
                    </TouchableOpacity>
                    <Text 
                        style={styles.title} 
                        onPress={()=> navigation.navigate('Details', {
                            type: typePod,
                            name: podObj[0].name, 
                            image: podObj[0].image,
                            title: podObj[0].title,
                            subtitle: podObj[0].subtitle,
                            model: podObj[0].model,
                            link: podObj[0].link
                            })}

                    >

                        {podObj[0].name}
                    </Text>

                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={()=> navigation.navigate('Details', {
                            type: typePod,
                            name: podObj[1].name, 
                            image: podObj[1].image,
                            title: podObj[1].title,
                            subtitle: podObj[1].subtitle,
                            model: podObj[1].model,
                            link: podObj[1].link
                            })}
                    >
                        <Image 
                            source={image1} 
                            style={styles.image}
                            
                        />
                    </TouchableOpacity>
                    <Text 
                        style={styles.title} 
                        onPress={()=> navigation.navigate('Details', {
                            type: typePod,
                            name: podObj[1].name, 
                            image: podObj[1].image,
                            title: podObj[1].title,
                            subtitle: podObj[1].subtitle,
                            model: podObj[1].model,
                            link: podObj[1].link
                            })}

                    >

                        {podObj[1].name}
                    </Text>

                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={()=> navigation.navigate('Details', {
                            type: typePod,
                            name: podObj[2].name, 
                            image: podObj[2].image,
                            title: podObj[2].title,
                            subtitle: podObj[2].subtitle,
                            model: podObj[2].model,
                            link: podObj[2].link
                            })}
                    >
                        <Image 
                            source={image2} 
                            style={styles.image}
                            
                        />
                    </TouchableOpacity>
                    <Text 
                        style={styles.title} 
                        onPress={()=> navigation.navigate('Details', {
                            type: typePod,
                            name: podObj[2].name, 
                            image: podObj[2].image,
                            title: podObj[2].title,
                            subtitle: podObj[2].subtitle,
                            model: podObj[2].model,
                            link: podObj[2].link
                            })}

                    >

                        {podObj[2].name}
                    </Text>
                
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={()=> navigation.navigate('Details', {
                            type: typePod,
                            name: podObj[3].name, 
                            image: podObj[3].image,
                            title: podObj[3].title,
                            subtitle: podObj[3].subtitle,
                            model: podObj[3].model,
                            link: podObj[3].link
                            })}
                    >
                        <Image 
                            source={image3} 
                            style={styles.image}
                            
                        />
                    </TouchableOpacity>
                    <Text 
                        style={styles.title} 
                        onPress={()=> navigation.navigate('Details', {
                            type: typePod,
                            name: podObj[3].name, 
                            image: podObj[3].image,
                            title: podObj[3].title,
                            subtitle: podObj[3].subtitle,
                            model: podObj[3].model,
                            link: podObj[3].link
                            })}

                    >

                        {podObj[3].name}
                    </Text>
                    
                    <View style={{marginTop:50}} />
                </View>
            </ScrollView>
        </View>
    );
}