import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';

export type Theme = 'jake' | 'finn' | 'bmo';

interface ThemeContextProps {
  theme: Theme;
  colors: typeof Colors[Theme];
  fontFamily: string;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('jake');

  const colors = Colors[theme];
  const fontFamily = Fonts[theme]?.fontFamily || 'System';

  return (
    <ThemeContext.Provider value={{ theme, colors, fontFamily, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
