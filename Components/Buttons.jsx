import { View, Text } from 'react-native'
import React from 'react'

export default function Buttons({text}) {
  return (
    <View>
      <Text style={{color: 'white',textAlign: 'center', fontWeight: 'bold',}}>{text}</Text>
    </View>
  )
}