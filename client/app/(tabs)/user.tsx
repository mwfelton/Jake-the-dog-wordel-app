import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Responsive } from "@/utils/responsive";
import { useThemeStyles } from '@/hooks/useThemeStyles';

export default function UserScreen() {
  const { themedStyles } = useThemeStyles();

  return (
    <View style={[styles.container, themedStyles.background]}>
      <Text style={[styles.themeButtonText, themedStyles.subtitle, themedStyles.text]}>User Page</Text>
      <Text style={[styles.title, themedStyles.title, themedStyles.text]}>Coming Soon!</Text>
      <Image style={styles.heroImage} source={require("../../assets/images/Adventure_Time.svg")} />
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
