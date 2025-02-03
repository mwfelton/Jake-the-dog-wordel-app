import { View, Text, Pressable } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Pressable onPress={toggleTheme} style={{ padding: 10, backgroundColor: 'gray' }}>
      <Text style={{ color: 'white' }}>Current Theme: {theme.toUpperCase()}</Text>
    </Pressable>
  );
}
