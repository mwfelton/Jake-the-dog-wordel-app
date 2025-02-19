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
    // alignItems: "center",
    // width: Responsive.scale(100), 
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
    marginHorizontal: Responsive.scale(2), // This will create the gap
  },
  buttonImage: {
    width: Responsive.scale(30),
    height: Responsive.scale(30),
    resizeMode: "contain",
  },
});

// const styles = StyleSheet.create({
//     themeButtonsContainer: {
//       flexDirection: 'row',
//       justifyContent: 'space-around',
//       width: '35%',
//       backgroundColor: 'beige',
//       borderRadius: 50,
//       overflow: 'hidden',
//       padding: '10px'
//     },
//     themeButton: {
//       height: 60,
//       width: 60,
//       borderRadius: 50,
//       backgroundColor: '#CCC',
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     buttonImage: {
//       width: 40,
//       height: 40,
//       marginBottom: 5,
//       resizeMode: 'contain',
//     },
//     buttonText: {
//       color: 'black',
//       fontWeight: 'bold',
//     },