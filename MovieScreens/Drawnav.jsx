// Drawnav.js

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './CustomerDrawerContent';
import ProfileScreen from '../MovieScreens/TabScreens/ProfileScreen';
import SettingsScreen from './SettingsScreen';

const Drawer = createDrawerNavigator();

const Drawnav = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#1F2123',
        },
        drawerLabelStyle: {
          color: '#CACCCE',
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default Drawnav;
