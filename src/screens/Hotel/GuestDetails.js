import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import commonStyle from '../../layout/Style';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

import StatusStepBar from '../../components/Hotel/Checkout/StatusStepBar';

import BackSvg from '../../components/Svg/Hotel/Back.svg';
import Font from '../../layout/Font';
import Colors from '../../layout/Colors';
function GuestDetails({navigation}) {
  return (
    <SafeAreaView style={commonStyle.container}>
      <View style={commonStyle.wrapper}>
        <View style={commonStyle.content}>
          <LinearGradient colors={['#1C8CCC', '#015F95']} style={styles.canvas}>
            <View style={commonStyle.rowFlexStart}>
              <View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <BackSvg />
                </TouchableOpacity>
              </View>
              <View style={commonStyle.marginHorizontal(15)}>
                <Text style={styles.pageTitle}>Check Out</Text>
              </View>
            </View>
            <View style={commonStyle.paddingVertical(15)}>
              <StatusStepBar activeIndex={1} />
            </View>
          </LinearGradient>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  canvas: {
    width: '100%',
    height: hp('18%'),
    backgroundColor: 'green',
  },
  pageTitle: {
    fontFamily: Font.AvenirHeavy,
    color: Colors.white,
    fontSize: 18,
  },
});

export default GuestDetails;
