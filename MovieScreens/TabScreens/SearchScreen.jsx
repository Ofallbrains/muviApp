
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, TextInput, ScrollView, FlatList, Dimensions } from 'react-native';
import { Feather } from 'react-native-vector-icons';
import Pages from '../../Components/Pages';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function SearchScreen() {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzNjOWNmNTg3YWE1OTFkMDI1MDJkYWE2MzUxYjllZSIsInN1YiI6IjY1ZDg2ZDdkY2VkYWM0MDE4NTUzZmRlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nGsRurclQjC4-euULj95Oj27UGSGzlHxnfN_qfFMUQE'
        }
    };

    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => setPosts(response.results))
        .catch(err => console.error(err));
    const [posts, setPosts] = useState([])

    return (
        <View style={{ padding: 20, backgroundColor: '#26282C', width: width, height: height, marginTop: 20 }}>
            <ScrollView>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, borderRadius: 5, backgroundColor: '#5F6064', padding: 10 }}>
                    <TextInput placeholder="Disney" placeholderTextColor={'white'} />
                    <Feather name="search" size={24} color="white" />
                </View>

                <FlatList
                    data={posts}
                    keyExtractor={item => {
                        return item.id
                    }}
                    ItemSeparatorComponent={() => {
                        return <View style={{ marginTop: 15 }} />
                    }}
                    renderItem={post => {
                        const item = post.item
                        return (
                            <Pages text={item.vote_average} image={item.poster_path} />
                        )
                    }}
                    scrollEnabled={false}
                />

                <StatusBar style="dark" />
            </ScrollView>
        </View>


    )
}