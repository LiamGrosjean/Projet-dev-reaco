import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, useRouter } from 'expo-router';
import React from 'react';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    RedHatText: require("../assets/fonts/Red-Hat-Text.ttf"),
  });


  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const router = useRouter();
  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen 
        name="(modals)/login" 
        options={{ 
          title: 'Connexion ou Inscription',
          headerTitleStyle: {
            fontSize: 14,
            fontFamily: 'Red Hat Text',
            fontWeight: '500',
            color: 'colors.primary'
          },
          presentation: 'modal',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <FontAwesome name="angle-left" size={24} /> 
            </TouchableOpacity>
          )
          }}/>
        <Stack.Screen 
        name="(modals)/menu" 
        options={{ 
          title: 'Menu',
          headerTitleStyle: {
            fontSize: 16,
            fontFamily: 'Red Hat Text',
            fontWeight: '600',
            color: 'colors.primary'
          },
          presentation: 'modal',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <FontAwesome name="angle-left" size={24} /> 
            </TouchableOpacity>
          ),
          animation: 'slide_from_left',
          contentStyle: {
            backgroundColor: '#ffffff',
            padding: 16,
          },
        }}/>
      </Stack>
  );
}