import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content:{
        paddingHorizontal: 20
    },
    text:{
        marginTop: 10
    },
    title700:{
        marginTop: 30,
        fontFamily:theme.fonts.title,
        fontSize: 36
    },
    title:{
        fontFamily: theme.fonts.title,
        fontSize: 20
    },
    subtitle:{
        fontFamily: theme.fonts.subtitle,
        fontSize: 24,
    },
    button:{
        marginTop: 50,
        width: '100%',
        height: 60,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row' ,
        alignItems: 'center',
        borderWidth: 1
        
    },
    iconWrapper:{
        width: 80,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
    },
    titleButton:{
        flex: 1,
        color: theme.colors.secondary,
        fontFamily: theme.fonts.title,
        fontSize: 20,
        textAlign: 'center',

    }
});