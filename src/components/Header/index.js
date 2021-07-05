import React, {ReactNode} from 'react';
import { View, Text } from 'react-native'; 
import {BorderlessButton} from 'react-native-gesture-handler';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import {Octicons} from '@expo/vector-icons'
 
import { styles } from './styles';
import { theme } from '../../global/styles/themes';


export function Header(props) {
    const {secondary} = theme.colors;
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <BorderlessButton onPress={()=> navigation.dispatch(DrawerActions.toggleDrawer())}>
                <Octicons
                    name="three-bars"
                    size={24}
                    color={secondary}
            />

            </BorderlessButton>
                
            <Text style={styles.title}>
                {props.headerTitle}
            </Text>

            {
                props.headerIcon 
                ?
                <View>
                    { props.headerIcon }
                </View>
                :
                <View style={{width:24}}/>

            }

            
        </View>
    );
}