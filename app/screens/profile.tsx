import { View, Text, Button, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import React from 'react'
import { useAuth } from '@clerk/clerk-react'
import { Link, router } from 'expo-router'
import Colors from '@/constants/Colors';
import { FontAwesome5 } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import Header from '@/app/components/header';
import Layout from '../(tabs)/_layout'

const Profile = () => {
    const {signOut, isSignedIn} = useAuth()
  return (
    <View style={styles.main}>
      <Layout />
      <View style={{paddingHorizontal: 33}}>
        <Stack.Screen
          options={{
            header: () => <Header />,
          }}
        />
      </View>
      <View style={{gap: 10}}>
        <Link href={'/screens/mesCandidatures'} style={styles.profileLink}>
            <FontAwesome5 name='briefcase' size={16} color={Colors.light.primary} />
            <Text style={{fontSize: 16, color: Colors.light.primary}}>   Mes candidatures</Text>
        </Link>
        <Link href={'/screens/mesLogements'} style={styles.profileLink}>
            <FontAwesome5 name='building' size={16} color={Colors.light.primary} />
            <Text style={{fontSize: 16, color: Colors.light.primary}}>   Mes Logements</Text>
        </Link>
        <Link href={'/screens/mesLogements'} style={styles.profileLink}>
            <FontAwesome5 name='user' size={16} color={Colors.light.primary} />
            <Text style={{fontSize: 16, color: Colors.light.primary}}>   Espace Candidat</Text>
        </Link>
        <Link href={'/screens/mesLogements'} style={styles.profileLink}>
            <FontAwesome5 name='folder' size={16} color={Colors.light.primary} />
            <Text style={{fontSize: 16, color: Colors.light.primary}}>   Espace Locataire</Text>
        </Link>
        <Link href={'/screens/mesLogements'} style={styles.profileLink}>
            <FontAwesome5 name='bell' size={16} color={Colors.light.primary} />
            <Text style={{fontSize: 16, color: Colors.light.primary}}>   Notifications</Text>
        </Link>
        <Link href={'/screens/mesLogements'} style={styles.profileLink}>
            <FontAwesome5 name='cog' size={16} color={Colors.light.primary} />
            <Text style={{fontSize: 16, color: Colors.light.primary}}>   Paramètres</Text>
        </Link>
        <View>
        <Button title='Se connecter' onPress={() => router.push('/screens/login')}/>
        <Button title='Se déconnecter' onPress={() => signOut()} />
        </View>
      </View> 
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 33,
    backgroundColor: Colors.light.background,
  },
  profileLink: {
    flexDirection: 'column',
    padding: 14,
    borderWidth: 1,
    borderColor: Colors.light.primary,
    borderRadius: 5,
    gap: 20,
  },
  buttonText: {
    color: Colors.light.background,
    fontSize: 16,
    fontWeight: '600',
  },
  buttonWrapper: {
    backgroundColor: Colors.light.accent,
    paddingVertical: 14,
    marginHorizontal: 'auto',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 41,
  },
})