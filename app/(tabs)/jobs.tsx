import { View, Text } from 'react-native'
import React from 'react'
import Header from '@/app/components/header'
import { Stack } from 'expo-router'

const page = () => {
  return (
    <View>
      <Text style={{ textAlign: 'center' }}>jobss</Text>
      <View style={styles.main}>
      <Stack.Screen
        options={{
          header: () => <Header />,
        }}
        />
      </View>
    </View>
  )
}

const styles = {
  main: {
    flex: 1,
    width: '100%',
  },
}

export default page