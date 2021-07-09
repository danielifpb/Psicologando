import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content:{
        flexDirection: 'row' ,
        flexWrap: 'wrap',
    },
    imagewrap: {
        margin: 4,
        padding: 2,
        height: (Dimensions.get('window').height/2) -30,
        width: (Dimensions.get('window').width/2) -8
    },
    modal:{
        flex: 1,
        padding: 40,
        backgroundColor: 'rgba(0,0,0, 0.9)'
    },
    text: {
        color: 'white',
        fontFamily: theme.fonts.title,
        fontSize: 20
    }
});