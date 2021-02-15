import React from 'react';
import {View} from 'react-native';
import {Header, Contents, Footer} from './components/Layout';

const App = () => {
  return (
    <View style={{flex :1, justifyContent: 'center'}}>
      <Header />
      <Contents />
      <Footer />
    </View>
  );
};

export default App;
