import React from 'react';
// import {Dimensions} from 'react-native';
import {useWindowDimensions} from 'react-native';
import styled from 'styled-components/native';

const StyledInput = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor: theme.main,
}))`
  width: ${({width}) => width - 40}px;
  height: 60px;
  margin: 3px 0;
  padding: 15px 20px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.itemBackground};
  font-size: 25px;
  color: ${({theme}) => theme.text};
`;

const Input = (props: InputState) => {
  // const width = Dimensions.get('window').width;
  const width = useWindowDimensions().width;
  return (
    <StyledInput
      width={width}
      placeholder={props.placeholder}
      maxLength={50}
      autoCapitalize="none"
      autoCorrect={false}
      returnKeyType="done"
      keyboardAppearance="dark"
      value={props.value}
      onChangeText={props.onChangeText}
      onSubmitEditing={props.onSubmitEditing}
    />
  );
};

interface InputState {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => {};
  onSubmitEditing: () => {};
}

export default Input;
