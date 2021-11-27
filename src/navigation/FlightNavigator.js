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
import FlightByNavigator from '../screens/Flight/FlightBy/FlightByNavigator';

const Stack = createStackNavigator();
const FlightNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="FlightHome" component={Home} />
      <Stack.Screen name="FlightResult" component={FlightResults} />
      <Stack.Screen name="Review" component={Review} />
      <Stack.Screen name="BookingConfirm" component={BookingConfirm} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="ModifySearch" component={ModifySearch} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="ReviewItinerary" component={ReviewItinerary} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="FlightBy" component={FlightByNavigator} />
    </Stack.Navigator>
  );
};

export default FlightNavigator;
