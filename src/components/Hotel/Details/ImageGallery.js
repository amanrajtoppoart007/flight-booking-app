import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Font from '../../../layout/Font';
import Colors from '../../../layout/Colors';
import {useNavigation} from '@react-navigation/native';

function ImageGallery() {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <View>
        <Image
          style={styles.previewImg}
          borderRadius={8}
          source={require('../../../assets/images/temp/slider/slider-primary-image.png')}
        />
      </View>
      <View style={styles.miniGallery}>
        <View style={styles.miniGalleryContent}>
          <Image
            style={styles.miniImage}
            resizeMode={'contain'}
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
          <ImageBackground
            style={styles.miniImage}
            source={require('../../../assets/images/temp/slider/slider-mini-image-three.png')}>
            <TouchableOpacity
              onPress={() => navigation.navigate('GalleryView')}
              style={styles.extraImageSection}>
              <Text style={styles.extraImageCounter}>+20</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  miniGallery: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  previewImg: {
    width: widthPercentageToDP('75%'),
    height: 210,
  },
  miniImage: {
    width: 65,
    height: 65,
  },
  miniGalleryContent: {
    marginVertical: 3.5,
    borderRadius: 8,
  },
  extraImageSection: {
    width: 65,
    height: 65,
    borderRadius: 8,
    backgroundColor: 'rgba(44,40,40,0.6)',
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  extraImageCounter: {
    fontFamily: Font.AvenirBlack,
    fontSize: 16,
    color: Colors.white,
  },
});

export default ImageGallery;
