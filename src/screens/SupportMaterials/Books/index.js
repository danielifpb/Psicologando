import React from 'react';
import { View, Text,Image, ScrollView, TouchableOpacity } from 'react-native'; 
import {useNavigation} from '@react-navigation/native';

import { styles } from './styles';

import image0 from '../../../assets/imageBooks/image0.jpeg';
import image1 from '../../../assets/imageBooks/image1.jpg';
import image2 from '../../../assets/imageBooks/image2.jpeg';
import image3 from '../../../assets/imageBooks/image3.jpeg';

 
 
export function Books() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.content}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={()=> navigation.navigate('Details', {
                            name:'Depressão - Causas e tratamentos', 
                            image: 0,
                            title: 'Editora:',
                            subtitle:'Artmed; 2ª edição (4 abril 2011);', 
                            description:'Beck e Alford apresentam uma nova referência na compreensão da depressão como um transtorno cognitivo e para seu tratamento.'})}

                    >
                        <Image 
                            source={image0} 
                            style={styles.image}
                            
                        />
                    </TouchableOpacity>
                    <Text 
                        style={styles.title} 
                        onPress={()=> navigation.navigate('Details', {
                            name:'Depressão - Causas e tratamentos', 
                            image: 0,
                            title: 'Editora:',
                            subtitle:'Artmed; 2ª edição (4 abril 2011);', 
                            description:'Beck e Alford apresentam uma nova referência na compreensão da depressão como um transtorno cognitivo e para seu tratamento.'})}

                    >

                        Depressão - Causas e tratamentos
                    </Text>

                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={()=> navigation.navigate('Details', {
                            name:'O Demônio do meio-dia', 
                            image: 1,
                            title: 'Autor:',
                            subtitle:'Andrew Solomon', 
                            description:'É um livro de memórias escrito por Andrew Solomon e publicado pela primeira vez sob o selo editorial Scribner, da editora Simon & Schuster de Nova York, em 2001.'})}

                    >
                        <Image 
                            source={image1} 
                            style={styles.image}
                            
                        />
                    </TouchableOpacity>
                    <Text 
                        style={styles.title} 
                        onPress={()=> navigation.navigate('Details', {
                            name:'O Demônio do meio-dia', 
                            image: 1,
                            title: 'Autor:',
                            subtitle:'Andrew Solomon', 
                            description:'É um livro de memórias escrito por Andrew Solomon e publicado pela primeira vez sob o selo editorial Scribner, da editora Simon & Schuster de Nova York, em 2001.'})}

                    >

                        O Demônio do meio-dia
                    </Text>

                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={()=> navigation.navigate('Details', {
                            name:'FLORESCER - Uma nova compreensão da felicidade e do bem-estar', 
                            image: 2,
                            title: 'Autor:',
                            subtitle:'Martin Seligman', 
                            description:'O psicólogo Martin E. P. Seligman apresenta agora uma nova e revolucionária tese sobre o tema, partindo do princípio de que a psicologia deve ir além do alívio do sofrimento humano e buscar também elevar a qualidade de vida individual e coletiva. Além do papel de tratar psicopatias e estados psicológicos negativos, a psicologia também teria importante contribuição a dar para o desenvolvimento pessoal dos indivíduos, comunidades e nações inteiras.'})}

                    >
                        <Image 
                            source={image2} 
                            style={styles.image}
                            
                        />
                    </TouchableOpacity>
                    <Text 
                        style={styles.title} 
                        onPress={()=> navigation.navigate('Details', {
                            name:'FLORESCER - Uma nova compreensão da felicidade e do bem-estar', 
                            image: 2,
                            title: 'Autor:',
                            subtitle:'Martin Seligman', 
                            description:'O psicólogo Martin E. P. Seligman apresenta agora uma nova e revolucionária tese sobre o tema, partindo do princípio de que a psicologia deve ir além do alívio do sofrimento humano e buscar também elevar a qualidade de vida individual e coletiva. Além do papel de tratar psicopatias e estados psicológicos negativos, a psicologia também teria importante contribuição a dar para o desenvolvimento pessoal dos indivíduos, comunidades e nações inteiras.'})}

                    >

                        FLORESCER - Uma nova compreensão da felicidade e do bem-estar
                    </Text>

                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={()=> navigation.navigate('Details', {
                            name:'Felicidade Autêntica', 
                            image: 3,
                            title: 'Autor:',
                            subtitle:'Martin Seligman', 
                            description:'Felicidade autêntica apresenta a revolucionária psicologia positiva e nos mostra como aplicá-la no dia a dia. De acordo com Martin E. P. Seligman, eminente pesquisador da psique humana e fundador da psicologia positiva, não basta acabarmos com o sofrimento para sermos felizes, e sim descobrirmos o que há de melhor dentro de nós. O autor nos ensina que a felicidade pode ser cultivada, desde que saibamos utilizar alguns traços e qualidades que já possuímos, como bondade, originalidade, humor, otimismo e generosidade.'})}

                    >
                        <Image 
                            source={image3} 
                            style={styles.image}
                            
                        />
                    </TouchableOpacity>
                    <Text 
                        style={styles.title} 
                        onPress={()=> navigation.navigate('Details', {
                            name:'Felicidade Autêntica', 
                            image: 3,
                            title: 'Autor:',
                            subtitle:'Martin Seligman', 
                            description:'Felicidade autêntica apresenta a revolucionária psicologia positiva e nos mostra como aplicá-la no dia a dia. De acordo com Martin E. P. Seligman, eminente pesquisador da psique humana e fundador da psicologia positiva, não basta acabarmos com o sofrimento para sermos felizes, e sim descobrirmos o que há de melhor dentro de nós. O autor nos ensina que a felicidade pode ser cultivada, desde que saibamos utilizar alguns traços e qualidades que já possuímos, como bondade, originalidade, humor, otimismo e generosidade.'})}

                    >

                        Felicidade Autêntica
                    </Text>
                    
                    <View style={{marginTop:50}} />
                </View>
            </ScrollView>
        </View>
    );
}