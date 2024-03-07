import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons, SimpleLineIcons, Feather, MaterialIcons } from 'react-native-vector-icons';
import { firebaseAuth } from '../../firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function ProfileScreen({ navigation }) {
    const handleSignout = async () => {
        await firebaseAuth.signOut();
        await AsyncStorage.removeItem('userData');
        navigation.navigate('Sign-In');
    }
    return (
        <View style={{ padding: 20, backgroundColor: '#26282C', width: width, height: height, marginTop: 20 }}>
            <StatusBar style="dark" />
            
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white', padding: 10 }}>More</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRoWPl477CJ2Xhs_vjXFbfHKZ49aFXnRiLlYM2r_BJQeMIS3fSQ56H-77Vk86ad7CXIe4&usqp=CAU' }} style={{ width: 70, height: 70, borderRadius: 50, }} />
                <View style={{ marginLeft: 10, marginTop: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Victoria Becks</Text>
                    <Text style={{ fontSize: 15, fontWeight: '400', color: 'white' }}>vickibecks@gmail.com</Text>
                </View>
                <Feather name="edit" size={20} color="yellow" style={{ marginTop: 20, marginLeft: 90 }} />
            </View>
            

            <View style={{ padding: 10, marginTop: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: '300', color: 'white' }}>General Settings</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', gap: 15 }}>
                        <MaterialCommunityIcons name="account" size={20} color="white" />
                        <Text style={{ fontSize: 18, fontWeight: '400', color: 'white' }}>Account Settings</Text>
                    </View >
                    <SimpleLineIcons name="arrow-right" size={16} color="white" />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 25 }}>
                    <View style={{ flexDirection: 'row', gap: 15 }}>
                        <Feather name="settings" size={20} color="white" />
                        <Text style={{ fontSize: 18, fontWeight: '400', color: 'white' }}>App Settings</Text>
                    </View>
                    <SimpleLineIcons name="arrow-right" size={16} color="white" />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 25 }}>
                    <View style={{ flexDirection: 'row', gap: 15 }}>
                        <MaterialIcons name="language" size={22} color="white" />
                        <Text style={{ fontSize: 18, fontWeight: '400', color: 'white' }}>Language</Text>
                    </View>
                    <SimpleLineIcons name="arrow-right" size={16} color="white" />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 25 }}>
                    <View style={{ flexDirection: 'row', gap: 15 }}>
                        <MaterialCommunityIcons name="email" size={20} color="white" />
                        <Text style={{ fontSize: 18, fontWeight: '400', color: 'white' }}>Inbox</Text>
                    </View>
                    <SimpleLineIcons name="arrow-right" size={16} color="white" />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 25 }}>
                    <View style={{ flexDirection: 'row', gap: 15 }}>
                        <MaterialCommunityIcons name="help-circle" size={20} color="white" />
                        <Text style={{ fontSize: 18, fontWeight: '400', color: 'white' }}>Help, FAQ</Text>
                    </View>
                    <SimpleLineIcons name="arrow-right" size={16} color="white" />
                </View>

            </View>

            <View style={{ padding: 11, marginTop: 20 }}>
                <Text style={{ fontSize: 17, fontWeight: '300', color: 'white' }}>Terms</Text>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: '400', color: 'white' }}>Terms&Conditions</Text>
                        <SimpleLineIcons name="arrow-right" size={16} color="white" />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                        <Text style={{ fontSize: 18, fontWeight: '400', color: 'white' }}>Privacy&Policy</Text>
                        <SimpleLineIcons name="arrow-right" size={16} color="white" />
                    </View>

                    <TouchableOpacity  onPress={handleSignout} style={{marginTop: 20}}>
                        <Text style={{ fontSize: 18, fontWeight: '400', color: 'yellow' }}>Sign Out</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>
    )
}