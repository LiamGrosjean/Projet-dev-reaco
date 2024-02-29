import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-react'
import { Link } from 'expo-router'
import Colors from '@/constants/Colors';
import { FontAwesome5 } from '@expo/vector-icons';

const page = () => {
    const {signOut, isSignedIn} = useAuth()
  return (
    <View style={styles.container}>
      <Link href={'/screens/mesCandidatures'} style={styles.profileLink}>
        <FontAwesome5 name='briefcase' size={16} color={Colors.light.primary} />
        <Text style={{fontSize: 16,color: Colors.light.primary,}}>Mes candidatures</Text>
      </Link>
      <View>
        { !isSignedIn && (
        <Link href={'/screens/login'} style={{textAlign: 'center'}}>
          <Text>Se connecter</Text>
        </Link>
        )}
        <Button title='Se déconnecter' onPress={() => signOut()} />
      </View>
      
    </View>
  )
}

export default page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 33,
    backgroundColor: Colors.light.background,
  },
  profileLink: {
    flexDirection: 'row',
    padding: 14,
    borderWidth: 1,
    borderColor: Colors.light.primary,
    borderRadius: 5,
  }
})