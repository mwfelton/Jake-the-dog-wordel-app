import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import GameBoard from '@/components/gameScreen/GameBoard';
import Keyboard from '@/components/gameScreen/Keyboard';

const GameScreen = () => {
  const [gameBoard, setGameBoard] = useState<string[][]>(Array.from({ length: 6 }, () => Array(5).fill('')));
  const [wordToGuess, setWordToGuess] = useState('REACT');
  const [gameRound, setGameRound] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameMessage, setGameMessage] = useState('');

  const handleKeyPress = (key: string) => {
    setGameMessage('');
    if (gameOver) return; // Prevent input if game is over

    const currentRow = [...gameBoard[gameRound]];

    if (key === 'Delete') {
      const lastIndex = currentRow.lastIndexOf('');
      if (lastIndex > 0) {
        currentRow[lastIndex - 1] = '';
      } else {
        currentRow[currentRow.length - 1] = '';
      }
    } else if (key === 'Enter') {
      handleSubmit(currentRow);
    } else {
      const nextIndex = currentRow.indexOf('');
      if (nextIndex !== -1) {
        currentRow[nextIndex] = key.toUpperCase(); // Ensure uppercase letters
      }
    }

    const updatedGameBoard = [...gameBoard];
    updatedGameBoard[gameRound] = currentRow;
    setGameBoard(updatedGameBoard);
  };

  const handleSubmit = (currentRow: string[]) => {
    const guessedWord = currentRow.join('');

    if (guessedWord.length < 5) {
      setGameMessage('Please enter a 5-letter word');
      return;
    }

    if (guessedWord === wordToGuess) {
      setGameMessage('🎉 You won! 🎉');
      setGameOver(true);
    } else if (gameRound === 5) {
      setGameMessage(`Game Over! The correct word was ${wordToGuess}.`);
      setGameOver(true);
    } else {
      setGameRound(prevRound => prevRound + 1);
    }
  };

  const handleNewGame = () => {
    setGameBoard(Array.from({ length: 6 }, () => Array(5).fill('')));
    setGameRound(0);
    setGameOver(false);
    setGameMessage('');
  };

  return (
    <View style={styles.container}>
      {/* Removed guessedLetter prop */}
      <GameBoard gameBoard={gameBoard} wordToGuess={wordToGuess} gameRound={gameRound} />
      <Keyboard handleKeyPress={handleKeyPress} />

      {gameMessage !== '' && (
        <Text style={styles.gameMessage}>{gameMessage}</Text>
      )}

      {gameOver && (
        <View style={styles.gameOverContainer}>
          <Text style={styles.gameOverText}>{gameMessage}</Text>
          <TouchableOpacity style={styles.newGameButton} onPress={handleNewGame}>
            <Text style={styles.newGameButtonText}>New Game</Text>
          </TouchableOpacity>
        </View>
      )}
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
  gameOverContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  newGameButton: {
    marginTop: 15,
    backgroundColor: '#ff9800',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  newGameButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  gameOverText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  gameMessage: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'yellow',
    textAlign: 'center',
  },
})

export default GameScreen;
