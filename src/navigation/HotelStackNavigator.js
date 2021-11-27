import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Hotel/Home';
import SearchResult from '../screens/Hotel/SearchResult';
import Checkout from '../screens/Hotel/Checkout';
import BookingStatus from '../screens/Hotel/BookingStatus';
import GuestDetails from '../screens/Hotel/GuestDetails';
import Payment from '../screens/Hotel/Payment';
import HotelDetails from '../screens/Hotel/HotelDetails';
import GuestReviews from '../screens/Hotel/GuestReviews';
import HotelMapView from '../screens/Hotel/HotelMapView';

const Stack = createStackNavigator();
const HotelStackNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={'Home'} component={Home} />
    <Stack.Screen name={'GuestDetails'} component={GuestDetails} />
    <Stack.Screen name={'SearchResult'} component={SearchResult} />
    <Stack.Screen name={'GuestReviews'} component={GuestReviews} />
    <Stack.Screen name={'HotelMapView'} component={HotelMapView} />
    <Stack.Screen name={'HotelDetails'} component={HotelDetails} />
    <Stack.Screen name={'Payment'} component={Payment} />
    <Stack.Screen name={'BookingStatus'} component={BookingStatus} />
    <Stack.Screen name={'HotelCheckout'} component={Checkout} />
  </Stack.Navigator>
);

export default HotelStackNavigator;
