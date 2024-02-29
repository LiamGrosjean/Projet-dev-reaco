import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-react'
import { Link } from 'expo-router'

const page = () => {
    const {signOut, isSignedIn} = useAuth()
  return (
    <View>
      <Button title='Log out' onPress={() => signOut()} />
      { !isSignedIn && (
      <Link href={'/screens/login'}>
        <Text>Log in</Text>
      </Link>
    )}
    </View>
  )
}

export default page