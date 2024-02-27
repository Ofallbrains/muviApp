import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';
import { FontAwesome } from 'react-native-vector-icons';
import Buttons from '../Components/Buttons';
import Or from '../Components/Or';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
export default function SignUp({navigation}) {
    return (
        <View style={{ backgroundColor: '#26282C', height: height, width: width, alignSelf: 'center', padding: 20 }}>
            <View style={{ marginTop: 50, alignSelf: 'center', display: 'flex', flexDirection: 'row', gap: 1 }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', backgroundColor: '#FDD32C', borderWidth: 1, borderColor: '#FDD32C', borderRadius: 10, width: 40, textAlign: 'center' }}>M</Text>
                <Text style={{ fontSize: 25, color: 'white', }}>Muvi</Text>
            </View>
            <View style={{ marginTop: 30 }}>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>Sign up to discover all our movies and enjoy the features</Text>
            </View>
            <TextInput
                label={'Email'}
                textColor='white'
                style={{ backgroundColor: '#26282C', borderRadius: 10, marginTop: 30, }}
                right={<TextInput.Icon color={'#FDD32C'} size={15} icon={"email-outline"} />}
            />
            <TextInput
                label={'Password'} secureTextEntry
                textColor='white'
                style={{ backgroundColor: '#26282C', borderRadius: 10, }}
                right={<TextInput.Icon color={'#FDD32C'} size={15} icon={"lock-outline"} />}
            />
            <TextInput
                label={'Confirm Password'} secureTextEntry
                textColor='white'
                style={{ backgroundColor: '#26282C', borderRadius: 10, }}
                right={<TextInput.Icon color={'#FDD32C'} size={15} icon={"lock-outline"} />}
            />
            <TouchableOpacity style={{ marginTop: 20, alignSelf: 'center', borderRadius: 10, borderWidth: 1, width: 300, backgroundColor: '#FDD32C' }}>
                <Buttons text="Sign Up" style={{ backgroundColor: '#FDD32C', marginTop: 20, }} />
            </TouchableOpacity>
            <View>
                <Text>By signing up, you agree to our Terms of Service and Privacy Policy</Text>
            </View>
            <Text>Or simply sign up with</Text>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 3, marginTop: 10, }}>
                <Or text="Apple" Icon={<FontAwesome name="apple" size={24} color="white" />} />
                <Or text="Google" Icon={<FontAwesome name="google" size={24} color="red" />} />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 3,  }}>
                <Text style={{ textAlign: 'center',  color: 'white' }}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Sign-In')}>
                    <Text style={{ color: '#FDD32C' }}>Sign In</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}