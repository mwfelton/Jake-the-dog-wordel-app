// hooks/useThemeStyles.ts
import { StyleSheet } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';

export const useThemeStyles = () => {
  const { theme } = useTheme();
  const colorScheme = Colors[theme];
  const fontFamily = Fonts[theme]?.fontFamily || 'System'; // Default to 'System' if no font is found for the theme

  // Only wrap valid styles in StyleSheet.create
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
    gameboard: {
      borderColor: colorScheme.gameboard.border,
      backgroundColor: colorScheme.gameboard.background,
      color: colorScheme.gameboard.text, // Changed from textColor to color
    },
  });

  // Return custom theme data (not wrapped in StyleSheet.create)
  const keyboardColors = {
    defaultKeyColor: colorScheme.keyboard.defaultKeyColor,
    correctPositionColor: colorScheme.keyboard.correctPositionColor,
    wrongPositionColor: colorScheme.keyboard.wrongPositionColor,
    activeKeyColor: colorScheme.keyboard.activeKeyColor,
    winningColor: colorScheme.keyboard.winningColor
  };

  return { themedStyles, keyboardColors };
};
