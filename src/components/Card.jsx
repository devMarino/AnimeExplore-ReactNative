import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
// dimensions pega largura da tela do cell
const larguraTela = Dimensions.get('window').width;
const larguraCard = larguraTela / 2 - 15; // divide por 2 e tira a margem

export default function Card({item}){
    return(
        <View style={styles.card}>
            <Image
                source={{uri: item.images.jpg.image_url}}
                style={styles.imagem}
            />
            <Text numberOfLines={1} style={styles.titulo}>{item.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: larguraCard,
        margin: 5,
        backgroundColor: '#1a1a1a',
        borderRadius: 8,
        overflow: 'hidden',
    },
    imagem: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    titulo: {
        textAlign: 'center',
        fontSize: 14,
        padding: 5,
        color: '#fff',
    }
})