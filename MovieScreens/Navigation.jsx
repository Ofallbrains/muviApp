import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './SplashScreen';
import GetStarted from './GetStarted';
import Welcome from './Welcome';
import SignUp from './SignUp';
import SignIn from './SignIn';


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Here" component={GetStarted} options={{ headerShown: false }} />
                <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
                <Stack.Screen name="Sign-Up" component={SignUp} options={{ headerShown: false }} />
                <Stack.Screen name="Sign-In" component={SignIn} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation