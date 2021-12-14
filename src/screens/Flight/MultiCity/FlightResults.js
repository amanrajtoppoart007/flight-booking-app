import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import commonStyle from '../../../layout/Style';

import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../../../layout/Colors';
import Font from '../../../layout/Font';

import CustomStatusBar from '../../../components/CustomStatusBar';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';

import FlightRoute from '../../../components/Flight/MultiCity/FlightResult/FlightRoute';
import flightRoutes from '../../../utils/flights';
import FlightSvg from '../../../components/Svg/Flight/FlightWhite.svg';
import DeerSvg from '../../../components/Svg/Deer.svg';

function FlightResult({navigation}) {
  const [flightRouteList] = useState(flightRoutes);

  const _renderItem = ({item}) => <FlightRoute item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar backgroundColor={Colors.primary} />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={[commonStyle.flex(1), commonStyle.wrapper]}>
          <View style={[commonStyle.flex(1), commonStyle.content]}>
            <LinearGradient
              colors={['#1C8CCC', '#015F95']}
              style={styles.canvas}>
              <View style={styles.header}>
                <View style={[styles.titleSection, styles.rowSpaceBetween]}>
                  <View style={commonStyle.rowCenter}>
                    <View>
                      <Icon
                        onPress={() => navigation.goBack()}
                        name={'arrow-back'}
                        type={'material-icon'}
                        size={30}
                        color={Colors.white}
                      />
                    </View>
                    <View style={styles.titleWrapper}>
                      <View style={commonStyle.rowSpaceBetween}>
                        <View>
                          <Text style={styles.title}>DOH</Text>
                        </View>
                        <View style={commonStyle.marginHorizontal(8)}>
                          <FlightSvg />
                        </View>
                        <View>
                          <Text style={styles.title}>DXB,</Text>
                        </View>
                      </View>
                      <View
                        style={[
                          commonStyle.rowSpaceBetween,
                          commonStyle.marginHorizontal(8),
                        ]}>
                        <View>
                          <Text style={styles.title}>DOH</Text>
                        </View>
                        <View style={commonStyle.marginHorizontal(8)}>
                          <FlightSvg />
                        </View>
                        <View>
                          <Text style={styles.title}>DXB</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={commonStyle.rowCenter}>
                    <View style={commonStyle.marginHorizontal(5)}>
                      <Icon
                        name={'edit'}
                        type={'feather'}
                        size={18}
                        color={Colors.white}
                      />
                    </View>
                    <View style={commonStyle.marginHorizontal(5)}>
                      <Icon
                        onPress={() => {}}
                        name={'filter-variant'}
                        type={'material-community'}
                        size={18}
                        color={Colors.white}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.subTitleSection}>
                  <Text style={styles.subTitle}>
                    15 Sep - 20 Sep | 4 Travellers | Economy
                  </Text>
                </View>
              </View>
            </LinearGradient>
            <View style={commonStyle.paddingHorizontal(12)}>
              <View style={styles.topSection}>
                <View>
                  <TouchableOpacity style={styles.priceButton}>
                    <Text style={styles.flightCostText}>Cheapest</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <View style={commonStyle.rowFlexEnd}>
                    <View style={commonStyle.marginHorizontal(5)}>
                      <Text style={styles.currency}>QAR</Text>
                    </View>
                    <View>
                      <Text style={styles.price}>170.00</Text>
                    </View>
                  </View>
                  <Text style={styles.travelCountText}>(For 4 travellers)</Text>
                </View>
              </View>
            </View>
            <View>
              <FlatList
                keyExtractor={item => item?.id?.toString()}
                data={flightRouteList}
                renderItem={_renderItem}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomSection}>
        <View style={commonStyle.width('70%')}>
          <View
            style={[commonStyle.rowFlexStart, commonStyle.marginVertical(6)]}>
            <FlightSvg />
            <View style={commonStyle.marginHorizontal(5)}>
              <Text style={styles.bottomHelperTitle}>Your Selection </Text>
            </View>
            <Text style={styles.bottomHelperText}>(For 4 Travellers)</Text>
          </View>
          <View style={styles.bottomFlightSection}>
            {flightRouteList &&
              flightRouteList.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={[
                      commonStyle.rowSpaceBetween,
                      commonStyle.margin(5),
                    ]}>
                    <View style={styles.brand}>
                      <DeerSvg />
                    </View>
                    <View style={commonStyle.marginHorizontal(5)}>
                      <Text style={styles.bottomPlaceText}>
                        {item?.from}→{item?.to}
                      </Text>
                      <Text style={styles.stoppageText}>1 stop</Text>
                    </View>
                  </View>
                );
              })}
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('MultiCityReviewItinerary')}
            style={styles.button}>
            <View style={commonStyle.rowSpaceBetween}>
              <View>
                <Text style={styles.buttonCurrencyText}>QAR</Text>
              </View>
              <View style={commonStyle.marginHorizontal(5)}>
                <Text style={styles.buttonAmountText}>350.00</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContent: {
    paddingBottom: 150,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
  },
  canvas: {
    width: '100%',
    height: hp('15%'),
    justifyContent: 'center',
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    height: 60,
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleSection: {
    marginVertical: 10,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 18,
    color: Colors.white,
  },
  subTitleSection: {marginVertical: 3, marginLeft: 32},
  subTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#90E0FF',
  },
  currency: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#94979D',
  },
  travelCountText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#6C6C6C',
  },
  price: {
    fontFamily: Font.AvenirBlack,
    fontSize: 16,
    color: '#242A37',
  },
  priceButton: {
    padding: 8,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(19, 168, 105, 0.16)',
  },
  flightCostText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#13A869',
  },
  bottomSection: {
    height: 140,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#242A37',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  brand: {
    width: 30,
    height: 30,
    backgroundColor: Colors.white,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomHelperTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#FFFFFF',
  },
  bottomHelperText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#AAAAAA',
  },
  bottomFlightSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  button: {
    padding: 5,
    backgroundColor: Colors.secondary,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCurrencyText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#FFFFFF',
  },
  buttonAmountText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#FFFFFF',
  },
  bottomPlaceText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#FFFFFF',
  },
  stoppageText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#AAAAAA',
  },
});

export default FlightResult;
