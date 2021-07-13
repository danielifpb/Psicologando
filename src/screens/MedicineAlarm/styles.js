import { StyleSheet } from 'react-native';
import {theme} from '../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content:{
        flex: 1,
        flexDirection: 'row' ,
        marginTop: 15,
        marginLeft: 18,
    },
    contents:{
        flex: 1,
        flexDirection: 'row' ,
        justifyContent: 'space-between',
        marginRight: 17,
        alignItems: 'center',
    },
    icons:{
        flexDirection: 'row' ,
    },
    text:{
        marginLeft:15,
        
    },
    title:{
        fontFamily: theme.fonts.title,
        fontSize: 24
    },
    subtitle:{
        fontFamily: theme.fonts.subtitle,
        fontSize: 18,
        marginTop: -5,
        marginBottom: 5 
    },
    fab:{
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: theme.colors.primary,
        height: 57,
        width: 57,
        alignItems:'center',
        justifyContent: 'center',
        
    }

});