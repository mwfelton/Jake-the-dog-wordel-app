import { View, Text, StyleSheet, Image, Pressable} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useTheme } from "@/contexts/ThemeContext";
import { Colors } from "@/constants/Colors";
import ThemeButtons from "@/components/ThemeButtons";
import { Responsive } from "@/utils/responsive"; // Import the Responsive utility

export default function HomeScreen() {
  const { theme } = useTheme();
  const colorScheme = Colors[theme];

  const navigation = useNavigation(); // Get the navigation object

  const navigateToGame = () => {
    navigation.navigate('game'); 
  };

  return (
    <View style={[styles.container, { backgroundColor: colorScheme.background }]}>
      <ThemeButtons />
      <Text style={styles.themeButtonText}>Choose your theme</Text>
      <Image style={styles.heroImage} source={require("../../assets/images/Adventure_Time.svg")} />
      <Text style={styles.title}>Wordle Time</Text>
      <Pressable style={[styles.playButton, { backgroundColor: colorScheme.playButton }]} onPress={navigateToGame}>
        <Text style={styles.playButtonText}>Play</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Responsive.scale(16),
    paddingVertical: Responsive.scale(20),
    alignItems: "center",
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  themeButtonText: {
    fontSize: Responsive.scale(10),
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 5,
  },
  heroImage: {
    width: '80%',
    aspectRatio: 1,
    resizeMode: 'contain'
  },
  playButton: {
    backgroundColor: 'blue', // Change to your desired button color
    paddingVertical: Responsive.scale(10),
    paddingHorizontal: Responsive.scale(20),
    borderRadius: Responsive.scale(30),
    marginTop: 20,
  },
  playButtonText: {
    fontSize: Responsive.scale(18),
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
});
