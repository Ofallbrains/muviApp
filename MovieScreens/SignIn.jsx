import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Buttons from '../Components/Buttons'
import Or from '../Components/Or'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
export default function SignIn({navigation}) {
  return (
      <View style={{ backgroundColor: '#26282C', height: height, width: width, alignSelf: 'center', padding: 20 }}>
          <Text>Email Adress</Text>
          <TextInput
              label={'Email'}
              textColor='white'
              mode='outlined'
              style={{ backgroundColor: '#26282C', borderRadius: 10, marginTop: 30, }}
              left={<TextInput.Icon color={'#FDD32C'} size={15} icon={"email-outline"} />}
          />
          <Text>Password</Text>
          <TextInput
              label={'Your Pasword'} secureTextEntry
              textColor='white'
              mode='outlined'
              style={{ backgroundColor: '#26282C', borderRadius: 10, marginTop: 30, }}
              left={<TextInput.Icon color={'#FDD32C'} size={15} icon={"lock-outline"} />}
          />
          <Text>Forgot Password?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Homescreen')} style={{ marginTop: 20, alignSelf: 'center', borderRadius: 10, borderWidth: 1, width: 300, backgroundColor: '#FDD32C' }}>
          <Buttons text="Sign In" />
          </TouchableOpacity>
          <Text>Or sign in with</Text>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 3, marginTop: 10, }}>
              <Or text="Apple" Icon={<FontAwesome name="apple" size={24} color="white" />} />
              <Or text="Google" Icon={<FontAwesome name="google" size={24} color="red" />} />
              </View>
    </View>
  )
}