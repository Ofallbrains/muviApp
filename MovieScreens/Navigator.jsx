import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "./TabScreens/ProfileScreen";
import SettingsScreen from "./TabScreens/SettingsScreen";

const Drawer = createDrawerNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Dashboard" component={ProfileScreen} />
                <Drawer.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}