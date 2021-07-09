import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'; 
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
            name:'Ansiedade', 
            image: 6,
            title: 'Canal:',
            subtitle:'Minutos Psíquicos',
            model: 'Assistir',
            link: 'https://youtu.be/Tv0gJTBmVuc'
        },
        { 
            name:'Depressão', 
            image: 7,
            title: 'Canal:',
            subtitle:'Minutos Psíquicos',
            model: 'Assistir',
            link: 'https://youtu.be/T2XLwjy65LA' 
        },
        { 
            name:'Causas da Ansiedade', 
            image: 8,
            title: 'Canal:',
            subtitle:'Saúde da Mente',
            model: 'Assistir',
            link: 'https://youtu.be/tn0zqVKo0CM'
        },
        { 
            name:'Como tratar a ansiedade', 
            image: 9,
            title: 'Canal:',
            subtitle:'Saúde da Mente',
            model: 'Assistir',
            link: 'https://youtu.be/kxN6Va4etLw'
        },
        { 
            name:'Sintomas da crise de ansiedade', 
            image: 10,
            title: 'Canal:',
            subtitle:'Saúde da Mente',
            model: 'Assistir',
            link: 'https://youtu.be/Pmh9No4Mdts'
        },
        { 
            name:'Diferença entre pânico e ansiedade', 
            image: 11,
            title: 'Canal:',
            subtitle:'Saúde da Mente',
            model: 'Assistir',
            link: 'https://youtu.be/79T9NX0vhlg'
        },
        { 
            name:'Depressão', 
            image: 12,
            title: 'Canal:',
            subtitle:'Saúde da Mente',
            model: 'Assistir',
            link: 'https://youtu.be/AOAP11o7jNM'
        },
        { 
            name:'Diferença entre tristeza e depresão', 
            image: 13,
            title: 'Canal:',
            subtitle:'Saúde da Mente',
            model: 'Assistir',
            link: 'https://youtu.be/vioM2e4JrhE'
        },
    ]

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.content}>

                <TouchableOpacity
                        activeOpacity={1}
                        onPress={()=> navigation.navigate('Details', {
                            type: typeVideos,
                            name: videosObj[0].name, 
                            image: videosObj[0].image,
                            title: videosObj[0].title,
                            subtitle: videosObj[0].subtitle,
                            model: videosObj[0].model,
                            link: videosObj[0].link
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
                            type: typeVideos,
                            name: videosObj[0].name, 
                            image: videosObj[0].image,
                            title: videosObj[0].title,
                            subtitle: videosObj[0].subtitle,
                            model: videosObj[0].model,
                            link: videosObj[0].link
                            })}

                    >

                        {videosObj[0].name}
                    </Text>

                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={()=> navigation.navigate('Details', {
                            type: typeVideos,
                            name: videosObj[1].name, 
                            image: videosObj[1].image,
                            title: videosObj[1].title,
                            subtitle: videosObj[1].subtitle,
                            model: videosObj[1].model,
                            link: videosObj[1].link
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
                            type: typeVideos,
                            name: videosObj[1].name, 
                            image: videosObj[1].image,
                            title: videosObj[1].title,
                            subtitle: videosObj[1].subtitle,
                            model: videosObj[1].model,
                            link: videosObj[1].link
                            })}

                    >

                        {videosObj[1].name}
                    </Text>

                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={()=> navigation.navigate('Details', {
                            type: typeVideos,
                            name: videosObj[2].name, 
                            image: videosObj[2].image,
                            title: videosObj[2].title,
                            subtitle: videosObj[2].subtitle,
                            model: videosObj[2].model,
                            link: videosObj[2].link
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
                            type: typeVideos,
                            name: videosObj[2].name, 
                            image: videosObj[2].image,
                            title: videosObj[2].title,
                            subtitle: videosObj[2].subtitle,
                            model: videosObj[2].model,
                            link: videosObj[2].link
                            })}

                    >

                        {videosObj[2].name}
                    </Text>

                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={()=> navigation.navigate('Details', {
                            type: typeVideos,
                            name: videosObj[3].name, 
                            image: videosObj[3].image,
                            title: videosObj[3].title,
                            subtitle: videosObj[3].subtitle,
                            model: videosObj[3].model,
                            link: videosObj[3].link
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
                            type: typeVideos,
                            name: videosObj[3].name, 
                            image: videosObj[3].image,
                            title: videosObj[3].title,
                            subtitle: videosObj[3].subtitle,
                            model: videosObj[3].model,
                            link: videosObj[3].link
                            })}

                    >

                        {videosObj[3].name}
                    </Text>

                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={()=> navigation.navigate('Details', {
                            type: typeVideos,
                            name: videosObj[4].name, 
                            image: videosObj[4].image,
                            title: videosObj[4].title,
                            subtitle: videosObj[4].subtitle,
                            model: videosObj[4].model,
                            link: videosObj[4].link
                            })}
                    >
                        <Image 
                            source={image4} 
                            style={styles.image}
                            
                        />
                    </TouchableOpacity>
                    <Text 
                        style={styles.title} 
                        onPress={()=> navigation.navigate('Details', {
                            type: typeVideos,
                            name: videosObj[4].name, 
                            image: videosObj[4].image,
                            title: videosObj[4].title,
                            subtitle: videosObj[4].subtitle,
                            model: videosObj[4].model,
                            link: videosObj[4].link
                            })}

                    >

                        {videosObj[4].name}
                    </Text>

                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={()=> navigation.navigate('Details', {
                            type: typeVideos,
                            name: videosObj[5].name, 
                            image: videosObj[5].image,
                            title: videosObj[5].title,
                            subtitle: videosObj[5].subtitle,
                            model: videosObj[5].model,
                            link: videosObj[5].link
                            })}
                    >
                        <Image 
                            source={image5} 
                            style={styles.image}
                            
                        />
                    </TouchableOpacity>
                    <Text 
                        style={styles.title} 
                        onPress={()=> navigation.navigate('Details', {
                            type: typeVideos,
                            name: videosObj[5].name, 
                            image: videosObj[5].image,
                            title: videosObj[5].title,
                            subtitle: videosObj[5].subtitle,
                            model: videosObj[5].model,
                            link: videosObj[5].link
                            })}

                    >

                        {videosObj[5].name}
                    </Text>

                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={()=> navigation.navigate('Details', {
                            type: typeVideos,
                            name: videosObj[6].name, 
                            image: videosObj[6].image,
                            title: videosObj[6].title,
                            subtitle: videosObj[6].subtitle,
                            model: videosObj[6].model,
                            link: videosObj[6].link
                            })}
                    >
                        <Image 
                            source={image6} 
                            style={styles.image}
                            
                        />
                    </TouchableOpacity>
                    <Text 
                        style={styles.title} 
                        onPress={()=> navigation.navigate('Details', {
                            type: typeVideos,
                            name: videosObj[6].name, 
                            image: videosObj[6].image,
                            title: videosObj[6].title,
                            subtitle: videosObj[6].subtitle,
                            model: videosObj[6].model,
                            link: videosObj[6].link
                            })}

                    >

                        {videosObj[6].name}
                    </Text>

                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={()=> navigation.navigate('Details', {
                            type: typeVideos,
                            name: videosObj[7].name, 
                            image: videosObj[7].image,
                            title: videosObj[7].title,
                            subtitle: videosObj[7].subtitle,
                            model: videosObj[7].model,
                            link: videosObj[7].link
                            })}
                    >
                        <Image 
                            source={image7} 
                            style={styles.image}
                            
                        />
                    </TouchableOpacity>
                    <Text 
                        style={styles.title} 
                        onPress={()=> navigation.navigate('Details', {
                            type: typeVideos,
                            name: videosObj[7].name, 
                            image: videosObj[7].image,
                            title: videosObj[7].title,
                            subtitle: videosObj[7].subtitle,
                            model: videosObj[7].model,
                            link: videosObj[7].link
                            })}

                    >

                        {videosObj[7].name}
                    </Text>  
                    
                    <View style={{marginTop:50}} />
                </View>
            </ScrollView>
        </View>
    );
}