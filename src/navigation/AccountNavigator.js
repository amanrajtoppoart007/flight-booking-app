import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Account from '../screens/Account/Account';
import EditProfile from '../screens/Account/EditProfile';
import MyTravelers from '../screens/Account/MyTravelers';
import PasswordReset from '../screens/Account/PasswordReset';
import MyTrips from '../screens/Account/MyTrips';
import ScreenSettings from './ScreenSettings';
const AccountNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardOverlayEnabled: true,
        gestureEnabled: true,
        ...ScreenSettings,
      }}>
      <Stack.Screen name={'Account'} component={Account} />
      <Stack.Screen name={'EditProfile'} component={EditProfile} />
      <Stack.Screen name={'MyTravelers'} component={MyTravelers} />
      <Stack.Screen name={'PasswordReset'} component={PasswordReset} />
      <Stack.Screen name={'MyTrips'} component={MyTrips} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
