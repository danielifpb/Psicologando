import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


import { styles } from './styles';


export function Button(props) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.5}>
      <Text style={styles.titleButton}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}