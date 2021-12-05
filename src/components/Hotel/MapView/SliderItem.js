import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Colors from '../../../layout/Colors';
import commonStyle from '../../../layout/Style';
import StarRating from '../../StarRating';
import WifiSvg from '../../Svg/Hotel/Wifi.svg';
import MealSvg from '../../Svg/Hotel/Meal.svg';
import GymSvg from '../../Svg/Hotel/Gym.svg';
import PoolSvg from '../../Svg/Hotel/Pool.svg';
import MapPin from '../../Svg/Hotel/Map.svg';
import Font from '../../../layout/Font';

function SliderItem({item}) {
  return (
    <View style={styles.card}>
      <View style={styles.cardBody}>
        <View style={commonStyle.width('30%')}>
          <Image style={styles.image} source={item?.image} />
        </View>
        <View style={commonStyle.width('70%')}>
          <View style={commonStyle.rowFlexStart}>
            <View>
              <Text style={styles.hotelName}>W Doha</Text>
            </View>
            <View style={commonStyle.marginHorizontal(5)}>
              <StarRating rating={4} size={15} />
            </View>
          </View>
          <View style={commonStyle.rowFlexStart}>
            <View>
              <MapPin />
            </View>
            <View style={commonStyle.marginHorizontal(5)}>
              <Text style={styles.locationText}>West Bay, Doha, QA</Text>
            </View>
          </View>
          <View style={[commonStyle.rowSpaceBetween]}>
            <View>
              <View
                style={[
                  commonStyle.rowFlexStart,
                  commonStyle.marginVertical(10),
                ]}>
                <View>
                  <WifiSvg />
                </View>
                <View style={commonStyle.marginHorizontal(3)}>
                  <MealSvg />
                </View>
                <View style={commonStyle.marginHorizontal(3)}>
                  <GymSvg />
                </View>
                <View>
                  <PoolSvg />
                </View>
              </View>
              <View>
                <Text style={styles.amenitiesText}>Bed & Breakfast</Text>
              </View>
            </View>
            <View>
              <View style={styles.priceSection}>
                <View style={styles.offerCard}>
                  <Text style={styles.offerText}>5% off</Text>
                </View>
                <View style={commonStyle.center}>
                  <Text style={commonStyle.rowCenter}>
                    <Text style={styles.currency}>QAR </Text>
                    <Text style={[styles.price, commonStyle.fontSize(12)]}>
                      4790
                    </Text>
                  </Text>
                  <View style={styles.cross} />
                </View>
                <View>
                  <Text style={commonStyle.rowCenter}>
                    <Text style={styles.currency}>QAR </Text>
                    <Text style={styles.price}>3395 </Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    width: widthPercentageToDP('100%'),
    backgroundColor: Colors.white,
    height: 146,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 130,
    borderRadius: 6,
  },
  image: {
    width: 100,
    height: 130,
  },
  priceSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  offerCard: {
    width: 50,
    height: 25,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF2D55',
    padding: 2,
  },
  hotelName: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#242A37',
  },
  locationText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#6C6C6C',
  },
  amenitiesText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#242A37',
  },
  offerText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 12,
    color: Colors.white,
  },
  currency: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#6C6C6C',
  },
  price: {
    fontFamily: Font.AvenirBlack,
    fontSize: 14,
    color: '#0B151F',
  },
  cross: {
    position: 'absolute',
    borderColor: '#FF2D55',
    borderBottomWidth: 2,
    bottom: 0,
    width: '95%',
    borderRadius: 8,
    transform: [{rotateZ: '170deg'}, {translateY: 10}],
  },
});

export default SliderItem;
