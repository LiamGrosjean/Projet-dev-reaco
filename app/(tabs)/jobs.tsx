import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import Search from '@/app/components/Search'
import Title from '@/app/components/title'
import Colors from '@/constants/Colors'
import Cats from '@/app/components/cats'
import JobCard from '@/app/components/jobCard'

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
            <View>
              <Title titre='Catégories' displayLink={true} />
              <Cats />
            </View>
            <View style={styles.suggestions_container}>
              <Title titre='Pour vous' displayLink={true} />
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{display: 'flex', flexDirection:'row'}}>
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
              </ScrollView>
            </View>
          </View>
        </ScrollView>
    </View>
  )
}

const styles = {
  container: {
    paddingHorizontal: 33,
    backgroundColor: Colors.light.background,
  },
  suggestions_container : {
    paddingTop: 36,
    gap: 16,
  }
  
}

export default page