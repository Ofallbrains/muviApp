
import { View, Image ,Text } from 'react-native'
import React from 'react'

export default function Mymovies({image}) {
    return (
        <View>
            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }}
                style={{ width: 120, height: 200, marginTop: 15  }} />
            </View>

    )
}
