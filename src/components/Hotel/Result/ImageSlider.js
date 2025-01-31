import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Colors from '../../../layout/Colors';

import WifiSvg from '../../Svg/Hotel/Amenities/Wifi.svg';
import PoolSvg from '../../Svg/Hotel/Amenities/Pool.svg';
import GymSvg from '../../Svg/Hotel/Amenities/Gym.svg';
import MealSvg from '../../Svg/Hotel/Amenities/Meal.svg';
import FlightSvg from '../../Svg/Hotel/Amenities/Flight.svg';
import Font from '../../../layout/Font';
function ImageSlider() {
  const images = [
    {
      id: 'image-slider-item-one',
      image: require('../../../assets/images/temp/hotels/hotel-image-one.png'),
    },
    {
      id: 'image-slider-item-two',
      image: require('../../../assets/images/temp/hotels/hotel-image-two.png'),
    },
    {
      id: 'image-slider-item-three',
      image: require('../../../assets/images/temp/hotels/hotel-image-one.png'),
    },
    {
      id: 'image-slider-item-four',
      image: require('../../../assets/images/temp/hotels/hotel-image-two.png'),
    },
    {
      id: 'image-slider-item-five',
      image: require('../../../assets/images/temp/hotels/hotel-image-one.png'),
    },
    {
      id: 'image-slider-item-six',
      image: require('../../../assets/images/temp/hotels/hotel-image-two.png'),
    },
  ];

  const _renderItem = ({item}) => (
    <View style={styles.card}>
      <Image style={styles.image} source={item?.image} />
    </View>
  );

  return (
    <>
      {images && (
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            initialNumToRender={3}
            horizontal={true}
            keyExtractor={item => item?.id?.toString()}
            data={images}
            renderItem={_renderItem}
          />
          <View style={styles.amenityButton}>
            <View>
              <WifiSvg />
            </View>
            <View>
              <MealSvg />
            </View>
            <View>
              <GymSvg />
            </View>
            <View>
              <PoolSvg />
            </View>
          </View>
          <View style={styles.ratingButton}>
            <View>
              <FlightSvg />
            </View>
            <View>
              <Text style={styles.ratingCountText}>4.5/5</Text>
            </View>
            <View>
              <Text style={styles.ratingText}>Excellent</Text>
            </View>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 120,
    borderRadius: 6,
    marginHorizontal: 3,
  },
  image: {
    width: 200,
    height: 120,
    borderRadius: 6,
  },
  amenityButton: {
    position: 'absolute',
    left: 10,
    bottom: -5,
    width: 100,
    height: 30,
    borderRadius: 4,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  ratingButton: {
    position: 'absolute',
    right: 0,
    top: 50,
    width: 100,
    height: 30,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  ratingCountText: {
    fontFamily: Font.AvenirBlack,
    fontSize: 11,
    color: '#1DAD81',
  },
  ratingText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 11,
    color: Colors.lightText,
  },
});

export default ImageSlider;
