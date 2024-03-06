import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { TextInput } from 'react-native-paper'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Buttons from '../Components/Buttons'
import Or from '../Components/Or'
import AsyncStorage from '@react-native-async-storage/async-storage'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
export default function SignIn({ navigation }) {

    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')


    const validateForm = () => {
        let valid = true

        // Validate email
        if (!email.trim()) {
            setEmailError('Email is required')
            valid = false
        } else if (!isValidEmail(email)) {
            setEmailError('Invalid email format')
            valid = false
        } else {
            setEmailError('')
        }

        // Validate password
        if (!password.trim()) {
            setPasswordError('Password is required')
            valid = false
        } else {
            setPasswordError('')
        }

        return valid
    }

    const handleSubmit = async() => {
        if (validateForm()) {

            const data={
                email:email,
                password:password
              }
    
              await AsyncStorage.setItem('user_data', JSON.stringify(data))
    
                 console.log('Form submitted:', email, password)
                 navigation.navigate('Main')
          }
      }
    
      const getData=async()=>{
        let data=await AsyncStorage.getItem('user_data')
        console.log(data)
      }
    
      getData()

        

    const isValidEmail = (email) => {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    return (
        <View style={{ backgroundColor: '#26282C', height: height, width: width, alignSelf: 'center', padding: 20 }}>
            <View>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', paddingTop: 20 }}>Email Adress</Text>
                <TextInput
                    label={'Email'}
                    textColor='white'
                    mode='outlined'
                    autoCompleteType="email"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                    error={emailError}
                    style={{ backgroundColor: '#26282C', borderRadius: 10, }}
                    left={<TextInput.Icon color={'#FDD32C'} size={15} icon={"email-outline"} />}
                />
                {emailError ? <Text style={{ color: 'red', }}>{emailError}</Text> : null}
            </View>
            <View>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', paddingTop: 20 }}>Password</Text>
                <TextInput
                    label={'Your Pasword'} secureTextEntry
                    textColor='white'
                    mode='outlined'
                    value={password}
                    onChangeText={setPassword}
                    error={passwordError}
                    style={{ backgroundColor: '#26282C', borderRadius: 10, }}
                    left={<TextInput.Icon color={'#FDD32C'} size={15} icon={"lock-outline"} />}
                />
                {passwordError ? <Text style={{ color: 'red', }}>{passwordError}</Text> : null}
                <Buttons title='Submit' onPress={handleSubmit} />
            </View>
            <TouchableOpacity>
            <Text style={{ textAlign: 'right', color: 'white', paddingTop: 10 }}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={handleSubmit} style={{ marginTop: 20, alignSelf: 'center', borderRadius: 5, borderWidth: 1, width: 355, backgroundColor: '#FDD32C' }}>
                <Buttons text="Sign In" />
            </TouchableOpacity>
            <Text style={{ textAlign: 'center', color: 'white', paddingTop: 20 }}>Or sign in with</Text>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 3, borderRadius: 5, borderColor: 'white', borderWidth: 1, marginTop: 10, }}>
                <Or text="Sign in with Apple" Icon={<FontAwesome name="apple" size={24} color="white" />} />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 3, borderRadius: 5, borderColor: 'white', borderWidth: 1, marginTop: 10, }}>
                <Or text="Sign in with Google" Icon={<FontAwesome name="google" size={24} color="red" />} />
            </View>

            <View style={{ display: 'flex', paddingTop: 10, flexDirection: 'row', gap: 3, alignSelf: 'center', marginTop: 10 }}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 15 }}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Sign-Up')}>
                    <Text style={{ color: '#FDD32C', fontSize: 15,fontWeight: 'bold'  }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}