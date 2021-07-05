import React from 'react';
import { View } from 'react-native'; 
 
import { styles } from './styles';

import {Header} from '../../components/Header';
 
export function Professionals() {
    return (
        <View style={styles.container}>
             <Header 
                headerTitle="Profissionais e Clínicas" 
            />
        </View>
    );
}