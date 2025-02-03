import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import { useState } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme'; // Make sure this is imported correctly
import { Colors } from '@/constants/Colors';
import { Link } from 'expo-router'

export default function HomeScreen() {
  const [theme, setTheme] = useState('light'); // Initialize the theme state
  const colorScheme = useColorScheme() || theme; // Use custom theme if no colorScheme is provided

  const toggleTheme = (selectedTheme: string) => {
    setTheme(selectedTheme);
  };

  const backgroundColor =
  theme === 'dark'
    ? '#333'
    : theme === 'medium'
    ? '#666'
    : '#FFF'; // Set background color based on selected theme


    return (
      <View style={[styles.container, { backgroundColor }]}>
        <Text style={styles.title}>Wordel</Text>
        <Text style={styles.title}>With Jake the Dog</Text>
  
        <View style={styles.themeButtonsContainer}>
          <Pressable
            style={[styles.themeButton, theme === 'light' && styles.activeButton]}
            onPress={() => setTheme('light')}
          >
            <Text style={styles.buttonText}>Light</Text>
          </Pressable>
  
          <Pressable
            style={[styles.themeButton, theme === 'dark' && styles.activeButton]}
            onPress={() => setTheme('dark')}
          >
            <Text style={styles.buttonText}>Dark</Text>
          </Pressable>
  
          <Pressable
            style={[styles.themeButton, theme === 'medium' && styles.activeButton]}
            onPress={() => setTheme('medium')}
          >
            <Text style={styles.buttonText}>Medium</Text>
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


{/* <Link href="/explore" style={{ marginHorizontal: 'auto' }} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
              Play
            </Text>
          </Pressable>
        </Link> */}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//   },
//   backgroundImage: {
//     width: '100%',
//     height: '100%',
//     flex: 1,
//     justifyContent: 'center',
//   },
//   title: {
//     color:  'black',
//     fontSize: 42,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     backgroundColor: 'red',
//     marginBottom: 120
//   },
//   link: {
//     textDecorationLine: 'underline',
//     color:  'black',
//     fontSize: 42,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     backgroundColor: 'blue',
//     padding: 4
//   },
//   buttonText: {
//     color:  'black',
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     padding: 4
//   },
//   button: {
//     height: 60,
//     borderRadius:20,
//     backgroundColor: 'green',
//     padding: 6,
//     justifyContent: 'center'
//   },
//   themeButton: {
//     marginTop: 20,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: 'yellow',
//     padding: 6,
//     justifyContent: 'center',
//   },
// })
