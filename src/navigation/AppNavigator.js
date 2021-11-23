import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenSettings from './ScreenSettings';
import HomeNavigator from './HomeNavigator';
import Auth from '../screens/Auth/Auth';
const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardOverlayEnabled: true,
      gestureEnabled: true,
      ...ScreenSettings,
    }}>
    <Stack.Screen name={'Auth'} component={Auth} />
    <Stack.Screen name={'HomeStack'} component={HomeNavigator} />
  </Stack.Navigator>
);

export default AppNavigator;
