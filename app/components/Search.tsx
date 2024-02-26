import { View, Text, TextInput } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Title from './title';


const Search = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trouver un job</Text>
      <View style={styles.searchContainer}>
        <Icon name="search" size={24} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="EX. Vendeur"
          placeholderTextColor="#999"
        />
        <View style={styles.separator} />
        <Icon name="sliders" size={24} color="#000" style={styles.icon} />
      </View>
      <View style={styles.container_cat}>
        <Title style={styles.title_c} titre='Catégories' displayLink={true} />
      </View>
    </View>
  );
};


const styles = {
  container: {
    paddingLeft: 33,
    paddingRight: 33,
    paddingTop: '15%',
    paddingBottom: 17,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#242C5D', 
  },
  container_cat: {
    paddingTop: '9%',
    paddingBottom: 15,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#F3F4FB',
    backgroundColor: '#F3F4FB',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  icon: {
    marginRight: 10,
    fontSize: 13,
  },
  input: {
    flex: 1,
    fontSize: 10,
  },
  separator: {
    width: 1,
    height: '100%',
    backgroundColor: '#ccc',
    marginHorizontal: 10,
  },
  category: {
    alignItems: 'center',

  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: '#F3F4FB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  categoryName: {
    fontSize: 12,
  },
 
};

export default Search;
