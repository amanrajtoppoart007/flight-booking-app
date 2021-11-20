import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeNavigator from './HomeNavigator';
import FlightNavigator from './FlightNavigator';
import AccountNavigator from './AccountNavigator';

import HomeSvg from '../components/Svg/Tab/Home.svg';
import FlightSvg from '../components/Svg/Tab/Flight.svg';
import OfferSvg from '../components/Svg/Tab/Offer.svg';
import UserSvg from '../components/Svg/Tab/Feed.svg';

import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../layout/Colors';
import commonStyle from '../layout/Style';
import {useState} from 'react';
import TrackFlightModal from '../components/TrackFlight/TrackFlightModal';
import Offer from '../screens/Offer';

const Tab = createBottomTabNavigator();

const menus = [
  {
    title: 'HomeStack',
    svgIcon: HomeSvg,
  },
  {
    title: 'FlightStack',
    svgIcon: FlightSvg,
  },
  {
    title: 'OfferStack',
    svgIcon: OfferSvg,
  },
  {
    title: 'AccountStack',
    svgIcon: UserSvg,
  },
];
function TabBarItem({route}) {
  let menu = {};
  menus.map(item => {
    if (item.title === route.name) {
      menu = item;
    }
  });
  const SvgIcon = menu.svgIcon;
  return (
    <View>
      <SvgIcon resizeMode={'contain'} style={styles.icon} />
    </View>
  );
}

function MyTabBar({state, descriptors, navigation}) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.tabBar}>
      <TrackFlightModal isVisible={isVisible} setIsVisible={setIsVisible} />
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress =
          route.name === 'FlightStack'
            ? () => setIsVisible(!isVisible)
            : () => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                  // The `merge: true` option makes sure that the params inside the tab screen are preserved
                  navigation.navigate({name: route.name, merge: true});
                }
              };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <View key={index?.toString()} style={commonStyle.center}>
            <View style={styles.divider(isFocused)} />
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabBarItemWrapper}>
              <TabBarItem isFocused={isFocused} route={route} />
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: Colors.background,
    height: 62,
    borderTopWidth: 0.5,
    borderTopColor: '#1D8CCC',
  },
  tabBarItemWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider(isFocused) {
    return {
      borderWidth: 2,
      borderColor: isFocused ? '#1D8CCC' : 'white',
      width: 30,
    };
  },
});

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={'HomeStack'}
      screenOptions={{headerShown: false}}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="HomeStack" component={HomeNavigator} />
      <Tab.Screen name="FlightStack" component={FlightNavigator} />
      <Tab.Screen name="OfferStack" component={Offer} />
      <Tab.Screen
        name="AccountStack"
        options={{headerShown: false}}
        component={AccountNavigator}
      />
    </Tab.Navigator>
  );
}
