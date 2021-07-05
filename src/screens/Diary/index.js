import React from 'react';
import { View } from 'react-native'; 
 
import { styles } from './styles';

import {Header} from '../../components/Header';
 
export function Diary() {
    return (
        <View style={styles.container}>
             <Header 
                headerTitle="Diário das Emoçõoes" 
            />
        </View>
    );
}