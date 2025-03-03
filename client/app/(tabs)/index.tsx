import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import ThemeButtons from "@/components/ThemeButtons";
import { Responsive } from "@/utils/responsive";
import { useThemeStyles } from '@/hooks/useThemeStyles';

export default function HomeScreen() {
  const { themedStyles, playButtonTextColor } = useThemeStyles();

  const navigation = useNavigation();

  const navigateToGame = () => {
    navigation.navigate('game');
  };

  return (
    <View style={[styles.container, themedStyles.background]}>
      <ThemeButtons />
      <Text style={[styles.themeButtonText, themedStyles.subtitle, themedStyles.text]}>Choose your theme</Text>
      <Image style={styles.heroImage} source={require("../../assets/images/Adventure_Time.svg")} />
      <Text style={[styles.title, themedStyles.title, themedStyles.text]}>Wordle Time!</Text>
      <Pressable style={[styles.playButton, themedStyles.button]} onPress={navigateToGame}>
        <Text style={[themedStyles.buttonText, themedStyles.text, { color: playButtonTextColor }]}>Play</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Responsive.scale(16),
    paddingVertical: Responsive.scale(20),
    alignItems: "center",
    height: "100%",
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  themeButtonText: {
    textAlign: 'center',
    margin: 5,
  },
  heroImage: {
    width: '40%',
    aspectRatio: 1,
    resizeMode: 'contain',
    marginTop: "15%",
  },
  playButton: {
    paddingVertical: Responsive.scale(10),
    paddingHorizontal: Responsive.scale(20),
    borderRadius: Responsive.scale(30),
    marginTop: 20,
  },
  playButtonText: {
    fontSize: Responsive.scale(18),
    textAlign: 'center',
  },
});
