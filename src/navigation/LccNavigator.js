import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchResult from '../screens/Flight/Lcc/SearchResult';

import AddServices from '../screens/Flight/Lcc/AddServices';
import AddSeats from '../screens/Flight/Lcc/AddSeats';
import ScreenSettings from './ScreenSettings';
import ReviewItinerary from '../screens/Flight/Lcc/ReviewItinerary';
import BookingStatus from '../screens/Flight/Lcc/BookingStatus';
const Stack = createStackNavigator();

const LccNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardOverlayEnabled: true,
      gestureEnabled: true,
      ...ScreenSettings,
    }}>
    <Stack.Screen name={'LccSearchResult'} component={SearchResult} />
    <Stack.Screen name={'LccAddSeats'} component={AddSeats} />
    <Stack.Screen name={'LccAddServices'} component={AddServices} />

    <Stack.Screen name={'LccBookingStatus'} component={BookingStatus} />
    <Stack.Screen name={'LccReviewItinerary'} component={ReviewItinerary} />
  </Stack.Navigator>
);

export default LccNavigator;
