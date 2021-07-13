import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'; 
import {Feather} from '@expo/vector-icons';
 
import { styles } from './styles';
import { theme } from '../../global/styles/themes';
 
export function ButtonAdd() {
  return (
    <View>
      <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          >
            <View style={styles.background}>
              <Feather  name="plus" size={24} />
            </View>
          
        </TouchableOpacity>
    </View>
  );
}