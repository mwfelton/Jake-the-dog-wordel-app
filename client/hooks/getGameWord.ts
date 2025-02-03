import { useState, useEffect } from 'react';
import { fetchRandomWord } from '../api/wordsApi';

export const getGameWord = () => {
  const [gameWord, setGameWord] = useState<string | null>(null);
  const [wordFetchError, setWordFetchError] = useState<string | null>(null);

  useEffect(() => {
    const getRandomWord = async () => {
      try {
        const word = await fetchRandomWord();
        setGameWord(word);
      } catch (err) {
        setWordFetchError('Error fetching word');
      }
    };

    getRandomWord();
  }, []);

  return { gameWord, wordFetchError };
};
