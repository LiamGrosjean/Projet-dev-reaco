import { View, Text, ScrollView, StyleSheet } from 'react-native'
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
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{overflow: 'visible'}}>
                <View style={styles.suggestions_wrapper}>
                <JobCard 
                  maxWidth={256}
                  title='UX / UI Designer' 
                  company='Freelance' 
                  description='Concevoir des wireframes, des maquettes et des prototypes interactifs'
                  emplacement='Remote'
                  hSemaine='35H/sem'
                  hSalaire='€30/h'
                />
                <JobCard 
                  maxWidth={256} 
                  title='WebDesigner' 
                  company='Naval Group' 
                  description='Refonte du site web et création assets pour le web'
                  emplacement='La seyne sur mer'
                  hSemaine='35H/sem'
                  hSalaire='€20/h'
                  />
                <JobCard maxWidth={256} title='Graphiste' company='Natif' description='Réalisation illustration pour vêtements de mode orientés streetwear'/>
                <JobCard maxWidth={256}/>
                </View>
              </ScrollView>
            </View>
            <View>
              <View style={{marginTop: 26}}>
                <Title titre='Jobs récents' displayLink={true}/>
              </View>
              <View style={{paddingVertical: 26, gap: 10}}>
                <JobCard 
                title='Serveur' 
                company='Le Bistrot' 
                description='En tant que serveur, votre mission sera de fournir un service exceptionnel à nos clients dans notre restaurant haut de gamme.'
                emplacement='Marseille'
                hSemaine='35H/sem'
                hSalaire='€15/h'
                />
                <JobCard />
                <JobCard />
                <JobCard />
              </View>
            </View>
          </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 33,
    backgroundColor: Colors.light.background,
  },
  suggestions_container : {
    paddingTop: 36,
    gap: 16,
  },
  suggestions_wrapper: {
    flexDirection: 'row',
    gap: 10,
  },
})

export default page