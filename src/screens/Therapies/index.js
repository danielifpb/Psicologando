import React from 'react';
import { View } from 'react-native'; 
 
import { styles } from './styles';

import {Header} from '../../components/Header';
 
export function Therapies() {
    return (
        <View style={styles.container}>
             <Header 
                headerTitle="Terapias adjuvantes" 
            />
        </View>
    );
}