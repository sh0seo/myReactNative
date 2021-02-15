import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Shadow />
    </View>
  );
};

const Shadow = () => {
  return <View style={styles.shadow} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    backgroundColor: '#ffff11',
    width: 200,
    height: 200,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
      android: {
        elevation: 20,
      },
    }),
  },
});

export default App;
