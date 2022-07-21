import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'set_light_theme'} | {type: 'set_dark_theme'};

export interface ThemeState extends Theme {
  curentTheme: 'light' | 'dark';
  dividerColor: string;
}
// Mala practica deberia etar dentro del reducer
// no debe depender de externos el redcer
export const lightTheme: ThemeState = {
  curentTheme: 'light',
  dividerColor: 'rgba(0,0,0,0.7)',
  dark: false,
  colors: {
    primary: '#084F6A',
    background: 'white',
    card: 'green',
    text: 'black',
    border: 'orange',
    notification: 'teal',
  },
};

export const darkTheme: ThemeState = {
  curentTheme: 'dark',
  dividerColor: 'rgba(0,0,0,0.7)',
  dark: true,
  colors: {
    primary: '#75CEDB',
    background: 'black',
    card: 'green',
    text: 'white',
    border: 'orange',
    notification: 'teal',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return {...lightTheme};
    case 'set_dark_theme':
      return {...darkTheme};
    default:
      return state;
  }
};
