import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    content:{
        alignItems:'center',

    },
    title:{
        marginTop: 46,
        textAlign: 'center',
        fontFamily: theme.fonts.title,
        fontSize:26,
        color: theme.colors.secondary,
    },
    image:{
        marginTop: 15,
        marginBottom: 27,
        width: 260,
        height:260,
        borderRadius: 130,
        borderColor: 'black',
        borderWidth: 5
    },
    subtitle:{
        marginTop: 9,
        textAlign: 'center',
        fontFamily: theme.fonts.subtitle,
        fontSize: 18,

    }

});