import React from 'react';
import styled from 'styled-components/native';

interface TextInputProps {
  borderColor: any;
}

const StyledInput = styled.TextInput.attrs((props: TextInputProps) => ({
  placeholder: 'Enter a text...',
  placeholderTextColor: props.borderColor,
}))`
  width: 200px;
  height: 60px;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  border: 2px;
  border-color: ${(props: TextInputProps) => props.borderColor};
  font-size: 24px;
`;

const Input = (props: TextInputProps) => {
  return <StyledInput borderColor={props.borderColor} />;
};

export default Input;
