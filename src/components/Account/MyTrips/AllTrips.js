import React, {useState} from 'react';
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import commonStyle from '../../../layout/Style';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../../layout/Colors';
import Font from '../../../layout/Font';
import {TabView} from 'react-native-tab-view';
import CustomStatusBar from '../../../components/CustomStatusBar';

import FlightSvg from '../../../components/Svg/Profile/Flight.svg';
import HotelSvg from '../../../components/Svg/Profile/Hotel.svg';
import UpComingTrips from './UpComingTrips';
import CompletedTrips from './CompletedTrips';
import CancelledTrips from './CancelledTrips';

function AllTrips() {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    {key: 'upcoming', title: 'Upcoming'},
    {key: 'completed', title: 'Completed'},
    {key: 'cancelled', title: 'Cancelled'},
  ]);

  const _handleIndexChange = i => setIndex(i);

  const renderScene = ({route, jumpTo}) => {
    switch (route.key) {
      case 'upcoming':
        return <UpComingTrips jumpTo={jumpTo} />;
      case 'completed':
        return <CompletedTrips jumpTo={jumpTo} />;
      case 'cancelled':
        return <CancelledTrips jumpTo={jumpTo} />;
      default:
        return <UpComingTrips jumpto={jumpTo} />;
    }
  };

  const _renderTabBar = props => {
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          return (
            <TouchableOpacity
              key={i?.toString()}
              style={styles.tabItem}
              onPress={() => setIndex(i)}>
              <View style={commonStyle.center}>
                <Animated.Text style={styles.tabTitle}>
                  {route.title}
                </Animated.Text>
              </View>
              {/* {i === index ? (
                <View style={styles.underline} />
              ) : (
                <View style={styles.underlineTransparent} />
              )}*/}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={commonStyle.container}>
      <CustomStatusBar backgroundColor={Colors.primary} />
      <View style={commonStyle.wrapper}>
        <View style={commonStyle.content}>
          <View style={{height: hp('100%')}}>
            <TabView
              navigationState={{index, routes}}
              renderScene={renderScene}
              renderTabBar={_renderTabBar}
              onIndexChange={_handleIndexChange}
              initialLayout={{width: wp('100%')}}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  tabTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: Colors.white,
  },

  tabBar: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1C8CCC',
    paddingHorizontal: 8,
    marginTop: 13,
  },
  underline: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#F15922',
    marginVertical: 5,
  },
  underlineTransparent: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: Colors.transparent,
    marginVertical: 5,
  },
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AllTrips;
