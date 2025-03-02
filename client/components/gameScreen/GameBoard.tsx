import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useThemeStyles } from '@/hooks/useThemeStyles';
import { getLetterColor } from '@/utils/getLetterColor';

type GameBoardProps = {
  gameBoard: string[][];
  wordToGuess: string;
  gameRound: number;
  gameWon: boolean;
};

export function GameBoard({ gameBoard, wordToGuess, gameRound }: GameBoardProps) {
  const { keyboardColors } = useThemeStyles(); // Get themed colors

  return (
    <View style={styles.board}>
      {gameBoard.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((letter, colIndex) => {
            const backgroundColor =
              rowIndex < gameRound ? getLetterColor(letter, colIndex, wordToGuess, keyboardColors) : 'transparent';

            return (
              <View key={colIndex} style={[styles.box, { backgroundColor }]}>
                <Text style={styles.boxText}>{letter}</Text>
              </View>
            );
          })}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    marginTop: 50,
    marginBottom: 10,
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
