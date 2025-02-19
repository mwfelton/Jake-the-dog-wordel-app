import { StyleSheet } from "react-native";
import { Responsive } from "../utils/responsive"; // Import the Responsive utility

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Responsive.scale(16),
    paddingVertical: Responsive.scale(20),
    alignItems: "center",
  },
  fullWidth: {
    width: "100%",
  },
  centerContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: Responsive.scale(16),
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    fontSize: Responsive.scale(42),
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: Responsive.scale(20),
  },
});
