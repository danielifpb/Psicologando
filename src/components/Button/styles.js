import { StyleSheet } from 'react-native';
import {theme} from '../../global/styles/themes';

export const styles = StyleSheet.create({
    button:{
        width: '100%',
        height: 56,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row' ,
        alignItems: 'center',
        
        
    },
    titleButton:{
        flex: 1,
        color: theme.colors.secondary,
        fontFamily: theme.fonts.title,
        fontSize: 15,
        textAlign: 'center',

    }
});