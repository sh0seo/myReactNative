import React from 'react';
import styled from 'styled-components/native';

const ButtonContainer = styled.Pressable`
  background-color: ${(props: ButtonProps) =>
    props.title === 'Hanbit' ? props.theme.blue : props.theme.purple};
  border-radius: 15px;
  padding: 15px 40px;
  margin: 10px 0px;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${(props: ButtonProps) => props.theme.text};
`;

interface ButtonProps {
  title: string;
  theme: any;
}

const Button = (props: ButtonProps) => {
  return (
    <ButtonContainer title={props.title}>
      <Title>{props.title}</Title>
    </ButtonContainer>
  );
};

export default Button;
