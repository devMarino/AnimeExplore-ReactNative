import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppTabs from "./AppTabs";

const Stack = createNativeStackNavigator()

export default function Router(){
    return (
        <Stack.Navigator initialRouteName= "AppTabs">
            <Stack.Screen 
            name="AppTabs"
            component={AppTabs}
            options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}