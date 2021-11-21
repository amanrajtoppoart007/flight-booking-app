import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
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
import Pin from '../../components/Svg/Hotel/Pin.svg';
import Info from '../../components/Svg/Hotel/Info.svg';
import InfoBlue from '../../components/Svg/Hotel/InfoBlue.svg';
import Line from '../../components/Svg/Hotel/Line.svg';

import User from '../../components/Svg/Profile/User.svg';

import Ratings from '../../components/Svg/Hotel/Ratings.svg';
import BlueRightArrow from '../../components/Svg/Hotel/BlueRightArrow.svg';
import LoginLock from '../../components/Svg/Hotel/LoginLock.svg';
import PhoneBook from '../../components/Svg/PhoneBook.svg';
import {ScrollView} from 'react-native-gesture-handler';
import Accordion from '../../components/Hotel/Checkout/Accordion';
import BookingSummary from '../../components/Hotel/Checkout/BookingSummary';

function GuestDetails() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [phoneCode, setPhoneCode] = useState('');
  const [bookingSummary, setBookingSummary] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar backgroundColor={'#1C8CCC'} />
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={styles.content}>
            <View style={{height: hp('20%')}}>
              <LinearGradient
                colors={['#1C8CCC', '#015F95']}
                style={styles.canvas}>
                <View style={[styles.titleSection, styles.rowCenter]}>
                  <View>
                    <Icon
                      onPress={() => navigation.goBack()}
                      name={'md-arrow-back-sharp'}
                      type={'ionicon'}
                      size={20}
                      color={Colors.white}
                    />
                  </View>
                  <View style={{marginHorizontal: 5}}>
                    <Text style={styles.title}>Check Out</Text>
                  </View>
                </View>
                <StatusStepBar activeIndex={1} />
              </LinearGradient>
            </View>
            <View style={styles.topConatainer}>
              <View>
                <View style={styles.rowWrapper}>
                  <Text style={[styles.textNormal, styles.marginRight(5)]}>
                    W Doha
                  </Text>
                  <StarRating size={15} rating={4} />
                </View>
                <View style={styles.rowWrapper}>
                  <Pin />
                  <Text style={[styles.textLight, styles.marginLeft(5)]}>
                    West Bay, Doha, QA
                  </Text>
                </View>
                <View style={styles.rowWrapper}>
                  <BlueRightArrow />
                  <Text style={[styles.blueText, styles.marginLeft(5)]}>
                    Fire Station Art Gallery - 2.1 km / 1.3 mi… I
                  </Text>
                </View>
              </View>
              <View style={{alignSelf: 'flex-start'}}>
                <View style={styles.rowWrapper}>
                  <Ratings />
                  <Text style={[styles.greenText, styles.marginLeft(8)]}>
                    4.5/5
                  </Text>
                </View>
                <View style={styles.rowWrapper}>
                  <Text style={[styles.textLight, {color: Colors.black}]}>
                    Excellent
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.LoginConatainer}>
              <LoginLock />
              <Text style={styles.textNormal}>
                Login to view your saved traveller list.
              </Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.ButtonText}>Login</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.ContactConatiner}>
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
            <View style={styles.ContactConatiner}>
              <View style={styles.rowWrapper}>
                <User />
                <Text style={[styles.textBig, styles.marginLeft(10)]}>
                  Add Guest Details
                </Text>
              </View>
              <View style={commonStyle.marginVertical(5)}>
                <Accordion
                  title="Room 1: (1 Adult, 2 Children)"
                  Content={<AccordionContent />}
                />
              </View>
              <View style={commonStyle.marginVertical(5)}>
                <Accordion
                  title="Room 2: (1 Adult)"
                  Content={<AccordionContent />}
                />
              </View>
              <View style={commonStyle.marginVertical(5)}>
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
            <LinearGradient
              colors={['#242A37', '#3C4250']}
              style={styles.bottomCanvas}>
              <View>
                <Text
                  style={[
                    styles.textNormalWhite,
                    commonStyle.marginBottom(10),
                  ]}>
                  Your total stay price
                </Text>
                <View style={[styles.rowFlexStart]}>
                  <Text style={styles.textBigWhite}>
                    <Text style={[styles.textNormalLight]}>QAR</Text> 10,790.00
                  </Text>
                  <Icon
                    name={'down'}
                    type={'antdesign'}
                    size={18}
                    style={commonStyle.marginHorizontal(10)}
                    color={Colors.lightText}
                  />
                </View>
              </View>
              <View
                style={[
                  commonStyle.rowCenter,
                  commonStyle.marginHorizontal(5),
                ]}>
                <TouchableOpacity style={styles.continueButton}>
                  <Text style={styles.textNormalWhite}>Continue</Text>
                  <Icon
                    name={'arrowright'}
                    type={'antdesign'}
                    size={18}
                    style={styles.marginLeft(5)}
                    color={Colors.white}
                  />
                </TouchableOpacity>
              </View>
            </LinearGradient>
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

  return (
    <View style={commonStyle.marginVertical(5)}>
      <View style={AStyles.rowWrapper}>
        <View style={[AStyles.InputConatiner, {flex: 0.8}]}>
          <TextInput
            value={Title}
            onChangeText={t => setTitle(t)}
            style={AStyles.TitleInput}
            placeholder="Title"
            placeholderTextColor={Colors.lightText}
          />
          <Icon
            name={'caretdown'}
            type={'antdesign'}
            size={15}
            color={Colors.primary}
          />
        </View>
        <View style={AStyles.InputConatiner}>
          <TextInput
            value={FirstName}
            onChangeText={t => setFirstName(t)}
            style={AStyles.Input}
            placeholder="First Name"
            placeholderTextColor={Colors.lightText}
          />
        </View>
        <View style={AStyles.InputConatiner}>
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
        <View style={commonStyle.rowFlexStart}>
          <Text style={[AStyles.blueText, styles.marginRight(5)]}>Extras</Text>
          <Icon
            name={'caretdown'}
            type={'antdesign'}
            size={15}
            color={Colors.primary}
          />
        </View>
      </View>
      <Line />
      <View style={AStyles.borderConatiner}>
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
    </View>
  );
}

const AStyles = StyleSheet.create({
  rowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  InputConatiner: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    borderColor: Colors.lightText,
    marginRight: 10,
  },
  TitleInput: {
    fontFamily: Font.AvenirRegular,
    color: Colors.black,
    fontSize: 14,
    marginRight: 8,
    marginVertical: 0,
    paddingVertical: 3,
  },
  Input: {
    fontFamily: Font.AvenirRegular,
    color: Colors.black,
    fontSize: 14,
    marginRight: 8,
    paddingVertical: 3,
  },
  blueText: {
    fontSize: 14,
    fontFamily: Font.AvenirLight,
    color: '#26698E',
  },
  lightText: {
    fontSize: 12,
    fontFamily: Font.AvenirLight,
    color: Colors.lightText,
  },
  secondaryText: {
    fontSize: 14,
    fontFamily: Font.AvenirLight,
    color: Colors.secondary,
  },
  borderConatiner: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    padding: 10,
    marginHorizontal: 5,
    marginVertical: 10,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },
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
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
  },
  canvas: {
    width: '100%',
    height: hp('20%'),
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
    fontFamily: Font.AvenirRegular,
  },
  textNormal: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: Font.AvenirRegular,
  },
  textNormalWhite: {
    fontSize: 14,
    color: Colors.white,
    fontFamily: Font.AvenirRegular,
  },
  textNormalLight: {
    fontSize: 14,
    color: Colors.lightText,
    fontFamily: Font.AvenirRegular,
  },
  textBig: {
    fontSize: 16,
    color: Colors.black,
    fontFamily: Font.AvenirMedium,
  },
  textBigWhite: {
    fontSize: 16,
    color: Colors.white,
    fontFamily: Font.AvenirMedium,
  },
  ButtonText: {
    fontSize: 12,
    color: Colors.secondary,
    fontFamily: Font.AvenirRegular,
  },
  ContactConatiner: {
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: Colors.background,
  },
  textLight: {
    fontSize: 12,
    color: Colors.lightText,
    fontFamily: Font.AvenirLight,
  },
  greenText: {
    fontSize: 12,
    color: Colors.lightText,
    fontFamily: Font.AvenirLight,
    color: '#1DAD81',
  },
  blueText: {
    fontSize: 12,
    color: Colors.lightText,
    fontFamily: Font.AvenirLight,
    color: '#26698E',
  },
  topConatainer: {
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: Colors.background,
  },
  LoginConatainer: {
    paddingVertical: 10,
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 10,
    backgroundColor: Colors.background,
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
export default GuestDetails;
