import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import commonStyle from '../../layout/Style';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';
import Colors from '../../layout/Colors';
import CustomStatusBar from '../../components/CustomStatusBar';
import Accordion from '../../components/Flight/ReviewItinerary/Accordion';
import Font from '../../layout/Font';
import FlightCard from '../../components/Flight/ReviewItinerary/FlightCard';

import CouponSvg from '../../components/Svg/Coupon.svg';
import FairDetail from '../../components/Flight/ReviewItinerary/FareDetail';

function ReviewItinerary({navigation}) {
  const [isFareSectionVisible, setIsFareSectionVisible] = useState(true);
  return (
    <SafeAreaView
      style={[
        commonStyle.container,
        commonStyle.backgroundColor(Colors.primary),
      ]}>
      <CustomStatusBar backgroundColor={Colors.primary} />
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={commonStyle.wrapper}>
          <View
            style={[
              commonStyle.content,
              commonStyle.backgroundColor(Colors.white),
            ]}>
            <LinearGradient
              colors={['#1C8CCC', '#015F95']}
              style={styles.canvas}>
              <View style={commonStyle.rowFlexStart}>
                <View style={commonStyle.center}>
                  <Icon
                    onPress={() => navigation.goBack()}
                    name={'md-arrow-back-sharp'}
                    type={'ionicon'}
                    style={styles.icon}
                    color={Colors.white}
                  />
                </View>
                <View style={commonStyle.marginHorizontal(10)}>
                  <Text style={styles.title}>Review Itinerary</Text>
                </View>
              </View>
            </LinearGradient>
            <View>
              <Accordion
                title={'Departing'}
                itinerary={'DOH - DXB'}
                Content={<FlightCard />}
                isCollapsed={true}
              />
            </View>
            <View>
              <Accordion
                title={'Returning '}
                itinerary={'DXB - DOH'}
                Content={<FlightCard />}
                isCollapsed={true}
              />
            </View>
            <View style={styles.couponSection}>
              <View style={commonStyle.rowSpaceBetween}>
                <View style={commonStyle.rowSpaceBetween}>
                  <View>
                    <CouponSvg />
                  </View>
                  <View style={commonStyle.marginHorizontal(4)}>
                    <Text style={styles.couponTitle}>Promo Code</Text>
                  </View>
                </View>
                <View>
                  <TextInput
                    style={styles.couponInputBox}
                    placeholder={'Enter promo code…'}
                  />
                </View>
                <View>
                  <TouchableOpacity style={styles.couponBtn}>
                    <Text style={styles.couponBtnText}>Apply</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.divider} />
            {isFareSectionVisible && (
              <View style={commonStyle.padding(8)}>
                <View>
                  <Text style={styles.sectionTitle}>Fare Summery</Text>
                </View>
                <View>
                  <FairDetail />
                </View>
              </View>
            )}

            <View style={styles.checkoutBtnWrapper}>
              <View style={styles.checkOutBtnSection}>
                <View style={commonStyle.rowSpaceBetween}>
                  <View>
                    <View style={commonStyle.rowSpaceBetween}>
                      <View>
                        <Icon
                          name={isFareSectionVisible ? 'up' : 'down'}
                          onPress={() =>
                            setIsFareSectionVisible(!isFareSectionVisible)
                          }
                          type={'antdesign'}
                          size={16}
                          color={'#898989'}
                        />
                      </View>
                      <View style={commonStyle.rowSpaceBetween}>
                        <View style={commonStyle.marginHorizontal(4)}>
                          <Text style={styles.currency}>QAR</Text>
                        </View>
                        <View>
                          <Text style={styles.totalPrice}> 300.00</Text>
                        </View>
                      </View>
                    </View>
                    <View>
                      <Text>(For 4 Travellers)</Text>
                    </View>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Checkout')}
                      style={styles.checkOutBtn}>
                      <Text style={styles.checkOutBtnText}>Continue</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  canvas: {
    width: '100%',
    height: hp('12%'),
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
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
  couponSection: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  couponTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: Colors.black,
  },
  couponInputBox: {
    fontSize: 12,
    fontFamily: Font.AvenirMedium,
    color: Colors.black,
    width: 150,
    height: 34,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#AAAAAA',
    paddingHorizontal: 8,
  },
  couponBtn: {
    width: 60,
    height: 36,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#1D8CCC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  couponBtnText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#1D8CCC',
  },
  sectionTitle: {
    fontFamily: Font.AvenirBlack,
    fontSize: 14,
    color: Colors.black,
  },
  divider: {
    width: '100%',
    borderBottomWidth: StyleSheet.hairlineWidth5,
    borderBottomColor: '#707070',
    marginVertical: 10,
  },
  checkoutBtnWrapper: {
    borderTopWidth: 5,
    borderTopColor: '#F2F5FC',
    backgroundColor: '#F2F5FC',
  },
  checkOutBtnSection: {
    paddingHorizontal: 12,
    backgroundColor: Colors.white,
    paddingVertical: 8,
  },
  currency: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: Colors.black,
  },
  totalPrice: {
    fontFamily: Font.AvenirBlack,
    fontSize: 16,
    color: Colors.black,
  },
  helperText: {
    fontFamily: Font.AvenirRoman,
    fontSize: 12,
    color: '#6C6C6C',
  },
  checkOutBtn: {
    width: 110,
    height: 45,
    backgroundColor: Colors.secondary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkOutBtnText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 16,
    color: Colors.white,
  },
});

export default ReviewItinerary;
