import React, {Fragment} from 'react';
import { StyleSheet, View, Text, StatusBar } from "react-native";
import MyButton from './components/MyButton';

export default function App() {
  const fileName: string = "Hello.tsx"; 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up {fileName === "Hello.tsx" ? "Hello.tsx" : "Component.tsx"} to start working on you app!</Text>
      <StatusBar backgroundColor="blue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_and: {
    backgroundColor: 'red',
  },
  text: {
    fontSize: 20,
  },
  statusBar: {
    backgroundColor: 'blue',
  }
});
