import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import commonStyle from '../layout/Style';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import TrackFlightModal from '../components/TrackFlight/TrackFlightModal';

function TrackFlightExample() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <SafeAreaView style={commonStyle.container}>
      <View style={commonStyle.wrapper}>
        <View style={commonStyle.content}>
          <View
            style={[
              {height: heightPercentageToDP('100%')},
              commonStyle.center,
            ]}>
            <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
              <Text>Open Modal</Text>
            </TouchableOpacity>
          </View>
          <TrackFlightModal isVisible={isVisible} setIsVisible={setIsVisible} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default TrackFlightExample;
