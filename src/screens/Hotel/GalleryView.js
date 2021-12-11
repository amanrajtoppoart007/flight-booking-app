import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import commonStyle from '../../layout/Style';
import Font from '../../layout/Font';

import GalleryItem from '../../components/Hotel/Gallery/GalleryItem';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import StarRating from '../../components/StarRating';

import CloseSvg from '../../components/Svg/Close.svg';
import MapSvg from '../../components/Svg/Hotel/Map.svg';
function GalleryView({navigation}) {
  const [sliders] = useState([
    {
      image: require('../../assets/images/hotel/gallery/hotel-image-one.png'),
    },
    {
      image: require('../../assets/images/temp/slider/slider-primary-image.png'),
    },
    {
      image: require('../../assets/images/welcome/laptop.png'),
    },
    {
      image: require('../../assets/images/hotel/gallery/hotel-image-one.png'),
    },
    {
      image: require('../../assets/images/temp/slider/slider-primary-image.png'),
    },
    {
      image: require('../../assets/images/welcome/laptop.png'),
    },
    {
      image: require('../../assets/images/hotel/gallery/hotel-image-one.png'),
    },
    {
      image: require('../../assets/images/temp/slider/slider-primary-image.png'),
    },
    {
      image: require('../../assets/images/welcome/laptop.png'),
    },
    {
      image: require('../../assets/images/hotel/gallery/hotel-image-one.png'),
    },
  ]);

  const _renderItem = ({item}) => <GalleryItem item={item} />;
  return (
    <SafeAreaView style={commonStyle.container}>
      <View style={commonStyle.wrapper}>
        <View style={commonStyle.content}>
          <View style={styles.header}>
            <View>
              <Text style={styles.pageTitle}>Gallery</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <CloseSvg />
            </TouchableOpacity>
          </View>
          <View style={styles.gallerySection}>
            <FlatList
              contentContainerStyle={commonStyle.flex(1)}
              pagingEnabled={true}
              horizontal={true}
              data={sliders}
              keyExtractor={(item, index) => index?.toString()}
              renderItem={_renderItem}
            />
          </View>
          <View style={styles.detailSection}>
            <View>
              <View style={commonStyle.rowFlexStart}>
                <View>
                  <Text style={styles.name}>W Doha</Text>
                </View>
                <View style={commonStyle.marginHorizontal(5)}>
                  <StarRating rating={4} size={18} />
                </View>
              </View>
              <View style={styles.addressWrapper}>
                <View>
                  <MapSvg />
                </View>
                <View style={commonStyle.marginHorizontal(5)}>
                  <Text style={styles.address}>West Bay, Doha, QA</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 75,
    width: '100%',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#DDDDDD',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  pageTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 18,
    color: '#242A37',
  },
  gallerySection: {
    height: hp('70%'),
  },
  detailSection: {
    height: hp('20%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#242A37',
  },
  addressWrapper: {
    ...commonStyle.rowFlexStart,
    ...commonStyle.marginVertical(7),
  },
  address: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#6C6C6C',
  },
});

export default GalleryView;
