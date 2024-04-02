import 'react-native-gesture-handler';
import Navigation from './MovieScreens/Navigation';
import SettingsScreen from './MovieScreens/TabScreens/SettingsScreen';
import ProfileScreen from './MovieScreens/TabScreens/ProfileScreen';
import HomeScreen from './MovieScreens/TabScreens/HomeScreen';
import Films from './MovieScreens/TopNav/Films'
import AppLoading from 'expo-app-loading/build';
import { useFonts, Poppins_100Thin_Italic } from '@expo-google-fonts/poppins'
// import {useFonts, K2D_600SemiBold} from '@expo-google-fonts/k2d'



export default function App() {
  let [fontsLoaded] = useFonts({
   Poppins_100Thin_Italic
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {

    return (
      <Navigation />
      // <HomeScreen/>
      // <SettingsScreen />
      // <ProfileScreen />
      // <Films/>
    )
  }
}

