import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { FontAwesome5 } from '@expo/vector-icons';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import Title from './title';


export default function  AProposContent(){
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 18 ,fontWeight: '600',color: '#242C5D',marginBottom:5 }}>
          Employeur
        </Text>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.text}>
            {"- sit amet consectetur. Placerat pharetra sit nulla nisl rutrum orci tellus accumsan at.\n\n"}
{"- Lorem ipsum dolor sit amet consectetur. Placerat pharetra sit nulla nisl rutrum orci tellus accumsan at.\n\n"}
{"- Lorem ipsum dolor sit amet consectetur. Placerat pharetra sit nulla nisl rutrum orci tellus accumsan at.\n\n"}
{"- Postuler Placerat pharetra sit nulla nisl rutrum orci tellus accumsan at.Postuler\n"}

          </Text>
        </ScrollView>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    scrollContainer: {
      justifyContent: 'center',
    },
    text: {
      fontSize: 15,
      marginLeft : 10,
      color: '#242C5D'
    },
  });
  


