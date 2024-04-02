import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import { Feather, FontAwesome5, MaterialIcons, Octicons, MaterialCommunityIcons } from 'react-native-vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { firebaseAuth } from '../../firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function ProfileScreen({ navigation }) {

    // const openDrawer = () => {
    //     navigation.dispatch(DrawerActions.openDrawer());
    // };

    // const handleSignout = async () => {
    //     await firebaseAuth.signOut();
    //     await AsyncStorage.removeItem('userData');
    //     navigation.navigate('Sign-In');
    // }
    return (
        <View style={{ padding: 20, backgroundColor: '#26282C', width: width, height: height, marginTop: 20 }}>
            <StatusBar style="light" />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white', padding: 10 }}>More</Text>
                <TouchableOpacity>
                    <FontAwesome5 name="bars" size={22} color="white" style={{ padding: 10 }} />
                </TouchableOpacity>
            </View>

            <View>
                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRoWPl477CJ2Xhs_vjXFbfHKZ49aFXnRiLlYM2r_BJQeMIS3fSQ56H-77Vk86ad7CXIe4&usqp=CAU' }} style={{ width: 200, height: 200, borderRadius: 100, alignSelf: 'center' }} />
                <View style={{ marginLeft: 10, marginTop: 30 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Victoria Becks</Text>
                    <Text style={{ fontSize: 15, fontWeight: '400', color: 'white', textAlign: 'center' }}>vickibecks@gmail.com</Text>
                </View>
                <View style={{ marginLeft: 10, marginTop: 50, flexDirection: 'row', gap: 20 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', gap: 10, marginTop: 10, borderColor: '#D9BE52', backgroundColor: '#D9BE52', padding: 2, width: 120, borderWidth: 1, borderRadius: 5 }}>
                        <Feather name="edit" size={18} color="yellow" style={{ marginTop: 1 }} />
                        <Text style={{ fontSize: 15, fontWeight: '500', color: 'white', }}>Edit Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', gap: 5, marginTop: 10, padding: 2, width: 200, backgroundColor: '#26282C', borderColor: '#26282C', borderWidth: 1, borderRadius: 5 }}>
                        <Feather name="plus-circle" size={20} color="white" style={{ marginTop: 2 }} />
                        <Text style={{ fontSize: 15, fontWeight: '500', color: 'white', }}>Create another profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={{ flexDirection: 'row', gap: 17, marginTop: 20 }}>
                <MaterialCommunityIcons name="account-settings-outline" size={22} color="white" />
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Account Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', gap: 18, marginTop: 15 }}>
                <Feather name="inbox" size={22} color="white" style={{ marginTop: 2 }} />
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Inbox</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', gap: 18, marginTop: 15 }}>
                <MaterialIcons name="language" size={22} color="white" style={{ marginTop: 2 }} />
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Language</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', gap: 18, marginTop: 15 }}>
                <MaterialIcons name="help-outline" size={22} color="white" style={{ marginTop: 2 }} />
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17, }}>Help</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Sign-In')} style={{ flexDirection: 'row', gap: 20, marginTop: 15 }}>
                <Octicons name="sign-out" size={20} color="white" style={{ marginTop: 2 }} />
                <Text style={{ color: 'yellow', fontWeight: 'bold', fontSize: 16 }}>Sign Out</Text>
            </TouchableOpacity>


        </View>
    )
}