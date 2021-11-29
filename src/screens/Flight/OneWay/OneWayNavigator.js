import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FlightResults from './FlightResults';
import ReviewItinerary from './ReviewItinerary';

const Stack = createStackNavigator();

const FlightBy = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={'FlightResultsOneWay'} component={FlightResults} />
    <Stack.Screen name={'ReviewItineraryOneWay'} component={ReviewItinerary} />
  </Stack.Navigator>
);

export default FlightBy;
