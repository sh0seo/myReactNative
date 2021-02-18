import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import SplashScreen from 'react-native-splash-screen';
import {theme} from './theme';

const App = () => {
  SplashScreen.hide();
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
    </ThemeProvider>
  );
};

export default App;
