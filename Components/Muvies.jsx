
import { View, Image ,Text } from 'react-native'
import React from 'react'

export default function Mymovies({image,title,overview}) {
    return (
        <View>
            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }}
                style={{ width: 120, height: 200, marginTop: 15 }} />
            <Text>{title}</Text>
            <Text>{overview}</Text>
            </View>

    )
}
