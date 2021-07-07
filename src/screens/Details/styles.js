import { StyleSheet } from 'react-native';
import {theme} from '../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content:{
        alignItems:'center',
    },
    title:{
        marginTop:20,
        fontFamily: theme.fonts.title,
        fontSize:26,
        textAlign: 'center',
        color: theme.colors.secondary,
        maxWidth: 234
    },
    image:{
        marginTop: 6,
        width: 135,
        height:195,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 5
    },
    contents:{
        flexDirection: 'row' ,
        marginLeft: 35,
        marginTop: 30
    },
    subtitle:{
        fontFamily: theme.fonts.title,
        fontSize: 18
    },
    text:{
        marginLeft:4,
        fontFamily: theme.fonts.subtitle,
        fontSize: 18,

    }
    
});