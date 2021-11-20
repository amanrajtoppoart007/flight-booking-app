import React, {useState} from 'react';
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import commonStyle from '../../layout/Style';
import AllTrips from '../../components/Account/MyTrips/AllTrips';
import Flight from '../../components/Account/MyTrips/Flight';
import Hotel from '../../components/Account/MyTrips/Hotel';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../layout/Colors';
import Font from '../../layout/Font';
import {TabView} from 'react-native-tab-view';
import CustomStatusBar from '../../components/CustomStatusBar';

import FlightSvg from '../../components/Svg/Profile/Flight.svg';
import HotelSvg from '../../components/Svg/Profile/Hotel.svg';

function MyTrips() {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    {key: 'all', title: 'All', Icon: ''},
    {key: 'flight', title: 'Flight', Icon: FlightSvg},
    {key: 'hotel', title: 'Hotel', Icon: HotelSvg},
  ]);

  const _handleIndexChange = i => setIndex(i);

  const renderScene = ({route, jumpTo}) => {
    switch (route.key) {
      case 'all':
        return <AllTrips jumpTo={jumpTo} />;
      case 'flight':
        return <Flight jumpTo={jumpTo} />;
      case 'hotel':
        return <Hotel jumpTo={jumpTo} />;
      default:
        return <AllTrips jumpto={jumpTo} />;
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
              <View>
                {route?.key === 'all' && (
                  <Animated.Text style={styles.tabTitle}>
                    {route.title}
                  </Animated.Text>
                )}

                {route?.key === 'flight' && <FlightSvg />}
                {route?.key === 'hotel' && <HotelSvg />}
              </View>
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
    <SafeAreaView
      style={[
        commonStyle.container,
        commonStyle.backgroundColor(Colors.primary),
      ]}>
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
    height: 43,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
    backgroundColor: '#43ADEA',
    marginTop: 15,
  },
  underline: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: Colors.white,
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
    marginHorizontal: 15,
  },
});

export default MyTrips;
