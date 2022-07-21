import 'react-native-gesture-handler';

import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  Theme,
} from '@react-navigation/native';
import Navigator from './src/navigator/Navigator';

const CustomeTheme: Theme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
  },
};

const App = () => {
  return (
    <NavigationContainer theme={CustomeTheme}>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
