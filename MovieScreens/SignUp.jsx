import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';
import { FontAwesome } from 'react-native-vector-icons';
import Buttons from '../Components/Buttons';
import Or from '../Components/Or';
import { firebaseAuth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import FlashMessage, { showMessage } from "react-native-flash-message";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function SignUp({ navigation }) {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [secureTextEntry, setsecureTextEntry] = useState(true);

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        let valid = true;

        if (email.trim() === '') {
            setEmailError('Email is required');
            valid = false;
        } else if (!isValidEmail(email)) {
            setEmailError('Invalid email format');
            valid = false;
        } else {
            setEmailError('');
        }

        if (password.trim() === '') {
            setPasswordError('Password is required');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (confirmPassword.trim() === '') {
            setConfirmPasswordError('Confirm Password is required');
            valid = false;
        } else if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match');
            valid = false;
        } else {
            setConfirmPasswordError('');
        }

        return valid;
    };

    const handleSubmit = async () => {
        if (validateForm()) {
            try {
                const response = await createUserWithEmailAndPassword(firebaseAuth, email, password);
                console.log(response);
                navigation.navigate('Sign-In');
                console.log('Signed Up successfully');
                showMessage({
                    message: 'Signed Up successfully',
                    icon: 'success',
                    type: 'success',
                    duration: 2000
                })
            } catch (error) {
                console.log(error);
                showMessage({
                    message: error.code.toString(),
                    icon: 'danger',
                    type: 'danger',
                })
            }
        }
    };

    return (
        <View style={{ backgroundColor: '#26282C', height: height, width: width, alignSelf: 'center', padding: 20 }}>
            <FlashMessage position="top" />
            <View style={{ marginTop: 30, alignSelf: 'center', display: 'flex', flexDirection: 'row', gap: 1 }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', backgroundColor: '#FDD32C', borderWidth: 1, borderColor: '#FDD32C', borderRadius: 10, width: 40, textAlign: 'center' }}>M</Text>
                <Text style={{ fontSize: 25, color: 'white' }}>Muvi</Text>
            </View>
            <View style={{ paddingTop: 10 }}>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Sign up to discover all our movies and enjoy the features</Text>
            </View>
            <TextInput
                label={'Email'}
                textColor='white'
                autoCorrect={false}
                value={email}
                autoCompleteType="email"
                onChangeText={setEmail}
                error={emailError}
                style={{ backgroundColor: '#26282C', borderRadius: 10, marginTop: 15 }}
                right={<TextInput.Icon color={'#FDD32C'} size={22} icon={'email-outline'} />}
            />
            {emailError ? <Text style={{ color: 'red' }}>{emailError}</Text> : null}
            <TextInput
                label={'Password'}
                secureTextEntry={secureTextEntry}
                textColor='white'
                value={password}
                onChangeText={setPassword}
                error={passwordError}
                style={{ backgroundColor: '#26282C', borderRadius: 10, marginTop: 2 }}
                right={
                    <TextInput.Icon color={'#FDD32C'} size={22} icon={secureTextEntry ? "eye-off-outline" : "eye-outline"} onPress={() => setsecureTextEntry(!secureTextEntry)} />} />
            {passwordError ? <Text style={{ color: 'red' }}>{passwordError}</Text> : null}
            <TextInput
                label={'Confirm Password'}
                secureTextEntry={secureTextEntry}
                textColor='white'
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                error={confirmPasswordError}
                style={{ backgroundColor: '#26282C', borderRadius: 10, marginTop: 2 }}
                right={<TextInput.Icon color={'#FDD32C'} size={22} icon={secureTextEntry ? "eye-off-outline" : "eye-outline"} onPress={() => setsecureTextEntry(!secureTextEntry)} />
                } />
            {confirmPasswordError ? <Text style={{ color: 'red' }}>{confirmPasswordError}</Text> : null}
            <Buttons title='Submit' onPress={handleSubmit} />
            <TouchableOpacity onPress={handleSubmit} style={{ alignSelf: 'center', borderRadius: 5, borderWidth: 1, width: 348, backgroundColor: '#FDD32C' }}>
                <Buttons text='Sign Up' style={{ backgroundColor: '#FDD32C' }} />
            </TouchableOpacity>
            <View style={{ alignItems: 'center', paddingTop: 10, paddingLeft: 10, display: 'flex', flexDirection: 'row', gap: 3 }}>
                <Text style={{ color: 'white' }}>By signing up, you agree to our</Text>
                <Text style={{ color: '#FDD32C' }}>Terms of Services</Text>
            </View>
            <View style={{ alignItems: 'center', paddingLeft: 120, display: 'flex', flexDirection: 'row', gap: 3 }}>
                <Text style={{ color: 'white' }}>and</Text>
                <Text style={{ color: '#FDD32C' }}>Privacy Policy</Text>
            </View>
            <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', paddingTop: 15 }}>Or simply sign up with</Text>
            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', gap: 3, borderRadius: 5, borderColor: 'white', borderWidth: 1, marginTop: 10 }}>
                <Or text='Sign up with Apple' Icon={<FontAwesome name='apple' size={24} color='white' />} />
            </TouchableOpacity>
            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', gap: 3, borderRadius: 5, borderColor: 'white', borderWidth: 1, marginTop: 10 }}>
                <Or text='Sign up with Google' Icon={<FontAwesome name='google' size={24} color='red' />} />
            </TouchableOpacity>
        </View>
    );
}
