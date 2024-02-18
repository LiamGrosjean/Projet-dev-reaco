import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import Search from '../components/Search';
import Head from '../components/Head';


const jobs = () => {
  return (
    <View>
          <div>
      <div>
        <Head/>
        <Search />
      </div>
    </div>
    </View>
  );
};

export default jobs