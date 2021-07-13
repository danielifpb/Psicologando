import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'; 
import {useNavigation} from '@react-navigation/native';

import { styles } from './styles';

 import image0 from '../../../assets/imageMovies/image0.jpg';
 import image1 from '../../../assets/imageMovies/image1.jpg';
 
export function Movies() {
    const navigation = useNavigation();
    let typeMovies = true;

    const moviesObj = [
        {
            id: '0',
            name:'Extraordinário', 
            image: 4,
            img: image0,
            title: 'Diretor:',
            subtitle:'Stephen Chbosky', 
            description:'Auggie Pullman (Jacob Tremblay) é um garoto que nasceu com uma deformação facial. Pela primeira vez, ele irá frequentar uma escola regular, como qualquer outra criança. No quinto ano, ele irá precisar se esforçar para conseguir se encaixar em sua nova realidade.'
        },
        {
            id: '1',
            name:'Divertida Mente', 
            image: 5,
            img:image1,
            title: 'Produtora:',
            subtitle:'Walt Disney Pictures', 
            description:'Com a mudança para uma nova cidade, as emoções de Riley, que tem apenas 11 anos de idade, ficam extremamente agitadas. Uma confusão na sala de controle do seu cérebro deixa a Alegria e a Tristeza de fora, afetando a vida de Riley radicalmente.'
        }
    ]

    return (
        <View style={styles.container}>
            
            <FlatList 
                    data={moviesObj}
                    keyExtractor={item=>item.id}
                    renderItem={({item})=>
                        <View style={styles.content}>
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={()=> navigation.navigate('Details', {
                                    type: typeMovies,
                                    name: item.name, 
                                    image: item.image,
                                    title: item.title,
                                    subtitle: item.subtitle, 
                                    description:item.description
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
                                    type: typeMovies,
                                    name: item.name, 
                                    image: item.image,
                                    title: item.title,
                                    subtitle: item.subtitle, 
                                    description:item.description
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