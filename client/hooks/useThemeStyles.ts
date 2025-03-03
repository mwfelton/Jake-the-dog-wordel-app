import { StyleSheet } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';

export const useThemeStyles = () => {
  const { theme } = useTheme();
  const colorScheme = Colors[theme];
  const fontFamily = Fonts[theme]?.fontFamily || 'System';
  const fontSize = Fonts[theme] || Fonts.jake;

  const themedStyles = StyleSheet.create({
    background: {
      backgroundColor: colorScheme.background,
    },
    text: {
      color: colorScheme.text,
      fontFamily: fontFamily,
    },
    button: {
      backgroundColor: colorScheme.playButton,
    },
    gameboard: {
      borderColor: colorScheme.gameboard.border,
      backgroundColor: colorScheme.gameboard.background,
      color: colorScheme.gameboard.text,
    },
    title: {
      fontSize: fontSize.fontSizes.title,
    },
    buttonText: {
      fontSize: fontSize.fontSizes.button,
    },
    subtitle: {
      fontSize: fontSize.fontSizes.subtitle,
    },
  });

  const gameBoardFontSize = fontSize.fontSizes.gameBoard
  const keyBoardFontSize = fontSize.fontSizes.keyBoard
  const playButtonTextColor = colorScheme.playButtonText || colorScheme.text;

  const keyboardColors = {
    defaultKeyColor: colorScheme.keyboard.defaultKeyColor,
    correctPositionColor: colorScheme.keyboard.correctPositionColor,
    wrongPositionColor: colorScheme.keyboard.wrongPositionColor,
    activeKeyColor: colorScheme.keyboard.activeKeyColor,
    winningColor: colorScheme.keyboard.winningColor
  };

  return { themedStyles, keyboardColors, playButtonTextColor, gameBoardFontSize, keyBoardFontSize};
};
