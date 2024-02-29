import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Colors from '@/constants/Colors'

const ButtonFill = (btnText: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined) => {
  return (
    <View>
        <TouchableOpacity style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>{btnText}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ButtonFill

const styles = StyleSheet.create({
    buttonText: {
        color: Colors.light.background,
        fontSize: 16,
        fontWeight: '600',
      },
      buttonWrapper: {
        backgroundColor: Colors.light.accent,
        paddingVertical: 14,
        marginHorizontal: 'auto',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 41,
      },
})