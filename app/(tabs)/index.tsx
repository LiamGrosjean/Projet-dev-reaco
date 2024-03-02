import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Title from '@/app/components/title';
import Colors from '@/constants/Colors';
import Quickaccess from '@/app/components/quickaccess';
import Header from '../components/header';
import { ScrollView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';
import loadFonts from '@/constants/Font';
import { useEffect } from 'react';


const HomePage = () => {
  const chargementFont = () => {
    useEffect(() => {
      loadFonts();
    }, []);
  }
  return (
    <View style={styles.main}>
      <Stack.Screen
        options={{
          header: () => <Header />,
        }}
        />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View>
            <Title titre='Prochains événements' displayLink={true} />
              <ScrollView horizontal={true} style={styles.imageContainer} showsHorizontalScrollIndicator={false}>
              <View style={styles.imageWrapper}>
                <Image source={require('../../assets/images/events.png')} style={{width: 262, height: 129, borderRadius: 5}}/>
                <Image source={require('../../assets/images/events2.png')} style={{width: 262, height: 129, borderRadius: 5}}/>
              </View>
            </ScrollView>
          </View>
          <View>
            <Title titre='Accès rapide' displayLink={false} />
            <Quickaccess />
          </View>
        </View>
      </ScrollView>
    </View>
    
  )
}

export default HomePage;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
  },
  container: {
    paddingLeft: 33,
    paddingRight: 33,
    gap: 28,
    backgroundColor: '#fff',
    paddingTop: 9,
    paddingBottom: '15%',
  },
  imageWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginTop: 19,
  },
  imageContainer: {
    overflow: 'visible',
  }
})

