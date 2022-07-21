import 'react-native-gesture-handler';

import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  Theme,
} from '@react-navigation/native';
import Navigator from './src/navigator/Navigator';
import {ThemeProvider} from './src/context/theme/ThemeContext';

// const CustomeTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DefaultTheme.colors,
//   },
// };

const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const App = () => {
  return (
    <AppState>
      <Navigator />
    </AppState>
  );
};

export default App;
