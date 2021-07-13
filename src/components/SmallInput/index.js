import React from 'react';
import { View, TextInput } from 'react-native'; 
 
import { styles } from './styles';
 
export function SmallInput(props) {
    return (
        <View>
            {
                props.title ?
                <TextInput
                    style={styles.container}
                    keyboardType="numeric"
                    maxLength= {2}
                    selectionColor= '#8F939A'
                    placeholder= {props.title}
                    placeholderTextColor='#8F939A'
                />
                :
                <TextInput
                    style={styles.container}
                    keyboardType="numeric"
                    maxLength= {2}
                    selectionColor= '#8F939A'
                />

            }
        </View>
    );
}