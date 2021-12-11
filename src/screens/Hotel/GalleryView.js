import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import commonStyle from '../../layout/Style';

function GalleryView() {
  return (
    <SafeAreaView style={commonStyle.container}>
      <View style={commonStyle.wrapper}>
        <View style={commonStyle.content}>
          <Text>Gallery View Screen</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default GalleryView;
