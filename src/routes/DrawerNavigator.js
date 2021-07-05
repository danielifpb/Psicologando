import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import { Home } from '../screens/Home';
import { Details } from '../screens/Details';

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Details" component={Details} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}