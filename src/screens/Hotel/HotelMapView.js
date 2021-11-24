import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Text,
} from 'react-native';
import commonStyle from '../../layout/Style';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Colors from '../../layout/Colors';

import MenuSvg from '../../components/Svg/Hotel/Menu.svg';
import ListSvg from '../../components/Svg/Hotel/List.svg';
import Slider from '../../components/Hotel/MapView/Slider';
import ShortFilter from '../../components/Hotel/SortFilter';
function HotelMapView({navigation}) {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  return (
    <SafeAreaView style={commonStyle.container}>
      <View style={[commonStyle.wrapper, {flex: 1}]}>
        <View style={[commonStyle.content, {flex: 1}]}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            mapType={Platform.OS === 'ios' ? 'mutedStandard' : 'standard'}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          />
          <View style={styles.headerSection}>
            <TouchableOpacity
              onPress={() => setIsFilterVisible(true)}
              style={styles.menuButton}>
              <MenuSvg />
            </TouchableOpacity>
          </View>
          <View style={styles.sliderWrapper}>
            <Slider />
          </View>
          <View style={styles.listViewButtonWrapper}>
            <View style={styles.listViewButton}>
              <View>
                <ListSvg />
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.replace('SearchResult')}>
                  <Text>List View</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View />
        </View>
      </View>
      {isFilterVisible && (
        <ShortFilter onClose={() => setIsFilterVisible(false)} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },

  menuButton: {
    margin: 20,
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },

  sliderWrapper: {
    position: 'absolute',
    bottom: 80,
  },

  listViewButtonWrapper: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  listViewButton: {
    width: 110,
    height: 38,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 10,
  },

  headerSection: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

export default HotelMapView;
