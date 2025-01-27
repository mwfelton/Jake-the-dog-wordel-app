import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type GameBoardProps = {
    guessedLetter: string[][];
    gameBoard: string[][]; // Represents the game board
  };

  export function GameBoard({ guessedLetter, gameBoard }: GameBoardProps) {
    // const [gameBoard, setgameBoard] = useState<string[][]>(new Array(6).fill(new Array(5).fill('')));
  console.log('gambeoard', guessedLetter)

  return (
    <View style={styles.board}>
      {gameBoard.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((letter, colIndex) => (
            <View key={colIndex} style={styles.box}>
              <Text style={styles.boxText}>{letter}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    marginTop: 50,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  box: {
    width: 50,
    height: 50,
    margin: 5,
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
