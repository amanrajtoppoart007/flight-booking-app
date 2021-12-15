import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

function OfferSlider({setOfferModalVisible, offerModalVisible}) {
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
    <TouchableOpacity
      onPress={() => setOfferModalVisible(!offerModalVisible)}
      style={styles.card}>
      <Image
        source={item?.image}
        style={styles.image}
        borderRadius={8}
        resizeMode={'cover'}
      />
    </TouchableOpacity>
  );

  return (
    <>
      {brands && (
        <View>
          <FlatList
            style={styles.sliderContainer}
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
  sliderContainer: {
    width: wp('91%'),
    alignSelf: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#dcdbdb',
    paddingTop: 10,
    paddingBottom: 20,
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
