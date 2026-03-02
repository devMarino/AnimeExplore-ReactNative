import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141519',
    },
    banner: {
        width: width,
        height: 420,
        resizeMode: 'cover',
    },
    conteudo: {
        padding: 12,
        marginTop: 2,
        backgroundColor: '#141519',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    titulo: {
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    infoAnime: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 16,
    },
    infoScore: {
        backgroundColor: '#F47521',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 20,
    },
    infoText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 13,
    },
    sinopseLabel: {
        color: '#F47521',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    sinopse: {
        color: '#CCCCCC',
        fontSize: 14,
        lineHeight: 22,
    },
})

export default styles;