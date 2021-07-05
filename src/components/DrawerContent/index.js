import React from 'react';
import { View, Image } from 'react-native'; 
import { DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

import { Drawer } from 'react-native-paper';
 
import { styles } from './styles';
import { theme } from '../../global/styles/themes';

import logo from '../../assets/logo.png';
 
export function DrawerContent(props) {

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={logo}/>
            </View>

            <Drawer.Section style={styles.section}>
                <DrawerItemList {...props}/>
            </Drawer.Section>

        </View>
    );
}