import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Searching({ image, title,year,categories }) {
    return (
            <View style={{ display: 'flex', flexDirection: 'row',gap: 15 }}>
                <Image source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }} style={{ width: 220, height: 100 }} />
                <View>
                    <Text style={{ color: 'white', fontWeight: 'bold', paddingTop: 10 }}>{title}</Text>
                    <Text style={{ color: 'white', paddingTop: 3 }}>{year}</Text>
                    <Text style={{ color: 'white', paddingTop: 10 }}>{categories}</Text>
                </View>
            </View>
        
    )
}