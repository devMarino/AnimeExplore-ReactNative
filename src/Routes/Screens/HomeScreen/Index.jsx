import { ActivityIndicator, Text, View } from "react-native";
import Api from "../../../services/Api";
import { useEffect, useState } from "react";
import Render from "../../../components/Render";
import styles from "./Style";
export default function HomeScreen({navigation}){

    const [pageTopAnime, setPageTopAnime] = useState(1)
    const [animes, setAnimes] = useState([])

    const [error, setError] = useState(false)
    const [loading,setLoading] = useState(false)

    const BuscarTopAnimes = async () => {
        setLoading(true)
        try{
            const response = await Api.get(`/top/anime?page=${pageTopAnime}`)
            // salvando lista de Top animes
            setAnimes(response.data.data)
            }  
        catch(error){
                setError(true)
        } finally {
                setLoading(false)
            }
        }

    useEffect(() => {
    // instanciando a função para buscar animes
    BuscarTopAnimes()
    },[])
    // ativa style enquanto carrega animes
    if (loading) return <ActivityIndicator size='large' color="#0308ff"/>

    if (error) return <Text>Erro ao carregar animes</Text>

     return(
        <View style={styles.container}>
            <Render
            animes={animes}
            navigation={navigation}
            />
        </View>
    )
    
}

