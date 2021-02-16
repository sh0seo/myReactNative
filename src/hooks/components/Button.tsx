import React from 'react';
import styled from 'styled-components/native';

const Container = styled.Pressable`
  background-color: #3498db;
  border-radius: 15px;
  padding: 15px 30px;
  margin: 10px 0px;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
`;

const Button = (props: ButtonProps) => {
  return (
    <Container onPress={props.onPress}>
      <Title>{props.title}</Title>
    </Container>
  );
};

interface ButtonProps {
  title: string;
  onPress: () => {};
}

export default Button;
