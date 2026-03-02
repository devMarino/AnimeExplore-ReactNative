import {View, FlatList, Pressable } from "react-native";
import Card from "./Card";

export default function Render({animes, navigation}){
    if (animes == null){
        return null
    }
return(
    <View>
        <FlatList
        data={animes}
        renderItem={( {item} ) => (
        <Pressable
            onPress={() => navigation.navigate('DetalheScreen', {animes: item})}
            >
            <Card
            item={item}
            />
        </Pressable>
        )}
        keyExtractor={(item) => item.mal_id.toString()}
        /> // fim do flatlist
    </View>
    )
}