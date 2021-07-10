import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row' ,
        marginTop: 15,
        marginLeft: 18,
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
    }

});