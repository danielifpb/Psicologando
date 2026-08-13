import { StyleSheet } from 'react-native';
import {theme} from '../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 44,
        backgroundColor: theme.colors.bar,
        color: '#FFFFFF',
        borderRadius: 8,
        fontFamily: theme.fonts.title,
        fontSize: 18,
        lineHeight: 22,
        marginRight: 4,
        paddingHorizontal: 16,
        paddingVertical: 0,
        textAlignVertical: 'center',
        includeFontPadding: false,
        borderWidth: 1,
        borderColor: '#3E3E3E'
    }
});
