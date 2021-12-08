import React from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../../layout/Colors';
import {TabView} from 'react-native-tab-view';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Font from '../../../layout/Font';
import commonStyle from '../../../layout/Style';
import CheckBox from './CheckBox';
import Deer from '../../Svg/Deer.svg';
import EgyptAir from '../../Svg/EgyptAir.svg';
import RoyalJordanian from '../../Svg/RoyalJordanian.svg';
import AirFrance from '../../Svg/AirFrance.svg';
import IconButton from './IconButton';

function FlightTabView() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'DOH - DXB', title: 'DOH - DXB'},
    {key: 'DXB - DOH', title: 'DXB - DOH'},
  ]);

  const renderScene = ({route, jumpTo}) => {
    switch (route.key) {
      case 'DOH - DXB':
        return <TabFlightView jumpTo={jumpTo} />;
      case 'DXB - DOH':
        return <TabFlightView jumpTo={jumpTo} />;
      default:
        return <TabFlightView jumpto={jumpTo} />;
    }
  };
  const _handleIndexChange = i => setIndex(i);

  const _renderTabBar = props => {
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = i === index ? Colors.primary : '#6C6C6C';
          return (
            <TouchableOpacity
              key={i?.toString()}
              style={styles.tabItem}
              onPress={() => setIndex(i)}>
              <Animated.Text style={[styles.title, {color}]}>
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
    <View style={styles.FlightTabContainer}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={_renderTabBar}
        onIndexChange={_handleIndexChange}
        initialLayout={{width: wp('75%')}}
      />
    </View>
  );
}

function TabFlightView() {
  return (
    <View>
      <View style={commonStyle.marginVertical(5)}>
        <View
          style={[
            commonStyle.marginHorizontal(15),
            commonStyle.marginBottom(16),
          ]}>
          <Text style={styles.listTitle}>Departure Time</Text>
        </View>
        <View
          style={[
            commonStyle.rowSpaceBetween,
            commonStyle.margin(6),
            commonStyle.marginHorizontal(9),
          ]}>
          <IconButton
            icon="partly-sunny-outline"
            onPress={() => {}}
            text="12AM-6AM"
          />
          <IconButton icon="sunny" onPress={() => {}} text="6AM-12PM" />
        </View>
        <View
          style={[
            commonStyle.rowSpaceBetween,
            commonStyle.margin(6),
            commonStyle.marginHorizontal(9),
          ]}>
          <IconButton
            icon="cloudy-night-outline"
            onPress={() => {}}
            text="12PM-6PM"
          />
          <IconButton icon="moon" onPress={() => {}} text="6PM-12AM" />
        </View>
        <View style={styles.divider} />
      </View>
      <View style={commonStyle.marginVertical(5)}>
        <View
          style={[
            commonStyle.marginHorizontal(15),
            commonStyle.marginBottom(16),
          ]}>
          <Text style={styles.listTitle}>Arrival Time</Text>
        </View>
        <View
          style={[
            commonStyle.rowSpaceBetween,
            commonStyle.margin(6),
            commonStyle.marginHorizontal(9),
          ]}>
          <IconButton
            icon="partly-sunny-outline"
            onPress={() => {}}
            text="12AM-6AM"
          />
          <IconButton icon="sunny" onPress={() => {}} text="6AM-12PM" />
        </View>
        <View
          style={[
            commonStyle.rowSpaceBetween,
            commonStyle.margin(6),
            commonStyle.marginHorizontal(9),
          ]}>
          <IconButton
            icon="cloudy-night-outline"
            onPress={() => {}}
            text="12PM-6PM"
          />
          <IconButton icon="moon" onPress={() => {}} text="6PM-12AM" />
        </View>
        <View style={styles.divider} />
      </View>
      <View>
        <View
          style={[
            commonStyle.marginHorizontal(15),
            commonStyle.marginBottom(16),
          ]}>
          <Text style={styles.listTitle}>Fare Policy</Text>
        </View>
        <CheckBox text="Refundable" />
        <CheckBox text="Non-Refundable" />
        <View style={styles.divider} />
        <View
          style={[
            commonStyle.marginHorizontal(15),
            commonStyle.marginBottom(16),
          ]}>
          <Text style={styles.listTitle}>Airlines</Text>
        </View>
        <CheckBox svg={<Deer style={styles.SvgIcon} />} text="Qatar Airways" />
        <CheckBox svg={<EgyptAir style={styles.SvgIcon} />} text="Egypt Air" />
        <CheckBox
          svg={<RoyalJordanian style={styles.SvgIcon} />}
          text="Royal Jordanian"
        />
        <CheckBox
          svg={<AirFrance style={styles.SvgIcon} />}
          text="Air France"
        />
      </View>
    </View>
  );
}

export default FlightTabView;
const styles = StyleSheet.create({
  FlightTabContainer: {
    backgroundColor: 'white',
    width: wp('75%'),
    height: hp('110%'),
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth5,
    borderBottomColor: '#DDDDDD',
    marginBottom: 10,
  },
  SvgIcon: {width: 18, height: 18, marginRight: 5},
  divider: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#D9D9D9',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  underline: {
    width: '90%',
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
    marginTop: 10,
  },
  underlineTransparent: {
    width: '90%',
    borderBottomWidth: 2,
    borderBottomColor: Colors.transparent,
    marginTop: 10,
  },
  tabItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  title: {
    fontSize: 14,
    fontFamily: Font.AvenirHeavy,
  },
  listTitle: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: Font.AvenirMedium,
  },
});
