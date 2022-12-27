import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LogInScreen from '../src/screens/LogInScreen/LogInScreen'
import SignUpScreen from '../src/screens/SignUpScreen/SignUpScreen'

const Stack = createNativeStackNavigator()

const Navigation = ({darkMode}:any) => {
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
          <Stack.Screen name="LogIn" component={LogInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation