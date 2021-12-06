import React, {useState} from 'react';
import {
  Animated,
  SafeAreaView,
  ScrollView,
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

import ChooseRooms from '../../components/Hotel/Details/ChooseRooms';
import OverView from '../../components/Hotel/Details/OverView';
import {TabView} from 'react-native-tab-view';
import ImageGallery from '../../components/Hotel/Details/ImageGallery';
import StarRating from '../../components/StarRating';

import EditSvg from '../../components/Svg/Hotel/Edit.svg';
import FilterSvg from '../../components/Svg/Hotel/Filter.svg';
import FlightSvg from '../../components/Svg/Profile/Flight.svg';
import MapSvg from '../../components/Svg/Hotel/Map.svg';
import TurnRightSvg from '../../components/Svg/Hotel/TurnRight.svg';
import PlaneSvg from '../../components/Svg/Hotel/Plane.svg';
import GoRightSvg from '../../components/Svg/Hotel/GoRight.svg';

function HotelDetails({navigation}) {
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
    <SafeAreaView
      style={[commonStyle.container, commonStyle.backgroundColor('F5F7FB')]}>
      <CustomStatusBar backgroundColor={Colors.primary} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={commonStyle.wrapper}>
          <View style={commonStyle.content}>
            <LinearGradient
              colors={['#1C8CCC', '#015F95']}
              style={styles.canvas}>
              <View style={styles.contentWrapper}>
                <View style={styles.headerSection}>
                  <View style={commonStyle.rowSpaceBetween}>
                    <View>
                      <Icon
                        name={'md-arrow-back-sharp'}
                        type={'ionicon'}
                        style={styles.icon}
                        color={Colors.white}
                        onPress={() => navigation.goBack()}
                      />
                    </View>
                    <View style={commonStyle.marginHorizontal(10)}>
                      <Text style={styles.title}>Doha, Qatar</Text>
                    </View>
                  </View>
                  <View style={commonStyle.rowSpaceBetween}>
                    <View style={commonStyle.marginHorizontal(20)}>
                      <EditSvg />
                    </View>
                    <View>
                      <FilterSvg />
                    </View>
                  </View>
                </View>
                <View style={commonStyle.marginVertical(9)}>
                  <Text style={styles.roomDetailText}>
                    15 Sep - 20 Sep | Room 1 | 2 Guests
                  </Text>
                </View>
              </View>
            </LinearGradient>
            <View>
              <View style={styles.contentWrapper}>
                <View>
                  <View style={commonStyle.marginVertical(8)}>
                    <View style={commonStyle.rowSpaceBetween}>
                      <View>
                        <View style={commonStyle.rowSpaceBetween}>
                          <View>
                            <Text style={styles.placeTitle}>W Doha</Text>
                          </View>
                          <View style={commonStyle.marginHorizontal(11.5)}>
                            <StarRating rating={4} size={15} />
                          </View>
                        </View>
                        <View
                          style={[
                            commonStyle.rowFlexStart,
                            commonStyle.marginVertical(3),
                          ]}>
                          <View>
                            <MapSvg />
                          </View>
                          <View style={commonStyle.marginHorizontal(5)}>
                            <Text style={styles.placeText}>
                              West Bay, Doha, QA
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View>
                        <View style={commonStyle.rowSpaceBetween}>
                          <View>
                            <PlaneSvg />
                          </View>
                          <View>
                            <Text style={styles.ratingCountText}>4.5/5</Text>
                          </View>
                        </View>
                        <View>
                          <Text style={styles.ratingText}>Excellent</Text>
                        </View>
                      </View>
                    </View>
                    <View>
                      <View style={commonStyle.rowFlexStart}>
                        <View>
                          <TurnRightSvg />
                        </View>
                        <View style={commonStyle.marginHorizontal(5)}>
                          <Text style={styles.addressText}>
                            Fire Station Art Gallery - 2.1 km / 1.3 mi… I
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View>
                    <ImageGallery />
                  </View>
                </View>
              </View>
              <View style={styles.contentWrapper}>
                <View
                  style={[
                    commonStyle.rowSpaceEven,
                    commonStyle.marginHorizontal(10),
                    commonStyle.marginVertical(15),
                  ]}>
                  <View>
                    <Text style={commonStyle.rowSpaceBetween}>
                      <Text style={styles.timeTitle}>Check-In: </Text>
                      <Text style={styles.timeText}>03:00 PM</Text>
                    </Text>
                  </View>
                  <View>
                    <Text style={commonStyle.rowSpaceBetween}>
                      <Text style={styles.timeTitle}>Check-Out:</Text>
                      <Text style={styles.timeText}> 12:00 PM</Text>
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <View style={{height: hp('300%')}}>
                  <TabView
                    swipeEnabled={false}
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
      </ScrollView>
      <LinearGradient
        colors={['#242A37', '#3C4250']}
        style={styles.fixedButtonSection}>
        <View>
          <Text style={styles.helperText}>Your total stay price</Text>
          <View style={commonStyle.rowFlexStart}>
            <View>
              <Text style={styles.currencyTitle}>QAR</Text>
            </View>
            <View style={commonStyle.marginHorizontal(5)}>
              <Text style={styles.priceTitle}>10,790.00</Text>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('GuestDetails')}
            style={styles.continueButton}>
            <View>
              <Text style={styles.continueButtonText}>Continue</Text>
            </View>
            <View style={commonStyle.marginHorizontal(5)}>
              <GoRightSvg />
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  canvas: {
    width: '100%',
    height: hp('15%'),
    justifyContent: 'center',
  },
  contentWrapper: {
    paddingHorizontal: 12,
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
  roomDetailText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#90E0FF',
  },
  placeTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#242A37',
  },
  placeText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#6C6C6C',
  },
  addressText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#26698E',
  },
  ratingCountText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 11,
    color: '#1DAD81',
  },
  ratingText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 11,
    color: '#475F7B',
  },
  timeTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
  },
  timeText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#F15922',
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
  fixedButtonSection: {
    height: 73,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  continueButton: {
    width: 92,
    height: 35,
    backgroundColor: '#F15922',
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  continueButtonText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: Colors.white,
  },
  helperText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: Colors.white,
  },
  currencyTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: Colors.white,
  },
  priceTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: Colors.white,
  },
});

export default HotelDetails;
