import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {BottomSheet, Icon} from 'react-native-elements';
import Colors from '../../../layout/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Font from '../../../layout/Font';
import commonStyle from '../../../layout/Style';
import HotelImage from '../../Svg/Hotel/HotelImage.svg';
import Pin from '../../Svg/Hotel/Pin.svg';
import StarRating from '../../StarRating';
function BookingSummary({isBookingSummaryVisible, setIsBookingSummaryVisible}) {
  return (
    <BottomSheet isVisible={isBookingSummaryVisible}>
      <ScrollView style={styles.bottomSheet}>
        <View style={commonStyle.marginBottom(30)}>
          <View
            style={[
              commonStyle.rowSpaceBetween,
              commonStyle.marginVertical(5),
            ]}>
            <View>
              <Text style={styles.title}>Booking Summary</Text>
            </View>
            <View>
              <Icon
                onPress={() => setIsBookingSummaryVisible(false)}
                name={'close'}
                type={'antdesign'}
                size={18}
                color={Colors.lightText}
              />
            </View>
          </View>
          <View
            style={[commonStyle.rowFlexStart, commonStyle.marginVertical(10)]}>
            <HotelImage />
            <View style={{alignSelf: 'flex-start'}}>
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
            </View>
          </View>
          <View style={styles.divider} />
          <View
            style={[
              commonStyle.rowSpaceBetween,
              commonStyle.marginVertical(5),
            ]}>
            <Text style={styles.textNormal}>
              Check-In: {'\n'}15-10-2021
              <Text style={styles.textNormalSecondary}> 03:00 PM</Text>
            </Text>
            <View style={styles.dividerVertical} />
            <Text style={styles.textNormal}>
              Check-In: {'\n'}15-10-2021
              <Text style={styles.textNormalSecondary}> 12:00 PM</Text>
            </Text>
          </View>
          <View style={styles.divider} />
          <Card
            title="Room 1: (1 Adult, 2 Children)"
            subtitle="Spectacular Room, 2 Double…"
            price="3395.00"
            tax="0.00"
            baseFare="3,399.00"
            discount="5.00"
          />
          <Card
            title="Room 2: (1 Adult, 2 Children)"
            subtitle="Spectacular Room, 1 King…"
            price="3395.00"
            tax="0.00"
            baseFare="3,399.00"
            discount="5.00"
          />
          <Card
            title="Room 3: (1 Adult, 2 Children)"
            subtitle="Spectacular Room, 1 King…"
            price="3395.00"
            tax="0.00"
            baseFare="3,399.00"
            discount="5.00"
          />
        </View>
      </ScrollView>
    </BottomSheet>
  );
}
function Card({title, subtitle, price, baseFare, tax, discount}) {
  const [isOpen, setOpen] = useState(false);
  return (
    <View style={styles.card}>
      <View
        style={[
          commonStyle.rowSpaceBetween,
          {alignItems: 'flex-end'},
          commonStyle.padding(10),
        ]}>
        <View>
          <Text style={styles.textNormalBlue}>{title}</Text>
          <Text style={styles.textNormalPrimary}>{subtitle}</Text>
        </View>
        <TouchableOpacity onPress={() => setOpen(!isOpen)}>
          <Icon
            name={!isOpen ? 'down' : 'up'}
            type={'antdesign'}
            size={18}
            color={Colors.lightText}
          />
        </TouchableOpacity>
        <Text style={styles.textBold}>
          <Text style={styles.textLight}>QAR</Text> {price}
        </Text>
      </View>
      {isOpen && (
        <>
          <View style={styles.divider} />
          <View
            style={[
              commonStyle.paddingHorizontal(10),
              commonStyle.paddingVertical(5),
            ]}>
            <View style={commonStyle.rowSpaceBetween}>
              <Text style={styles.textNormalLight}>Base Fare</Text>
              <Text style={styles.textNormalLight}>
                QAR{' '}
                <Text style={[styles.textNormalLight, {color: Colors.black}]}>
                  {baseFare}
                </Text>
              </Text>
            </View>
            <View style={commonStyle.rowSpaceBetween}>
              <Text style={styles.textNormalLight}>Taxes & Fee</Text>
              <Text style={styles.textNormalLight}>
                QAR{' '}
                <Text style={[styles.textNormalLight, {color: Colors.black}]}>
                  {tax}
                </Text>
              </Text>
            </View>
            <View style={commonStyle.rowSpaceBetween}>
              <Text style={styles.textNormalLight}>Discount</Text>
              <Text style={styles.textNormalLight}>
                QAR{' '}
                <Text style={[styles.textNormalLight, {color: Colors.black}]}>
                  {discount}
                </Text>
              </Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomSheet: {
    width: wp('100%'),
    height: hp('60%'),
    backgroundColor: Colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
  },
  card: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    marginVertical: 8,
  },
  title: {
    fontSize: 18,
    color: Colors.black,
    fontFamily: Font.AvenirRegular,
  },
  divider: {
    borderBottomWidth: 1,
    marginVertical: 8,
    borderColor: '#DDDDDD',
  },
  dividerVertical: {
    height: '80%',
    borderRightWidth: 1,
    borderColor: '#DDDDDD',
  },
  textNormal: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: Font.AvenirRegular,
  },
  textBold: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: Font.AvenirHeavy,
  },
  textNormalBlue: {
    fontSize: 14,
    color: '#26698E',
    fontFamily: Font.AvenirRegular,
  },
  textNormalLight: {
    fontSize: 13,
    color: Colors.lightText,
    fontFamily: Font.AvenirRegular,
  },
  textNormalPrimary: {
    fontSize: 14,
    color: Colors.primary,
    fontFamily: Font.AvenirRegular,
  },
  textNormalSecondary: {
    fontSize: 13,
    color: Colors.secondary,
    fontFamily: Font.AvenirRegular,
  },
  helper: {
    fontSize: 16,
    color: Colors.black,
    fontFamily: Font.AvenirRegular,
  },
  textLight: {
    fontSize: 12,
    color: Colors.lightText,
    fontFamily: Font.AvenirLight,
  },
  rowWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  marginRight(t) {
    return {
      marginRight: t,
    };
  },
  fontSize(t) {
    return {
      fontSize: t,
    };
  },
  marginLeft(t) {
    return {
      marginLeft: t,
    };
  },
  button: {
    height: 45,
    borderRadius: 6,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 12,
    color: Colors.white,
    fontFamily: Font.AvenirRegular,
  },
  selectContainer: {
    borderWidth: 2,
    borderRadius: 8,
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: Colors.white,
    elevation: 5,
  },
  selectText: {
    marginHorizontal: 10,
    marginVertical: 8,
    fontSize: 16,
    color: 'black',
  },
});
const buttonStyle = StyleSheet.create({
  card: {
    width: 110,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 5,
    backgroundColor: Colors.white,
    elevation: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    color: Colors.lightText,
    fontFamily: Font.AvenirLight,
  },
});
export default BookingSummary;
