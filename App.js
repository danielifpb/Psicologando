import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {MyDrawer} from './src/routes/DrawerNavigator';
import { AlarmProvider } from './src/contexts/AlarmContext';
import { DiaryProvider } from './src/contexts/DiaryContext';

import {Rajdhani_500Medium, Rajdhani_700Bold} from '@expo-google-fonts/rajdhani';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if(!fontsLoaded){
    return null;
  }
  
  return (
    <SafeAreaProvider>
      <StatusBar
        style="dark"
        backgroundColor="#EEC802"
        translucent={false}
      />
      <AlarmProvider>
        <DiaryProvider>
          <SafeAreaView
            style={{ flex: 1, backgroundColor: '#EEC802' }}
            edges={['top']}
          >
            <MyDrawer />
          </SafeAreaView>
        </DiaryProvider>
      </AlarmProvider>
    </SafeAreaProvider>
  );
}
