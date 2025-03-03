// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { useThemeStyles } from '@/hooks/useThemeStyles';
// import { getLetterColor } from '@/utils/getLetterColor';

// type GameBoardProps = {
//   gameBoard: string[][];
//   wordToGuess: string;
//   gameRound: number;
//   gameWon: boolean;
// };

// export function GameBoard({ gameBoard, wordToGuess, gameRound, gameWon }: GameBoardProps) {
//   const { keyboardColors } = useThemeStyles();

//   return (
//     <View style={styles.board}>
//       {gameBoard.map((row, rowIndex) => (
//         <View key={rowIndex} style={styles.row}>
//           {row.map((letter, colIndex) => {
//             const backgroundColor =
//               rowIndex < gameRound ? getLetterColor(letter, colIndex, wordToGuess, keyboardColors) : 'transparent';
//             return (
//               <View key={colIndex} style={[styles.box, { backgroundColor }]}>
//                 <Text style={styles.boxText}>{letter}</Text>
//               </View>
//             );
//           })}
//         </View>
//       ))}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   board: {
//     marginTop: 50,
//     marginBottom: 10,
//     alignItems: 'center',
//   },
//   row: {
//     flexDirection: 'row',
//     marginBottom: 10,
//   },
//   box: {
//     width: 40,
//     height: 40,
//     margin: 3,
//     borderWidth: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   boxText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// });

// export default GameBoard;

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

export function GameBoard({ gameBoard, wordToGuess, gameRound, gameWon }: GameBoardProps) {
  const { keyboardColors } = useThemeStyles();

  return (
    <View style={styles.board}>
      {gameBoard.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((letter, colIndex) => {
            // Check if the current row is the winning row and the game is won
            const isWinningRow = gameWon && rowIndex === gameRound;

            // Set background color based on conditions
            const backgroundColor = isWinningRow
              ? keyboardColors.winningColor // If winning row, use winning color
              : rowIndex < gameRound
              ? getLetterColor(letter, colIndex, wordToGuess, keyboardColors)
              : 'transparent'; // Default color if neither condition is met

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

