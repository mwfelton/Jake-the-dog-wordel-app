import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useThemeStyles } from '@/hooks/useThemeStyles';

const { width } = Dimensions.get('window');
const keyWidth = (width - 40) / 11; 

const Keyboard = ({ handleKeyPress, keyColors }: { handleKeyPress: (letter: string) => void; keyColors: { [key: string]: string };}) => {

  console.log(keyColors)
  const { themedStyles, keyboardColors } = useThemeStyles();

  const keyboardRows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Delete'],
  ];

  const keyWidth = width / 10;
  const specialKeyWidth = keyWidth * 1.5;

  return (
    <View style={styles.keyboard}>
      {keyboardRows.map((row, rowIndex) => (
        <View key={`row-${rowIndex}`} style={styles.row}>
          {row.map((letter) => (
            <TouchableOpacity
              key={letter}
              onPress={() => handleKeyPress(letter)}
              style={[
                styles.key,
                {
                  backgroundColor: keyColors[letter] || keyboardColors.defaultKeyColor,
                },
                (letter === 'Enter' || letter === 'Delete') && { width: specialKeyWidth },
              ]}
            >
              <Text style={[styles.keyText, themedStyles.text]}>{letter}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  keyboard: {
    width: '50%',
    alignItems: 'center',
    paddingHorizontal: '3%',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  key: {
    width: keyWidth,
    height: keyWidth,
    marginHorizontal: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  keyText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Keyboard;
