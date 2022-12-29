import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomInput from '../../../../../library/CustomInput/CustomInput'
import CustomButton from '../../../../../library/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Formik } from 'formik'
import { initValues, SignUpValidationSchema } from '../core/_models'
import { FormattedMessage } from 'react-intl'
import { useForm } from '../core/SignUpProvider'

const SignUpForm = () => {
    const {isLoading, submit} = useForm()

    const navigation:any = useNavigation()

    const onLogInPressed = () => {
        navigation.navigate('Log In')
    }

    return (
        <Formik initialValues={initValues} onSubmit={() => console.log('halo')} validationSchema={SignUpValidationSchema}>
            {({handleChange, handleSubmit, values, errors, touched, setFieldTouched}) => {
                return (
                    <SafeAreaView style={{flex: 1, backgroundColor: '#f9fbfa'}}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.root}>
                                <Image source={require('../../../../../assets/favicon.png')} style={styles.logo} resizeMode='contain' />
                                <Text style={styles.heading}>
                                    <FormattedMessage id='create_acc_heading' />
                                </Text>
                                <FormattedMessage id='full_name'>
                                    {fieldName => (
                                        <CustomInput
                                            fieldName={fieldName.toString()}
                                            placeholder={fieldName.toString()}
                                            type='LIGHT'
                                            style={styles.input}
                                            isError={touched.fullName &&!!errors.fullName}
                                            editable={!isLoading}
                                            value={values.fullName}
                                            onChangeText={handleChange('fullName')}
                                            onBlur={() => setFieldTouched('fullName')}
                                            errorMessage={touched.fullName ? errors.fullName : ''}
                                        />
                                    )}
                                </FormattedMessage>
                                <FormattedMessage id='email'>
                                    {fieldName => (
                                        <CustomInput
                                            fieldName={fieldName.toString()}
                                            placeholder={fieldName.toString()}
                                            type='LIGHT'
                                            style={styles.input}
                                            isError={touched.email &&!!errors.email}
                                            editable={!isLoading}
                                            value={values.email}
                                            onChangeText={handleChange('email')}
                                            onBlur={() => setFieldTouched('email')}
                                            errorMessage={touched.email ? errors.email : ''}
                                        />
                                    )}
                                </FormattedMessage>
                                <FormattedMessage id='username'>
                                    {fieldName => (
                                        <CustomInput
                                            fieldName={fieldName.toString()}
                                            placeholder={fieldName.toString()}
                                            type='LIGHT'
                                            style={styles.input}
                                            isError={touched.username && !!errors.username}
                                            editable={!isLoading}
                                            value={values.username}
                                            onChangeText={handleChange('username')}
                                            onBlur={() => setFieldTouched('username')}
                                            errorMessage={touched.username ? errors.username : ''}
                                        />
                                    )}
                                </FormattedMessage>
                                <FormattedMessage id='password'>
                                    {fieldName => (
                                        <CustomInput 
                                            fieldName={fieldName.toString()}
                                            placeholder={fieldName.toString()}
                                            type='LIGHT'
                                            style={styles.input}
                                            secureTextEntry={true}
                                            isError={touched.password && !!errors.password}
                                            editable={!isLoading}
                                            value={values.password}
                                            onChangeText={handleChange('password')}
                                            onBlur={() => setFieldTouched('password')}
                                            errorMessage={touched.password ? errors.password : ''}
                                        />
                                    )}
                                </FormattedMessage>
                                <FormattedMessage id='confirm_password'>
                                    {fieldName => (
                                        <CustomInput 
                                            fieldName={fieldName.toString()}
                                            placeholder={fieldName.toString()}
                                            type='LIGHT'
                                            style={styles.input}
                                            secureTextEntry={true}
                                            isError={touched.confirmPassword && !!errors.confirmPassword}
                                            editable={!isLoading}
                                            value={values.confirmPassword}
                                            onChangeText={handleChange('confirmPassword')}
                                            onBlur={() => setFieldTouched('confirmPassword')}
                                            errorMessage={touched.confirmPassword ? errors.confirmPassword : ''}
                                        />
                                    )}
                                </FormattedMessage>
                                <CustomButton 
                                    text={<FormattedMessage id='sign_up' />} 
                                    type='DARK' 
                                    btnStyle={styles.button} 
                                    onPress={() => submit()}
                                    disabled={isLoading}
                                    isLoading={isLoading}
                                />
                                <Text style={{padding: 30, fontWeight: '600', color: '#aaa'}}>
                                    <FormattedMessage id='or'/>
                                </Text>
                                <Text 
                                    style=
                                    {
                                        {
                                            fontWeight: '600',
                                            opacity: isLoading ? 0.5 : 1
                                        }
                                    }
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

export default SignUpForm