import React from 'react';
import {StyleSheet, View} from 'react-native';
import FeatureSlider from './FeatureSlider';
import HotelDetail from './HotelDetail';

function ChooseRooms() {
  return (
    <View style={styles.container}>
      <View>
        <FeatureSlider />
      </View>
      <View>
        <HotelDetail />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 45,
    backgroundColor: '#FEF5F2',
  },
});

export default ChooseRooms;
