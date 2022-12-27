import { View, Text, Image, StyleSheet, Button, ScrollView, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomInput from '../../../../../library/CustomInput/CustomInput'
import CustomButton from '../../../../../library/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import { LoginValidationSchema } from '../core/_models'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useForm } from '../core/LoginProvider'
import OTPInputView from '@twotalltotems/react-native-otp-input'

const initValues = {
    username: '',
    password: ''
}


const OtpForm = () => {
    const {isLoading, submit} = useForm()
    console.log("🚀 ~ file: OtpForm.tsx:19 ~ OtpForm ~ isLoading", isLoading)

    const navigation:any = useNavigation()

    const onSignUpPressed = () => {
        navigation.navigate('SignUp')
    }

    return (
        <SafeAreaView style={styles.root}>
            <Text style={styles.heading}>Enter OTP Code</Text>
            <OTPInputView
                style={{width: '80%', height: 200}}
                pinCount={4}
                autoFocusOnLoad
                codeInputFieldStyle={styles.otpStyleBase}
                codeInputHighlightStyle={styles.otpStyleHighlighted}
                // secureTextEntry
                onCodeFilled = {(code => {
                    console.log(`Code is ${code}, you are good to go!`)
                    navigation.navigate('Log In')
                })}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        paddingTop: 50,
    },
    logo: {
        width: 50,
        margin: 60
    },
    heading: {
        fontSize: 20,
        fontWeight: '700'
    },
    otpStyleBase: {
    width: 70,
    height: 73,
    borderColor: '#ddd',
    backgroundColor: '#ddd',
    borderRadius: 5,
    color: '#101',
    fontSize: 20,
    fontWeight: '600'
  },

  otpStyleHighlighted: {
    borderColor: "#333",
  }
})

export default OtpForm