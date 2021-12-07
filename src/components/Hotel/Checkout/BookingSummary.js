import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
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
import Card from '../BookingSummary/Card';

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
            <View>
              <View style={styles.rowWrapper}>
                <View>
                  <Text style={styles.placeTitle}>W Doha</Text>
                </View>
                <View style={commonStyle.marginHorizontal(11.5)}>
                  <StarRating rating={4} size={15} />
                </View>
              </View>
              <View style={styles.rowWrapper}>
                <Pin />
                <View style={commonStyle.marginHorizontal(6)}>
                  <Text style={[styles.placeText]}>West Bay, Doha, QA</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.divider} />
          <View
            style={[
              commonStyle.rowSpaceBetween,
              commonStyle.marginVertical(5),
            ]}>
            <Text style={styles.checkInText}>
              Check-In: {'\n'}
              <Text style={styles.dateText}>15-10-2021</Text>
              <Text style={styles.timeText}> 03:00 PM</Text>
            </Text>
            <View style={styles.dividerVertical} />
            <Text style={styles.checkInText}>
              Check-In: {'\n'}
              <Text style={styles.dateText}>15-10-2021</Text>
              <Text style={styles.timeText}> 12:00 PM</Text>
            </Text>
          </View>
          <View style={styles.divider} />
          <Card
            title="(1 Adult, 2 Children)"
            subtitle="Spectacular Room, 2 Double…"
            price="3395.00"
            tax="0.00"
            baseFare="3,399.00"
            discount="5.00"
            index={1}
          />
          <Card
            title="(1 Adult, 2 Children)"
            subtitle="Spectacular Room, 1 King…"
            price="3395.00"
            tax="0.00"
            baseFare="3,399.00"
            discount="5.00"
            index={2}
          />
          <Card
            title="(1 Adult, 2 Children)"
            subtitle="Spectacular Room, 1 King…"
            price="3395.00"
            tax="0.00"
            baseFare="3,399.00"
            discount="5.00"
            index={3}
          />
        </View>
      </ScrollView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  bottomSheet: {
    width: wp('100%'),
    height: hp('75%'),
    backgroundColor: Colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 15,
  },
  title: {
    fontSize: 18,
    color: Colors.black,
    fontFamily: Font.AvenirHeavy,
  },
  placeTitle: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: Font.AvenirBlack,
  },
  placeText: {
    fontSize: 12,
    color: Colors.lightText,
    fontFamily: Font.AvenirMedium,
  },
  checkInText: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: Font.AvenirBlack,
  },
  dateText: {
    fontSize: 14,
    color: '#6C6C6C',
    fontFamily: Font.AvenirMedium,
  },
  timeText: {
    fontSize: 14,
    color: '#F15922',
    fontFamily: Font.AvenirMedium,
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
  rowWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 15,
  },
});

export default BookingSummary;
