import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FlightResults from './FlightResults';
import ReviewItinerary from './ReviewItinerary';

const Stack = createStackNavigator();

const FlightBy = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={'FlexiFlight'} component={FlexiFlight} />
    <Stack.Screen name={'MultiCityFlightResults'} component={FlightResults} />
    <Stack.Screen
      name={'MultiCityReviewItinerary'}
      component={ReviewItinerary}
    />
  </Stack.Navigator>
);

export default FlightBy;
