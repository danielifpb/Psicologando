import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {Meditation} from '../../screens/Therapies/Tabs/meditation';
import {Acupuncture} from '../../screens/Therapies/Tabs/acupuncture';
import {Mindfulness} from '../../screens/Therapies/Tabs/mindfulness';
import {Techniques} from '../../screens/Therapies/Tabs/techniques';
import {Art} from '../../screens/Therapies/Tabs/art';
import {Yoga} from '../../screens/Therapies/Tabs/yoga';
import {Pilates} from '../../screens/Therapies/Tabs/pilates';


import { theme } from '../../global/styles/themes';


const Tab = createMaterialTopTabNavigator();

export function MyTabTherapies() {
  return (

    <Tab.Navigator
        screenOptions={{
            tabBarStyle:{
                elevation: 0,
                shadowOpacity: 0,
                borderWidth: 0,
                backgroundColor: '#424345',
                height: 60,
                
                
            },
            tabBarActiveTintColor: '#FFFFFF',
            tabBarInactiveTintColor: '#8F939A',
            tabBarLabelStyle:{
                fontSize:20,
                fontFamily: theme.fonts.title,
                textTransform: 'none',
                      
            },
            tabBarIndicatorStyle:{
                backgroundColor:'#424345'
            },
            tabBarScrollEnabled:true,
            
        }}
    >
        <Tab.Screen name="Meditação" component={Meditation} />
        <Tab.Screen name="Acupuntura" component={Acupuncture} />
        <Tab.Screen name="Mindfulness" component={Mindfulness} />
        <Tab.Screen name="Respiração" component={Techniques} />
        <Tab.Screen name="Arteterapia" component={Art} />
        <Tab.Screen name="Yoga" component={Yoga} />
        <Tab.Screen name="Pilates" component={Pilates} />
    </Tab.Navigator>

  );
}
