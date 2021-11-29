import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenSettings from './ScreenSettings';
import HomeNavigator from './HomeNavigator';
import Auth from '../screens/Auth/Auth';
const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardOverlayEnabled: true,
      gestureEnabled: true,
      ...ScreenSettings,
    }}>
    <Stack.Screen name={'HomeStack'} component={HomeNavigator} />
    <Stack.Screen name={'Auth'} component={Auth} />
  </Stack.Navigator>
);

export default AppNavigator;
