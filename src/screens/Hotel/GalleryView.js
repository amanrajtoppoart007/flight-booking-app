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
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import GalleryItem from '../../components/Hotel/Gallery/GalleryItem';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import StarRating from '../../components/StarRating';
import CloseSvg from '../../components/Svg/Close.svg';
import MapSvg from '../../components/Svg/Hotel/Map.svg';
import Colors from '../../layout/Colors';
function GalleryView({navigation}) {
  const [itemIndex, setItemIndex] = useState(0);
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

  const _renderItem = ({item, index}) => (
    <GalleryItem item={item} index={index} size={sliders.length} />
  );
  function _handleScroll(event) {
    const xOffset = event.nativeEvent.contentOffset.x;
    const width = event.nativeEvent.contentSize.width;
    if (Math.round((xOffset / width) * 10) !== itemIndex) {
      setItemIndex(Math.round((xOffset / width) * 10));
    }
  }
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
              onScroll={_handleScroll}
              pagingEnabled
              decelerationRate={'fast'}
              snapToInterval={wp('100%')}
              data={sliders}
              horizontal
              keyExtractor={(item, index) => index?.toString()}
              renderItem={_renderItem}
            />
            <View style={styles.paginationContainer}>
              {sliders.map((_, index) => (
                <View style={styles.paginationCircle(itemIndex === index)} />
              ))}
            </View>
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
  paginationContainer: {
    position: 'absolute',
    width: '95%',
    top: 360,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  paginationCircle(val) {
    return {
      height: 8,
      width: 8,
      borderRadius: 6,
      borderColor: 'white',
      borderWidth: 1,
      marginHorizontal: 1,
      backgroundColor: val ? '#F15922' : Colors.transparent,
    };
  },
  pageTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 18,
    color: '#242A37',
  },
  gallerySection: {
    height: hp('70%'),
    alignItems: 'center',
    justifyContent: 'center',
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
