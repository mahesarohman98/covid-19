import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './homeScreen';

const Stack = createStackNavigator();

export default function Share({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Covid-19" component={HomeScreen} />
    </Stack.Navigator>
  );
}
