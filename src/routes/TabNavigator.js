import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

import {Books} from '../screens/SupportMaterials/Books';
import {Movies} from '../screens/SupportMaterials/Movies';
import {Videos} from '../screens/SupportMaterials/Videos';
import {Podcasts} from '../screens/SupportMaterials/Podcasts';

import { theme } from '../global/styles/themes';


const Tab = createMaterialTopTabNavigator();

export function MyTab() {
  return (

    <Tab.Navigator
        tabBarOptions={{
            style:{
                elevation: 0,
                shadowOpacity: 0,
                borderWidth: 0,
                backgroundColor: '#424345',
                
                
            },
            activeTintColor: '#FFFFFF',
            inactiveTintColor: '#8F939A',
            labelStyle:{
                fontSize:20,
                fontFamily: theme.fonts.title,
                textTransform: 'none'       
            },
            indicatorStyle:{
                backgroundColor:'#424345'
            },
            scrollEnabled:true,
            
        }}
    >
        <Tab.Screen name="Livros" component={Books} />
        <Tab.Screen name="Filmes" component={Movies} />
        <Tab.Screen name="Videos" component={Videos} />
        <Tab.Screen name="Podcasts" component={Podcasts} />
    </Tab.Navigator>

  );
}