import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenSettings from './ScreenSettings';
import Home from '../screens/Home';
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
    <Stack.Screen name={'Home'} component={Home} />
    <Stack.Screen name={'Auth'} component={Auth} />
  </Stack.Navigator>
);

export default AppNavigator;
