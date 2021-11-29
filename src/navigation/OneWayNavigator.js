import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FlightResults from '../screens/Flight/OneWay/FlightResults';
import ReviewItinerary from '../screens/Flight/OneWay/ReviewItinerary';
import ScreenSettings from './ScreenSettings';

const Stack = createStackNavigator();

const FlightBy = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardOverlayEnabled: true,
      gestureEnabled: true,
      ...ScreenSettings,
    }}>
    <Stack.Screen name={'FlightResultsOneWay'} component={FlightResults} />
    <Stack.Screen name={'OneWayReviewItinerary'} component={ReviewItinerary} />
  </Stack.Navigator>
);

export default FlightBy;
