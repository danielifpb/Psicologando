import { StyleSheet } from 'react-native';
import {theme} from '../../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content:{
        alignItems:'center',
    },
    image:{
        marginTop: 50,
        width: 300,
        height:187,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 5

    },
    title:{
        marginTop:11,
        fontFamily: theme.fonts.title,
        fontSize:26,
        textAlign: 'center',
        color: theme.colors.secondary,
        maxWidth: 237
    }
});