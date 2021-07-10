import React from 'react';
import { View, Text,Image , ScrollView, TouchableOpacity } from 'react-native'; 
import {useNavigation} from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather, Ionicons  } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
 
import { styles } from './styles';

import {Header} from '../../components/Header';

 
export function DetailsProf({route}) {
    const navigation = useNavigation();

    const whats = route.params?.whatsapp.substring(1, 14)
    
    function handleOpenSite() {
        Linking.openURL(`https://api.whatsapp.com/send?phone=${whats}&text=Ol%C3%A1!`);
    }
    
    return (
        <View style={styles.container}>
             <Header 
                headerTitle= {route.params?.name}
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

                    {
                        route.params?.desc &&
                        <View>
                            <Text style={styles.title700}>Sobre</Text>
    
                            <Text style={{fontSize: 18}}>{route.params.desc}</Text>                            
                        </View>
                    }


                    <Text style={styles.title700}>Endereço</Text>

                    {
                        route.params?.street &&
                        <View style={styles.text}> 
                            <Text>
                                <Text style={styles.title}>Rua: </Text>
                                <Text style={styles.subtitle}>{route.params.street}</Text>
                            </Text>
                        </View>

                    }

                    {
                        route.params?.number &&
                        <View style={styles.text}> 
                            <Text>
                                <Text style={styles.title}>Número: </Text>
                                <Text style={styles.subtitle}>{route.params.number}</Text>
                            </Text>
                        </View>

                    }

                    {
                        route.params?.district &&
                        <View style={styles.text}> 
                            <Text>
                                <Text style={styles.title}>Bairro: </Text>
                                <Text style={styles.subtitle}>{route.params.district}</Text>
                            </Text>
                        </View>

                    }

                    {
                        route.params?.city &&
                        <View style={styles.text}> 
                            <Text>
                                <Text style={styles.title}>Cidade: </Text>
                                <Text style={styles.subtitle}>{route.params.city}</Text>
                            </Text>
                        </View>

                    }

                    <Text style={styles.title700}>Contato</Text>

                    {
                        route.params?.landline &&
                        <View style={styles.text}> 
                            <Text>
                                <Text style={styles.title}>Telefone Fixo: </Text>
                                <Text style={styles.subtitle}>{route.params.landline}</Text>
                            </Text>
                        </View>

                    }

                    {
                        route.params?.whatsapp &&
                        <View style={styles.text}> 
                            <Text>
                                <Text style={styles.title}>WhatsApp: </Text>
                                <Text style={styles.subtitle}>{route.params.whatsapp}</Text>
                            </Text>
                        </View>

                    }

                    {
                        route.params?.email &&
                        <View style={styles.text}> 
                            <Text>
                                <Text style={styles.title}>Email: </Text>
                                <Text style={styles.subtitle}>{route.params.email}</Text>
                            </Text>
                        </View>

                    }
                    
                    <TouchableOpacity style={styles.button} onPress={handleOpenSite}>
                        <View style={styles.iconWrapper}>
                            <Ionicons name="logo-whatsapp" size={36} color="black" />
                        </View>

                        <Text style={styles.titleButton}>
                            Enviar Mensagem
                        </Text>
                    </TouchableOpacity>
                    

                </View>

                <View style={{marginTop:50}} />
            </ScrollView>

        </View>
    );
}