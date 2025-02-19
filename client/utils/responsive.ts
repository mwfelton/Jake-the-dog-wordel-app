import { Dimensions, PixelRatio, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

// Scale sizes based on screen width
const scale = (size: number) => (width / 375) * size; // 375 is the baseline width (iPhone 11)

export const Responsive = {
  width,
  height,
  scale,
  isIOS: Platform.OS === "ios",
  isAndroid: Platform.OS === "android",
};
