import React from 'react';
import { StatusBar } from 'react-native';
import {MyDrawer} from './src/routes/DrawerNavigator';

import {Rajdhani_500Medium, Rajdhani_700Bold} from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }
  
  return (
    <>
      <StatusBar 
          barStyle="dark-content"
          backgroundColor="#EEC802"
          translucent 
        />
      <MyDrawer />
    </>
    
  );
}

