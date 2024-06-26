import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from './SplashScreen';
import GetStarted from './GetStarted';
import Welcome from './Welcome';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { Feather } from 'react-native-vector-icons';
import HomeScreen from '../MovieScreens/TabScreens/HomeScreen';
import ProfileScreen from '../MovieScreens/TabScreens/ProfileScreen';
import SearchScreen from '../MovieScreens/TabScreens/SearchScreen';
import FolderScreen from '../MovieScreens/TabScreens/FolderScreen';
import SettingsScreen from './TabScreens/SettingsScreen';
import Action from '../MovieScreens/Action';
import WatchMovie from './WatchMovie';
import Films from './TopNav/Films';
import { DrawerNavigator } from './Drawnav';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const Top = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();


const MyTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Search') {
            iconName = 'search';
          } else if (route.name === 'Folder') {
            iconName = 'folder';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }
          return <Feather name={iconName} style={{ fontSize: 26, color: focused ? '#D9BE52' : '#CACCCE' }} />;
        },
        tabBarStyle: {
          backgroundColor: '#1F2123',
          borderTopColor: '#1F2123',
        },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tabs.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tabs.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
      <Tabs.Screen name="Folder" component={FolderScreen} options={{ headerShown: false }} />
      <Tabs.Screen name="Profile" component={DrawerNavigator} options={{ headerShown: false }} />
    </Tabs.Navigator>
  );
};

// export const TopNavigator = () => {
//   return (
//     <Top.Navigator
//     screenOptions={{
//       tabBarActiveTintColor: '#D9BE52',
//       tabBarInactiveTintColor: '#CACCCE',
//       tabBarScrollEnabled: true,
//       tabBarItemStyle: { width: 120, },
//       tabBarIndicatorStyle: { backgroundColor: '#D9BE52',},
//       tabBarStyle: { backgroundColor: '#1F2123',},
//     }}
//     >
//       <Top.Screen name="Featured" component={Home} options={{ headerShown: false }} />
//       <Top.Screen name="Action" component={Films} options={{ headerShown: false }} />
//       <Top.Screen name="Now Playing" component={Films} options={{ headerShown: false }} />
//       <Top.Screen name="Upcoming" component={Films} options={{ headerShown: false }} />
//       <Top.Screen name="Popular" component={Films} options={{ headerShown: false }} />
      
//     </Top.Navigator>
//   );
// };




export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Here" component={GetStarted} options={{ headerShown: false }} />
        <Stack.Screen name="Watchmovie" component={WatchMovie} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Sign-Up" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Sign-In" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="Action" component={Action} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MyTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
