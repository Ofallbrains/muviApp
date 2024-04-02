// CustomDrawerContent.js

import React from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Switch"
        icon={({ focused, color, size }) => (
          <MaterialCommunityIcons
            name={focused ? 'toggle-switch' : 'toggle-switch-off'}
            size={size}
            color={focused ? 'yellow' : '#CACCCE'}
          />
        )}
        onPress={() => { /* handle switch */ }}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
