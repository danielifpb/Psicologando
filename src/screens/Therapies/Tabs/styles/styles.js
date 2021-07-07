import { StyleSheet } from 'react-native';
import {theme} from '../../../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content:{
        marginTop: 50,
        alignItems:'center',
    },
    title:{
        fontFamily: theme.fonts.title,
        fontSize:26,
        textAlign: 'center',
        color: theme.colors.secondary,
        maxWidth: 234
    },
    image:{
        marginTop: 6,
        width: 300,
        height:200,
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
        fontSize: 18,
        
    },
    text:{
        
        fontFamily: theme.fonts.subtitle,
        fontSize: 18,

    },    
});