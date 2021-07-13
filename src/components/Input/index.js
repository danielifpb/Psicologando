import React from 'react';
import { View,TextInput } from 'react-native'; 
 
import { styles } from './styles';
 
export function Input(props) {
    return (
        <View>
            {
                props.title ?
    
                <TextInput
                    style={styles.container}
                    maxLength= {25}
                    placeholderTextColor='#8F939A'
                    placeholder= {props.title}
                    selectionColor= '#8F939A'
                />
                
                :
                <TextInput
                    style={styles.container}
                    maxLength= {25}
                    selectionColor= '#8F939A'
                />                
    
            }
            
        </View>
    );
}