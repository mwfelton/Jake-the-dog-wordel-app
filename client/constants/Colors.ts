const tintColorMedium = '#555';
const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    primary: tintColorLight,
    background: '#fff',
    card: '#f0f0f0',
    text: '#11181C',
    border: '#d1d1d1',
    notification: '#ff453a',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    primary: tintColorDark,
    background: '#151718',
    card: '#1c1c1e',
    text: '#ECEDEE',
    border: '#3a3a3c',
    notification: '#ff453a',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
  medium: {
    primary: '#5a5a5a',
    background: '#2f2f2f',
    card: '#3a3a3a',
    text: '#dcdcdc',
    border: '#555555',
    notification: '#ffcc00',
    tint: '#5a5a5a',
    icon: '#bbbbbb',
    tabIconDefault: '#bbbbbb',
    tabIconSelected: '#5a5a5a',
  },
};

export const Fonts = {
  regular: { fontFamily: 'System', fontWeight: '400' as '400' },
  medium: { fontFamily: 'System', fontWeight: '500' as '500' },
  bold: { fontFamily: 'System', fontWeight: '700' as '700' },
  heavy: { fontFamily: 'System', fontWeight: '900' as '900' },
};
