import React from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Colors from '../../layout/Colors';

import HotelImageOne from '../Svg/Slider/HotelImageOne.svg';
import HotelImageTwo from '../Svg/Slider/HotelImageTwo.svg';
import commonStyle from '../../layout/Style';

function OfferSlider() {
  const brands = [
    {
      id: 'offer-slider-item-one',
      image: require('../../assets/images/temp/home/hotel-one.png'),
    },
    {
      id: 'offer-slider-item-two',
      image: require('../../assets/images/temp/home/hotel-two.png'),
    },
    {
      id: 'offer-slider-item-three',
      image: require('../../assets/images/temp/home/hotel-one.png'),
    },
    {
      id: 'offer-slider-item-four',
      image: require('../../assets/images/temp/home/hotel-two.png'),
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Image
        source={item?.image}
        style={styles.image}
        borderRadius={8}
        resizeMode={'cover'}
      />
    </View>
  );

  return (
    <>
      {brands && (
        <View style={styles.sliderWrapper}>
          <FlatList
            style={styles.slider}
            showsHorizontalScrollIndicator={false}
            initialNumToRender={4}
            horizontal={true}
            keyExtractor={item => item?.id?.toString()}
            data={brands}
            renderItem={renderItem}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  sliderWrapper: {
    width: '100%',
    paddingVertical: 20,
    backgroundColor: Colors.white,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#707070',
    borderBottomColor: '#707070',
  },
  slider: {
    width: wp('100%'),
  },
  card: {
    width: wp('47%'),
    height: 160,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  image: {
    width: wp('47%'),
    height: 160,
  },
});

export default OfferSlider;
