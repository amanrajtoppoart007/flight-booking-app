import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Font from '../../layout/Font';
import Colors from '../../layout/Colors';
import LinearGradient from 'react-native-linear-gradient';
import CustomStatusBar from '../../components/CustomStatusBar';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import commonStyle from '../../layout/Style';
import CustomTextInput from '../../components/Common/CustomTextInput';
import StatusStepBar from '../../components/Hotel/Checkout/StatusStepBar';
import StarRating from '../../components/StarRating';

import Accordion from '../../components/Hotel/Checkout/Accordion';
import BookingSummary from '../../components/Hotel/Checkout/BookingSummary';
import Footer from '../../components/Hotel/Footer';
import SelectTextInput from '../../components/Common/SelectTextInput';

import Pin from '../../components/Svg/Hotel/Pin.svg';
import Info from '../../components/Svg/Hotel/Info.svg';
import InfoBlue from '../../components/Svg/Hotel/InfoBlue.svg';
import Line from '../../components/Svg/Hotel/Line.svg';
import User from '../../components/Svg/Profile/User.svg';
import Ratings from '../../components/Svg/Hotel/Ratings.svg';
import BlueRightArrow from '../../components/Svg/Hotel/BlueRightArrow.svg';
import LoginLock from '../../components/Svg/Hotel/LoginLock.svg';
import PhoneBook from '../../components/Svg/PhoneBook.svg';
import BackSvg from '../../components/Svg/Hotel/Back.svg';

function GuestDetails() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [phoneCode, setPhoneCode] = useState('');
  const [bookingSummary, setBookingSummary] = useState(false);

  return (
    <SafeAreaView style={commonStyle.container}>
      <CustomStatusBar backgroundColor={'#1C8CCC'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={commonStyle.wrapper}>
          <View style={commonStyle.content}>
            <View style={{height: hp('20%')}} />
            <View style={styles.topContainer}>
              <View>
                <View style={styles.rowWrapper}>
                  <Text style={styles.textNormal}>W Doha</Text>
                  <StarRating size={15} rating={4} />
                </View>
                <View style={styles.rowWrapper}>
                  <Pin />
                  <Text style={styles.LightText}>West Bay, Doha, QA</Text>
                </View>
                <View style={styles.rowWrapper}>
                  <BlueRightArrow />
                  <Text style={styles.blueText}>
                    Fire Station Art Gallery - 2.1 km / 1.3 mi… I
                  </Text>
                </View>
              </View>
              <View>
                <View style={styles.rowWrapper}>
                  <Ratings />
                  <Text style={styles.greenText}>4.5/5</Text>
                </View>
                <View style={styles.rowWrapper}>
                  <Text style={styles.SmallHeavy}>Excellent</Text>
                </View>
              </View>
            </View>
            <View style={styles.LoginContainer}>
              <LoginLock />
              <Text style={styles.LoginText}>
                Login to view your saved traveller list.
              </Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.ButtonText}>Login</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.ContactContainer}>
              <View style={styles.rowWrapper}>
                <PhoneBook />
                <Text style={[styles.textBig, styles.marginLeft(10)]}>
                  Contact Details
                </Text>
              </View>
              <View style={[styles.rowWrapper, commonStyle.marginTop(5)]}>
                <Text style={styles.textNormalLight}>
                  Booking details will be sent to this mobile number & Email
                  address.
                </Text>
              </View>
              <View style={[styles.rowWrapper]}>
                <TextInput
                  placeholder="E-mail ID*"
                  value={email}
                  onChangeText={t => setEmail(t)}
                  type="email"
                  style={styles.Input}
                  placeholderTextColor={Colors.lightText}
                />
              </View>
              <View style={[styles.rowWrapper, commonStyle.marginTop(5)]}>
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
            <View style={styles.ContactContainer}>
              <View style={[styles.rowWrapper, commonStyle.marginBottom(12)]}>
                <User />
                <Text style={[styles.textBig, styles.marginLeft(10)]}>
                  Add Guest Details
                </Text>
              </View>
              <View style={commonStyle.marginVertical(8)}>
                <Accordion
                  title="Room 1: (1 Adult, 2 Children)"
                  Content={<AccordionContent />}
                />
              </View>
              <View style={commonStyle.marginVertical(8)}>
                <Accordion
                  title="Room 2: (1 Adult)"
                  Content={<AccordionContent />}
                />
              </View>
              <View style={commonStyle.marginVertical(8)}>
                <Accordion
                  title="Room 3: (1 Adult)"
                  Content={<AccordionContent />}
                />
              </View>
            </View>
            <BookingSummary
              isBookingSummaryVisible={bookingSummary}
              setIsBookingSummaryVisible={setBookingSummary}
            />
            <Footer
              handleBottomSheetPress={() => setBookingSummary(true)}
              title="Your total stay price"
              price="10,790.00"
              onPress={() => navigation.navigate('Payment')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function AccordionContent() {
  const [Title, setTitle] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [ExtraVisible, setExtraVisible] = useState(false);

  return (
    <View style={commonStyle.marginVertical(5)}>
      <View style={AStyles.rowWrapper}>
        <SelectTextInput
          value={Title}
          placeholder="Title"
          setValue={setTitle}
          listValues={['data1', 'data2']}
          style={styles.marginRight(10)}
        />
        <View style={AStyles.InputContainer}>
          <TextInput
            value={FirstName}
            onChangeText={t => setFirstName(t)}
            style={AStyles.Input}
            placeholder="First Name"
            placeholderTextColor={Colors.lightText}
          />
        </View>
        <View style={AStyles.InputContainer}>
          <TextInput
            value={LastName}
            onChangeText={t => setLastName(t)}
            style={AStyles.Input}
            placeholder="Last Name"
            placeholderTextColor={Colors.lightText}
          />
        </View>
      </View>
      <View
        style={[
          commonStyle.rowSpaceBetween,
          commonStyle.marginTop(15),
          commonStyle.marginHorizontal(5),
        ]}>
        <View style={commonStyle.rowFlexStart}>
          <Text style={[AStyles.blueText, styles.marginRight(5)]}>
            Cancellation Policy
          </Text>
          <InfoBlue />
        </View>
        <View style={commonStyle.rowFlexStart}>
          <Text style={[AStyles.secondaryText, styles.marginRight(5)]}>
            Important Info
          </Text>
          <Info />
        </View>
        <TouchableOpacity
          onPress={() => setExtraVisible(!ExtraVisible)}
          style={commonStyle.rowFlexStart}>
          <Text style={[AStyles.blueText, styles.marginRight(5)]}>Extras</Text>
          <Icon
            name={ExtraVisible ? 'caretup' : 'caretdown'}
            type={'antdesign'}
            size={14}
            color={Colors.primary}
          />
        </TouchableOpacity>
      </View>
      {ExtraVisible && (
        <>
          <Line />
          <View style={AStyles.borderContainer}>
            <Text style={AStyles.lightText}>
              Please enter any special request that you may have.
            </Text>
            <Text style={AStyles.lightText}>(Eg: Late Check-In, VIP Pax)</Text>
          </View>
          <View
            style={[
              commonStyle.marginHorizontal(10),
              commonStyle.marginVertical(5),
            ]}>
            <Text style={AStyles.lightText}>
              Note: Special requests are not guaranteed and are at the hotel’s
              discretion. Additional charges may apply depending on the hotel’s
              policies.
            </Text>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  margin: {
    marginVertical: 5,
  },
  button: {
    padding: 2,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.secondary,
  },
  continueButton: {
    padding: 8,
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: Colors.secondary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  canvas: {
    width: '100%',
    height: hp('30%'),
    backgroundColor: 'green',
  },
  bottomCanvas: {
    width: '100%',
    height: hp('10%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleSection: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  Input: {
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: Colors.black,
    width: '100%',
  },
  title: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: Font.AvenirHeavy,
  },
  textNormal: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: Font.AvenirHeavy,
  },
  LoginText: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: Font.AvenirMedium,
  },
  textNormalWhite: {
    fontSize: 14,
    color: Colors.white,
    fontFamily: Font.AvenirMedium,
  },
  textNormalLight: {
    fontSize: 14,
    color: Colors.lightText,
    fontFamily: Font.AvenirMedium,
  },
  LightText: {
    fontSize: 12,
    color: Colors.lightText,
    fontFamily: Font.AvenirMedium,
  },
  textBig: {
    fontSize: 16,
    color: Colors.black,
    fontFamily: Font.AvenirHeavy,
  },
  textBigWhite: {
    fontSize: 16,
    color: Colors.white,
    fontFamily: Font.AvenirMedium,
  },
  ButtonText: {
    fontSize: 12,
    color: Colors.secondary,
    fontFamily: Font.AvenirHeavy,
  },
  ContactContainer: {
    paddingVertical: 12,
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
  },
  greenText: {
    fontSize: 11,
    color: '#1DAD81',
    fontFamily: Font.AvenirHeavy,
  },
  blueText: {
    fontSize: 12,
    color: '#26698E',
    fontFamily: Font.AvenirMedium,
  },
  fontSize(t) {
    return {
      fontSize: t,
    };
  },
  SmallHeavy: {
    fontSize: 11,
    fontFamily: Font.AvenirHeavy,
    color: '#475F7B',
  },
  topContainer: {
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingTop: 11,
    backgroundColor: '#FFFFFF',
  },
  LoginContainer: {
    paddingVertical: 12,
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  marginRight(t) {
    return {
      marginRight: t,
    };
  },
  marginLeft(t) {
    return {
      marginLeft: t,
    };
  },
  rowWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  rowFlexStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
});

const AStyles = StyleSheet.create({
  rowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  InputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    borderColor: '#D9D9D9',
    marginRight: 10,
  },

  blueText: {
    fontSize: 12,
    fontFamily: Font.AvenirMedium,
    color: '#26698E',
  },
  lightText: {
    fontSize: 12,
    fontFamily: Font.AvenirMedium,
    color: Colors.lightText,
  },
  secondaryText: {
    fontSize: 14,
    fontFamily: Font.AvenirMedium,
    color: Colors.secondary,
  },
  borderContainer: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    padding: 10,
    marginHorizontal: 5,
    marginVertical: 10,
  },
});
export default GuestDetails;
