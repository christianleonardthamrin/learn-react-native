import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomInput from '../../../../library/CustomInput/CustomInput'
import CustomButton from '../../../../library/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Formik } from 'formik'
import { initValues, SignUpValidationSchema } from './core/_models'
import { FormattedMessage } from 'react-intl'

const SignUpScreen = () => {
    const navigation:any = useNavigation()

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const onLogInPressed = () => {
        navigation.navigate('Log In')
    }

    return (
        <Formik initialValues={initValues} onSubmit={() => console.log('halo')} validationSchema={SignUpValidationSchema}>
            {({handleChange, handleSubmit, values, errors}) => {
                return (
                    <SafeAreaView style={{flex: 1, backgroundColor: '#f9fbfa'}}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.root}>
                                <Image source={require('../../../../assets/favicon.png')} style={styles.logo} resizeMode='contain' />
                                <Text style={styles.heading}>
                                    <FormattedMessage id='create_acc_heading' />
                                </Text>
                                <FormattedMessage id='full_name'>
                                    {placeholder => (
                                        <CustomInput
                                            placeholder={placeholder.toString()}
                                            type='LIGHT'
                                            style={styles.input}
                                            isError={!!errors.fullName}
                                            editable={!isLoading}
                                            value={values.fullName}
                                            onChangeText={handleChange('fullName')}
                                            errorMessage={errors.fullName}
                                        />
                                    )}
                                </FormattedMessage>
                                <FormattedMessage id='email'>
                                    {placeholder => (
                                        <CustomInput
                                            placeholder={placeholder.toString()}
                                            type='LIGHT'
                                            style={styles.input}
                                            isError={!!errors.email}
                                            editable={!isLoading}
                                            value={values.email}
                                            onChangeText={handleChange('email')}
                                            errorMessage={errors.email}
                                        />
                                    )}
                                </FormattedMessage>
                                <FormattedMessage id='username'>
                                    {placeholder => (
                                        <CustomInput
                                            placeholder={placeholder.toString()}
                                            type='LIGHT'
                                            style={styles.input}
                                            isError={!!errors.username}
                                            editable={!isLoading}
                                            value={values.username}
                                            onChangeText={handleChange('username')}
                                            errorMessage={errors.username}
                                        />
                                    )}
                                </FormattedMessage>
                                <FormattedMessage id='password'>
                                    {placeholder => (
                                        <CustomInput 
                                            placeholder={placeholder.toString()}
                                            type='LIGHT'
                                            style={styles.input}
                                            secureTextEntry={true}
                                            isError={!!errors.password}
                                            editable={!isLoading}
                                            value={values.password}
                                            onChangeText={handleChange('password')}
                                            errorMessage={errors.password}
                                        />
                                    )}
                                </FormattedMessage>
                                <FormattedMessage id='repeat_password'>
                                    {placeholder => (
                                        <CustomInput 
                                            placeholder={placeholder.toString()}
                                            type='LIGHT'
                                            style={styles.input}
                                            secureTextEntry={true}
                                            isError={!!errors.confirmPassword}
                                            editable={!isLoading}
                                            value={values.confirmPassword}
                                            onChangeText={handleChange('confirmPassword')}
                                            errorMessage={errors.confirmPassword}
                                        />
                                    )}
                                </FormattedMessage>
                                <CustomButton 
                                    text={<FormattedMessage id='sign_up' />} 
                                    type='DARK' 
                                    btnStyle={styles.button} 
                                    // onPress={() => console.log('hi')}
                                    disabled={false}
                                />
                                <Text style={{padding: 30, fontWeight: '600', color: '#aaa'}}>
                                    <FormattedMessage id='or'/>
                                </Text>
                                <Text 
                                    style={{fontWeight: '600'}}
                                    onPress={() => onLogInPressed()}
                                >
                                    <FormattedMessage id='have_acc' />
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