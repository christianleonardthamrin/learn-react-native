import { View, TextInput, StyleSheet, StyleProp, ViewStyle, Text } from 'react-native'
import React, { HTMLInputTypeAttribute } from 'react'

type TextInputType = React.ComponentProps<typeof TextInput>

interface CustomInputProps extends TextInputType {
    type?: string
    style?: any
    isError?: boolean
    errorMessage?: string
}

const CustomInput = (props:CustomInputProps) => {
  return (
    <>
        <View 
            style=
            {
                {
                    ...styles[`container_${props.type}`], 
                    ...props.style,
                    borderColor: props.isError ? '#EB455F' : styles[`container_${props.type}`].borderColor,
                    opacity: props.editable ? 1 : 0.5
                }
            } 
        >
            <TextInput 
                {...props}
                style=
                {
                    {
                        ...styles[`text_${props.type}`], 
                        ...props.style,
                    }
                } 
            />
        </View>
        <View 
            style=
            {
                {
                    width: props.style?.width,
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    marginBottom: 15
                }
            }
        >
        {props.errorMessage ? (<Text style={{color: '#EB455F'}}>{props.errorMessage}</Text>) : null}
        </View>
    </>
  )
}

const container:StyleProp<ViewStyle> = {
    padding: 13,
    marginBottom: 5,
    borderRadius: 5
}

const styles:any = StyleSheet.create({
    container_LIGHT: {
        ...container,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#bbb',
    },
    text_LIGHT: {
        color: 'black'
    },
    container_DARK: {
        ...container,
        backgroundColor: '#333',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    text_DARK: {
        color: 'white'
    }
})

export default CustomInput