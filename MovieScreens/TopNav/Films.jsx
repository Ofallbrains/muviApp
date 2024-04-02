import React, { useState, } from 'react'
import { View, Text, ScrollView, Dimensions, FlatList } from 'react-native';
import Searching from '../../Components/Searching';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Films() {

  const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzI5MWM1YzNjZTI1OWZjY2IxODU0MDc5OGM5MGQ3MCIsInN1YiI6IjYzZDhkZTM1YTkxMTdmMDA5ZGE0MDI3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.32-d9hDkp91rDw98i-VzmDQIOVZA-0DHeIOn9Af2JTI'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => setFilm(response.results))
        .catch(err => console.error(err));
    const [film, setFilm] = useState([])

  return (
      <View style={{ backgroundColor: '#26282C', height: height, width: width, alignSelf: 'center', padding: 20 }}>
           <FlatList
                showsVerticalScrollIndicator={false}
                    vertical={true}
                    data={film}
                    keyExtractor={item => item.id.toString()}
                    ItemSeparatorComponent={() => <View />}
                    renderItem={({ item }) => (
                        <Searching img={item.poster_path} title={item.original_title} year={item.release_date} />
                    )}
                />
    </View>
  )
}
