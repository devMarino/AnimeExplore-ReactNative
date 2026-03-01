import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import PerfilScreen from "./Screens/PerfilScreen/Index";

const Tab = createBottomTabNavigator()

export default function AppTabs({navigation}){
    return(
        <Tab.Navigator>
            <Tab.Screen
            name="Home"
            component={HomeStack}
            />
            <Tab.Screen name="Perfil" 
            component={PerfilScreen}/>
        </Tab.Navigator>
    )
}