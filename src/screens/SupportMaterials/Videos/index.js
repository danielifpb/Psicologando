import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'; 
import {useNavigation} from '@react-navigation/native';

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
    const navigation = useNavigation();
    let typeVideos = false;

    const videosObj = [
        { 
            id: '0',
            name:'Ansiedade', 
            image: 6,
            img:image0,
            title: 'Canal:',
            subtitle:'Minutos Psíquicos',
            model: 'Assistir',
            link: 'https://youtu.be/Tv0gJTBmVuc'
        },
        { 
            id: '1',
            name:'Depressão', 
            image: 7,
            img:image1,
            title: 'Canal:',
            subtitle:'Minutos Psíquicos',
            model: 'Assistir',
            link: 'https://youtu.be/T2XLwjy65LA' 
        },
        { 
            id: '2',
            name:'Causas da Ansiedade', 
            image: 8,
            img:image2,
            title: 'Canal:',
            subtitle:'Saúde da Mente',
            model: 'Assistir',
            link: 'https://youtu.be/tn0zqVKo0CM'
        },
        { 
            id: '3',
            name:'Como tratar a ansiedade', 
            image: 9,
            img:image3,
            title: 'Canal:',
            subtitle:'Saúde da Mente',
            model: 'Assistir',
            link: 'https://youtu.be/kxN6Va4etLw'
        },
        { 
            id: '4',
            name:'Sintomas da crise de ansiedade', 
            image: 10,
            img:image4,
            title: 'Canal:',
            subtitle:'Saúde da Mente',
            model: 'Assistir',
            link: 'https://youtu.be/Pmh9No4Mdts'
        },
        { 
            id: '5',
            name:'Diferença entre pânico e ansiedade', 
            image: 11,
            img:image5,
            title: 'Canal:',
            subtitle:'Saúde da Mente',
            model: 'Assistir',
            link: 'https://youtu.be/79T9NX0vhlg'
        },
        { 
            id: '6',
            name:'Depressão', 
            image: 12,
            img:image6,
            title: 'Canal:',
            subtitle:'Saúde da Mente',
            model: 'Assistir',
            link: 'https://youtu.be/AOAP11o7jNM'
        },
        { 
            id: '7',
            name:'Diferença entre tristeza e depresão', 
            image: 13,
            img:image7,
            title: 'Canal:',
            subtitle:'Saúde da Mente',
            model: 'Assistir',
            link: 'https://youtu.be/vioM2e4JrhE'
        },
    ]

    return (
        <View style={styles.container}>

            <FlatList 
                data={videosObj}
                keyExtractor={item=>item.id}
                renderItem={({item})=>
                    <View style={styles.content}>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={()=> navigation.navigate('Details', {
                                type: typeVideos,
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
                                type: typeVideos,
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