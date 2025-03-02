// export const getLetterColor = (
//   letter: string,
//   index: number,
//   wordToGuess: string,
//   keyboardColors: any,
//   keyColors: { [key: string]: string }
// ) => {
//   const upperLetter = letter.toUpperCase();

//   if (wordToGuess[index] === upperLetter) {
//     return keyboardColors.correctPositionColor; // Correct position (green)
//   } else if (wordToGuess.includes(upperLetter)) {
//     // If it's yellow, only update if it's not already green
//     return keyColors[upperLetter] === keyboardColors.correctPositionColor
//       ? keyboardColors.correctPositionColor
//       : keyboardColors.wrongPositionColor;
//   } else {
//     return keyboardColors.activeKeyColor; // Not in the word (gray)
//   }
// };

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
  }
) => {
  const upperLetter = letter.toUpperCase();

  if (wordToGuess[index] === upperLetter) {
    return keyboardColors.correctPositionColor; // Green: Correct position
  } else if (wordToGuess.includes(upperLetter)) {
    return keyboardColors.wrongPositionColor; // Yellow: Wrong position
  } else {
    return keyboardColors.activeKeyColor; // Gray: Not in the word
  }
};
