import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome} from '@fortawesome/free-solid-svg-icons';
import { faThLarge, faUtensils, faSwatchbook, faPeopleCarry } from '@fortawesome/free-solid-svg-icons';
import { TouchableWithoutFeedback } from 'react-native';


const categories = [
    { name: 'Tout', icon:  faThLarge   },
    { name: 'Restauration', icon: faUtensils },
    { name: 'Design', icon: faSwatchbook },
    { name: 'Aide à domicile', icon: faHome},
    { name: 'Livraison', icon: faPeopleCarry },
];



const Search = () => {
    return (
      <SafeAreaView style               = {{ flex: 1, backgroundColor: '#fff' }}>
        <View style                     = {styles.container}>
          <Text style                   = {styles.title}>Trouver un job</Text>
          <View style                   = {styles.searchContainer}>
            <View style                 = {styles.searchWrapper}>
              <TouchableOpacity style   = {styles.searchIcon}>
                <Ionicons color         = {'#242C5D'} name='search' size={15} />
              </TouchableOpacity>
              <Text style               = {styles.searchText}>EX. Vendeur</Text>
            </View>
            <TouchableOpacity style     = {styles.filterBtn}>
              <Ionicons color           = {'#242C5D'} name="options-outline" size={15} />
            </TouchableOpacity>
          </View>
 <Text style  = {styles.title}>Catégories</Text>

          <View style = {styles.list}>
                {categories.map((item, index) => (
        <TouchableOpacity key={index} style={{ marginRight: 20 }}>

    <View style = {styles.circles}>
            <FontAwesomeIcon size={20} icon={item.icon}  style={{ borderWidth: 0 }} color='#242C5D'
 />
        </View>

        <Text style={styles.iconText}>{item.name}</Text>
        </TouchableOpacity>
    ))}
</View>

</View>

     </SafeAreaView>
     
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor                   : '#fff',
      paddingHorizontal                 : 25,
      paddingBottom                     : 30,
    },
 
    topContainer: {
      flexDirection                     : 'row',
      justifyContent                    : 'space-between',
      alignItems                        : 'center',
      marginBottom                      : 10,
    },
    leftContainer: {
      flexDirection                     : 'row',
      alignItems                        : 'center',
    },

    title: {
        color                           : '#242C5D',
        fontWeight                      : 'bold',
        marginTop : 15,
        marginBottom                    : 10,
      },
    searchContainer: {
      flexDirection                     : 'row',
      justifyContent                    : 'space-between',
      alignItems                        : 'center',
      borderColor                       : '#F3F4FB',
      borderWidth                       : StyleSheet.hairlineWidth,
      backgroundColor                   : '#F3F4FB',
      borderRadius                      : 8,
    },
    searchWrapper: {
      flexDirection                     : 'row',
      alignItems                        : 'center',
    },
    searchIcon: {
      marginRight                       : 20,
      marginLeft                        : 10,
    },
    searchText: {
      fontFamily                        : 'Red-Hat-Text',
      fontSize                          : 12,
      color                             : '#767C9A',
    },
    filterBtn: {
      padding                           : 10,
    },
    list:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 10,
    },
    circles:{
        borderColor : '#242C5D',
        borderWidth : 1,
        backgroundColor   : '#F3F4FB',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconText: {
        marginTop: 5,
        fontSize: 12,
        color: '#242C5D',
        textAlign: 'center',
    },
  });
  
  export default Search;
  