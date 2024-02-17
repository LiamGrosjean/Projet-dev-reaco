import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';


const categories = [
    {
        name : 'Tout',
        icon : '',
    },
    {
        name : 'Restauration',
        icon : '',
    },
    {
        name : 'Design',
        icon : '',
    },
    {
        name : 'Aide à domicile',
        icon : '',
    },
    {
        name : 'Livraison',
        icon : '',
    },
];




const SearchBar = () => {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.container}>
          <Text style={styles.title}>Trouver un job</Text>
          <View style={styles.searchContainer}>
            <View style={styles.searchWrapper}>
              <TouchableOpacity style={styles.searchIcon}>
                <Ionicons color={'#242C5D'} name='search' size={15} />
              </TouchableOpacity>
              <Text style={styles.searchText}>EX. Vendeur</Text>
            </View>
            <TouchableOpacity style={styles.filterBtn}>
              <Ionicons color={'#242C5D'} name="options-outline" size={15} />
            </TouchableOpacity>
          </View>
          </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      paddingHorizontal: 25,
      paddingBottom: 30,
    },
 
    topContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    leftContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    title: {
        color: '#242C5D',
        fontWeight: 'bold',
        marginBottom: 10,
      },
    searchContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderColor: '#F3F4FB',
      borderWidth: StyleSheet.hairlineWidth,
      backgroundColor: '#F3F4FB',
      borderRadius: 8,
    },
    searchWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    searchIcon: {
      marginRight: 20,
      marginLeft: 10,
    },
    searchText: {
      fontFamily: 'Red-Hat-Text',
      fontSize: 12,
      color: '#767C9A',
    },
    filterBtn: {
      padding: 10,
    },
  });
  
  export default SearchBar;
  