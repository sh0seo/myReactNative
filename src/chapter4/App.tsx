import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

const App = () => {
  return (
    <View style={styles.continer}>
      <Text style={styles.text}>Inline Styling - Text</Text>
      <Text style={[styles.text, styles.error]}>Inline Styling - Error</Text>
    </View>
  );
};

export default App;
