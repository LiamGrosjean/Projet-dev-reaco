import { View, Text } from 'react-native'
import React from 'react'
import Header from '@/app/components/header'
import { Stack } from 'expo-router'
import Search from '../components/Search'

const page = () => {
  return (
    <View>
      <View style={styles.main}>
      <Stack.Screen
        options={{
          header: () => <Search />,
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