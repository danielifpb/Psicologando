import React from 'react';
import { View, Image } from 'react-native'; 
import { DrawerItemList } from '@react-navigation/drawer';
 
import { styles } from './styles';

import logo from '../../assets/logo.png';
 
export function DrawerContent(props) {

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={logo}/>
            </View>

            <View style={styles.section}>
                <DrawerItemList {...props}/>
                <View style={{marginTop:100}}></View>
            </View>

        </View>
    );
}
