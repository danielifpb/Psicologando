import { StyleSheet } from 'react-native';
import {theme} from '../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 36,
        backgroundColor: theme.colors.bar,
        color: '#FFFFFF',
        borderRadius: 8,
        fontFamily: theme.fonts.title,
        fontSize: 18,
        marginRight: 4,
        paddingHorizontal:16,
        borderWidth: 1,
        borderColor: '#3E3E3E'
    }
});