import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import SplashScreen from 'react-native-splash-screen';
// import Counter from './components/Counter';
import Form from './components/Form';
import Button from './components/Button';
import Length from './components/Length';
import Dog from './components/Dog';

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
    }, 500);
  }, []);

  // const [isVisible, setIsVisible] = useState(true);

  return (
    <Container>
      {/* <Counter /> */}
      {/* <Button
        title={isVisible ? 'Hide' : 'Show'}
        onPress={async () => setIsVisible((prev) => !prev)}
      />
      {isVisible && <Form />} */}
      {/* <Length /> */}
      <Dog />
    </Container>
  );
};

export default App;
