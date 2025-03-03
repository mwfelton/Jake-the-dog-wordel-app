import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import GameBoard from '@/components/gameScreen/GameBoard';
import Keyboard from '@/components/gameScreen/Keyboard';
import { fetchRandomWord } from '../../api/wordsApi';
import { useThemeStyles } from '@/hooks/useThemeStyles';
import { getLetterColor } from '@/utils/getLetterColor';
import { Responsive } from "@/utils/responsive";

const GameScreen = () => {
  const [gameBoard, setGameBoard] = useState<string[][]>(Array.from({ length: 6 }, () => Array(5).fill('')));
  const [keyColors, setKeyColors] = useState<{ [key: string]: string }>({});
  const [wordToGuess, setWordToGuess] = useState<string>('');
  const [gameRound, setGameRound] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameMessage, setGameMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { themedStyles, keyboardColors, playButtonTextColor } = useThemeStyles();

  useEffect(() => {
    getRandomWord();
  }, []);

  const getRandomWord = async () => {
    try {
      setLoading(true);
      const data = await fetchRandomWord();
      setWordToGuess(data.word);
    } catch (err) {
      setError('Failed to fetch the random word');
    } finally {
      setLoading(false);
    }
  };
  
  const handleKeyPress = (key: string) => {
    setGameMessage('');
    if (gameOver) return;

    const currentRow = [...gameBoard[gameRound]];

    if (key === 'Delete') {
      const lastFilledIndex = currentRow.reduce((lastIndex, letter, index) => 
        letter !== '' ? index : lastIndex, -1);
    
      if (lastFilledIndex !== -1) {
        currentRow[lastFilledIndex] = '';
      }
    } else if (key === 'Enter') {
      handleSubmit(currentRow);
    } else {
      const nextIndex = currentRow.indexOf('');
      if (nextIndex !== -1) {
        currentRow[nextIndex] = key.toUpperCase();
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
  
    const newKeyColors = { ...keyColors };
    const updatedGameBoard = [...gameBoard];
  
    currentRow.forEach((letter, index) => {
      const upperLetter = letter.toUpperCase();
  
      if (newKeyColors[upperLetter] === keyboardColors.correctPositionColor) {
        return;
      }
  
      newKeyColors[upperLetter] = getLetterColor(
        letter,
        index,
        wordToGuess,
        keyboardColors
      );
    });
  
    setKeyColors(newKeyColors);
  
    if (guessedWord === wordToGuess) {
      setGameBoard(updatedGameBoard);
      setGameOver(true);
    } else if (gameRound === 5) {
      setGameMessage(`Game Over! The correct word was ${wordToGuess}.`);
      setGameOver(true);
    } else {
      setGameRound((prevRound) => prevRound + 1);
    }
  
    setKeyColors(newKeyColors);
  };
  
  const handleNewGame = () => {
    setGameBoard(Array.from({ length: 6 }, () => Array(5).fill('')));
    setGameRound(0);
    setGameOver(false);
    setGameMessage('');
    setLoading(true);
    setError(null);
    setKeyColors({});
    getRandomWord();
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error}</Text>;

  console.log('beans', wordToGuess)

  return (
    <View style={styles.container}>
      <GameBoard gameBoard={gameBoard} wordToGuess={wordToGuess} gameRound={gameRound} gameWon={gameOver} />
      <Keyboard handleKeyPress={handleKeyPress} keyColors={keyColors} />
      <Text style={styles.newGameButtonText}>{gameMessage}</Text>

      {gameOver && (
      <View style={styles.gameOverContainer}>
        <TouchableOpacity style={[styles.newGameButton, themedStyles.button]} onPress={handleNewGame}>
          <Text style={[themedStyles.buttonText, themedStyles.text, { color: playButtonTextColor }]}>
            New Game
          </Text>
        </TouchableOpacity>
      </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  // gameOverContainer: {
  //   margin: 'auto',
  // },
  newGameButton: {
    paddingVertical: Responsive.scale(10),
    paddingHorizontal: Responsive.scale(20),
    borderRadius: Responsive.scale(30), // Match Play button
    marginTop: 20,  // Keep spacing consistent
  },
  // newGameButtonText: {
  //   fontSize: 18,
  //   color: 'white',
  // }
})

export default GameScreen;
