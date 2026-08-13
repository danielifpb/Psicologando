import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.primary
    },
    title:{
        flex: 1,
        textAlign: 'center',
        fontFamily: theme.fonts.title,
        fontSize:26,
        color: theme.colors.secondary,
    }
});
