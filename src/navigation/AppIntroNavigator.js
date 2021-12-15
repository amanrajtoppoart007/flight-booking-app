import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AuthNavigator from './AuthNavigator';
import WelcomeScreen from '../screens/Welcome';
import ScreenTransition from './ScreenSettings';

const Stack = createStackNavigator();

const AppIntroNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardOverlayEnabled: true,
      gestureEnabled: true,
      ...ScreenTransition,
    }}>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="AuthStack"
      component={AuthNavigator}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default AppIntroNavigator;
