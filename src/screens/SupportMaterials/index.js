import React from 'react';
import { View, Text, Button } from 'react-native'; 
import {useNavigation} from '@react-navigation/native';
import { Header } from '../../components/Header';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather  } from '@expo/vector-icons';
 

import { MyTab } from '../../routes/TabNavigator';

import { styles } from './styles'; 
 
export function SupportMaterials() {   

    
    return (
        <View style={styles.container}>
            <Header 
                headerTitle="Materiais de Apoio" 
            />

            <MyTab/>

            
            
        </View>
    );
}