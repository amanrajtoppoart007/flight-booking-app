import React, {useState} from 'react';
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import commonStyle from '../../layout/Style';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';
import Colors from '../../layout/Colors';
import CustomStatusBar from '../../components/CustomStatusBar';
import Font from '../../layout/Font';

import EditSvg from '../../components/Svg/Hotel/Edit.svg';
import FilterSvg from '../../components/Svg/Hotel/Filter.svg';
import ImageGallery from '../../components/Hotel/Details/ImageGallery';
import FlightSvg from '../../components/Svg/Profile/Flight.svg';
import HotelSvg from '../../components/Svg/Profile/Hotel.svg';

import ChooseRooms from '../../components/Hotel/Details/ChooseRooms';
import OverView from '../../components/Hotel/Details/OverView';
import {TabView} from 'react-native-tab-view';

function HotelDetails() {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    {key: 'chooseRooms', title: 'Choose Rooms', Icon: ''},
    {key: 'overview', title: 'Overview', Icon: FlightSvg},
  ]);

  const _handleIndexChange = i => setIndex(i);

  const renderScene = ({route, jumpTo}) => {
    switch (route.key) {
      case 'chooseRooms':
        return <ChooseRooms jumpTo={jumpTo} />;
      case 'overview':
        return <OverView jumpTo={jumpTo} />;
      default:
        return <ChooseRooms jumpto={jumpTo} />;
    }
  };

  const _renderTabBar = props => {
    return (
      <>
        <View style={styles.tabBar}>
          {props.navigationState.routes.map((route, i) => {
            return (
              <TouchableOpacity
                key={i?.toString()}
                style={styles.tabItem}
                onPress={() => setIndex(i)}>
                <Animated.Text style={styles.tabTitle(i === index)}>
                  {route.title}
                </Animated.Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={commonStyle.rowCenter}>
          <View
            style={index === 0 ? styles.underline : styles.underlineTransparent}
          />
          <View
            style={index === 1 ? styles.underline : styles.underlineTransparent}
          />
        </View>
      </>
    );
  };

  return (
    <SafeAreaView style={commonStyle.container}>
      <CustomStatusBar backgroundColor={Colors.primary} />
      <View style={commonStyle.wrapper}>
        <View style={commonStyle.content}>
          <LinearGradient colors={['#1C8CCC', '#015F95']} style={styles.canvas}>
            <View style={styles.headerSection}>
              <View style={commonStyle.rowSpaceBetween}>
                <View>
                  <Icon
                    name={'md-arrow-back-sharp'}
                    type={'ionicon'}
                    style={styles.icon}
                    color={Colors.white}
                  />
                </View>
                <View style={commonStyle.marginHorizontal(10)}>
                  <Text style={styles.title}>Payment</Text>
                </View>
              </View>
              <View style={commonStyle.rowSpaceBetween}>
                <View>
                  <EditSvg />
                </View>
                <View>
                  <FilterSvg />
                </View>
              </View>
            </View>
            <View>
              <Text>15 Sep - 20 Sep | Room 1 | 2 Guests</Text>
            </View>
          </LinearGradient>
          <View>
            <View>
              <View style={commonStyle.rowSpaceBetween}>
                <View>
                  <Text>W Doha</Text>
                  <Text>West Bay, Doha, QA</Text>
                </View>
              </View>
              <View>
                <Text>Fire Station Art Gallery - 2.1 km / 1.3 mi… I</Text>
              </View>
            </View>
            <View>
              <ImageGallery />
            </View>
            <View>
              <View style={commonStyle.rowSpaceEven}>
                <View>
                  <Text>Check-In: 03:00 PM</Text>
                </View>
                <View>
                  <Text>Check-Out: 12:00 PM</Text>
                </View>
              </View>
            </View>
            <View>
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
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  canvas: {
    width: '100%',
    height: hp('15%'),
    justifyContent: 'center',
  },
  icon: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 18,
    color: Colors.white,
  },
  title: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 18,
    color: Colors.white,
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabTitle(isActive) {
    return {
      fontFamily: Font.AvenirHeavy,
      fontSize: 14,
      color: isActive ? '#1D8CCC' : '#6C6C6C',
    };
  },

  tabBar: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
    backgroundColor: Colors.white,
  },
  tabItem: {
    width: wp('45%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  underline: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#1D8CCC',
  },
  underlineTransparent: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: Colors.transparent,
  },
});

export default HotelDetails;
