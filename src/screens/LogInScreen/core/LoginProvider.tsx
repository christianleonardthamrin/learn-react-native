import { createContext, Dispatch, FC, SetStateAction, useContext, useState } from "react";
import { FormProviderParam } from "./_models";

type FormContextProps = {
    isLoading: boolean
    submit: any
}

const initFormContext = {
    isLoading: false,
    submit: () => {}
}

const FormContext = createContext<FormContextProps>(initFormContext)

const useForm = () => useContext(FormContext)

const FormProvider: FC<FormProviderParam> = ({id, restApi, onSubmitSuccess, children}) => {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const submit = (values:any) => {
        console.log("🚀 ~ file: LogInForm.tsx:26 ~ submit ~ values", values)
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }

    return (
        <FormContext.Provider value={{isLoading, submit}}>
            {children}
        </FormContext.Provider>
    )
}

export {FormProvider, useForm}