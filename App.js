import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const MyTheme = {
  dark: true,
  colors: {
    primary: '#C6ECDA',
    background: '#1C2727',
    card: '#1C2727',
    text: '#E2F5EA',
    border: '#071B1F',
  },
};

const Tab = createBottomTabNavigator();

import Index from './js/pages/home/index';
import Share from './js/pages/share';
import Account from './js/pages/account';

const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator theme={MyTheme}>
      <Tab.Screen name="Home" component={Index} />
      <Tab.Screen name="Share" component={Share} />
      <Tab.Screen name="Accounts" component={Account} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyTabs />
    </NavigationContainer>
  );
}

export default App;
