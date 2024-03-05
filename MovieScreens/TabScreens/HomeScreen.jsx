import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, ScrollView, Dimensions, FlatList } from 'react-native';
import { Ionicons } from "react-native-vector-icons";
import Pages from '../../Components/Pages';
import Movies from '../../Components/Movies';
import Button from '../../Components/Button';
import Navigation from '../Navigation';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function HomeScreen({navigation}) {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzNjOWNmNTg3YWE1OTFkMDI1MDJkYWE2MzUxYjllZSIsInN1YiI6IjY1ZDg2ZDdkY2VkYWM0MDE4NTUzZmRlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nGsRurclQjC4-euULj95Oj27UGSGzlHxnfN_qfFMUQE'
        }
    };

    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => setMovie(response.results))
        .catch(err => console.error(err));
    const [movie, setMovie] = useState([])

    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => setMovie2(response.results))
        .catch(err => console.error(err));
    const [movies, setMovie2] = useState([])

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => setMuvi(response.results))
        .catch(err => console.error(err));
    const [muvi, setMuvi] = useState([])


    return (
        <View style={{ backgroundColor: '#26282C', height: height, width: width, alignSelf: 'center', padding: 20 }}>
            <StatusBar style="light" />

            <View style={{ paddingBottom: -10, }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                    <View style={{ flexDirection: 'row', gap: 2 }}>
                        <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold', backgroundColor: '#F1B91C', borderWidth: 1, borderColor: '#FDD32C', borderRadius: 6, textAlign: 'center', width: 35 }}>M</Text>
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>Muvi</Text>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 20 }}>
                        <Ionicons name="bookmark-outline" size={20} color="white" />
                        <Ionicons name="notifications-outline" size={20} color="white" />
                    </View>

                </View>
                <View style={{ padding: 10 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row', gap: 50, marginTop: 2 }}>
                            <View>
                                <Text style={{ color: '#F1B91C', fontSize: 15, }}>Featured</Text>
                                <View style={{ width: 30, height: 4, backgroundColor: '#F1B91C', borderRadius: 10, marginTop: 5, marginLeft: 10, padding: 2 }}></View>
                            </View>
                            <Text style={{ color: 'white' }}>Series</Text>
                            <Text style={{ color: 'white' }}>Films</Text>
                            <Text style={{ color: 'white' }}>Origin</Text>
                            <Text style={{ color: 'white' }}>Collections</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
            <ScrollView>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', gap: 15 }}>
                        <Button name="Popular Today" />
                        <Button name="Marvel" />
                        <Button name="Fans Choice" />
                        <Button name="Stars Watch" />
                        <Button name="Favourites" />
                        <Button name="Your choice" />
                    </View>

                </ ScrollView>
                <View style={{ paddingTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>New Release</Text>
                    <Text style={{ color: '#5F6064', padding: 10 }}>View More</Text>
                </View>

                <FlatList
                    horizontal={true}
                    data={movie}
                    keyExtractor={item => {
                        return item.id
                    }}
                    ItemSeparatorComponent={() => {
                        return <View style={{ marginRight: 15 }} />
                    }}
                    renderItem={post => {
                        const item = post.item
                        return (
                            <Movies text={item.vote_average} image={item.poster_path} onpress={()=>navigation.navigate('Action', item)} />
                        )
                    }}
                   
                />


                <View style={{ paddingTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>Made for You</Text>
                    <Text style={{ color: '#5F6064', padding: 10 }}>View More</Text>
                </View>

                <FlatList
                    horizontal={true}
                    data={movies}
                    keyExtractor={item => {
                        return item.id
                    }}
                    ItemSeparatorComponent={() => {
                        return <View style={{ marginRight: 15 }} />
                    }}
                    renderItem={post => {
                        const item = post.item
                        return (
                            <Movies text={item.vote_average} image={item.poster_path} onpress={()=>navigation.navigate('Action', item)} />
                        )
                    }}
                    
                />

                <View style={{ paddingTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', gap: 3 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>Popular on</Text>
                        <Text style={{ color: '#F1B91C', fontWeight: 'bold', fontSize: 25 }}>Muvi</Text>
                    </View>
                    <Text style={{ color: '#5F6064', padding: 10 }}>View More</Text>
                </View>

                <FlatList
                    data={muvi}
                    keyExtractor={item => {
                        return item.id
                    }}
                    ItemSeparatorComponent={() => {
                        return <View style={{ marginTop: 15 }} />
                    }}
                    renderItem={post => {
                        const item = post.item
                        return (
                            <Pages text={item.vote_average} image={item.poster_path} onpress={()=>navigation.navigate('Action', item)} />
                        )
                    }}
                    scrollEnabled={false}
                />
            </ScrollView>
        </View>
    )
}