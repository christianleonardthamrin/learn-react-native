import { View, Text, Image, StyleSheet, Button, ScrollView, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomInput from '../../../library/CustomInput/CustomInput'
import CustomButton from '../../../library/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import { LoginValidationSchema } from './core/_models'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FormProvider } from './core/LoginProvider'
import LogInForm from './components/LogInForm'

const LogInScreen = () => {
    return (
        <FormProvider id='' restApi=''>
            <LogInForm />
        </FormProvider>
    )
}

export default LogInScreen