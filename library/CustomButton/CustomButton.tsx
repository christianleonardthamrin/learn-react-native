import { View, Text, Pressable, StyleSheet, PlatformColor, StyleProp, ViewStyle, ActivityIndicator } from 'react-native'
import React from 'react'

type PressableType = React.ComponentProps<typeof Pressable>

interface CustomButtonProps extends PressableType {
    text?: React.ReactNode
    type?: string
    btnStyle?: Object
    textStyle?: Object
    isLoading?: boolean
}

const CustomButton = (props:CustomButtonProps) => {
  return (
    <Pressable 
      {...props}
      style={
        {...styles[`container_${props.type}`], 
        ...props.btnStyle, 
        opacity: props.disabled ? 0.5 : 1
        }
      } 
      disabled={props.disabled}
    >
      {props.isLoading ? (
        <ActivityIndicator style={{paddingRight: 6}} />
      ): null}
      <Text style={{...styles[`text_${props.type}`], ...props.textStyle}}>{props.text}</Text>
    </Pressable>
  )
}

const container:StyleProp<ViewStyle> = {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 4,
}

const styles:any = StyleSheet.create({
    container_DARK: {
        ...container,
        backgroundColor: 'black'
    },
    text_DARK: {
        color: 'white',
        fontWeight: '700'
    },
    container_LIGHT: {
      ...container,
      backgroundColor: 'white'
    },
    text_LIGHT: {
      color: 'black'
    },
    container_PRIMARY: {
      ...container,
      backgroundColor: '#5F9DF7'
    },
    text_PRIMARY: {
      color: 'white'
    },
    container_DANGER: {
      ...container,
      backgroundColor: '#EB455F'
    },
    text_DANGER: {
      color: 'white'
    }

})

export default CustomButton