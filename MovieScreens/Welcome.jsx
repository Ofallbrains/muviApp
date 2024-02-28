import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from 'react-native-vector-icons';
import Or from '../Components/Or'
import Buttons from '../Components/Buttons';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Welcome({navigation}) {
  return (
    <View style={{ backgroundColor: '#26282C', width: width, height: height, }}>
      <View style={{height: 200 }}>
      <View style={{ padding: 20, alignSelf: 'center', display: 'flex', flexDirection: 'row', gap: 3, }}>
        <Text style={{ color: 'black', fontSize: 35, fontWeight: 'bold', backgroundColor: '#FDD32C', borderWidth: 1, borderColor: '#FDD32C', borderRadius: 10, textAlign: 'center', width: 40 }}>M</Text>
        <Text style={{ color: 'white', fontSize: 35, fontWeight: 'bold' }}>Muvi</Text>
      </View>
      </View>

      <View style={{ padding: 20, alignSelf: 'center',  }}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center', paddingTop: 100, }}>Welcome to Muvi</Text>
        <Text style={{ color: 'white', fontSize: 15, textAlign: 'center', marginTop: 10, }}>Look back and reflect on your memories and growth over time</Text>
      </View>

      <View style={{ padding: 5, alignSelf: 'center', width: 330  }}>
        
      <View style={{ borderRadius: 5,  marginTop: 10, borderWidth: 1, borderColor: 'white', }}>
        <Or text="Sign in with Apple" Icon={<FontAwesome name="apple" size={24} color="white" />}
          style={{ backgroundColor: 'black' }} />
        </View>
        <View style={{ borderRadius: 5,  marginTop: 20, borderWidth: 1, borderColor: 'white', }}>
          <Or text="Sign in with Google" Icon={<FontAwesome name="google" size={24} color="red" />} />
      </View>
</View>
      
      <TouchableOpacity onPress={() => navigation.navigate('Sign-Up')} style={{ marginTop: 20, alignSelf: 'center',borderRadius: 5, borderWidth: 1,width: 330,backgroundColor:'#FDD32C' }}>
        <Buttons text="Sign Up" style={{ backgroundColor: '#FDD32C',}}/>
      </TouchableOpacity>

      <View style={{ display: 'flex', flexDirection: 'row', gap: 3, marginTop: 10, }}>
      <Text style={{ color: 'white' }}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Sign-In')}>
      <Text style={{ color: '#FDD32C' }}>Sign In</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}