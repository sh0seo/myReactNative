import React from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';

interface ButtonProps {
  title: string;
}

const Button = (props: ButtonProps) => {
  return (
    <Pressable
      style={styles.button}
      onPressIn={() => console.log('Press In')}
      onPressOut={() => console.log('Press Out')}
      onPress={() => console.log('Press')}
      onLongPress={() => console.log('Long Press')}
      delayLongPress={3000}
      pressRetentionOffset={{bottom: 50, left: 50, right: 50, top: 50}}
      hitSlop={50}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Button title="Pressable" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    padding: 10,
    fontSize: 30,
  },
  button: {
    padding: 10,
    backgroundColor: '#1abc9c',
  },
});

export default App;
