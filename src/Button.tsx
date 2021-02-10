import React from 'react';
import {View, Text, Button, Alert, StyleSheet} from 'react-native';
import MyButton from './components/MyButton';

const App = () => {
  return (
    <View style={styels.container}>
      <Text style={styels.text}>Button Component</Text>
      <Button title="Button" onPress={() => Alert.alert('Click !!!')} />
      <Text style={styels.text}>My Button Component</Text>
      <MyButton title="onPress" onPress={() => Alert.alert('MyButton')}>
        asdf
      </MyButton>
    </View>
  );
};

const styels = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default App;
