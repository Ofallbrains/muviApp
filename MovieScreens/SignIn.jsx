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
          <View>       
          <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', paddingTop: 20 }}>Email Adress</Text>
          <TextInput
              label={'Email'}
              textColor='white'
              mode='outlined'
              style={{ backgroundColor: '#26282C', borderRadius: 10,  }}
              left={<TextInput.Icon color={'#FDD32C'} size={15} icon={"email-outline"} />}
          />
          </View>
          <View>     
          <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', paddingTop: 20 }}>Password</Text>
          <TextInput
              label={'Your Pasword'} secureTextEntry
              textColor='white'
              mode='outlined'
              style={{ backgroundColor: '#26282C', borderRadius: 10, }}
              left={<TextInput.Icon color={'#FDD32C'} size={15} icon={"lock-outline"} />}
          />
          </View>
          <Text style={{ textAlign: 'right', color: 'white', paddingTop: 20 }}>Forgot Password?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Main')} style={{ marginTop: 20, alignSelf: 'center', borderRadius: 5, borderWidth: 1, width: 330, backgroundColor: '#FDD32C' }}>
          <Buttons text="Sign In" />
          </TouchableOpacity>
          <Text>Or sign in with</Text>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 3, borderRadius: 5, borderColor: 'white', borderWidth: 1, marginTop: 10, }}>
              <Or text="Sign in with Apple" Icon={<FontAwesome name="apple" size={24} color="white" />} />
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 3, borderRadius: 5, borderColor: 'white', borderWidth: 1, marginTop: 10, }}>
              <Or text="Sign in with Google" Icon={<FontAwesome name="google" size={24} color="red" />} />
              </View>
    </View>
  )
}