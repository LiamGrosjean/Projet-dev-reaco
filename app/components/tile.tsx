import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Colors from '@/constants/Colors';

const tile = ({ iconName, text, bgColor, lien}: { iconName: string, text: string, bgColor: string, lien: StaticRoutes | RelativePathString | `http${string}`}) => {

  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => {router.push(lien)}}>
      <View style={styles.container}>
          <View style={[styles.iconContainer, { backgroundColor: bgColor, background: 'linear-gradient(122deg, #D62528 5%, #141332 100%)' }]}>
            <FontAwesome5 name={iconName} size={16} color="white" />
          </View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.background,
    paddingTop: 22,
    paddingBottom: 22,
    borderRadius: 8,
  },
  iconContainer: {
    borderRadius: 12,
    padding: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.light.primary,
  },
});

export default tile;