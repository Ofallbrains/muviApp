import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';
import { FontAwesome } from 'react-native-vector-icons';
import Buttons from '../Components/Buttons';
import Or from '../Components/Or';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
export default function SignUp({ navigation }) {
    return (
        <View style={{ backgroundColor: '#26282C', height: height, width: width, alignSelf: 'center', padding: 20 }}>
            <View style={{ marginTop: 50, alignSelf: 'center', display: 'flex', flexDirection: 'row', gap: 1 }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', backgroundColor: '#FDD32C', borderWidth: 1, borderColor: '#FDD32C', borderRadius: 10, width: 40, textAlign: 'center' }}>M</Text>
                <Text style={{ fontSize: 25, color: 'white', }}>Muvi</Text>
            </View>
            <View style={{ paddingTop: 20 }}>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Sign up to discover all our movies and enjoy the features</Text>
            </View>
            <TextInput
                label={'Email'}
                textColor='white'
                style={{ backgroundColor: '#26282C', borderRadius: 10, marginTop: 30, }}
                right={<TextInput.Icon color={'#FDD32C'} size={22} icon={"email-outline"} />}
            />
            <TextInput
                label={'Password'} secureTextEntry
                textColor='white'
                style={{ backgroundColor: '#26282C', borderRadius: 10, }}
                right={<TextInput.Icon color={'#FDD32C'} size={22} icon={"lock-outline"} />}
            />
            <TextInput
                label={'Confirm Password'} secureTextEntry
                textColor='white'
                style={{ backgroundColor: '#26282C', borderRadius: 10, }}
                right={<TextInput.Icon color={'#FDD32C'} size={22} icon={"lock-outline"} />}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Main')} style={{ marginTop: 20, alignSelf: 'center', borderRadius: 5, borderWidth: 1, width: 355, backgroundColor: '#FDD32C' }}>
                <Buttons text="Sign Up" style={{ backgroundColor: '#FDD32C',  }} />
            </TouchableOpacity>
            <View style={{ alignItems: 'center', paddingTop: 20, paddingLeft: 10, display: 'flex', flexDirection: 'row', gap: 3 }}>
                <Text style={{ color: 'white' }}>By signing up, you agree to our</Text>
                <Text style={{ color: '#FDD32C' }} >Terms of Services</Text>
                </View>
            <View style={{ alignItems: 'center', paddingLeft: 100, display: 'flex', flexDirection: 'row', gap: 3 }}>
                <Text style={{ color: 'white' }}>and </Text>
                <Text style={{ color: '#FDD32C' }}>Privacy Policy</Text>
            </View>
            <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', paddingTop: 30 }}>Or simply sign up with</Text>
            <TouchableOpacity    style={{ display: 'flex', flexDirection: 'row', gap: 3, borderRadius: 5, borderColor: 'white', borderWidth: 1, marginTop: 10, }}>
                <Or text="Sign up with Apple" Icon={<FontAwesome name="apple" size={24} color="white" />} />
            </TouchableOpacity>

            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', gap: 3, borderRadius: 5, borderColor: 'white', borderWidth: 1, marginTop: 10, }}>
                <Or text="Sign up with Google" Icon={<FontAwesome name="google" size={24} color="red" />} />
            </TouchableOpacity>
            

        </View>
    )
}