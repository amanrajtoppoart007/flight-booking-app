import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import commonStyle from '../../layout/Style';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';
import Colors from '../../layout/Colors';
import CustomStatusBar from '../../components/CustomStatusBar';
import Font from '../../layout/Font';

import EditSvg from '../../components/Svg/Hotel/Edit.svg';
import FilterSvg from '../../components/Svg/Hotel/Filter.svg';

function HotelDetails() {
  return (
    <SafeAreaView style={commonStyle.container}>
      <CustomStatusBar backgroundColor={Colors.primary} />
      <View style={commonStyle.wrapper}>
        <View style={commonStyle.content}>
          <LinearGradient colors={['#1C8CCC', '#015F95']} style={styles.canvas}>
            <View style={styles.headerSection}>
              <View style={commonStyle.rowSpaceBetween}>
                <View>
                  <Icon
                    name={'md-arrow-back-sharp'}
                    type={'ionicon'}
                    style={styles.icon}
                    color={Colors.white}
                  />
                </View>
                <View style={commonStyle.marginHorizontal(10)}>
                  <Text style={styles.title}>Payment</Text>
                </View>
              </View>
              <View style={commonStyle.rowSpaceBetween}>
                <View>
                  <EditSvg />
                </View>
                <View>
                  <FilterSvg />
                </View>
              </View>
            </View>
            <View>
              <Text>15 Sep - 20 Sep | Room 1 | 2 Guests</Text>
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
    height: hp('15%'),
    justifyContent: 'center',
  },
  icon: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 18,
    color: Colors.white,
  },
  title: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 18,
    color: Colors.white,
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default HotelDetails;
