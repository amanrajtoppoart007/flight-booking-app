import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Colors from '../../layout/Colors';

import HotelImageOne from '../Svg/Slider/HotelImageOne.svg';
import HotelImageTwo from '../Svg/Slider/HotelImageTwo.svg';
import commonStyle from '../../layout/Style';

function OfferSlider() {
  const brands = [
    {
      id: 'offer-slider-item-one',
      SvgImg: HotelImageOne,
    },
    {
      id: 'offer-slider-item-two',
      SvgImg: HotelImageTwo,
    },
    {
      id: 'offer-slider-item-three',
      SvgImg: HotelImageOne,
    },
    {
      id: 'offer-slider-item-four',
      SvgImg: HotelImageTwo,
    },
  ];

  const renderItem = ({item}) => (
    <View style={commonStyle.marginHorizontal(7.5)}>
      <View style={styles.card}>
        <item.SvgImg style={styles.image} resizeMode={'cover'} />
      </View>
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
    marginVertical: 10,
    width: '100%',
  },
  slider: {
    width: wp('100%'),
  },
  card: {
    width: 160,
    height: 160,
    borderRadius: 8,
    backgroundColor: Colors.transparent,
  },
  image: {
    width: 160,
    height: 160,
  },
});

export default OfferSlider;
