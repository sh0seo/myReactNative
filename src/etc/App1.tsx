import React from 'react';
// import Counter from './components/Counter';
import {View} from 'react-native';
import EventButton from './components/EventButton';

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <EventButton />
    </View>
  );
};

export default App;
