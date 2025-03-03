import { View, Pressable, Image, StyleSheet } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { Colors } from "@/constants/Colors";
import { Responsive } from "@/utils/responsive";

// Importing the images using require
const images = {
  jake: require("../assets/images/jake.png"),
  finn: require("../assets/images/finn.png"),
  bmo: require("../assets/images/bmo.png"),
};

export default function ThemeButtons() {
  const { theme, setTheme } = useTheme();

  const getButtonStyle = (selectedTheme: string) => [
    styles.themeButton,
    theme === selectedTheme && { backgroundColor: Colors[selectedTheme].activeButton },
  ];

  return (
    <View style={styles.themeButtonsContainer}>
      {["jake", "finn", "bmo"].map((themeName) => (
        <Pressable key={themeName} style={getButtonStyle(themeName)} onPress={() => setTheme(themeName)}>
          <Image source={images[themeName]} style={styles.buttonImage} />
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  themeButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: Responsive.scale(6), 
    backgroundColor: "beige",
    borderRadius: Responsive.scale(50),
    overflow: "hidden",
  },
  themeButton: {
    height: Responsive.scale(40),
    width: Responsive.scale(40),
    borderRadius: Responsive.scale(50),
    backgroundColor: "#CCC",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: Responsive.scale(2),
  },
  buttonImage: {
    width: Responsive.scale(30),
    height: Responsive.scale(30),
    resizeMode: "contain",
  },
});
