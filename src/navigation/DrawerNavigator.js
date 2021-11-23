import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SideBar from '../components/SideBar';
import AppNavigator from './AppNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <SideBar {...props} />}
      drawerPosition="right">
      <Drawer.Screen
        options={{drawerPosition: 'right'}}
        name={'AppNavigator'}
        component={AppNavigator}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
