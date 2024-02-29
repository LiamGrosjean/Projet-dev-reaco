import Colors from '@/constants/Colors';
import React from 'react';
import { View, Text, StyleSheet, Image, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ClerkProvider } from "@clerk/clerk-expo";


const page = () => {
  return (
    <View style={styles.container}>
        <View style={{width: '50%', marginBottom: 58, backgroundColor: 'red',}}>
            <Image source={require('@/assets/images/Logo.png')} style={{width: '100%', objectFit:'scale-down', height: 29}}/>
        </View>
        <Text style={{color: Colors.light.primary, fontSize: 24, fontWeight: '500'}}>Connexion</Text>
        <Text style={{color: Colors.light.primary, fontSize: 14, fontWeight: '400', lineHeight: 17, marginTop: 22}}>Lorem ipsum dolor sit amet consectetur. Placerat pharetra sit nulla nisl rutrum orci </Text>
        <View style={{marginTop: 52, gap: 31}}>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>Adresse mail</Text>
                <Text style={styles.email}>votrenom@univ.fr</Text>
            </View>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>mot de passe</Text>
                <Text style={styles.email}>****************</Text>
            </View>
            <View>
            </View>
                <TouchableOpacity style={styles.buttonWrapper}>
                    <Text style={styles.buttonText}>Valider</Text>
                </TouchableOpacity>
            </View>
        </View>
  );
};

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
  buttonText: {
    color: Colors.light.background,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default page;
