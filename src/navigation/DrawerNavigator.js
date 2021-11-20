import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SideBar from '../components/SideBar';
import TabNavigator from './TabNavigator';
import Terms from '../screens/Terms';
import Faq from '../screens/Faq';
import Social from '../screens/Social';

import FlightDetails from '../screens/Flight/FlightDetails';
import FlightList from '../screens/Flight/FlightList';
import ReviewFlight from '../screens/Flight/ReviewFlight';
import FareRules from '../screens/Flight/FareRules';
import Search from '../screens/Flight/Search';
import FlightResult from '../screens/Flight/FlightResults';
import Auth from '../screens/Auth/Auth';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <SideBar {...props} />}
      drawerPosition="right">
      <Drawer.Screen
        options={{drawerPosition: 'right'}}
        name={'Auth'}
        component={Auth}
      />
      <Drawer.Screen
        options={{drawerPosition: 'right'}}
        name="HomeTabs"
        component={TabNavigator}
      />
      <Drawer.Screen
        options={{drawerPosition: 'right'}}
        name={'Terms'}
        component={Terms}
      />
      <Drawer.Screen
        options={{drawerPosition: 'right'}}
        name={'Faq'}
        component={Faq}
      />
      <Drawer.Screen
        options={{drawerPosition: 'right'}}
        name={'Social'}
        component={Social}
      />
      <Drawer.Screen
        options={{drawerPosition: 'right'}}
        name={'FlightDetails'}
        component={FlightDetails}
      />
      <Drawer.Screen
        options={{drawerPosition: 'right'}}
        name={'FlightList'}
        component={FlightList}
      />
      <Drawer.Screen
        options={{drawerPosition: 'right'}}
        name={'ReviewFlight'}
        component={ReviewFlight}
      />
      <Drawer.Screen
        options={{drawerPosition: 'right'}}
        name={'FareRules'}
        component={FareRules}
      />
      <Drawer.Screen
        options={{drawerPosition: 'right'}}
        name={'Search'}
        component={Search}
      />
      <Drawer.Screen
        options={{drawerPosition: 'right'}}
        name={'FlightResult'}
        component={FlightResult}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
