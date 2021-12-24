import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import AuthStack from '../screens/Auth/Auth';

import ScreenSettings from './ScreenSettings';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      cardOverlayEnabled: true,
      gestureEnabled: true,
      ...ScreenSettings,
    }}>
    <Stack.Screen
      name="Auth"
      component={AuthStack}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
