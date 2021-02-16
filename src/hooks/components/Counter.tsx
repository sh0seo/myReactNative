import React, {useState} from 'react';
import {Button} from 'react-native';
import styled from 'styled-components/native';

const StyledText = styled.Text`
  font-size: 24px;
  margin: 10px;
`;

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <StyledText>count: {count}</StyledText>
      <Button
        title="+"
        onPress={() => {
          setCount((c) => c + 1);
          setCount((c) => c + 1);
          console.log(`count: ${count}`);
        }}
      />
      <Button title="-" onPress={() => setCount(count - 1)} />
    </>
  );
};

export default Counter;
