import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchResult from '../screens/Flight/Lcc/SearchResult';
import ScreenSettings from './ScreenSettings';

const Stack = createStackNavigator();

const LccNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardOverlayEnabled: true,
      gestureEnabled: true,
      ...ScreenSettings,
    }}>
    <Stack.Screen name={'LccHome'} component={SearchResult} />
  </Stack.Navigator>
);

export default LccNavigator;
