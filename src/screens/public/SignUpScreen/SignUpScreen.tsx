import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomInput from '../../../../library/CustomInput/CustomInput'
import CustomButton from '../../../../library/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Formik } from 'formik'
import { initValues, SignUpValidationSchema } from './core/_models'
import { FormattedMessage } from 'react-intl'
import { FormProvider } from './core/SignUpProvider'
import SignUpForm from './components/SignUpForm'

const SignUpScreen = () => {

    return (
        <FormProvider restApi=''>
            <SignUpForm />
        </FormProvider>
    )
}


export default SignUpScreen