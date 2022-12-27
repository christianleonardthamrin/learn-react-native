import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LogInScreen from '../src/screens/public/LogInScreen/LogInScreen'
import SignUpScreen from '../src/screens/public/SignUpScreen/SignUpScreen'
import OtpScreen from '../src/screens/public/OtpScreen/OtpScreen'

const Stack = createNativeStackNavigator()

const PublicNavigation = ({darkMode}:any) => {
  return (
    <NavigationContainer>
        <Stack.Navigator 
          screenOptions=
            {
              {
                headerShown: false,
                statusBarColor: 'auto',
              }
            }
          >
          <Stack.Screen name="Log In" component={LogInScreen} />
          <Stack.Screen name="Sign Up" component={SignUpScreen} />
          <Stack.Screen name="Otp" component={OtpScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default PublicNavigation