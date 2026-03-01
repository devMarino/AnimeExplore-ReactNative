import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetalhesScreen from "./Screens/DetalheScreen/Index";
import HomeScreen from "./Screens/HomeScreen/Index";

const Stack = createNativeStackNavigator()
export default function HomeStack({navigation}){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            />
            <Stack.Screen
            name="Detalhes"
            component={DetalhesScreen}
            />
        </Stack.Navigator>
    )
}