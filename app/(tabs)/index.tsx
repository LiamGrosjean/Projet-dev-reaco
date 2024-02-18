import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import Title from '../components/title';
import Colors from '@/constants/Colors';
import Quickaccess from '../components/quickaccess';

const Page = () => {
  return (
    <View style={styles.container}>
      <Link href='/(modals)/login'>login</Link>
      <Title titre='Prochains évènements' displayLink={true} />
      <Title titre='Accès rapide' displayLink={false} />
      <Quickaccess />
    </View>
  )
}

const styles = {
  container: {
    paddingLeft: 33,
    paddingRight: 33,
  },
}
export default Page;
