import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Layout = () => {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: Colors.accent,
      tabBarInactiveTintColor: Colors.primary,
      tabBarLabelStyle: {
        fontFamily: "Red-Hat-Text",
        fontSize: 12,
        fontStyle: "normal",
        textAlign: "center",
        fontWeight: "400",
      },
      
    }}>
      <Tabs.Screen 
        name='index' 
        options={{
          tabBarLabel: 'Accueil',
          tabBarIcon : ({ color, size }) => {
            return <FontAwesome name="home" size={size} color={color} />
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
        name='profil' 
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon : ({ color, size }) => {
            return <FontAwesome name="user" size={size} color={color} />
          }
        }}
        />
      <Tabs.Screen 
        name='logements' 
        options={{
          tabBarLabel: 'Logements',
          tabBarIcon : ({ color, size }) => {
            return <FontAwesome name="cog" size={size} color={color} />
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