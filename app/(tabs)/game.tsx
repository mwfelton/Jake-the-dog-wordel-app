import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import GameBoard from '@/components/gameScreen/GameBoard';
import Keyboard from '@/components/gameScreen/Keyboard';

const GameScreen = () => {
  const [gameBoard, setGameBoard] = useState<string[][]>(Array.from({ length: 6 }, () => Array(5).fill('')));
  const [wordToGuess, setWordToGuess] = useState('REACT')
  const [gameRound, setGameRound] = useState(0);

  const handleKeyPress = (key: string) => {
    const currentRow = [...gameBoard[gameRound]];

    if (key === 'Delete') {
      const lastIndex = currentRow.findIndex(item => item === '');

      if (lastIndex === -1) {
        currentRow[currentRow.length - 1] = '';
      } else {
        currentRow[lastIndex - 1] = '';
      }
  
      const updatedGameBoard = [...gameBoard];
      updatedGameBoard[gameRound] = currentRow;
      setGameBoard(updatedGameBoard);
    } else {
      // Handle letter input
      const nextIndex = currentRow.findIndex((cell) => cell === '');

      if (nextIndex !== -1) {
        currentRow[nextIndex] = key;
  
        const updatedGameBoard = [...gameBoard];
        updatedGameBoard[gameRound] = currentRow;
        setGameBoard(updatedGameBoard);
      }
    }
    
    if (key === 'Enter') {
      handleSubmit(currentRow); // Call handleSubmit when Enter is pressed
    }
  };

  const handleSubmit = (currentRow: string[]) => {
    const guessedWord = currentRow.join(''); // Join the array to form the guessed word
    const wordToGuess = 'REACT'; // Hardcoded word to guess
  
    if (guessedWord === wordToGuess) {
      console.log('Correct guess!');
      // You can add additional logic here, such as progressing to the next round
    } else {
      console.log('Incorrect guess. Try again!');
      // You can add additional logic here, such as showing feedback for the guess
    }
  };
  


  return (
    <View style={styles.container}>
      <GameBoard
        guessedLetter={[gameBoard[gameRound]]} // Pass the current row as a 2D array
        gameBoard={gameBoard}
      />
      <Keyboard handleKeyPress={handleKeyPress} />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
  },
});

export default GameScreen;
