import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // Get the screen width
const keyWidth = (width - 40) / 11; // 40px padding (20px on each side) for 10 keys
const specialKeyWidth = keyWidth * 1.5; // Special keys (Enter, Delete) will be wider


const Keyboard = ({ handleKeyPress, keyColors }: {
  handleKeyPress: (letter: string) => void;
  keyColors: { [key: string]: string };
}) => {

  const keyboardRows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Delete'],
  ];

  const keyWidth = width / 10; // Calculate key width based on screen width
  const specialKeyWidth = keyWidth * 1.5; // Special keys (Enter, Delete) will be wider

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
                  backgroundColor: keyColors[letter] || 'pink',
                },
                (letter === 'Enter' || letter === 'Delete') && { width: specialKeyWidth }, // Apply special width to special keys
              ]}
            >
              <Text style={styles.keyText}>{letter}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  keyboard: {
    width: '100%', // Ensures the keyboard container spans the full width of the screen
    alignItems: 'center',
    paddingHorizontal: '3%', // Adds padding to prevent keys from touching the edges
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  key: {
    width: keyWidth, // Dynamically set width
    height: keyWidth, // Set height equal to width for square keys
    marginHorizontal: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#ddd',
    borderRadius: 5,
  },
  keyText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Keyboard;
