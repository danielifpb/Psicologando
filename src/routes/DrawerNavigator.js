import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons  } from '@expo/vector-icons';

import {DrawerContent} from '../components/DrawerContent';
import { theme } from '../global/styles/themes';


import { Home } from '../screens/Home';
import { MedicineAlarm } from '../screens/MedicineAlarm';
import { SupportMaterials } from '../screens/SupportMaterials';
import { MotivationPanel } from '../screens/MotivationPanel';
import { Professionals } from '../screens/Professionals';
import { Therapies } from '../screens/Therapies';
import { Diary } from '../screens/Diary';



import { Details } from '../screens/Details';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const SupportScreens = ()=>(
  <Stack.Navigator headerMode="none" >
    <Stack.Screen name="SupportMaterials" component={SupportMaterials} />
    <Stack.Screen name="Details" component={Details} />
  </Stack.Navigator>

)


export function MyDrawer() {

  const {primary, secondary} = theme.colors;

  return (
    <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} 
          drawerContentOptions={{ 
            activeBackgroundColor: secondary, 
            activeTintColor: primary ,
            inactiveTintColor: secondary,
            labelStyle: {
              fontSize:16,
              fontFamily: theme.fonts.title,
              
              
            },
            itemStyle:{
              width:'100%',
              marginLeft:0,
              borderRadius:0,
              paddingHorizontal: 5,
              
            }

          }}>
            <Drawer.Screen 
              name="Home" 
              component={Home} 
              options={{title:"Início",drawerIcon: ({focused})=>(
                <Ionicons  name="ios-home-outline" size={20} color={focused ? primary : secondary} />
              )
              
              }}
              
            />
            <Drawer.Screen 
              name="MedicineAlarm" 
              component={MedicineAlarm} 
              options={{title:"Alarme de Medicamentos",drawerIcon: ({focused})=>(
                <Ionicons  name="alarm-outline" size={20} color={focused ? primary : secondary} />
              )
              
              }}
            />
            <Drawer.Screen 
              name="SupportScreens" 
              component={SupportScreens} 
              options={{title:"Materiais de Apoio",drawerIcon: ({focused})=>(
                <Ionicons  name="documents-outline" size={20} color={focused ? primary : secondary} />
              )
              
              }}
            />
            <Drawer.Screen 
              name="MotivationPanel" 
              component={MotivationPanel} 
              options={{title:"Painel Motivacional",drawerIcon: ({focused})=>(
                <Ionicons  name="happy-outline" size={20} color={focused ? primary : secondary} />
              )
              
              }}
            />
            <Drawer.Screen 
              name="Professionals" 
              component={Professionals} 
              options={{title:"Profissionais e Clínicas",drawerIcon: ({focused})=>(
                <Ionicons  name="medical-outline" size={20} color={focused ? primary : secondary} />
              )
              
              }}
            />
            <Drawer.Screen 
              name="Therapies" 
              component={Therapies} 
              options={{title:"Terapias Adjuvantes",drawerIcon: ({focused})=>(
                <Ionicons  name="leaf-outline" size={20} color={focused ? primary : secondary} />
              )
              
              }}
            />
            <Drawer.Screen 
              name="Diary" 
              component={Diary} 
              options={{title:"Diário das Emoçoes",drawerIcon: ({focused})=>(
                <Ionicons  name="book-outline" size={20} color={focused ? primary : secondary} />
              )
              
              }}
            />
            
            
        </Drawer.Navigator>
    </NavigationContainer>
  );
}