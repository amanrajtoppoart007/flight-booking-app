import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import commonStyle from '../../layout/Style';
import {Icon} from 'react-native-elements';
import Colors from '../../layout/Colors';
import LinearGradient from 'react-native-linear-gradient';
import CustomStatusBar from '../../components/CustomStatusBar';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Font from '../../layout/Font';
import StatusStepBar from '../../components/Flight/Checkout/StatusStepBar';
import Accordion from '../../components/Flight/Checkout/Accordion';

import MasterCardXl from '../../components/Svg/MasterCardXl.svg';
import VisaCardXl from '../../components/Svg/VisaCard.svg';
import LockSvg from '../../components/Svg/Lock.svg';
import CalenderSvg from '../../components/Svg/Calender.svg';
import CardSvg from '../../components/Svg/Card.svg';

import {Input, CheckBox} from 'react-native-elements';

function Payment({navigation}) {
  const [isAccepted, setIsAccepted] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar backgroundColor={Colors.primary} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={commonStyle.wrapper}>
          <View style={commonStyle.content}>
            <LinearGradient
              colors={['#1C8CCC', '#015F95']}
              style={styles.canvas}>
              <View
                style={[
                  commonStyle.rowFlexStart,
                  commonStyle.marginVertical(20),
                ]}>
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
              <View style={styles.horizontalStepBarSection}>
                <StatusStepBar activeIndex={2} />
              </View>
            </LinearGradient>
            <View style={styles.topSection}>
              <View style={[commonStyle.rowSpaceBetween]}>
                <View>
                  <Text style={styles.dataDefinition}>
                    Doha (DOH) → Dubai (DXB)
                  </Text>
                </View>
                <View>
                  <Text style={styles.priceTitle}>Total Price</Text>
                </View>
              </View>
              <View style={[commonStyle.rowSpaceBetween]}>
                <View>
                  <Text style={styles.mutedText}>
                    Wed, 15 Sep, 4 Travellers
                  </Text>
                </View>
                <View style={commonStyle.rowSpaceBetween}>
                  <Text>QAR </Text>
                  <Text style={styles.priceTitle}>170.00</Text>
                </View>
              </View>
              <View style={commonStyle.marginVertical(12)}>
                <View>
                  <Text style={styles.dataDefinition}>
                    Dubai (DXB) → Doha (DOH)
                  </Text>
                </View>
                <View>
                  <Text style={styles.mutedText}>
                    Mon, 20 Sep, 4 Travellers
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.paymentSection}>
              <View style={[commonStyle.marginVertical(10)]}>
                <View style={styles.paymentSectionHeader}>
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
                          inputContainerStyle={styles.inputContainerStyle}
                          placeholder={'Card Number'}
                        />
                      </View>
                      <View>
                        <Input
                          inputStyle={styles.inputTextStyle}
                          inputContainerStyle={styles.inputContainerStyle}
                          placeholder={'Name on card'}
                        />
                      </View>
                      <View style={commonStyle.rowSpaceBetween}>
                        <View style={commonStyle.width('50%')}>
                          <Input
                            inputStyle={styles.inputTextStyle}
                            inputContainerStyle={styles.inputContainerStyle}
                            placeholder={'Expiry Date'}
                            rightIcon={<CalenderSvg />}
                          />
                        </View>
                        <View style={commonStyle.width('50%')}>
                          <Input
                            inputStyle={styles.inputTextStyle}
                            inputContainerStyle={styles.inputContainerStyle}
                            keyboardType={'numeric'}
                            placeholder={'CVV'}
                            rightIcon={<LockSvg />}
                          />
                        </View>
                      </View>
                      <View style={commonStyle.rowFlexEnd}>
                        <View style={commonStyle.width('50%')} />
                        <View style={commonStyle.width('50%')}>
                          <View style={commonStyle.paddingHorizontal(5)}>
                            <Text style={styles.cvvHelper}>
                              The 3 digit number printed on the back of the card
                            </Text>
                          </View>
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

            <View style={commonStyle.center}>
              <TouchableOpacity
                onPress={() => navigation.navigate('BookingConfirm')}
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
  container: {
    ...commonStyle.container,
    backgroundColor: '#F5F7FB',
  },
  canvas: {
    width: '100%',
    height: hp('20%'),
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  topSection: {
    padding: 12,
    backgroundColor: Colors.white,
  },
  paymentSection: {
    marginVertical: 12,
    backgroundColor: Colors.white,
  },
  paymentSectionHeader: {
    ...commonStyle.rowFlexStart,
    paddingHorizontal: 12,
  },
  section: {
    paddingHorizontal: 12,
  },
  inputContainerStyle: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#D9D9D9',
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
    width: wp('80%'),
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
});

export default Payment;
