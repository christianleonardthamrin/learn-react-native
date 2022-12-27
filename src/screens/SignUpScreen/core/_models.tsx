import * as Yup from 'yup'

export interface SignUpForm {
    fullName: string
    email: string
    username: string
    password: string
    confirmPassword: string
}

export const initValues:SignUpForm = {
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
}

export const SignUpValidationSchema = Yup.object({
    fullName: Yup.string()
            .required('Name is required'),
    email: Yup.string()
        .required('Email is required'),
    username: Yup.string()
            .required('Username is required'),
    password: Yup.string()
            .required('Password is required'),
    confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], "Password doesn't match!")
})