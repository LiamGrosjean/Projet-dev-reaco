import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import Colors from '@/constants/Colors'

const categorie = (iconName: any, iconText: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined) => {
  return (
    <View style={styles.cat_container}>
        <View style={{height: 60, width: 60, borderRadius: 60, backgroundColor: Colors.light.accent, alignItems: 'center', justifyContent: 'center'}}>
            <FontAwesome5 name={iconName} size={24} color="#242C5D" />
        </View>
        <Text> {iconText} </Text>
    </View>
  )
}

const styles = {
    cat_container: {
        alignItems: 'center',
        jusifyContent: 'center',
        gap: 8,
    }
}

export default categorie