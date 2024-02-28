import { View, Text } from 'react-native'
import React from 'react'

export default function Or({text,Icon}) {
  return (
    <View style={{ display: 'flex', flexDirection: 'row', padding: 10, alignItems: 'center', marginLeft: 90, gap: 8 }}>
          <Text>{Icon}</Text>
          <Text style={{fontWeight: 'bold', color: 'white',}}>{text}</Text>
    </View>
  )
}