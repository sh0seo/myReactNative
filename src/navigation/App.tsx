import React from 'react';
import styled from 'styled-components/native';
import SplashScreen from 'react-native-splash-screen'

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  SplashScreen.hide();
  return <Container />;
};

export default App;
