import React from 'react';
import {Alert, Pressable, StyleSheet, Text} from 'react-native';

interface ButtonProps {
  title: string;
  children: string;
  onPress: () => void;
}

const MyButton = (props: ButtonProps) => {
  console.log(props.title);
  return (
    <Pressable>
      <Text style={styles.text} onPress={() => props.onPress()}>
        {props.children || props.title}
      </Text>
    </Pressable>
  );
};

MyButton.defaultProps = {
  title: 'Button',
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: '#3498DB',
    fontSize: 20,
    padding: 16,
    margin: 10,
    borderRadius: 8,
  },
});

export default MyButton;
