import React from 'react';
import {BottomSheet} from 'react-native-elements';
import Colors from '../../layout/Colors';
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import commonStyle from '../../layout/Style';

import Schedule from './Schedule';
import FlightNumber from './FlightNumber';
import RouteSection from './RouteSection';
import {TabView} from 'react-native-tab-view';
import Font from '../../layout/Font';

import CloseDarkSvg from '../Svg/CloseDark.svg';

function TrackFlightModal({isVisible, setIsVisible}) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'schedule', title: 'Schedule'},
    {key: 'flightNumber', title: 'Flight Number'},
    {key: 'routeSection', title: 'Route'},
  ]);

  const renderScene = ({route, jumpTo}) => {
    switch (route.key) {
      case 'schedule':
        return <Schedule jumpTo={jumpTo} />;
      case 'flightNumber':
        return <FlightNumber jumpTo={jumpTo} />;
      case 'routeSection':
        return <RouteSection jumpTo={jumpTo} />;
      default:
        return <Schedule jumpto={jumpTo} />;
    }
  };

  const _handleIndexChange = i => setIndex(i);

  const _renderTabBar = props => {
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const isActive = i === index;
          return (
            <TouchableOpacity
              key={i?.toString()}
              style={styles.tabItem}
              onPress={() => setIndex(i)}>
              <Animated.Text style={styles.tabTitle(isActive)}>
                {route.title}
              </Animated.Text>
              {i === index ? (
                <View style={styles.underline} />
              ) : (
                <View style={styles.underlineTransparent} />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <BottomSheet isVisible={isVisible} containerStyle={styles.bottomSheetStyle}>
      <View style={styles.card}>
        <View style={commonStyle.rowSpaceBetween}>
          <View>
            <Text style={styles.title}>Track a Flight</Text>
          </View>
          <View>
            <Pressable onPress={() => setIsVisible(false)}>
              <CloseDarkSvg />
            </Pressable>
          </View>
        </View>
        <View>
          <View style={{height: hp('150%')}}>
            <TabView
              navigationState={{index, routes}}
              renderScene={renderScene}
              renderTabBar={_renderTabBar}
              onIndexChange={_handleIndexChange}
              initialLayout={{width: wp('100%')}}
              swipeEnabled={false}
            />
          </View>
        </View>
      </View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp('100%'),
    height: hp('100%'),
  },
  bottomSheetStyle: {
    flex: 1,
    backgroundColor: Colors.bottomSheet,
  },
  card: {
    height: hp('90%'),
    backgroundColor: Colors.white,
    padding: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  title: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 18,
    color: Colors.black,
  },
  tabTitle(isActive) {
    return {
      fontFamily: isActive ? Font.AvenirHeavy : Font.AvenirMedium,
      fontSize: 14,
      color: isActive ? Colors.primary : '#6C6C6C',
    };
  },

  tabBar: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  underline: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
    marginTop: 10,
  },
  underlineTransparent: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#DDDDDD',
    marginTop: 10,
  },
  tabItem: {
    width: '33.33%',
    alignItems: 'center',
  },
});

export default TrackFlightModal;
