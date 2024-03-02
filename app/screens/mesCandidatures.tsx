import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import Colors from '@/constants/Colors'
import Header from '@/app/components/header'
import Search from '@/app/components/Search'
import JobCard from '@/app/components/jobCard'
import { ScrollView } from 'react-native-gesture-handler'

const Page = () => {
  return (
    <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
      <View>
        <Stack.Screen
          options={{
            header: () => <Header />,
          }}
        />
      </View>
      <Search titre='Mes candidatures'/>
      <View style={styles.container}>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </View>
    </ScrollView>
  )
}

export default Page

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  container: {
    paddingHorizontal: 33,
    paddingTop: 24,
    gap: 10,
  },
})