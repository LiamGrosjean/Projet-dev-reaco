import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import Head from '../components/Head';

const Page = () => {
  return (
    <View>
      <Head/>
      <Link href='/(modals)/login'>login</Link>
    </View>
  )
}

export default Page