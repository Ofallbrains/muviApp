import { View, Text, Dimensions, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React,{useState, useEffect} from 'react'
import { StatusBar } from 'expo-status-bar'
import { AntDesign,Feather } from 'react-native-vector-icons';
import Muvies from '../Components/Muvies';


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Action({navigation}) {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzNjOWNmNTg3YWE1OTFkMDI1MDJkYWE2MzUxYjllZSIsInN1YiI6IjY1ZDg2ZDdkY2VkYWM0MDE4NTUzZmRlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nGsRurclQjC4-euULj95Oj27UGSGzlHxnfN_qfFMUQE'
        }
    };
        
    fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => setmymovie(response.results))
        .catch(err => console.error(err));
    const [mymovie, setmymovie] = useState([])

        
    fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => setMyMovies(response.results))
        .catch(err => console.error(err));
    const [myMovies, setMyMovies] = useState([])

    
    return (
        <View style={{ width: width, height: height, backgroundColor: 'black', }}>
            <ScrollView>
                <StatusBar style="light" />
                <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('home')}>
                        <AntDesign name="arrowleft" size={30} color="white" style={{ marginTop: 30, paddingLeft: 30 }} />
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold',  marginTop: 30 }}>Action</Text>
                </View>
                <View style={{ paddingLeft: 30,paddingTop: 10 }}>
                    <Image source={{ uri: 'https://cdn.vox-cdn.com/thumbor/0i_tyUccjw8RJv29XMAHSW-dK-U=/0x0:2700x1350/1200x800/filters:focal(1134x459:1566x891)/cdn.vox-cdn.com/uploads/chorus_image/image/58026259/jumanjicover.0.jpg' }}
                        style={{ width: 330, height: 200 }} />
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginTop: 10 }}>Jumanji: The Next Level</Text>
                    <Text style={{ color: 'white', fontSize: 14, fontWeight: '300', marginTop: 5 }}>A magical board game unleashes a world of adventure on siblings Peter (Bradley Pierce) and Judy Shepherd (Kirsten Dunst).
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', gap: 10, paddingLeft: 30, marginTop: 20 }}>
                    <TouchableOpacity style={{ width: 160, flexDirection: 'row', padding: 7, borderRadius: 5, alignItems:'center', justifyContent:'center', backgroundColor: '#FFD22F' }}>
                        <Feather name="play" size={24} color="white" />
                        <Text style={{ color: 'white', marginLeft: 5 }}>Play</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 160, flexDirection: 'row', padding: 7, borderRadius: 5, alignItems: 'center', justifyContent: 'center', borderColor: 'grey', borderWidth: 1 }}>
                        <AntDesign name="plus" size={15} color="yellow" />
                        <Text style={{ color: 'white', marginLeft: 5 }}>My List</Text>
                    </TouchableOpacity>
                </View>
                    <View style={{paddingLeft: 25, paddingTop: 15}}>
                        <Text style={{ color: 'white', fontSize: 20, marginTop: 5, fontWeight: 'bold' }}>US Action Movies</Text>
                        <FlatList
                    horizontal={true}
                    data={mymovie}
                    keyExtractor={item => {
                        return item.id
                    }}
                    ItemSeparatorComponent={() => {
                        return <View style={{ paddingTop: 15, marginRight: 15 }} />
                    }}
                    renderItem={post => {
                        const item = post.item
                        return (
                            <Muvies image={item.poster_path} />
                        )
                    }}
                    
                />
                </View>
                <View style={{paddingLeft: 30, paddingTop: 15}}>
                    <Text style={{ color: 'white', fontSize: 20,  fontWeight: 'bold' }}>Muvi Originals Actions</Text>
                        <FlatList
                    horizontal={true}
                    data={myMovies}
                    keyExtractor={item => {
                        return item.id
                    }}
                    ItemSeparatorComponent={() => {
                        return <View style={{ marginRight: 15 }} />
                    }}
                    renderItem={post => {
                        const item = post.item
                        return (
                            <Muvies image={item.poster_path} />
                        )
                    }}
                    
                />

                </View>
                    
            </ScrollView>
        </View>
    )
}