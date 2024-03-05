import { View, Text, Dimensions, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { AntDesign, Feather } from 'react-native-vector-icons';
import Muvies from '../Components/Muvies';
import YoutubeIframe from 'react-native-youtube-iframe';


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Action({ route, navigation }) {

    const [searched, setSearched] = useState([]);
    const [videoPlay,setVideoPlay] = useState('')
  
    const rout = route.params
    console.log(route)
  
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzI5MWM1YzNjZTI1OWZjY2IxODU0MDc5OGM5MGQ3MCIsInN1YiI6IjYzZDhkZTM1YTkxMTdmMDA5ZGE0MDI3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.32-d9hDkp91rDw98i-VzmDQIOVZA-0DHeIOn9Af2JTI',
      }
    };
  
    const fetchData = async () => {
  
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
        const data = await response.json();
        setSearched(data.results);
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      fetchData();
      Handleplay();
    }, []);
  
    const Handleplay =()=>{
      fetch(`https://api.themoviedb.org/3/movie/${rout.id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then((response) => {
      setVideoPlay(response.results[0].key)
    })
    .catch(err => console.error(err));
    }

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
                    <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', marginTop: 30 }}>Action</Text>
                </View>
                <View style={{ paddingHorizontal: 20, paddingTop: 10, height: 350, backgroundColor: 'transparent',}}>
                    {/* <Image source={{ uri: `https://image.tmdb.org/t/p/w500${route.poster_path}` }} */}
                    {/* style={{ width: 330, height: 200 }}  */}
                    <YoutubeIframe
                        height={'60%'}
                        // width={300}
                        play={false}
                        videoId={videoPlay}
                        // onChangeState={onStateChange}
                    />
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20,  }}>{rout.title}</Text>
                    <Text style={{ color: 'white', fontSize: 14, fontWeight: '300', marginTop: 5 }}>{rout.overview}</Text>
                </View>

                <View style={{ flexDirection: 'row', gap: 10, paddingHorizontal: 30, marginTop: 10 }}>
                    <TouchableOpacity style={{ width: 160, flexDirection: 'row', padding: 7, borderRadius: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFD22F' }}>
                        <Feather name="play" size={24} color="white" />
                        <Text style={{ color: 'white', marginLeft: 5 }}>Play</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 160, flexDirection: 'row', padding: 7, borderRadius: 5, alignItems: 'center', justifyContent: 'center', borderColor: 'grey', borderWidth: 1 }}>
                        <AntDesign name="plus" size={15} color="yellow" />
                        <Text style={{ color: 'white', marginLeft: 5 }}>My List</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingLeft: 25, paddingTop: 15 }}>
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
                <View style={{ paddingLeft: 30, paddingTop: 15 }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Muvi Originals Actions</Text>
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