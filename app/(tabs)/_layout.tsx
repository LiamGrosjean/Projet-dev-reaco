import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'

const Layout = () => {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: Colors.primary,
      tabBarIcon: {
        activeTintColor: Colors.accent,
        inactiveTintColor: Colors.primary,
      }
      tabBarLabelStyle: {
        fontFamily: "Red-Hat-Text",
        fontSize: 12,
        fontStyle: "normal",
        textAlign: "center",
        fontWeight: "400",
      }
    }}>
      <Tabs.Screen 
        name='index' 
        options={{
          tabBarLabel: 'Accueil',
        }}
        />
    </Tabs>
  )
}

export default Layout