import { useState } from 'react';

const useColorScheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'medium'>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'medium' : prevTheme === 'medium' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
}


export { useColorScheme } from 'react-native';
