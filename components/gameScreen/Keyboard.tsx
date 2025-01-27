import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const Keyboard = ({ handleKeyPress }: { handleKeyPress: (letter: string) => void }) => {
  const keyboardRows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Delete'],
  ];

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
                letter === 'Enter' || letter === 'Delete' ? styles.specialKey : null,
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
    paddingHorizontal: 10, // Adds some padding to prevent keys from touching the edges
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  key: {
    flex: 1, // Makes keys evenly distributed within the row
    width: 35, // Restricts the size of each key
    height: 50,
    marginHorizontal: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  specialKey: {
    flex: 1.5, // Makes 'Enter' and 'Delete' slightly wider
    width: 80,
  },
  keyText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Keyboard;
