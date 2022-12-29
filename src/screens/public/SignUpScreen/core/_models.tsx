import * as Yup from 'yup'

export interface FormProviderParam {
  id?: string
  restApi: string
  onSubmitSuccess?: any
  children: any
}

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
            .required('required_msg'),
    email: Yup.string()
        .required('required_msg')
        .email('email_msg'),
    username: Yup.string()
            .required('required_msg'),
    password: Yup.string()
            .required('required_msg'),
    confirmPassword: Yup.string()
            .required('required_msg')
            .oneOf([Yup.ref('password'), null], 'oneof_msg')
})