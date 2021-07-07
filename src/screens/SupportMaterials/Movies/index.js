import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'; 
import {useNavigation} from '@react-navigation/native';

import { styles } from './styles';

 import image0 from '../../../assets/imageMovies/image0.jpg';
 import image1 from '../../../assets/imageMovies/image1.jpg';
 
export function Movies() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.content}>
                    
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={()=> navigation.navigate('Details', {
                            name:'Extraordinário', 
                            image: 4,
                            title: 'Diretor:',
                            subtitle:'Stephen Chbosky', 
                            description:'Auggie Pullman (Jacob Tremblay) é um garoto que nasceu com uma deformação facial. Pela primeira vez, ele irá frequentar uma escola regular, como qualquer outra criança. No quinto ano, ele irá precisar se esforçar para conseguir se encaixar em sua nova realidade.'})}

                    >
                        <Image 
                            source={image0} 
                            style={styles.image}
                            
                        />
                    </TouchableOpacity>
                    <Text 
                        style={styles.title} 
                        onPress={()=> navigation.navigate('Details', {
                            name:'Extraordinário', 
                            image: 4,
                            title: 'Diretor:',
                            subtitle:'Stephen Chbosky', 
                            description:'Auggie Pullman (Jacob Tremblay) é um garoto que nasceu com uma deformação facial. Pela primeira vez, ele irá frequentar uma escola regular, como qualquer outra criança. No quinto ano, ele irá precisar se esforçar para conseguir se encaixar em sua nova realidade.'})}

                    >

                        Extraordinário
                    </Text>

                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={()=> navigation.navigate('Details', {
                            name:'Divertida Mente', 
                            image: 5,
                            title: 'Produtora:',
                            subtitle:'Walt Disney Pictures', 
                            description:'Com a mudança para uma nova cidade, as emoções de Riley, que tem apenas 11 anos de idade, ficam extremamente agitadas. Uma confusão na sala de controle do seu cérebro deixa a Alegria e a Tristeza de fora, afetando a vida de Riley radicalmente.'})}

                    >
                        <Image 
                            source={image1} 
                            style={styles.image}
                            
                        />
                    </TouchableOpacity>
                    <Text 
                        style={styles.title} 
                        onPress={()=> navigation.navigate('Details', {
                            name:'Divertida Mente', 
                            image: 5,
                            title: 'Produtora:',
                            subtitle:'Walt Disney Pictures', 
                            description:'Com a mudança para uma nova cidade, as emoções de Riley, que tem apenas 11 anos de idade, ficam extremamente agitadas. Uma confusão na sala de controle do seu cérebro deixa a Alegria e a Tristeza de fora, afetando a vida de Riley radicalmente.'})}

                    >

                        Divertida Mente
                    </Text>                    
                    
                    <View style={{marginTop:50}} />
                </View>
            </ScrollView>
        </View>
    );
}