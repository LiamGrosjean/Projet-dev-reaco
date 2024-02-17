import { View, Text } from 'react-native'
import React from 'react'
import SearchBar from '@/components/SearchBar'
import { Stack } from 'expo-router';
import HeaderPage from '@/components/HeaderPage';
import { StackHeaderInterpolationProps, StackHeaderInterpolatedStyle } from '@react-navigation/stack';


const jobs = () => {
  return (
    <View>
          <div>
      <div>
        <HeaderPage/>
        <SearchBar />
      </div>
    </div>
    </View>
  );
};

export default jobs
