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
import {Icon} from 'react-native-elements';
import Colors from '../../layout/Colors';
import LinearGradient from 'react-native-linear-gradient';
import CustomStatusBar from '../../components/CustomStatusBar';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Font from '../../layout/Font';
import StatusStepBar from '../../components/Hotel/Payment/StatusStepBar';
import Accordion from '../../components/Hotel/Payment/Accordion';

import MasterCardXl from '../../components/Svg/MasterCardXl.svg';
import VisaCardXl from '../../components/Svg/VisaCard.svg';
import LockSvg from '../../components/Svg/Lock.svg';
import CalenderSvg from '../../components/Svg/Calender.svg';
import CardSvg from '../../components/Svg/Card.svg';
import CouponSvg from '../../components/Svg/Hotel/Coupon.svg';

import {Input, CheckBox} from 'react-native-elements';

function Payment({navigation}) {
  const [isAccepted, setIsAccepted] = useState(false);
  return (
    <SafeAreaView style={commonStyle.container}>
      <CustomStatusBar backgroundColor={Colors.primary} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={commonStyle.wrapper}>
          <View style={commonStyle.content}>
            <LinearGradient
              colors={['#1C8CCC', '#015F95']}
              style={styles.canvas}>
              <View style={commonStyle.rowFlexStart}>
                <View style={commonStyle.center}>
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
              <View style={styles.horizontalStepBarSection}>
                <StatusStepBar activeIndex={2} />
              </View>
            </LinearGradient>

            <View>
              <View
                style={[
                  commonStyle.marginVertical(20),
                  commonStyle.paddingHorizontal(8),
                ]}>
                <View style={commonStyle.rowSpaceBetween}>
                  <View style={commonStyle.rowCenter}>
                    <View>
                      <CouponSvg />
                    </View>
                    <View style={commonStyle.marginHorizontal(8)}>
                      <Text style={styles.promoCodeText}>Promo Code</Text>
                    </View>
                  </View>

                  <View>
                    <TextInput
                      style={styles.promoCodeInputBox}
                      placeholder={'Enter promo code…'}
                    />
                  </View>
                  <View>
                    <TouchableOpacity style={styles.promoCodeApplyButton}>
                      <Text style={styles.promoCodeApplyButtonText}>Apply</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View
                style={[
                  commonStyle.marginVertical(10),
                  commonStyle.paddingHorizontal(8),
                ]}>
                <View style={commonStyle.rowFlexStart}>
                  <View>
                    <CardSvg />
                  </View>
                  <View style={commonStyle.marginHorizontal(10)}>
                    <Text style={styles.paymentSectionTitle}>Payment</Text>
                  </View>
                </View>
              </View>
              <View>
                <Accordion
                  visible={true}
                  title={'Card Payment'}
                  Content={
                    <View>
                      <View>
                        <Input
                          inputStyle={styles.inputTextStyle}
                          placeholder={'Card Number'}
                        />
                      </View>
                      <View>
                        <Input
                          inputStyle={styles.inputTextStyle}
                          placeholder={'Name on card'}
                        />
                      </View>
                      <View style={commonStyle.rowSpaceBetween}>
                        <View style={commonStyle.width('50%')}>
                          <Input
                            inputStyle={styles.inputTextStyle}
                            placeholder={'Expiry Date'}
                            rightIcon={<CalenderSvg />}
                          />
                        </View>
                        <View style={commonStyle.width('50%')}>
                          <Input
                            inputStyle={styles.inputTextStyle}
                            keyboardType={'numeric'}
                            placeholder={'CVV'}
                            rightIcon={<LockSvg />}
                          />
                        </View>
                      </View>
                      <View style={commonStyle.rowFlexEnd}>
                        <View style={commonStyle.width('50%')} />
                        <View style={commonStyle.width('50%')}>
                          <Text style={styles.cvvHelper}>
                            The 3 digit number printed on the back of the card
                          </Text>
                        </View>
                      </View>
                    </View>
                  }
                />
              </View>
              <View style={styles.termSection}>
                <View style={commonStyle.rowSpaceBetween}>
                  <View style={commonStyle.width('15%')}>
                    <CheckBox
                      checked={isAccepted}
                      onPress={() => setIsAccepted(!isAccepted)}
                      checkedColor={Colors.primary}
                    />
                  </View>
                  <View style={commonStyle.width('85%')}>
                    <Text style={styles.terms}>
                      I understand and agree with the Terms & Conditions of
                      ezytrip
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={[commonStyle.center, commonStyle.marginHorizontal(20)]}>
              <TouchableOpacity
                onPress={() => navigation.navigate('BookingStatus')}
                style={styles.payButton}>
                <View style={commonStyle.rowSpaceBetween}>
                  <View style={commonStyle.marginHorizontal(2)}>
                    <Text style={styles.payButtonTextHelper}>Pay QAR</Text>
                  </View>
                  <View style={commonStyle.marginHorizontal(2)}>
                    <Text style={styles.payButtonText}>170.00</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={commonStyle.marginVertical(10)}>
              <View style={commonStyle.rowCenter}>
                <View style={commonStyle.marginHorizontal(5)}>
                  <MasterCardXl />
                </View>
                <View style={commonStyle.marginHorizontal(5)}>
                  <VisaCardXl />
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
    height: hp('15%'),
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  inputTextStyle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: Colors.black,
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
  dataDefinition: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#242A37',
  },
  priceTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#26698E',
  },
  mutedText: {
    fontFamily: Font.AvenirRoman,
    fontSize: 12,
    color: '#6C6C6C',
  },
  paymentSectionTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: '#242A37',
  },

  dataDescription: {},
  horizontalStepBarSection: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 8,
  },
  payButton: {
    width: '100%',
    height: 56,
    backgroundColor: '#13A869',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  payButtonText: {
    fontFamily: Font.AvenirBlack,
    fontSize: 18,
    color: Colors.white,
  },
  payButtonTextHelper: {
    fontFamily: Font.AvenirMedium,
    fontSize: 18,
    color: Colors.white,
  },
  termSection: {
    marginVertical: 10,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cvvHelper: {
    fontFamily: Font.AvenirMedium,
    fontSize: 10,
    color: '#475F7B',
  },
  terms: {
    fontFamily: Font.AvenirMedium,
    fontSize: 11,
    color: '#475F7B',
  },
  promoCodeApplyButton: {
    width: 60,
    height: 36,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#1D8CCC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  promoCodeText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#242A37',
  },
  promoCodeApplyButtonText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#1D8CCC',
  },
  promoCodeInputBox: {
    width: 150,
    height: 36,
    borderWidth: 1,
    borderColor: '#AAAAAA',
    borderRadius: 6,
  },
});

export default Payment;
