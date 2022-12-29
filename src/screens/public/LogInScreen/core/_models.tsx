import * as Yup from 'yup'

export const LoginValidationSchema = Yup.object({
    username: Yup.string()
        .required('required_msg'),
    password: Yup.string()
        .required('required_msg')
})

export interface FormProviderParam {
  id?: string
  restApi: string
  onSubmitSuccess?: any
  children: any
}