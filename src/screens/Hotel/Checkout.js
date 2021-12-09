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

import StarRating from '../../components/StarRating';
import StatusStepBar from '../../components/Hotel/Checkout/StatusStepBar';
import CustomTextInput from '../../components/Common/CustomTextInput';
import Accordion from '../../components/Hotel/GuestDetail/Accordion';
import GuestForm from '../../components/Hotel/GuestDetail/GuestForm';

import Font from '../../layout/Font';
import Colors from '../../layout/Colors';

import BackSvg from '../../components/Svg/Hotel/Back.svg';
import MapSvg from '../../components/Svg/Hotel/Map.svg';
import PlaneSvg from '../../components/Svg/Hotel/Plane.svg';
import TurnRightSvg from '../../components/Svg/Hotel/TurnRight.svg';
import PhoneBookSvg from '../../components/Svg/PhoneBook.svg';
import LockSvg from '../../components/Svg/Hotel/LoginLock.svg';
import UserSvg from '../../components/Svg/Profile/User.svg';
import CustomStatusBar from '../../components/CustomStatusBar';
import BookingSummary from '../../components/Hotel/Checkout/BookingSummary';
import Footer from '../../components/Hotel/GuestDetail/Footer';

function Checkout({navigation}) {
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [phoneCode, setPhoneCode] = useState('');
  const [isVisible, setIsVisible] = useState(false); // state for booking section is visible or not
  return (
    <SafeAreaView
      style={[commonStyle.container, commonStyle.backgroundColor('#F5F7FB')]}>
      <CustomStatusBar backgroundColor={Colors.primary} />
      <ScrollView
        contentContainerStyle={styles.scrollViewStyle}
        showsVerticalScrollIndicator={false}>
        <View style={commonStyle.wrapper}>
          <View style={commonStyle.content}>
            <LinearGradient
              colors={['#1C8CCC', '#015F95']}
              style={styles.canvas}>
              <View style={styles.headerSection}>
                <View>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BackSvg />
                  </TouchableOpacity>
                </View>
                <View style={commonStyle.marginHorizontal(15)}>
                  <Text style={styles.pageTitle}>Check Out</Text>
                </View>
              </View>
              <View>
                <StatusStepBar activeIndex={1} />
              </View>
            </LinearGradient>
            <View style={styles.topSection}>
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
                      commonStyle.marginVertical(8),
                    ]}>
                    <View>
                      <MapSvg />
                    </View>
                    <View style={commonStyle.marginHorizontal(5)}>
                      <Text style={styles.placeText}>West Bay, Doha, QA</Text>
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
            <View style={styles.section}>
              <View style={styles.loginSection}>
                <View>
                  <LockSvg />
                </View>
                <View>
                  <Text style={styles.loginHelperText}>
                    Login to view your saved traveller list.
                  </Text>
                </View>
                <View>
                  <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.contactDetailSection}>
              <View style={commonStyle.rowFlexStart}>
                <View>
                  <PhoneBookSvg />
                </View>
                <View style={commonStyle.marginHorizontal(8)}>
                  <Text style={styles.sectionTitle}>Contact Details</Text>
                </View>
              </View>
              <View style={commonStyle.marginVertical(7.5)}>
                <Text>
                  Booking details will be sent to this mobile number & Email
                  address.
                </Text>
              </View>
              <View style={commonStyle.marginVertical(10)}>
                <TextInput
                  placeholder="E-mail ID*"
                  value={email}
                  onChangeText={t => setEmail(t)}
                  type="email"
                  style={[styles.inputStyle, styles.inputTextStyle]}
                  placeholderTextColor={'#898989'}
                />
              </View>
              <View style={commonStyle.marginVertical(10)}>
                <CustomTextInput
                  type={'mobile'}
                  title={'Country Code'}
                  value={mobileNumber}
                  setValue={setMobileNumber}
                  phoneCode={phoneCode}
                  setPhoneCode={setPhoneCode}
                  placeholder="Contact No."
                />
              </View>
            </View>

            <View style={styles.addGuestDetailSection}>
              <View style={commonStyle.padding(12)}>
                <View style={commonStyle.rowFlexStart}>
                  <View>
                    <UserSvg />
                  </View>
                  <View style={commonStyle.marginHorizontal(8)}>
                    <Text style={styles.sectionTitle}>Add Guest Details</Text>
                  </View>
                </View>
              </View>
              <View style={commonStyle.marginVertical(6)}>
                <Accordion
                  title="Room 1:"
                  subTitle={'(1 Adult, 2 Children)'}
                  Content={<GuestForm />}
                />
              </View>
              <View style={commonStyle.marginVertical(6)}>
                <Accordion
                  title="Room 2:"
                  subTitle={'(1 Adult, 2 Children)'}
                  Content={<GuestForm />}
                />
              </View>

              <View style={commonStyle.marginVertical(6)}>
                <Accordion
                  title="Room 3:"
                  subTitle={'(1 Adult, 2 Children)'}
                  Content={<GuestForm />}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <BookingSummary
        isBookingSummaryVisible={isVisible}
        setIsBookingSummaryVisible={setIsVisible}
      />
      <Footer
        handleBottomSheetPress={() => setIsVisible(!isVisible)}
        price="10,790.00"
        onPress={() => navigation.navigate('Payment')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  canvas: {
    width: '100%',
    height: hp('20%'),
    paddingHorizontal: 12,
  },
  scrollViewStyle: {paddingBottom: 75},
  headerSection: {
    ...commonStyle.rowFlexStart,
    ...commonStyle.marginVertical(20),
  },
  section: {
    paddingHorizontal: 12,
  },
  pageTitle: {
    fontFamily: Font.AvenirHeavy,
    color: Colors.white,
    fontSize: 18,
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
  topSection: {
    padding: 12,
    backgroundColor: '#FFFFFF',
  },
  loginSection: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    marginVertical: 12,
  },
  loginHelperText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#242A37',
  },
  loginButton: {
    width: 50,
    height: 24,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#F15922',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 12,
    color: '#F15922',
  },
  contactDetailSection: {
    padding: 12,
    backgroundColor: '#FFFFFF',
  },
  sectionTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: '#242A37',
  },

  inputStyle: {
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
    width: '100%',
  },
  inputTextStyle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: Colors.black,
  },
  addGuestDetailSection: {
    marginVertical: 12,
    backgroundColor: '#FFFFFF',
  },
});

export default Checkout;
