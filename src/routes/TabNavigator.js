import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {Books} from '../screens/SupportMaterials/Books';
import {Movies} from '../screens/SupportMaterials/Movies';
import {Videos} from '../screens/SupportMaterials/Videos';
import {Podcasts} from '../screens/SupportMaterials/Podcasts';

import { theme } from '../global/styles/themes';


const Tab = createMaterialTopTabNavigator();

export function MyTab() {
  return (

    <Tab.Navigator
        screenOptions={{
            tabBarStyle:{
                elevation: 0,
                shadowOpacity: 0,
                borderWidth: 0,
                backgroundColor: '#424345',
                
                
            },
            tabBarActiveTintColor: '#FFFFFF',
            tabBarInactiveTintColor: '#8F939A',
            tabBarLabelStyle:{
                fontSize:26,
                fontFamily: theme.fonts.title,
                textTransform: 'none',
                       
            },
            tabBarIndicatorStyle:{
                backgroundColor:'#424345'
            },
            tabBarScrollEnabled:true,
            
        }}
    >
        <Tab.Screen name="Livros" component={Books} />
        <Tab.Screen name="Filmes" component={Movies} />
        <Tab.Screen name="Videos" component={Videos} />
        <Tab.Screen name="Podcasts" component={Podcasts} />
    </Tab.Navigator>

  );
}
