import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import commonStyle from '../../../layout/Style';

function GalleryItem({item}) {
  return (
    <View style={styles.card}>
      <ImageBackground
        resizeMode={'contain'}
        style={styles.image}
        source={item?.image}>
        <View style={styles.sliderContent}>
          <View style={commonStyle.rowFlexEnd}>
            <View>
              <Text>2/2</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
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
