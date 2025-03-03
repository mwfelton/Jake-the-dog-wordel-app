export const getLetterColor = (
  letter: string,
  index: number,
  wordToGuess: string,
  keyboardColors: {
    defaultKeyColor: string;
    correctPositionColor: string;
    wrongPositionColor: string;
    activeKeyColor: string;
    winningColor: string;
  },
) => {
  const upperLetter = letter.toUpperCase();
  
  if (wordToGuess[index] === upperLetter) {
    return keyboardColors.correctPositionColor;
  } else if (wordToGuess.includes(upperLetter)) {
    return keyboardColors.wrongPositionColor; 
  } else {
    return keyboardColors.activeKeyColor; 
  }
};
