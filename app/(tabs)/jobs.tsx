import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import Search from '@/app/components/Search'
import Title from '@/app/components/title'
import Colors from '@/constants/Colors'
import Categorie from '@/app/components/categorie'

const page = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          header: () => <Search />,
        }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Title titre='Catégorie' displayLink={true} />
            <Categorie />
          </View>
        </ScrollView>
    </View>
  )
}

const styles = {
  container: {
    paddingHorizontal: 33,
    backgroundColor: Colors.light.background,
  }
  
}

export default page