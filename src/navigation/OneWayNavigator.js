import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FlightResults from '../screens/Flight/OneWay/FlightResults';
import ReviewItinerary from '../screens/Flight/OneWay/ReviewItinerary';
import BookingStatus from '../screens/Flight/OneWay/BookingStatus';
import Payment from '../screens/Flight/OneWay/Payment';
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
    <Stack.Screen name={'ReviewItineraryOneWay'} component={ReviewItinerary} />
    <Stack.Screen name={'PaymentOneWay'} component={Payment} />
    <Stack.Screen name={'BookingStatusOneWay'} component={BookingStatus} />
  </Stack.Navigator>
);

export default FlightBy;
