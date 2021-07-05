import React from 'react';
import { View, Text, Button } from 'react-native'; 
import {useNavigation} from '@react-navigation/native';
import { Header } from '../../components/Header';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather  } from '@expo/vector-icons';
 

import { MyTab } from '../../routes/TabNavigator';

import { styles } from './styles'; 
 
export function SupportMaterials() {
    const navigation = useNavigation();

    

    
    return (
        <View style={styles.container}>
            <Header 
                headerTitle="Materiais de Apoio" 
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

            <MyTab/>

            
            
        </View>
    );
}