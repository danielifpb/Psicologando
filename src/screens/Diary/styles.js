import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    container: { flex: 1 },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        paddingLeft: 18,
    },
    contents: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 17,
        marginLeft: 15,
    },
    textContent: { flex: 1, marginRight: 8 },
    icons: { flexDirection: 'row', gap: 10 },
    title: { fontFamily: theme.fonts.title, fontSize: 22 },
    subtitle: { fontFamily: theme.fonts.subtitle, fontSize: 16 },
    attachments: { fontFamily: theme.fonts.subtitle, fontSize: 13, color: theme.colors.select },
    emptyContainer: { alignItems: 'center', paddingHorizontal: 32, paddingTop: 100 },
    emptyTitle: { marginTop: 12, fontFamily: theme.fonts.title, fontSize: 21 },
    emptySubtitle: { marginTop: 4, fontFamily: theme.fonts.subtitle, fontSize: 16, color: theme.colors.select, textAlign: 'center' },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: theme.colors.primary,
        height: 57,
        width: 57,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
