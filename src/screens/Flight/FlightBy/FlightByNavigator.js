import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FlexiFlight from './FlexiFlight';
import FlightResultsOnwards from './FlightResultsOnwards';
import FlightResultsReturn from './FlightResultsReturn';

const Stack = createStackNavigator();

const FlightBy = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={'FlexiFlight'} component={FlexiFlight} />
    <Stack.Screen
      name={'FlightResultsOnwards'}
      component={FlightResultsOnwards}
    />
    <Stack.Screen
      name={'FlightResultsReturn'}
      component={FlightResultsReturn}
    />
  </Stack.Navigator>
);

export default FlightBy;
