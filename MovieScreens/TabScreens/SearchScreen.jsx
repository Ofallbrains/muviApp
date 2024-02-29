
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Dimensions, ScrollView } from 'react-native';
import { TextInput } from "react-native-paper";
import { Feather } from 'react-native-vector-icons';
import { Movies } from "../../Components/Movies";
import { Pages } from "../../Components/Pages"
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function SearchScreen() {

    return (
        <View style={{ backgroundColor: '#26282C', height: height, width: width, }}>
            <StatusBar style="light" />
            <View style={{
                backgroundColor: '#1F2123', }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 25,padding: 10 }}>
                    <TextInput placeholder="Search movie title" placeholderTextColor={'white'} textColor="white"
                        style={{ width: 350, height: 40, backgroundColor: '#1F2123', color: 'white', }} />
                    <Feather name="search" size={24} color="yellow" style={{ alignSelf: 'center',position: 'absolute',right: 20  }} />
                </View>

                <View style={{ paddingLeft: 20,paddingTop: 10 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row', gap: 55,  }}>
                            <View>
                                <Text style={{ color: '#F1B91C', fontSize: 15, }}>All results</Text>
                                <View style={{ width: 30, height: 4, backgroundColor: '#F1B91C', borderRadius: 10, marginTop: 5, marginLeft: 10, padding: 2 }}></View>
                            </View>
                            <Text style={{ color: 'white' }}>Series</Text>
                            <Text style={{ color: 'white' }}>Films</Text>
                            <Text style={{ color: 'white' }}>Originals</Text>
                            <Text style={{ color: 'white' }}>Collections</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>

            <View>
                <Feather name="search" size={200} color="yellow" style={{ alignSelf: 'center', paddingTop: 90 }} />
            </View>
            <View>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Find your movie</Text>
                <Text style={{ color: 'white', fontSize: 15, textAlign: 'center', fontWeight: '300', }}>Search Movies, Series, Originals as you like</Text>
            </View>
        </View>
    )

}