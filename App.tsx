
import React from 'react'
import "./global.css"
import Login from './src/screen/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Term from './src/screen/Term';
import Help from './src/screen/Help';
import PhoneNumber from './src/screen/login/PhoneNumber';
import OtpVerify from './src/screen/login/OtpVerify';
import Name from './src/screen/login/Name';
import ProfileImg from './src/screen/login/ProfileImg';
import DateBirth from './src/screen/login/DateBirth';
import Gender from './src/screen/login/Gender';
import Looking from './src/screen/login/Looking';
import Bio from './src/screen/login/Bio';
import LifeStyle from './src/screen/login/LifeStyle';
import Education from './src/screen/login/Education';
import Loop from './src/screen/login/Loop';
import Event from './src/screen/Event';
const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Term" component={Term} options={{ headerShown: false }} />
      <Stack.Screen name="help" component={Help} options={{ headerShown: false }} />
      <Stack.Screen name="phone" component={PhoneNumber} options={{ headerShown: false }} />
      <Stack.Screen name="otpVerify" component={OtpVerify} options={{ headerShown: false }} />
      <Stack.Screen name="name" component={Name} options={{ headerShown: false }} />
      <Stack.Screen name="profileImg" component={ProfileImg} options={{ headerShown: false }} />
      <Stack.Screen name="dataBirth" component={DateBirth} options={{ headerShown: false }} />
      <Stack.Screen name="gender" component={Gender} options={{ headerShown: false }} />
      <Stack.Screen name="looking" component={Looking} options={{ headerShown: false }} />
      <Stack.Screen name="bio" component={Bio} options={{ headerShown: false }} />
      <Stack.Screen name="lifestyle" component={LifeStyle} options={{ headerShown: false }} />
      <Stack.Screen name="education" component={Education} options={{ headerShown: false }} />
      <Stack.Screen name="loop" component={Loop} options={{ headerShown: false }} />
      <Stack.Screen name="event" component={Event} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}


const App = () => {
  return (

    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  )
}

export default App
