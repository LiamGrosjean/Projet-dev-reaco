import React from 'react';
import LoginPage from './app/screens/login';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import HomePage from './app/(tabs)';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="signin" component={LoginPage} />
      <Stack.Screen name="home" component={HomePage} />
    </Stack.Navigator>
  );
};

export default Navigation;