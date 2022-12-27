import * as Yup from 'yup'

export const LoginValidationSchema = Yup.object({
    username: Yup.string()
        .required('Username is required'),
    password: Yup.string()
        .required('Password is required')
})

export interface FormProviderParam {
  id?: string
  restApi: string
  onSubmitSuccess?: any
  children: any
}