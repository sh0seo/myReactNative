import React from 'react';
import styled from 'styled-components/native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
// import StackNavigation from './navigations/Stack';
import TabNavigation from './navigations/Tab';

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  SplashScreen.hide();
  return (
    <NavigationContainer>
      {/* <StackNavigation /> */}
      <TabNavigation />
    </NavigationContainer>
  );
};

export default App;
