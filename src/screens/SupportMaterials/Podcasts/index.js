import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'; 
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
            id: '0',
            name:'Todo mundo é inseguro?', 
            image: 14,
            img: image0,
            title: 'Plataforma:',
            subtitle:'Spotify',
            model: 'Ouvir', 
            link: 'https://open.spotify.com/episode/0siJ8CPe2KhhiI9VUst1TE'
        },
        {
            id: '1',
            name:'Bom dia, obvious', 
            image: 15,
            img: image1,
            title: 'Plataforma:',
            subtitle:'Spotify', 
            model: 'Ouvir',
            link: 'https://open.spotify.com/episode/0bIfMcr9G4Z7jqnSQkRhhH'
        },
        {
            id: '2',
            name:'Psicologia Cotidiana', 
            image: 16,
            img: image2,
            title: 'Plataforma:',
            subtitle:'Spotify', 
            model: 'Ouvir',
            link: 'https://open.spotify.com/episode/6VRjK4X1KcJY07lLnFF2i4'
        },
        {
            id: '3',
            name:'[Autoconsciente] Mindfulness é estar no seu centro', 
            image: 17,
            img: image3,
            title: 'Plataforma:',
            subtitle:'Spotify', 
            model: 'Ouvir',
            link: 'https://open.spotify.com/episode/78d0JNT1JdaKGS7IC7fKsW'
        },
        
    ]

    return (
        <View style={styles.container}>

            <FlatList 
                data={podObj}
                keyExtractor={item=>item.id}
                renderItem={({item})=>
                    <View style={styles.content}>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={()=> navigation.navigate('Details', {
                                type: typePod,
                                name: item.name, 
                                image: item.image,
                                title: item.title,
                                subtitle: item.subtitle,
                                model: item.model,
                                link: item.link
                            })}
                        >
                            <Image 
                                source={item.img} 
                                style={styles.image}
                                
                            />
                        </TouchableOpacity>
                        <Text 
                            style={styles.title} 
                            onPress={()=> navigation.navigate('Details', {
                                type: type,
                                name: item.name, 
                                image: item.image,
                                title: item.title,
                                subtitle: item.subtitle,
                                model: item.model,
                                link: item.link
                            })}
                        >

                            {item.name}
                        </Text>
                    </View>
                } 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 50}}
            />
        </View>
    );
}