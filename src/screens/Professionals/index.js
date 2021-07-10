import React from 'react';
import { View, ScrollView } from 'react-native'; 
 
import { styles } from './styles';

import {Header} from '../../components/Header';
import ListProfessionals from '../../components/ListProfessionals';
 
export function Professionals() {
    return (
        
        <View style={styles.container}>
             <Header 
                headerTitle="Profissionais e Clínicas" 
            />
            <View style={{marginBottom: 100}}>
                <ListProfessionals />
            </View>
            
                
            
        </View>
    );
}