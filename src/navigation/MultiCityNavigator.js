import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FlightResults from '../screens/Flight/MultiCity/FlightResults';
import ReviewItinerary from '../screens/Flight/MultiCity/ReviewItinerary';
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
    <Stack.Screen name={'MultiCityFlightResults'} component={FlightResults} />
    <Stack.Screen
      name={'MultiCityReviewItinerary'}
      component={ReviewItinerary}
    />
  </Stack.Navigator>
);

export default FlightBy;
