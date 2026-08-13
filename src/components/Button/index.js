import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


import { styles } from './styles';


export function Button(props) {
  return (
    <TouchableOpacity
      style={[styles.button, props.disabled && styles.disabled]}
      activeOpacity={0.5}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <Text style={styles.titleButton}>
        {props.loading ? 'Salvando...' : props.title}
      </Text>
    </TouchableOpacity>
  );
}
