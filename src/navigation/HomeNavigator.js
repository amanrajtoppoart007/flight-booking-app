import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenSettings from './ScreenSettings';
import TimaticWebView from '../screens/TimaticWebView';
import Auth from '../screens/Auth/Auth';
import HotelStackNavigator from './HotelStackNavigator';
import FlightNavigator from './FlightNavigator';
import TabNavigator from './TabNavigator';
const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardOverlayEnabled: true,
      gestureEnabled: true,
      ...ScreenSettings,
    }}>
    <Stack.Screen name={'HomeTabs'} component={TabNavigator} />
    <Stack.Screen name={'TimaticWebView'} component={TimaticWebView} />
    <Stack.Screen name={'Auth'} component={Auth} />
    <Stack.Screen name={'HotelStack'} component={HotelStackNavigator} />
    <Stack.Screen name={'FlightStack'} component={FlightNavigator} />
  </Stack.Navigator>
);

export default HomeNavigator;
