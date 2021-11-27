import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FlexiFlight from './FlexiFlight';
import FlightResultsOnwards from './FlightResultsOnwards';

const Stack = createStackNavigator();

const FlightBy = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={'FlexiFlight'} component={FlexiFlight} />
    <Stack.Screen
      name={'FlightResultsOnwards'}
      component={FlightResultsOnwards}
    />
  </Stack.Navigator>
);

export default FlightBy;
