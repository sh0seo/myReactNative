import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import SplashScreen from 'react-native-splash-screen';
// import Counter from './components/Counter';
import Form from './components/Form';
//
const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

// Entry Point.
const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);
  return (
    <Container>
      {/* <Counter /> */}
      <Form />
    </Container>
  );
};

export default App;
