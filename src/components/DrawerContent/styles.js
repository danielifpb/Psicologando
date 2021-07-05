import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary,
        paddingTop: getStatusBarHeight()
    },
    content:{
        alignItems:'center',
        marginTop: 26

    },
    section:{
        marginTop: 40
    }
});