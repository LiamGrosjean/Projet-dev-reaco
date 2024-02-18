import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { useRouter } from 'expo-router';

const tile = ({ iconName, text, bgColor, lien}: { iconName: string, text: string, bgColor: string, lien: StaticRoutes | RelativePathString | `http${string}`}) => {

  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => {router.push(lien)}}>
      <View style={styles.container}>
          <View style={[styles.iconContainer, { backgroundColor: bgColor }]}>
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
    backgroundColor: '#fff',
    paddingLeft: 44,
    paddingRight: 44,
    paddingTop: 22,
    paddingBottom: 22,
  },
  iconContainer: {
    borderRadius: 50,
    padding: 16,
  },
  text: {
    fontSize: 12,
    fontFamily: 'Red Hat Text',
    fontWeight: '600',
    lineHeight: 11.93,
  },
});

export default tile;