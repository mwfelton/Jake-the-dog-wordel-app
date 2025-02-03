import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';

import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Colors';
import { ThemeProvider, useTheme } from '@/contexts/ThemeContext';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function RootLayoutInner() {
  const { theme } = useTheme();
  const colorScheme = useColorScheme() || 'light'; // Ensure a valid theme

  const appTheme = {
    dark: colorScheme === 'dark',
    colors: Colors[colorScheme] || Colors.light, // Ensure valid theme
    fonts: Fonts,
  };

  return (
    <NavigationThemeProvider value={appTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </NavigationThemeProvider>
  );
}

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <RootLayoutInner />
    </ThemeProvider>
  );

  // return (
  //   // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

    
  //   <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : colorScheme === 'medium' ? { ...DefaultTheme, colors: Colors.medium } : DefaultTheme}>
  //     <Stack>
  //       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
  //       <Stack.Screen name="+not-found" />
  //     </Stack>
  //     <StatusBar style="auto" />
  //   </ThemeProvider>
  // );
}
