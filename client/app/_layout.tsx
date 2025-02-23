import { ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { ThemeProvider, useTheme } from '@/contexts/ThemeContext';

SplashScreen.preventAutoHideAsync();

function RootLayoutInner() {
  const { theme } = useTheme(); // ✅ This now only allows bmo, jake, or finn

  const appTheme = {
    dark: theme === 'bmo', // ✅ Only set dark mode if theme is 'bmo'
    colors: Colors[theme] || Colors.jake, // ✅ Ensure fallback is one of your themes
    fonts: Fonts[theme],
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
  const [loaded] = useFonts({
    Dogname: require('../assets/fonts/Dogname.ttf'),
    BrownBagLunch: require('../assets/fonts/BrownBagLunch.ttf'),
    bmos: require('../assets/fonts/bmos.ttf'),
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
    <ThemeProvider> {/* ✅ Wrap everything in ThemeProvider */}
      <RootLayoutInner />
    </ThemeProvider>
  );
}
