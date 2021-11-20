import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenSettings from './ScreenSettings';
import Home from '../screens/Home';
import TimaticWebView from '../screens/TimaticWebView';
import Auth from '../screens/Auth/Auth';
import HotelStackNavigator from './HotelStackNavigator';
const Stack = createNativeStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardOverlayEnabled: true,
      gestureEnabled: true,
      ...ScreenSettings,
    }}>
    <Stack.Screen name={'Home'} component={Home} />
    <Stack.Screen name={'TimaticWebView'} component={TimaticWebView} />
    <Stack.Screen name={'Auth'} component={Auth} />
    <Stack.Screen name={'HotelStack'} component={HotelStackNavigator} />
  </Stack.Navigator>
);

export default HomeNavigator;
