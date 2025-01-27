import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import GameBoard from '@/components/gameScreen/GameBoard';
import Keyboard from '@/components/gameScreen/Keyboard';

const GameScreen = () => {
  const [currentGuess, setCurrentGuess] = useState<string[]>(new Array(5).fill(''));
  const [guesses, setGuesses] = useState<string[][]>(new Array(6).fill(new Array(5).fill('')));

  const handleKeyPress = (letter: string) => {
    const updatedGuess = [...currentGuess];
    const emptyIndex = updatedGuess.findIndex((letter) => letter === '');
    console.log(updatedGuess)
    console.log(emptyIndex)

    
    if (emptyIndex !== -1) {
      updatedGuess[emptyIndex] = letter;
      setCurrentGuess(updatedGuess);
    }
  };

  const handleSubmitGuess = () => {
    const updatedGuesses = [...guesses];
    const nextRow = updatedGuesses.findIndex((row) => row.every((cell) => cell !== ''));

    if (nextRow !== -1) {
      updatedGuesses[nextRow] = currentGuess;
      setGuesses(updatedGuesses);
      setCurrentGuess(new Array(5).fill(''));
    }
  };

  return (
    <View style={styles.container}>
      <GameBoard guessedLetter={currentGuess} gameBoard={guesses}/>
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
