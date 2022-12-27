import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomInput from '../../../library/CustomInput/CustomInput'
import CustomButton from '../../../library/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Formik } from 'formik'
import { initValues, SignUpValidationSchema } from './core/_models'

const SignUpScreen = () => {
    const navigation:any = useNavigation()

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const onLogInPressed = () => {
        navigation.navigate('LogIn')
    }

    return (
        <Formik initialValues={initValues} onSubmit={() => console.log('halo')} validationSchema={SignUpValidationSchema}>
            {({handleChange, handleSubmit, values, errors}) => {
                return (
                    <SafeAreaView style={{flex: 1, backgroundColor: '#f9fbfa'}}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.root}>
                                <Image source={require('../../../assets/favicon.png')} style={styles.logo} resizeMode='contain' />
                                <Text style={styles.heading}>
                                    Let's Create Your Account
                                </Text>
                                <CustomInput
                                    placeholder='Full Name'
                                    type='LIGHT'
                                    style={styles.input}
                                    isError={!!errors.fullName}
                                    editable={!isLoading}
                                    value={values.fullName}
                                    onChangeText={handleChange('fullName')}
                                    errorMessage={errors.fullName}
                                />
                                <CustomInput
                                    placeholder='Email'
                                    type='LIGHT'
                                    style={styles.input}
                                    isError={!!errors.email}
                                    editable={!isLoading}
                                    value={values.email}
                                    onChangeText={handleChange('email')}
                                    errorMessage={errors.email}
                                />
                                <CustomInput
                                    placeholder='Username'
                                    type='LIGHT'
                                    style={styles.input}
                                    isError={!!errors.username}
                                    editable={!isLoading}
                                    value={values.username}
                                    onChangeText={handleChange('username')}
                                    errorMessage={errors.username}
                                />
                                <CustomInput 
                                    placeholder='Password'
                                    type='LIGHT'
                                    style={styles.input}
                                    secureTextEntry={true}
                                    isError={!!errors.password}
                                    editable={!isLoading}
                                    value={values.password}
                                    onChangeText={handleChange('password')}
                                    errorMessage={errors.password}
                                />
                                <CustomInput 
                                    placeholder='Repeat Password'
                                    type='LIGHT'
                                    style={styles.input}
                                    secureTextEntry={true}
                                    isError={!!errors.confirmPassword}
                                    editable={!isLoading}
                                    value={values.confirmPassword}
                                    onChangeText={handleChange('confirmPassword')}
                                    errorMessage={errors.confirmPassword}
                                />
                                <CustomButton 
                                    text='Sign Up' 
                                    type='DARK' 
                                    btnStyle={styles.button} 
                                    // onPress={() => console.log('hi')}
                                    disabled={false}
                                />
                                <Text style={{padding: 30, fontWeight: '600', color: '#aaa'}}>Or</Text>
                                <Text 
                                    style={{fontWeight: '600'}}
                                    onPress={() => onLogInPressed()}
                                >
                                    Already Have an Account? Log In Here
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
        marginTop: 60
    },
    input: {
        width: '80%'
    },
    heading: {
        margin: 40,
        fontWeight: '800',
        fontSize: 21
    },
    button: {
        width: '80%',
    },
})

export default SignUpScreen