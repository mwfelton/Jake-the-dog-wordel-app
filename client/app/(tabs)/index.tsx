import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import { Link } from 'expo-router'
// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('@/assets/images/jake-rainbow-background.webp')}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <Text style={styles.title}>Wordel</Text>
        <Text style={styles.title}>With Jake the dog</Text>
        <Link href="/explore" style={{ marginHorizontal: 'auto' }} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
              Play
            </Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color:  'black',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'red',
    marginBottom: 120
  },
  link: {
    textDecorationLine: 'underline',
    color:  'black',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'blue',
    padding: 4
  },
  buttonText: {
    color:  'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4
  },
  button: {
    height: 60,
    borderRadius:20,
    backgroundColor: 'green',
    padding: 6,
    justifyContent: 'center'
  }
})
