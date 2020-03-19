import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export default function Account({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1C2727',
      }}>
      <Text style={{color: '#E2F5EA'}}>this is account page</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}
