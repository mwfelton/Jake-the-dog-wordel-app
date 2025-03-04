import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'; // Import MaterialCommunityIcons
import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue, StyleProp, ViewStyle } from 'react-native';

// Extend the MAPPING object to support both MaterialIcons and MaterialCommunityIcons
const MAPPING = {
  // MaterialIcons
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  'person': 'person',
  // MaterialCommunityIcons
  'sword': 'sword', // Add the sword icon here for MaterialCommunityIcons
} as const;

export type IconSymbolName = keyof typeof MAPPING;

/**
 * An icon component that uses native SFSymbols on iOS, and MaterialIcons on Android and web.
 * For MaterialCommunityIcons, we handle them separately.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  // Check if the icon name is in MaterialCommunityIcons
  if (name === 'sword') {
    return <MaterialCommunityIcons color={color} size={size} name={name} style={style} />;
  }

  // Default to MaterialIcons if it's not a MaterialCommunityIcons icon
  return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />;
}
