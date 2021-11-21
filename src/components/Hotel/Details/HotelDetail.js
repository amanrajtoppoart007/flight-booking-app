import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import commonStyle from '../../../layout/Style';

import WifiSvg from '../../Svg/Hotel/Wifi.svg';
import PoolSvg from '../../Svg/Hotel/Pool.svg';
import MealSvg from '../../Svg/Hotel/Meal.svg';
import GymSvg from '../../Svg/Hotel/Gym.svg';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Colors from '../../../layout/Colors';
import Font from '../../../layout/Font';

function PriceCard({isActive}) {
  return (
    <View style={priceStyles.card(isActive)}>
      <View style={commonStyle.rowSpaceBetween}>
        <View />
        <View />
      </View>
    </View>
  );
}

function HotelDetail() {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={commonStyle.rowSpaceBetween}>
          <View>
            <Text>Room 2: Fabulous Room, Deluxe Ro…</Text>
            <Text>1 King Bed, Room Only</Text>
          </View>
          <View>
            <Text>QAR 4790</Text>
            <Text>QAR 3395</Text>
          </View>
        </View>
      </View>
      <View style={styles.cardBody}>
        <View>
          <Text>Spectacular Room, 2 Double Beds, Non Smoking…</Text>
        </View>
        <View style={commonStyle.rowFlexStart}>
          <View>
            <WifiSvg />
          </View>
          <View style={commonStyle.marginHorizontal(5)}>
            <MealSvg />
          </View>
          <View style={commonStyle.marginHorizontal(5)}>
            <GymSvg />
          </View>
          <View>
            <PoolSvg />
          </View>
          <View
            style={[commonStyle.rowFlexStart, commonStyle.marginHorizontal(5)]}>
            <View>
              <Text>+</Text>
            </View>
            <View>
              <Text>More</Text>
            </View>
          </View>
        </View>
        <View style={commonStyle.center}>
          <PriceCard isActive={true} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {},
  cardHeader: {
    height: 45,
    backgroundColor: '#FEF5F2',
  },
  cardBody: {},
});

const priceStyles = StyleSheet.create({
  card(isActive) {
    return {
      width: wp('90%'),
      height: 80,
      backgroundColor: isActive ? '#FEF5F2' : Colors.white,
      borderRadius: 8,
    };
  },
  offerCard: {
    width: 45,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF2D55',
  },
  offerText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 12,
    color: Colors.white,
  },
  price: {
    fontFamily: Font.AvenirBlack,
    fontSize: 14,
    color: '#0B151F',
  },
  cancellationPolicyText(type) {
    return {
      fontFamily: Font.AvenirBlack,
      fontSize: 14,
      color: type === 'refundable' ? '#13A869' : '#FF2D55',
    };
  },
});

export default HotelDetail;
