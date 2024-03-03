import React from 'react'
import { View, Text, Image, TouchableOpacity} from 'react-native';

export default function Movies({image, text, onpress }) {
    return (
        <TouchableOpacity onPress={onpress}>
     <Image source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }} style={{width: 250, height: 150, borderRadius: 10, overflow: 'hidden'}} />
     <Text style={{position: 'absolute', color: 'black', fontWeight: 'bold', fontSize: 15, right: 10, top: 10, borderRadius: 4, width: 30, textAlign: 'center', backgroundColor: '#F1B91C'}}>{text}</Text>
             
        </TouchableOpacity>
    )
}