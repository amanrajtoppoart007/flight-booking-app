import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Flight/Home';
import Search from '../screens/Flight/Search';
import Review from '../screens/Flight/ReviewFlight';
import FlightResults from '../screens/Flight/FlightResults';
import BookingConfirm from '../screens/Flight/BookingConfirm';
import ModifySearch from '../screens/Flight/ModifySearch';
import Checkout from '../screens/Flight/Checkout';
import Payment from '../screens/Flight/Payment';
import ReviewItinerary from '../screens/Flight/ReviewItinerary';
import FlightByNavigator from './FlightByNavigator';
import OneWayNavigator from './OneWayNavigator';
import MultiCityNavigator from './MultiCityNavigator';
import ScreenSettings from './ScreenSettings';

import LccNavigator from './LccNavigator';

const Stack = createStackNavigator();
const FlightNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardOverlayEnabled: true,
        gestureEnabled: true,
        ...ScreenSettings,
      }}>
      <Stack.Screen name="FlightHome" component={Home} />
      <Stack.Screen name="LccNavigator" component={LccNavigator} />
      <Stack.Screen name="FlightBy" component={FlightByNavigator} />
      <Stack.Screen name="FlightResult" component={FlightResults} />
      <Stack.Screen name="Review" component={Review} />
      <Stack.Screen name="BookingConfirm" component={BookingConfirm} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="ModifySearch" component={ModifySearch} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="ReviewItinerary" component={ReviewItinerary} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="OneWay" component={OneWayNavigator} />
      <Stack.Screen name="MultiCity" component={MultiCityNavigator} />
      <Stack.Screen name="LccNavigator" component={LccNavigator} />
    </Stack.Navigator>
  );
};

export default FlightNavigator;
