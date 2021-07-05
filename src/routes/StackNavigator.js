import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import { Home } from '../screens/Home';
import { SupportMaterials } from '../screens/SupportMaterials';



const Stack = createStackNavigator();

export function MyStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SupportMaterials" component={SupportMaterials} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}