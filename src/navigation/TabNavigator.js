import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import FlightHome from '../screens/Flight/Home';
import Offer from '../screens/Offer';

import HomeSvg from '../components/Svg/Tab/Home.svg';
import FlightSvg from '../components/Svg/Tab/Flight.svg';
import OfferSvg from '../components/Svg/Tab/Offer.svg';
import UserSvg from '../components/Svg/Tab/Feed.svg';

import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../layout/Colors';
import commonStyle from '../layout/Style';
import {useState} from 'react';
// import TrackFlightModal from '../components/TrackFlight/TrackFlightModal';
import PackageModal from '../components/Home/PackageModal';
import AccountNavigator from './AccountNavigator';
const Tab = createBottomTabNavigator();

const menus = [
  {
    title: 'Home',
    svgIcon: HomeSvg,
  },
  {
    title: 'Flight',
    svgIcon: FlightSvg,
  },
  {
    title: 'Offer',
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
      <PackageModal isVisible={isVisible} setIsVisible={setIsVisible} />
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress =
          route.name === 'Flight'
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
      borderColor: isFocused ? '#1D8CCC' : 'transparent',
      width: 30,
    };
  },
});

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{headerShown: false}}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Flight" component={FlightHome} />
      <Tab.Screen name="Offer" component={Offer} />
      <Tab.Screen
        name="AccountStack"
        options={{headerShown: false}}
        component={AccountNavigator}
      />
    </Tab.Navigator>
  );
}
