import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const HeaderPage= () => {
    
    return (
      <SafeAreaView style             = {{ flex: 1, backgroundColor: '#fff' }}>
        <View style                   = {styles.container}>
          <View style                 = {styles.topContainer}>
            <View style               = {styles.leftContainer}>
              <Ionicons color         = {'#242C5D'} name="menu-outline" size={24} />
              <Text style             = {styles.greetingText}>Hello, le nom</Text>
            </View>
            <TouchableOpacity style   = {styles.notificationIcon}>
              <Ionicons color         = {'#242C5D'} name="notifications-outline" size={24} />
            </TouchableOpacity>
          </View>
          </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor                 : '#fff',
      paddingHorizontal               : 25,
      paddingTop                      : 20,
    },
    topContainer: {
      flexDirection                   : 'row',
      justifyContent                  : 'space-between',
      alignItems                      : 'center',
      marginBottom                    : 10,
    },
    leftContainer: {
      flexDirection                   : 'row',
      alignItems                      : 'center',
    },
    greetingText: {
      marginLeft                      : 10,
      color                           : '#242C5D',
    },
    notificationIcon: {
      flexDirection                   : 'row',
      alignItems                      : 'center',
    },
  
  });
  

 export default HeaderPage;