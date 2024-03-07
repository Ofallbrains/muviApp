import React from 'react';
import { MaterialCommunityIcons, Feather, MaterialIcons, Octicons } from 'react-native-vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';

export default function SettingsScreen({navigation}) {

    return (
        <View style={{ padding: 20, backgroundColor:'#26282C' }}>
            <TouchableOpacity style={{ flexDirection: 'row', gap: 10 }}>
                <MaterialCommunityIcons name="account-settings-outline" size={24} color="white" />
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Account Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row', gap:10}}>
                <Feather name="inbox" size={24} color="white" />
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Inbox</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row', gap:10}}>
                <MaterialIcons name="language" size={24} color="white"/>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Language</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row', gap:10}}>
                <MaterialIcons name="help-outline" size={24} color="white" />
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Help</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => navigation.navigate('Sign-Up')} style={{flexDirection:'row', gap:10}}> 
                <Octicons name="sign-out" size={24} color="yellow" />
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    )
}