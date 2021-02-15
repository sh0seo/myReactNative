import React from 'react';
import {Pressable} from 'react-native';
import styled from 'styled-components/native';
import {images} from '../images';

const Icon = styled.Image`
  tint-color: ${({theme}) => theme.text};
  width: 30px;
  height: 30px;
  margin: 10px;
`;

const IconButton = (props: IconButtonProps) => {
  return (
    <Pressable onPressOut={props.onPressOut}>
      <Icon source={props.type} />
    </Pressable>
  );
};

interface IconButtonProps {
  type: any;
  onPressOut: () => {};
}

export default IconButton;
