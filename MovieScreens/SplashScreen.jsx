import React, { useEffect } from 'react';
import { View, Text,  } from 'react-native';

const SplashScreen = ({ navigation }) => {
    
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Here'); // Navigate to the main screen after 3 seconds
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
      <View style={{ backgroundColor: '#26282C', width: '100%', height: '100%', }}>
          <View style={{ marginTop: 300, alignSelf: 'center', display: 'flex', flexDirection: 'row', gap: 3,}}>
              
          <Text style={{ color: 'black', fontSize: 35, fontWeight: 'bold', backgroundColor: '#FDD32C', borderWidth: 1, borderColor: '#FDD32C', borderRadius: 10, textAlign: 'center', width: 40 }}>M</Text>
          <Text style={{ color: 'white', fontSize: 35, fontWeight: 'bold' }}>Muvi</Text>
          </View>
      {/* <StatusBar style="light"/> */}
    </View>
  );
};

export default SplashScreen;