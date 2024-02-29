import React,{useState} from 'react'
import { View, Text, Dimensions, FlatList} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Searching from '../../Components/Searching';

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

    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => setPosts(response.results))
        .catch(err => console.error(err));
    const [posts, setPosts] = useState([])

    return (

        <View style={{ backgroundColor: '#26282C', height: height, width: width, alignSelf: 'center', padding: 30 }}>
            <StatusBar style="light" />

                <View style={{ flexDirection: 'row', gap: 2, paddingTop: 30 }}>
                    <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold', backgroundColor: '#F1B91C', borderWidth: 1, borderColor: '#FDD32C', borderRadius: 6, textAlign: 'center', width: 35 }}>M</Text>
                    <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>Muvi</Text>
                </View>
          
            <View style={{ display: 'flex', flexDirection: 'row', gap: 40, paddingTop: 25, height: 90 }}>
                <View>
                    <Text style={{ color: '#F1B91C', fontSize: 15, }}>My Lists</Text>
                <View style={{ width: 30, height: 4, backgroundColor: '#F1B91C', borderRadius: 10, marginTop: 5, marginLeft: 10, padding: 2 }}></View>
                </View>
                <Text style={{ color: 'white', fontSize: 15, }}>Downloads</Text>
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                    data={posts}
                    keyExtractor={item => {
                        return item.id
                    }}
                    ItemSeparatorComponent={() => {
                        return <View style={{ paddingTop: 15 }} />
                    }}
                    renderItem={post => {
                        const item = post.item
                        return (
                            <Searching title={item.original_title} year={item.release_date} categories={item.media_type} image={item.poster_path} />
                        )
                    }}
                />

            
        </View>

    )
}