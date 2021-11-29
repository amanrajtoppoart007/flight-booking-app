import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FlexiFlight from '../screens/Flight/FlightBy/FlexiFlight';
import FlightResultsOnwards from '../screens/Flight/FlightBy/FlightResultsOnwards';
import FlightResultsReturn from '../screens/Flight/FlightBy/FlightResultsReturn';
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
    <Stack.Screen name={'FlexiFlight'} component={FlexiFlight} />
    <Stack.Screen
      name={'FlightResultsOnwards'}
      component={FlightResultsOnwards}
    />
    <Stack.Screen
      name={'FlightResultsReturn'}
      component={FlightResultsReturn}
    />
  </Stack.Navigator>
);

export default FlightBy;
