import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import commonStyle from '../../layout/Style';

function HotelMapView() {
  return (
    <SafeAreaView style={commonStyle.container}>
      <View style={commonStyle.wrapper}>
        <View style={commonStyle.content}>
          <Text>Example Screen</Text>
          <Text>You can copy this screen to make new screens</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HotelMapView;
