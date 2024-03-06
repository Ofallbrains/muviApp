import React from 'react'
import { StatusBar } from "expo-status-bar";
import { TextInput, Icon } from "react-native-paper";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Buttons from '../Components/Buttons';

export default function WatchMovie({ navigation }) {

    return (
        <View style={{ backgroundColor: '#26282C', width: '100%', height: '100%', position: 'relative' }}>
            <View style={{ marginTop: 50, alignSelf: 'center', display: 'flex', flexDirection: 'row', gap: 1 }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', backgroundColor: '#FDD32C', borderWidth: 1, borderColor: '#FDD32C', borderRadius: 10, width: 40, textAlign: 'center' }}>M</Text>
                <Text style={{ fontSize: 25, color: 'white', }}>Muvi</Text>
            </View>

            <View style={{ top: 40 }}>
                <Image source={require('../assets/logoa1.jpeg')} />
            </View>

            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center', paddingTop: 70 }}>Welcome to Muvi</Text>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: '300', textAlign: 'center' }}>Free movie streaming all your needs everytime and everywhere.</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Main')} style={{ marginTop: 140, alignSelf: 'center', borderRadius: 5, borderWidth: 1, width: 330, backgroundColor: '#FDD32C' }}>
                <Buttons text="Watch Movie" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() =>
                navigation.navigate('Sign-In')
            }>
                <Text style={{ color: 'white', alignSelf: 'center', fontSize: 15, fontWeight: 'bold', marginTop: 20 }}>Sign In</Text>
            </TouchableOpacity>


        </View>
    )
}