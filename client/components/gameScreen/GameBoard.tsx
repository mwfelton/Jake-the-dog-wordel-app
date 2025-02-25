import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';

type GameBoardProps = {
  gameBoard: string[][]; // Represents the game board
  wordToGuess: string; // The target word
  gameRound: number;
  gameWon: boolean; // New prop to check if the game is won
};

export function GameBoard({ gameBoard, wordToGuess, gameRound, gameWon }: GameBoardProps) {

  const getBackgroundColor = (letter: string, index: number, rowIndex: number) => {
    if (gameWon && rowIndex === gameRound) {
      return 'blue'; // The last submitted row turns blue if the game is won
    }
  
    if (rowIndex >= gameRound) {
      return 'transparent'; // Don't color the current typing row or future rows
    }
  
    if (letter === wordToGuess[index]) {
      return 'green'; // Correct position
    } else if (wordToGuess.includes(letter)) {
      return 'yellow'; // Wrong position
    }
  
    return 'transparent'; // Default case
  };
  
  return (
    <View style={styles.board}>
      {gameBoard.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((letter, colIndex) => (
            <View 
              key={colIndex} 
              style={[
                styles.box, 
                rowIndex < gameRound ? { backgroundColor: getBackgroundColor(letter, colIndex, rowIndex) } : gameWon ? { backgroundColor: getBackgroundColor(letter, colIndex, rowIndex) } : {}
              ]}
            >
              <Text style={styles.boxText}>{letter}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    marginTop: 20,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  box: {
    width: 40,
    height: 40,
    margin: 3,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default GameBoard;
