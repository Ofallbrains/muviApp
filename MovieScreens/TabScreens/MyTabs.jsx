import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign, Feather } from 'react-native-vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SearchScreen from './SearchScreen';
import FolderScreen from './FolderScreen'

const Tabs = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer >
      <Tabs.Navigator>
        <Tabs.Screen name='Home' component={HomeScreen} options={{ headerShown: false, tabBarIcon: () => <AntDesign name='home' size={25} color='#F1B91C' /> }} />
        <Tabs.Screen name='Folder' component={FolderScreen} options={{ headerShown: false, tabBarIcon: () => <Feather name='folder' size={25} /> }} />
        <Tabs.Screen name='Search' component={SearchScreen} options={{ headerShown: false, tabBarIcon: () => <AntDesign name='search1' size={25} /> }} />
        <Tabs.Screen name='Profile' component={ProfileScreen} options={{ headerShown: false, tabBarIcon: () => <AntDesign name='user' size={25} /> }} />

      </Tabs.Navigator>
    </NavigationContainer>
  )
}