import React from 'react';
import {Pressable} from 'react-native';
import styled from 'styled-components/native';
// import {images} from '../images';

const Icon = styled.Image`
  tint-color: ${({theme}) => theme.text};
  width: 30px;
  height: 30px;
  margin: 10px;
`;

const IconButton = (props: IconButtonProps) => {
  const _onPressOut = () => {
    props.onPressOut(props.id);
  };
  return (
    <Pressable onPressOut={_onPressOut}>
      <Icon source={props.type} />
    </Pressable>
  );
};

IconButton.defaultProps = {
  onPressOut: () => {},
};

interface IconButtonProps {
  type: any;
  onPressOut: (id: string) => {};
  id: string;
}

export default IconButton;
