import { Image, StyleSheet, View } from "react-native";

export default function Card( {item}){
    return(
    <View>
        <Image
        source={{uri: item.images.jpg.image_url}}
        style={{width: 100, height: 100}}
        />
    </View>
    )
}

// const styles = StyleSheet.create({
//     card: {

//     }
// })