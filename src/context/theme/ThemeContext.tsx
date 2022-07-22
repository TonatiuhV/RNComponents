import React, {useEffect, useReducer} from 'react';
import {createContext} from 'react';
import {Appearance} from 'react-native';
import {darkTheme, lightTheme, themeReducer, ThemeState} from './themeReducer';

interface ThemeContextProps {
  theme: ThemeState; // TODO:
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  const colorScheme = Appearance.getColorScheme();
  const initalTheme = colorScheme === 'light' ? lightTheme : darkTheme;
  const [theme, dispatch] = useReducer(themeReducer, initalTheme); // TODO: el

  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
  };

  const setLightTheme = () => {
    dispatch({type: 'set_light_theme'});
  };

  useEffect(() => {
    const listener = Appearance.addChangeListener(listener => {
      listener.colorScheme;
    });

    return () => {
      // listener.remove();
    };
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setDarkTheme,
        setLightTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
