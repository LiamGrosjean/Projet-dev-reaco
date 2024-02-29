import Colors from '@/constants/Colors';
import React from 'react';
import { View, Text, StyleSheet, Image, Touchable } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useWarmUpBrowser } from '../hooks/useWarmUpBrowser';
import { FontAwesome5 } from '@expo/vector-icons';
import { useOAuth } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';

enum Strategy {
  Google = 'oauth_google',
  Apple = 'oauth_apple',
}


const Page = () => { // Name the component for better understanding
  useWarmUpBrowser();

  const router = useRouter();
  const { startOAuthFlow: googleAuth } = useOAuth({ strategy: 'oauth_google' });
  const { startOAuthFlow: appleAuth } = useOAuth({ strategy: 'oauth_apple' });
  
  const onSelectAuth = async (strategy: Strategy) => {
    const selectedAuth = {
      [Strategy.Google]: googleAuth,
      [Strategy.Apple]: appleAuth,
    }[strategy];

    try {
      const { createdSessionId, setActive } = await selectedAuth();

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
        router.back();
      }
    } catch (err) {
      console.error('OAuth error', err);
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={{paddingTop: 44}}>
         <Image source={require('@/assets/images/Logo.png')} style={{width: 146, objectFit: 'contain', backgroundColor: 'red', height: 38}} />
      </View>
        <Text style={{color: Colors.light.primary, fontSize: 24, fontWeight: '500', marginTop: 58}}>Connexion</Text>
        <Text style={{color: Colors.light.primary, fontSize: 14, fontWeight: '400', lineHeight: 17, marginTop: 22}}>Lorem ipsum dolor sit amet consectetur. Placerat pharetra sit nulla nisl rutrum orci </Text>
        <View style={{marginTop: 52, gap: 31}}>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>adresse mail</Text>
                <TextInput autoCapitalize='none' placeholder='votrenom@univ.fr' style={styles.email} />
            </View>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>mot de passe</Text>
                <TextInput autoCapitalize='none' placeholder='***************' style={styles.email} />
            </View>
            <View>
            </View>
                <TouchableOpacity style={styles.buttonWrapper}>
                    <Text style={styles.buttonText}>Valider</Text>
                </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.btnWrapperOutline} onPress={() => onSelectAuth(Strategy.Apple)}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 20}}>
                  <FontAwesome5 name="google" size={24} color={Colors.light.primary} />
                  <Text style={{fontSize: 16, fontWeight: 600, color: Colors.light.primary}}>Connexion avec Google</Text>
                </View>
              </TouchableOpacity>
            </View>
        </View>
  );
};
export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 33,
    backgroundColor: Colors.light.background,
  },
  labelContainer: {
    gap: 8,
    paddingBottom: 8,
    borderBottomColor: Colors.light.primary,
    borderBottomWidth: 0.5,
  },
  label: {
    color: '#242C5D',
    fontSize: 12,
    fontWeight: '300',
    textTransform: 'uppercase',
  },
  email: {
    color: '#242C5D',
    fontSize: 14,
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
  btnWrapperOutline: {
    paddingVertical: 14,
    marginHorizontal: 'auto',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 41,
    borderColor: Colors.light.primary,
    borderWidth: 1,
  },
  buttonText: {
    color: Colors.light.background,
    fontSize: 16,
    fontWeight: '600',
  },
});

