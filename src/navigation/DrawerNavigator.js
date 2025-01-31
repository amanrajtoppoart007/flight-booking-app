import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SideBar from '../components/SideBar/SideBar';
import Terms from '../screens/Terms';
import Faq from '../screens/Faq';
import Social from '../screens/Social';

import FlightDetails from '../screens/Flight/FlightDetails';
import FlightList from '../screens/Flight/FlightList';
import ReviewFlight from '../screens/Flight/ReviewFlight';
import FareRules from '../screens/Flight/FareRules';
import Search from '../screens/Flight/Search';
import FlightResult from '../screens/Flight/FlightResults';
import AppNavigator from './AppNavigator';
import Privacy from '../screens/Privacy';
import About from '../screens/About';
import Contact from '../screens/Contact';
import LccNavigator from './LccNavigator';
import FlightByNavigator from './FlightByNavigator';

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
      <Drawer.Screen
        options={{drawerPosition: 'right'}}
        name={'About'}
        component={About}
      />
      <Drawer.Screen
        options={{drawerPosition: 'right'}}
        name={'Contact'}
        component={Contact}
      />

      <Drawer.Screen
        options={{drawerPosition: 'right'}}
        name={'Privacy'}
        component={Privacy}
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
      <Drawer.Screen
        options={{drawerPosition: 'right'}}
        name={'LccNavigator'}
        component={LccNavigator}
      />
      <Drawer.Screen
        options={{drawerPosition: 'right'}}
        name={'FlightByNavigator'}
        component={FlightByNavigator}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
