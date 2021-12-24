import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FlexibleFlight from '../screens/Flight/FlightBy/FlexibleFlight';
import FlightResultsOnwards from '../screens/Flight/FlightBy/FlightResultsOnwards';
import FlightResultsReturn from '../screens/Flight/FlightBy/FlightResultsReturn';
import ScreenSettings from './ScreenSettings';
import ReviewItinerary from '../screens/Flight/FlightBy/ReviewItinerary';
import Payment from '../screens/Flight/FlightBy/Payment';
import BookingStatus from '../screens/Flight/FlightBy/BookingStatus';
const Stack = createStackNavigator();

const FlightBy = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardOverlayEnabled: true,
      gestureEnabled: true,
      ...ScreenSettings,
    }}>
    <Stack.Screen name={'FlexibleFlight'} component={FlexibleFlight} />
    <Stack.Screen
      name={'FlightByFlightResultsOnwards'}
      component={FlightResultsOnwards}
    />
    <Stack.Screen
      name={'FlightByFlightResultsReturn'}
      component={FlightResultsReturn}
    />
    <Stack.Screen
      name={'FlightByFlightReviewItinerary'}
      component={ReviewItinerary}
    />
    <Stack.Screen name={'FlightByFlightPayment'} component={Payment} />
    <Stack.Screen
      name={'FlightByFlightBookingStatus'}
      component={BookingStatus}
    />
  </Stack.Navigator>
);

export default FlightBy;
