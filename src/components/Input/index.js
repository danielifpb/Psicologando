import React from 'react';
import { View,TextInput } from 'react-native'; 
 
import { styles } from './styles';
 
export function Input(props) {
    return (
        <View>
            <TextInput
                style={styles.container}
                maxLength={25}
                value={props.value}
                onChangeText={props.onChangeText}
                placeholder={props.placeholder}
                placeholderTextColor='#8F939A'
                selectionColor='#8F939A'
            />
        </View>
    );
}
