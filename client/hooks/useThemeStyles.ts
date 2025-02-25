// hooks/useThemeStyles.ts
import { StyleSheet } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';

export const useThemeStyles = () => {
  const { theme } = useTheme();
  const colorScheme = Colors[theme];
  const fontFamily = Fonts[theme]?.fontFamily || 'System'; // Default to 'System' if no font is found for the theme

  // Return only theme-specific styles (colors, fonts, etc.)
  const themedStyles = StyleSheet.create({
    background: {
      backgroundColor: colorScheme.background,
    },
    text: {
      color: colorScheme.text,
      fontFamily: fontFamily, // Apply the font family dynamically
    },
    button: {
      backgroundColor: colorScheme.playButton,
    },
    // Colors and font-related styles
    keyboard: {
      defaultKeyColor: colorScheme.keyboard.defaultKeyColor,
      correctPositionColor: colorScheme.keyboard.correctPositionColor,
      wrongPositionColor: colorScheme.keyboard.wrongPositionColor,
      activeKeyColor: colorScheme.keyboard.activeKeyColor,
    },
    gameboard: {
      borderColor: colorScheme.gameboard.border,
      backgroundColor: colorScheme.gameboard.background,
      textColor: colorScheme.gameboard.text,
    },
    // Add more theme-related properties here as needed
  });

  return { themedStyles };
};





// // hooks/useThemeStyles.ts
// import { StyleSheet } from 'react-native';
// import { useTheme } from '@/contexts/ThemeContext';
// import { Colors } from '@/constants/Colors';
// import { Fonts } from '@/constants/Fonts';

// export const useThemeStyles = () => {
//   const { theme } = useTheme();
//   const colorScheme = Colors[theme];
//   const fontFamily = Fonts[theme]?.fontFamily || 'System'; // Default to 'System' if no font is found for the theme

//   // Create and return dynamic styles based on the current theme
//   const themedStyles = StyleSheet.create({
//     background: {
//       backgroundColor: colorScheme.background,
//     },
//     text: {
//       color: colorScheme.text,
//       fontFamily: fontFamily, // Apply the font family dynamically
//     },
//     button: {
//       backgroundColor: colorScheme.playButton,
//     },
//   });

//   return { themedStyles };
// };
