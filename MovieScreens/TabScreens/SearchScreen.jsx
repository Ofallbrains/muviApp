import { ScrollView, StyleSheet, Text, View, FlatList, Dimensions, } from 'react-native'
import { TextInput } from 'react-native-paper'
import { Ionicons } from 'react-native-vector-icons'
import React, { useState, useEffect } from 'react'
import Searching from '../../Components/Searching'
import { StatusBar } from 'expo-status-bar'


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Search = ({ navigation }) => {
    const [searched, setSearched] = useState([])
    const [search, setSearch] = useState('')
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzI5MWM1YzNjZTI1OWZjY2IxODU0MDc5OGM5MGQ3MCIsInN1YiI6IjYzZDhkZTM1YTkxMTdmMDA5ZGE0MDI3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.32-d9hDkp91rDw98i-VzmDQIOVZA-0DHeIOn9Af2JTI'
        }
    };

    const SearchMovie = async () => {
        try {
            fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`, options)
                .then(response => response.json())
                .then(response => { setSearched(response.results), console.log(searched); })
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (search.length > 0) {
            SearchMovie();
        } else {
            setSearched([]);
        }
    }, [search])


    return (
        <View style={{ backgroundColor: '#26282C', width: width, height: height, padding: 10 }} >
            <StatusBar style="light" />

            <View style={{ marginLeft: 20, marginTop: 30 }}>
                <Text style={{ color: 'white', fontSize: 20 }}>Search Movie Title</Text>
                </View>
                <View style={{ flexDirection: 'row',  }}>
                    <TextInput style={{ width: '100%', backgroundColor: '#26282C', }}
                        textColor='white'
                        placeholder="Type, title, categories, years, etc"
                        onChangeText={text => setSearch(text)}/>
                    <Ionicons name="search-outline" size={24} color="yellow" style={{ position: 'absolute', right: 20, top: 25 }}/>
                </View>


            <FlatList
                showsVerticalScrollIndicator={false}
                    vertical={true}
                    data={searched}
                    keyExtractor={item => item.id.toString()}
                    ItemSeparatorComponent={() => <View />}
                    renderItem={({ item }) => (
                        <Searching img={item.poster_path} title={item.original_title} year={item.release_date} />
                    )}
                />
           
        </View>

    )
}

export default Search

