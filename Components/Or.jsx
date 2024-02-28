import { View, Text } from 'react-native'
import React from 'react'

export default function Or({text,Icon}) {
  return (
      <View style={{display: 'flex', flexDirection: 'row', gap: 3,}}>
          <Text>{Icon}</Text>
          <Text style={{fontWeight: 'bold', color: 'white', paddingTop: 5}}>{text}</Text>
    </View>
  )
}