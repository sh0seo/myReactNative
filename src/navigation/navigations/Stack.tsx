import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../screens/Home';
import List from '../screens/List';
import Item from '../screens/Item';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        cardStyle: {backgroundColor: '#ffffff'},
        headerStyle: {
          height: 80,
          backgroundColor: '#95a5a6',
          borderBottomWidth: 5,
          borderBottomColor: '#34495e',
        },
        headerTitleStyle: {color: '#ffffff', fontSize: 24},
        headerTitle: () => <Icon name="rocket" size={30} />,
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="List"
        component={List}
        options={{
          headerTitle: 'List Screen',
          headerBackTitleVisible: true,
          headerBackTitle: 'Prve',
          headerTitleStyle: {fontSize: 24},
          headerTintColor: '#e74c3c',
        }}
      />
      <Stack.Screen name="Item" component={Item} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
