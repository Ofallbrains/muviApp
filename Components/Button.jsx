import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity,} from 'react-native';

export default function Button({name}) {
    return (
        <View>
            <StatusBar style="light" />
            <TouchableOpacity>

            <Text style={{ color: 'white', borderWidth  : 1, borderColor: '#5F6064', borderRadius: 5, textAlign: 'center', padding: 6 }}>{name}</Text>
            </TouchableOpacity>
            
            </View>
    )
}