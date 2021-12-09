import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
} from 'react-native';
import commonStyle from '../../layout/Style';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import CustomStatusBar from '../../components/CustomStatusBar';

import HelpSvg from '../../assets/icons/svg/Assistance.svg';
import ShareSvg from '../../assets/icons/svg/Share.svg';
import ConfirmSvg from '../../assets/icons/svg/Confirm.svg';
import Font from '../../layout/Font';
import Colors from '../../layout/Colors';
import BookingDetailCard from '../../components/Flight/Booking/BookingDetailCard';
import Accordion from '../../components/Flight/Booking/Accordion';
import FairDetail from '../../components/Flight/Booking/FareDetail';
import SendRequestModal from '../../components/Flight/Booking/SendRequestModal';
import TicketList from '../../components/Flight/Booking/TicketList';

import CallSvg from '../../components/Svg/Call.svg';
import CallBackSvg from '../../components/Svg/CallBack.svg';
import EmailSvg from '../../components/Svg/Email.svg';
import VisaCardSvg from '../../components/Svg/VisaCard.svg';

function AssistanceCard({isVisible, setIsSendRequestVisible}) {
  return (
    <>
      {isVisible && (
        <View style={cardStyle.card}>
          <View
            style={[commonStyle.rowFlexStart, commonStyle.marginVertical(8)]}>
            <View>
              <CallSvg />
            </View>
            <View style={commonStyle.marginHorizontal(8)}>
              <Text>Call</Text>
            </View>
          </View>
          <Pressable
            onPress={() => setIsSendRequestVisible(true)}
            style={[commonStyle.rowFlexStart, commonStyle.marginVertical(8)]}>
            <View>
              <EmailSvg />
            </View>
            <View style={commonStyle.marginHorizontal(8)}>
              <Text>Send a request</Text>
            </View>
          </Pressable>
          <View
            style={[commonStyle.rowFlexStart, commonStyle.marginVertical(8)]}>
            <View>
              <CallBackSvg />
            </View>
            <View style={commonStyle.marginHorizontal(8)}>
              <Text>Request call back</Text>
            </View>
          </View>
        </View>
      )}
    </>
  );
}

function BookingStatus() {
  const [isAssistanceEnabled, setIsAssistanceEnabled] = useState(false);
  const [isSendRequestVisible, setIsSendRequestVisible] = useState(false);
  const [list] = useState([
    {
      id: 'list-id-one',
      type: 'Departure',
    },
    {
      id: 'list-id-two',
      type: 'Departure',
    },
  ]);

  return (
    <SafeAreaView style={commonStyle.container}>
      <CustomStatusBar backgroundColor={'#13A869'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={commonStyle.wrapper}>
          <View style={commonStyle.content}>
            <View>
              <LinearGradient
                colors={['#13A869', '#025A35']}
                style={styles.canvas}>
                <View style={styles.headerSection}>
                  <View style={commonStyle.marginHorizontal(14)}>
                    <TouchableOpacity
                      onPress={() =>
                        setIsAssistanceEnabled(!isAssistanceEnabled)
                      }>
                      <HelpSvg style={styles.icon} />
                    </TouchableOpacity>
                    <View>
                      <AssistanceCard
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
              <View>
                {list &&
                  list.map((item, index) => (
                    <BookingDetailCard key={index?.toString()} item={item} />
                  ))}
              </View>
              <View style={commonStyle.marginVertical(8)}>
                <Accordion
                  title={'Passenger Details'}
                  Content={<TicketList />}
                />
              </View>
              <View style={commonStyle.marginVertical(8)}>
                <Accordion title={'Fare Summery'} Content={<FairDetail />} />
              </View>
              <View style={commonStyle.marginVertical(8)}>
                <Accordion
                  title={'Payment Details'}
                  Content={
                    <View style={commonStyle.paddingHorizontal(15)}>
                      <View
                        style={[
                          commonStyle.rowSpaceBetween,
                          commonStyle.marginVertical(8),
                        ]}>
                        <View style={commonStyle.rowFlexStart}>
                          <View>
                            <Text style={styles.creditCardTitle}>
                              Credit Card
                            </Text>
                          </View>
                          <View
                            style={[
                              commonStyle.rowFlexStart,
                              commonStyle.marginHorizontal(5),
                            ]}>
                            <View>
                              <VisaCardSvg />
                            </View>
                            <View>
                              <Text style={styles.creditCardNumber}>
                                *****3434
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View style={commonStyle.rowFlexStart}>
                          <View>
                            <Text style={styles.creditCardCurrency}>QAR</Text>
                          </View>
                          <View>
                            <Text style={styles.creditCardAmount}> 300.00</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  }
                />
              </View>
            </View>
            <SendRequestModal
              visible={isSendRequestVisible}
              setVisible={setIsSendRequestVisible}
            />
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
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
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
    paddingHorizontal: 23,
  },
  headTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: Colors.white,
  },
  divider: {
    width: '100%',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.lightText,
    alignSelf: 'center',
  },
  creditCardTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#26698E',
  },
  creditCardNumber: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#26698E',
  },
  creditCardCurrency: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
  },
  creditCardAmount: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: '#0B151F',
  },
});

const cardStyle = StyleSheet.create({
  card: {
    position: 'absolute',
    zIndex: 1,
    width: 165,
    height: 120,
    backgroundColor: Colors.white,
    borderRadius: 8,
    right: -10,
    top: 5,
    padding: 10,
  },
});

export default BookingStatus;
