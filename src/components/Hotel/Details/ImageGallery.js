import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

function ImageGallery() {
  return (
    <View style={styles.card}>
      <View>
        <Image
          source={require('../../../assets/images/temp/slider/slider-primary-image.png')}
        />
      </View>
      <View style={styles.miniGallery}>
        <View style={styles.miniGalleryContent}>
          <Image
            style={styles.miniImage}
            source={require('../../../assets/images/temp/slider/slider-mini-image-one.png')}
          />
        </View>
        <View style={styles.miniGalleryContent}>
          <Image
            style={styles.miniImage}
            source={require('../../../assets/images/temp/slider/slider-mini-image-two.png')}
          />
        </View>
        <View style={styles.miniGalleryContent}>
          <Image
            style={styles.miniImage}
            source={require('../../../assets/images/temp/slider/slider-mini-image-three.png')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  miniGallery: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  miniImage: {
    width: 65,
    height: 65,
  },
  miniGalleryContent: {
    marginVertical: 3.5,
  },
});

export default ImageGallery;
