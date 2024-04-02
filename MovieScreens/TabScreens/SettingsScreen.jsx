import React from 'react';
import { MaterialCommunityIcons, Feather, MaterialIcons, Octicons } from 'react-native-vector-icons';
import { View, Text, TouchableOpacity,Dimensions } from 'react-native';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function SettingsScreen({navigation}) {

    return (
        <View style={{ padding: 20, backgroundColor:'#26282C', width: width, height: height }}>
            <TouchableOpacity style={{ flexDirection: 'row', gap: 17, marginTop: 20 }}>
                <MaterialCommunityIcons name="account-settings-outline" size={22} color="white" />
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Account Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row', gap:18, marginTop: 15}}>
                <Feather name="inbox" size={22} color="white" style={{ marginTop: 2 }} />
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Inbox</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row', gap:18, marginTop: 15}}>
                <MaterialIcons name="language" size={22} color="white" style={{ marginTop: 2 }} />
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Language</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row', gap:18, marginTop: 15}}>
                <MaterialIcons name="help-outline" size={22} color="white" style={{ marginTop: 2 }} />
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17, }}>Help</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => navigation.navigate('Sign-In')} style={{flexDirection:'row', gap:20, marginTop: 15}}> 
                <Octicons name="sign-out" size={20} color="white" style={{ marginTop: 2 }} />
                <Text style={{ color: 'yellow', fontWeight: 'bold', fontSize: 16 }}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    )
}