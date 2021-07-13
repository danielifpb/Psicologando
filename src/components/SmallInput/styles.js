import { StyleSheet } from 'react-native';
import {theme} from '../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        width:48,
        height: 48,
        backgroundColor: theme.colors.bar,
        color: '#FFFFFF',
        borderRadius: 8,
        fontFamily: theme.fonts.title,
        fontSize: 25,
        marginRight: 4,
        textAlign:'center',
        borderWidth: 1,
        borderColor: '#3E3E3E'
    }
});