import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import commonStyle from '../../../layout/Style';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import CustomStatusBar from '../../../components/CustomStatusBar';

import HelpSvg from '../../../assets/icons/svg/Assistance.svg';
import ShareSvg from '../../../assets/icons/svg/Share.svg';
import ConfirmSvg from '../../../assets/icons/svg/Confirm.svg';
import Font from '../../../layout/Font';
import Colors from '../../../layout/Colors';
import BookingDetailCard from '../../../components/Flight/Booking/BookingDetailCard';
import Accordion from '../../../components/Flight/Booking/Accordion';
import FairDetail from '../../../components/Flight/Booking/FareDetail';
import SendRequestModal from '../../../components/Flight/Booking/SendRequestModal';
import AssistanceCard from '../../../components/Common/AssistanceCard';

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
                        isVisible={isAssistanceEnabled}
                        setIsVisible={setIsAssistanceEnabled}
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
                  Content={
                    <View>
                      <View style={commonStyle.rowSpaceBetween}>
                        <View>
                          <Text>John Doe (ADT)</Text>
                        </View>
                        <View>
                          <Text>Ticket# - 157-48822596</Text>
                        </View>
                      </View>
                      <View style={commonStyle.marginVertical(5)}>
                        <Text>Special Request +</Text>
                      </View>
                      <View style={styles.divider} />
                      <View style={commonStyle.rowSpaceBetween}>
                        <View>
                          <Text>John Doe (ADT)</Text>
                        </View>
                        <View>
                          <Text>Ticket# - 157-48822596</Text>
                        </View>
                      </View>
                      <View style={commonStyle.marginVertical(5)}>
                        <Text>Special Request +</Text>
                      </View>
                      <View style={commonStyle.marginVertical(5)}>
                        <Text>Special Assistance: Meet & Assist</Text>
                      </View>
                      <View style={commonStyle.marginVertical(5)}>
                        <Text>Seat Preference: Window</Text>
                      </View>
                      <View style={commonStyle.marginVertical(5)}>
                        <Text>Meal Preference: Indian Meal</Text>
                      </View>
                    </View>
                  }
                />
              </View>
              <View style={commonStyle.marginVertical(8)}>
                <Accordion title={'Fare Summery'} Content={<FairDetail />} />
              </View>
              <View style={commonStyle.marginVertical(8)}>
                <Accordion
                  title={'Payment Details'}
                  Content={
                    <View>
                      <View
                        style={[
                          commonStyle.rowSpaceBetween,
                          commonStyle.marginVertical(8),
                        ]}>
                        <View style={commonStyle.rowFlexStart}>
                          <View>
                            <Text>Credit Card</Text>
                          </View>
                          <View style={commonStyle.rowFlexStart}>
                            <View>
                              <Text>Visa image here</Text>
                            </View>
                            <View>
                              <Text>*****3434</Text>
                            </View>
                          </View>
                        </View>
                        <View style={commonStyle.rowFlexStart}>
                          <View>
                            <Text>QAR</Text>
                          </View>
                          <View>
                            <Text> 300.00</Text>
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
    marginHorizontal: 20,
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
    paddingHorizontal: 15,
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
});

export default BookingStatus;
