import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import { useTheme } from '@/contexts/ThemeContext'; // Make sure this path is correct
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

export default function HomeScreen() {

  type ThemeName = keyof typeof Colors; // "jake" | "finn" | "bmo"

  const { theme, setTheme } = useTheme();
  const colorScheme = Colors[theme as ThemeName];

  const backgroundColor = colorScheme.background;

  // const toggleTheme = (selectedTheme: string) => {
  //   setTheme(selectedTheme);
  // };

    return (
      <View style={[styles.container, { backgroundColor }]}>
        <Text style={styles.title}>Wordel</Text>
        <Text style={styles.title}>With Jake the Dog</Text>

        <Text>Choose your theme</Text>
        <View style={styles.themeButtonsContainer}>
        <Pressable
  style={[styles.themeButton, theme === 'jake' && { backgroundColor: Colors.jake.activeButton }]}
  onPress={() => setTheme('jake')}
>
  <Text style={styles.buttonText}>Jake</Text>
        </Pressable>

        <Pressable
          style={[styles.themeButton, theme === 'finn' && { backgroundColor: Colors.finn.activeButton }]}
          onPress={() => setTheme('finn')}
        >
          <Text style={styles.buttonText}>Finn</Text>
        </Pressable>

        <Pressable
          style={[styles.themeButton, theme === 'bmo' && { backgroundColor: Colors.bmo.activeButton }]}
          onPress={() => setTheme('bmo')}
        >
          <Text style={styles.buttonText}>BMO</Text>
        </Pressable>

        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 42,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    themeButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '80%',
    },
    themeButton: {
      height: 40,
      borderRadius: 20,
      backgroundColor: '#CCC',
      justifyContent: 'center',
      alignItems: 'center',
      width: 80,
    },
    activeButton: {
      backgroundColor: 'green',
    },
    buttonText: {
      color: 'black',
      fontWeight: 'bold',
    },
  });
