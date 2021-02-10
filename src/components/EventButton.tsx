import React from 'react';
import {Pressable, Text} from 'react-native';

const EventButton = () => {
  const _onPressIn = () => console.log('Press In !!!\n');
  const _onPressOut = () => console.log('Press Out !!!\n');
  const _onPress = () => console.log('Press !!\n');
  const _onLongPress = () => console.log('Long Press !!!\n');
  return (
    <Pressable
      onPressIn={_onPressIn}
      onPressOut={_onPressOut}
      onPress={_onPress}
      onLongPress={_onLongPress}>
      <Text>Press</Text>
    </Pressable>
  );
};

export default EventButton;
