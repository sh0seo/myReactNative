import React from 'react';
import { Alert, Pressable, Text } from 'react-native';

interface ButtonProps {
  title: string;
  children: string;
}

const MyButton = (props: ButtonProps) => {
  console.log(props.title);
  return (
    <Pressable>
      <Text style={{ 
        backgroundColor: "#3498DB", 
        fontSize: 20,
        padding: 16, 
        margin: 10,
        borderRadius: 8,
        }}
        onPress={() => Alert.alert(props.children || props.title)}>My Button</Text>
    </Pressable>
  );
}

export default MyButton;