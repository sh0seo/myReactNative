import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Mail, Meet, Settings} from '../screens/TabScreens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const TabIcon = ({name, size, color}) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        // labelPosition: 'beside-icon',
        showLabel: true,
        style: {
          backgroundColor: '#54b7f9',
          borderTopColor: '#ffffff',
          borderTopWidth: 1,
        },
        activeTintColor: '#ffffff',
        inactiveTintColor: '#cfcfcf',
      }}
      screenOptions={({route}) => ({
        tabBarIcon: (props) => {
          let name = '';
          if (route.name === 'Mail') {
            name = 'email';
          } else if (route.name === 'Meet') {
            name = 'video';
          } else {
            name = 'cog-outline';
          }
          return TabIcon({...props, name});
        },
      })}>
      <Tab.Screen
        name="Mail"
        component={Mail}
        // options={{
        //   tabBarIcon: (props) => TabIcon({...props, name: 'email'}),
        // }}
      />
      <Tab.Screen
        name="Meet"
        component={Meet}
        // options={{
        //   tabBarIcon: (props) => TabIcon({...props, name: 'video'}),
        // }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: (props) =>
            TabIcon({
              ...props,
              name: props.focused ? 'video' : 'email',
            }),
          // tabBarLabel: '설정',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
