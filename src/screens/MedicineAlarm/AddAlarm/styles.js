import { StyleSheet } from 'react-native';
import {theme} from '../../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content:{
        margin: 24
    },
    title:{
        fontFamily: theme.fonts.title,
        fontSize: 18
    },
    column:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    divider:{
        marginRight: 4,
        fontSize: 15,
        fontFamily: theme.fonts.title,
        color: theme.colors.secondary
    },
});