import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetalheScreen from "./Screens/DetalheScreen/Index";
import HomeScreen from "./Screens/HomeScreen/Index";

const Stack = createNativeStackNavigator()
export default function HomeStack({navigation}){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            navigation={navigation}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="DetalheScreen"
            component={DetalheScreen}
            navigation={navigation}
            options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}