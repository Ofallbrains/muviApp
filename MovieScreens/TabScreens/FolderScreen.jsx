import { View, Text, Dimensions, ScrollView, FlatList } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React,{useState} from 'react'
import Movies from '../../Components/Movies'
import Pages from '../../Components/Pages'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function FolderScreen() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzNjOWNmNTg3YWE1OTFkMDI1MDJkYWE2MzUxYjllZSIsInN1YiI6IjY1ZDg2ZDdkY2VkYWM0MDE4NTUzZmRlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nGsRurclQjC4-euULj95Oj27UGSGzlHxnfN_qfFMUQE'
        }
    };

    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => setLists(response.results))
        .catch(err => console.error(err));
    const [lists, setLists] = useState([])

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => setList(response.results))
        .catch(err => console.error(err));
    const [list, setList] = useState([])

    return (
        <View style={{ padding: 20, backgroundColor: '#26282C', width: width, height: height, marginTop: 20 }}>
            <StatusBar style="dark" />
            <ScrollView>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Continue Watching</Text>
                    <Text style={{ color: 'white', fontWeight: '200', fontSize: 15 }}>View More</Text>
                </View>

                <FlatList
                    horizontal={true}
                    data={lists}
                    keyExtractor={item => {
                        return item.id
                    }}
                    ItemSeparatorComponent={() => {
                        return <View style={{ marginRight: 15, marginTop: 15 }} />
                    }}
                    renderItem={post => {
                        const item = post.item
                        return (
                            <Movies image={item.poster_path} />
                        )
                    }}
                    scrollEnabled={false}
                />
                <View style={{}}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Downloads(24items)</Text>
                </View>
                <FlatList
                    data={list}
                    keyExtractor={item => {
                        return item.id
                    }}
                    ItemSeparatorComponent={() => {
                        return <View style={{ marginTop: 15 }} />
                    }}
                    renderItem={post => {
                        const item = post.item
                        return (
                            <Pages image={item.poster_path} title={item.original_title} date={item.release_date} />
                        )
                    }}
                    scrollEnabled={false}
                />

            </ScrollView>
        </View>
    )
}