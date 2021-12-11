import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import commonStyle from '../../../layout/Style';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Gallery from '../../../components/Svg/Gallery.svg';
function GalleryItem({item, index, size}) {
  return (
    <View style={styles.card}>
      <ImageBackground
        resizeMode={'contain'}
        style={styles.image}
        source={item?.image}>
        <View style={styles.sliderContent}>
          <View style={commonStyle.rowFlexEnd}>
            <Gallery />
            <View style={commonStyle.marginHorizontal(3)} />
            <View>
              <Text>{index + 1 + '/' + size}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderContent: {
    width: '100%',
    height: '100%',
    padding: 12,
  },
  image: {
    width: '100%',
    height: 260,
  },
  circle(isActive) {
    return {
      width: 8,
      height: 8,
      borderWidth: 2,
      borderColor: 'white',
      backgroundColor: isActive ? '#F15922' : 'transparent',
    };
  },
});

export default GalleryItem;
