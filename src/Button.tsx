import React from 'react';
import {View, Text, Button, Alert} from 'react-native';
import MyButton from './components/MyButton';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Text style={{
        fontSize: 20,
        marginBottom: 10,
      }}>Button Component</Text>
      <Button title="Button" onPress={() => Alert.alert("Click !!!")} />
      <Text style={{ fontSize: 20, marginBottom: 10, }}>My Button Component</Text>
      <MyButton title="Btn Title"/>
    </View>
  );
}

export default App;