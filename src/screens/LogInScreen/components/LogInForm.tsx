import { View, Text, Image, StyleSheet, Button, ScrollView, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomInput from '../../../../library/CustomInput/CustomInput'
import CustomButton from '../../../../library/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import { LoginValidationSchema } from '../core/_models'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useForm } from '../core/LoginProvider'

const initValues = {
    username: '',
    password: ''
}


const LogInForm = () => {
    const {isLoading, submit} = useForm()
    console.log("🚀 ~ file: LogInForm.tsx:19 ~ LogInForm ~ isLoading", isLoading)

    const navigation:any = useNavigation()

    const onSignUpPressed = () => {
        navigation.navigate('SignUp')
    }

    return (
        <Formik 
            initialValues={initValues} 
            onSubmit={(values) => submit(values)}
            validationSchema={LoginValidationSchema}
        >
            {({handleChange, handleSubmit, handleBlur, values, errors, touched, setFieldTouched}) => {
                return (
                    <SafeAreaView style={{flex: 1, backgroundColor: '#f9fbfa'}}>
                        <StatusBar barStyle={'dark-content'} />
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.root}>
                                <Image source={require('../../../../assets/favicon.png')} style={styles.logo} resizeMode='contain' />
                                <CustomInput
                                    placeholder='Username'
                                    type='LIGHT'
                                    style={styles.input}
                                    isError={touched.username && !!errors.username}
                                    editable={!isLoading}
                                    value={values.username}
                                    onChangeText={handleChange('username')}
                                    onBlur={() => setFieldTouched('username')}
                                    errorMessage={touched.username ? errors.username : ''}
                                />
                                <CustomInput 
                                    placeholder='Password'
                                    type='LIGHT'
                                    style={styles.input}
                                    isError={touched.password && !!errors.password}
                                    editable={!isLoading}
                                    secureTextEntry={true}
                                    value={values.password}
                                    onChangeText={handleChange('password')}
                                    onBlur={() => setFieldTouched('password')}
                                    errorMessage={touched.password ? errors.password : ''}
                                />
                                <CustomButton 
                                    text='Log In' 
                                    type='DARK' 
                                    btnStyle={styles.button} 
                                    onPress={() => handleSubmit()}
                                    disabled={isLoading || !!errors.username || !!errors.password}
                                    isLoading={isLoading}
                                />
                                <Text 
                                    style=
                                    {
                                        {
                                        ...styles.forgotPasswordText,
                                        opacity: isLoading ? 0.5 : 1
                                        }
                                    }>Forgot Your Password?</Text>
                                <Text style={{padding: 30, fontWeight: '600', color: '#aaa'}}>Or</Text>
                                <Text 
                                    style=
                                    {
                                        {
                                            fontWeight: '600',
                                            opacity: isLoading ? 0.5 : 1
                                        }
                                    } onPress={() => !isLoading ? onSignUpPressed() : null} >
                                        Dont Have an Account? Create One
                                </Text>
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                )
            }}
        </Formik>
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
    input: {
        width: '80%'
    },
    button: {
        width: '80%',
    },
    forgotPasswordText: {
        paddingTop: 30,
        fontWeight: '600',
        color: '#5F9DF7'
    }
})

export default LogInForm