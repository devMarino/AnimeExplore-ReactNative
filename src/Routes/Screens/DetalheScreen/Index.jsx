import { View,Text, Image, ScrollView } from "react-native";
import styles from "./style";

export default function DetalheScreen({route}) {
    const {info} = route.params;
    return(
        <ScrollView style={styles.container}>
            <Image 
                source={{uri: info.images.jpg.large_image_url}}
                style={styles.banner}
            />
            <View style={styles.conteudo}>
                <Text style={styles.titulo}>{info.title}</Text>

                <View style={styles.infoAnime}>
                    <View style={styles.infoScore}>
                        <Text style={styles.infoText}>⭐ {info.score}</Text>
                    </View>
                    <View style={styles.infoAnime}>
                        <Text style={styles.infoText}>#{info.rank} Rank</Text>
                    </View>
                </View>

                <Text style={styles.sinopseLabel}>Sinopse</Text>
                <Text style={styles.sinopse}>{info.synopsis}</Text>
            </View>
        </ScrollView>
    )
}