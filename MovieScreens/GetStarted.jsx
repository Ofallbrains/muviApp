
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height


export default function GetStarted({ navigation }) {
    return (
        <View>
            <StatusBar style="light" />
            <ImageBackground source={{ uri: 'https://media.wired.com/photos/5db0965e60047600090d3a68/16:9/w_2287,h_1286,c_limit/Culture_jokerstairs_rev-1-JOK-19666_High_Res_JPEG.jpg' }}
                style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5' }}>
            </ImageBackground>
            <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100%', height: '100%', position: 'absolute', }}>
                <View style={{ marginTop: 300, alignSelf: 'center', display: 'flex', flexDirection: 'column', gap: 3, }} >
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>Enjoy your favourite</Text>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>movie everywhere</Text>
                    <Text style={{ color: 'white', fontSize: 15, marginTop: 20 }}>Browse through our collections and discover hundreds of movies and series that you will love</Text>
                </View>
                <View style ={{ display: 'flex', flexDirection: 'row', gap: 3, padding: 18 }}>
                    <View style={{width: 35, height: 6, backgroundColor: '#FDD130',borderRadius: 15}}></View>
                    <View style={{width: 12, height: 6, backgroundColor: 'white'}}></View>
                    <View style ={{width: 10, height: 6, backgroundColor: 'white', borderRadius: 20}}></View>
                </View>
            </View>
            <TouchableOpacity style={{ position: 'absolute', bottom: 20, padding: 10, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
                onPress={() =>
                    navigation.navigate('Watchmovie')
                }>
                <Text style={{ color: 'black', backgroundColor: '#FDD130', fontSize: 15, width: 330, textAlign: 'center', padding: 10 }}>Get Started</Text>
            </TouchableOpacity>
        </View>

    );
};