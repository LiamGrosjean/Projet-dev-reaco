import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';

const Layout = () => {
  return (
    <Tabs 
    screenOptions={{
      tabBarInactiveTintColor: Colors.light.primary,
      tabBarActiveTintColor: Colors.light.accent,
      tabBarLabelStyle: {
        fontSize: 12,
        fontStyle: "normal",
        textAlign: "center",
        fontWeight: "400",
      },
      tabBarStyle: {
        height: 90,
        alignItems: 'center',
      }
    }}>
      <Tabs.Screen 
        name='index'
        options={{
          tabBarLabel: 'Accueil',
          tabBarIcon : ({ color, size }) => {
            return <FontAwesome name="home" size={size} color={color}/>
          }
        }}
        />
      <Tabs.Screen 
        name='jobs' 
        options={{
          tabBarLabel: 'Jobs',
          tabBarIcon : ({ color, size }) => {
            return <FontAwesome name="briefcase" size={size} color={color} />
          }
        }}
        />
      <Tabs.Screen 
        name='logements' 
        options={{
          tabBarLabel: 'Logements',
          tabBarIcon : ({ color, size }) => {
            return <FontAwesome5 name="building" size={size} color={color} />
          }
        }}
        />
      <Tabs.Screen 
        name='messagerie' 
        options={{
          tabBarLabel: 'Messagerie',
          tabBarIcon : ({ color, size }) => {
            return <FontAwesome name="comment" size={size} color={color} />
          }
        }}
        />
    </Tabs>
  )
}

export default Layout