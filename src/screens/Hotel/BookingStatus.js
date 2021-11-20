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
import CustomStatusBar from '../../components/CustomStatusBar';
import Colors from '../../layout/Colors';

import LinearGradient from 'react-native-linear-gradient';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Font from '../../layout/Font';

import AssistanceCard from '../../components/Hotel/Booking/AssistanceCard';
import StarRating from '../../components/StarRating';
import Accordion from '../../components/Hotel/Booking/Accordion';
import GuestCard from '../../components/Hotel/Booking/GuestCard';
import PriceSectionContent from '../../components/Hotel/Booking/PriceSectionContent';

import HelpSvg from '../../assets/icons/svg/Assistance.svg';
import ShareSvg from '../../assets/icons/svg/Share.svg';
import ConfirmSvg from '../../assets/icons/svg/Confirm.svg';
import HotelSvg from '../../components/Svg/Hotel/Hotel.svg';
import PinSvg from '../../components/Svg/Hotel/Pin.svg';
import VisaSvg from '../../components/Svg/Hotel/Visa.svg';

function BookingStatus() {
  const [isAssistanceEnabled, setIsAssistanceEnabled] = useState(false);
  const [isSendRequestVisible, setIsSendRequestVisible] = useState(false);
  return (
    <SafeAreaView style={commonStyle.container}>
      <CustomStatusBar backgroundColor={'#13A869'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={commonStyle.wrapper}>
          <View style={commonStyle.content}>
            <LinearGradient
              colors={['#13A869', '#025A35']}
              style={styles.canvas}>
              <View style={styles.headerSection}>
                <View />
                <View style={commonStyle.marginHorizontal(14)}>
                  <TouchableOpacity
                    onPress={() =>
                      setIsAssistanceEnabled(!isAssistanceEnabled)
                    }>
                    <HelpSvg style={styles.icon} />
                  </TouchableOpacity>
                  <View>
                    <AssistanceCard
                      isSendRequestVisible={isSendRequestVisible}
                      isVisible={isAssistanceEnabled}
                      setIsVisible={setIsAssistanceEnabled}
                      setIsSendRequestVisible={setIsSendRequestVisible}
                    />
                  </View>
                </View>
                <View>
                  <ShareSvg style={styles.icon} />
                </View>
              </View>
              <View style={commonStyle.center}>
                <View>
                  <ConfirmSvg style={styles.confirmIcon} />
                </View>
                <View style={commonStyle.marginVertical(5)}>
                  <Text style={styles.title}>Booking Confirmed</Text>
                </View>
                <View>
                  <Text style={styles.titleHelper}>
                    You will receive e-ticket and itinerary on your email
                    address
                  </Text>
                </View>
              </View>
            </LinearGradient>
            <View>
              <View style={styles.cardHeader}>
                <View>
                  <Text style={styles.headTitle}>Booking ID: #A145XD</Text>
                </View>
                <View>
                  <Text style={styles.headTitle}>Booked On: 19/08/2021</Text>
                </View>
              </View>
            </View>
            <View style={styles.hotelDetailSection}>
              <View style={commonStyle.rowFlexStart}>
                <View style={commonStyle.width('25%')}>
                  <HotelSvg />
                </View>
                <View style={commonStyle.width('75%')}>
                  <View style={styles.hotelNameSection}>
                    <View>
                      <Text>W Doha</Text>
                    </View>
                    <View style={commonStyle.marginHorizontal(11.5)}>
                      <StarRating rating={3} size={12} />
                    </View>
                  </View>
                  <View style={styles.hotelLocationSection}>
                    <View>
                      <PinSvg />
                    </View>
                    <View>
                      <Text>West Bay, Doha, QA</Text>
                    </View>
                  </View>
                  <View style={styles.counterSection}>
                    <View style={styles.counterColumnRightBorder}>
                      <Text>No. of Nights: 4</Text>
                    </View>
                    <View style={styles.counterColumnLeftBorder}>
                      <Text>No. of Rooms: 3</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <View style={styles.timeSectionDivider} />
              </View>
              <View style={styles.timeSection}>
                <View>
                  <Text style={styles.timeTitle}>Check-In:</Text>
                  <View style={commonStyle.rowFlexStart}>
                    <View>
                      <Text style={styles.dateText}>15-10-2021 </Text>
                    </View>
                    <View>
                      <Text style={styles.timeText}>03:00 PM</Text>
                    </View>
                  </View>
                </View>
                <View>
                  <Text style={styles.timeTitle}>Check-In:</Text>
                  <View style={commonStyle.rowFlexStart}>
                    <View>
                      <Text style={styles.dateText}>15-10-2021 </Text>
                    </View>
                    <View>
                      <Text style={styles.timeText}>03:00 PM</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View>
              <View style={commonStyle.marginHorizontal(3.5)}>
                <Accordion title={'Room 1'} Content={<GuestCard />} />
              </View>
              <View style={commonStyle.marginHorizontal(3.5)}>
                <Accordion title={'Room 2'} Content={<GuestCard />} />
              </View>
              <View style={commonStyle.marginHorizontal(3.5)}>
                <Accordion title={'Room 3'} Content={<GuestCard />} />
              </View>
              <View style={commonStyle.marginHorizontal(3.5)}>
                <Accordion
                  title={'Price Details'}
                  Content={
                    <View style={styles.priceSection}>
                      <View>
                        <PriceSectionContent
                          title={'Room 1: (1 Adult, 2 Children)'}
                          subTitle={'Spectacular Room, 1 King…'}
                          visible={true}
                        />
                      </View>
                      <View>
                        <PriceSectionContent
                          title={'Room 2: (1 Adult, 2 Children)'}
                          subTitle={'Spectacular Room, 1 King…'}
                          visible={true}
                        />
                      </View>
                      <View>
                        <View style={styles.discountSection}>
                          <View>
                            <Text style={styles.discountTitle}>
                              Promo Discount
                            </Text>
                          </View>
                          <View>
                            <View style={commonStyle.rowSpaceBetween}>
                              <View style={commonStyle.marginHorizontal(5)}>
                                <Text style={styles.discountText('currency')}>
                                  - QAR
                                </Text>
                              </View>
                              <View>
                                <Text style={styles.discountText('price')}>
                                  50.00
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                        <View>
                          <View
                            style={[styles.divider, commonStyle.width('100%')]}
                          />
                        </View>
                        <View style={styles.totalSection}>
                          <View>
                            <Text style={styles.totalSectionTitle}>
                              Grand Total
                            </Text>
                            <Text style={styles.totalTitleHelper}>
                              Taxes and Fees Included
                            </Text>
                          </View>
                          <View style={commonStyle.rowSpaceBetween}>
                            <View style={commonStyle.marginHorizontal(5)}>
                              <Text
                                style={styles.totalSectionText(
                                  '#94979D',
                                  'currency',
                                )}>
                                - QAR
                              </Text>
                            </View>
                            <View>
                              <Text
                                style={styles.totalSectionText(
                                  '#0B151F',
                                  'price',
                                )}>
                                300.00
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  }
                />
              </View>
              <View style={commonStyle.marginHorizontal(3.5)}>
                <Accordion
                  title={'Payment Detail'}
                  Content={
                    <View style={styles.paymentSection}>
                      <View style={commonStyle.rowSpaceBetween}>
                        <View>
                          <Text style={styles.paymentSectionText('#26698E')}>
                            Credit Card
                          </Text>
                        </View>
                        <View style={commonStyle.rowSpaceBetween}>
                          <View style={commonStyle.marginHorizontal(5)}>
                            <VisaSvg />
                          </View>
                          <Text style={styles.paymentSectionText('#26698E')}>
                            ****3434
                          </Text>
                        </View>
                        <View style={commonStyle.rowSpaceBetween}>
                          <View style={commonStyle.marginHorizontal(5)}>
                            <Text style={styles.paymentSectionText('#6C6C6C')}>
                              QAR
                            </Text>
                          </View>

                          <Text style={styles.totalPaymentText}>300.00</Text>
                        </View>
                      </View>
                    </View>
                  }
                />
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
    height: hp('28%'),
  },
  icon: {
    width: 21,
    height: 21,
  },
  confirmIcon: {
    width: 40,
    height: 40,
  },
  headerSection: {
    marginHorizontal: 14,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 20,
    color: Colors.white,
  },
  titleHelper: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: Colors.white,
    textAlign: 'center',
    width: 250,
  },
  card: {
    backgroundColor: Colors.white,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    height: 40,
    paddingHorizontal: 8,
  },
  hotelDetailSection: {
    paddingHorizontal: 12,
    marginVertical: 12,
  },
  hotelNameSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 7,
    marginBottom: 3.5,
  },
  hotelLocationSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 3.5,
  },
  counterSection: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 3.5,
  },
  counterColumnRightBorder: {
    width: '50%',
    borderRightWidth: 1,
    borderRightColor: '#DDDDDD',
    paddingRight: 14.5,
  },
  counterColumnLeftBorder: {
    width: '50%',
    borderLeftWidth: 1,
    borderLeftColor: '#DDDDDD',
    paddingLeft: 14.5,
  },
  timeSectionDivider: {
    marginVertical: 12,
    width: '100%',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  timeSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  timeTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#6C6C6C',
  },
  dateText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#6C6C6C',
  },
  timeText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#F15922',
  },

  headTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 15,
    color: Colors.white,
  },
  divider: {
    width: '95%',
    borderWidth: 0.3,
    borderColor: Colors.lightText,
    alignSelf: 'center',
    marginVertical: 18,
  },
  priceSection: {
    paddingHorizontal: 15.5,
    paddingVertical: 7,
  },
  discountSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 3.5,
  },
  discountTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#13A869',
  },
  discountText(type) {
    return {
      fontFamily: type === 'currency' ? Font.AvenirMedium : Font.AvenirBlack,
      fontSize: 14,
      color: '#13A869',
    };
  },
  totalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 7,
  },
  totalSectionTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#242A37',
  },
  totalTitleHelper: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#242A37',
  },
  totalSectionText(color, type) {
    return {
      fontFamily: type === 'currency' ? Font.AvenirMedium : Font.AvenirBlack,
      fontSize: 14,
      color,
    };
  },
  paymentSection: {
    paddingHorizontal: 15.5,
    paddingVertical: 7,
    marginBottom: 30,
  },
  paymentSectionText(color) {
    return {
      fontFamily: Font.AvenirMedium,
      fontSize: 14,
      color,
    };
  },
  totalPaymentText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#0B151F',
  },
});

export default BookingStatus;
