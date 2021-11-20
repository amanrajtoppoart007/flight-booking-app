import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import commonStyle from '../../../layout/Style';
import Font from '../../../layout/Font';
import Colors from '../../../layout/Colors';
import RightTickSvg from '../../Svg/RightTick.svg';
import {widthPercentageToDP} from 'react-native-responsive-screen';

function StatusStepBar({activeIndex}) {
  return (
    <View style={commonStyle.center}>
      <View style={commonStyle.rowSpaceBetween}>
        <View style={styles.column}>
          <View style={styles.outerCircle(1, activeIndex)}>
            <View style={styles.circle(1, activeIndex)}>
              {activeIndex > 1 ? (
                <RightTickSvg />
              ) : (
                <Text style={styles.index(1, activeIndex)}>1</Text>
              )}
            </View>
          </View>
          <View>
            <Text style={styles.title}>Guest Details</Text>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.dividerSection}>
            <View style={commonStyle.rowSpaceBetween}>
              <View>
                <View style={styles.divider} />
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.textDisplayNone}>→ </Text>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.outerCircle(2, activeIndex)}>
            <View style={styles.circle(2, activeIndex)}>
              {activeIndex > 2 ? (
                <RightTickSvg />
              ) : (
                <Text style={styles.index(2, activeIndex)}>2</Text>
              )}
            </View>
          </View>
          <View>
            <Text style={styles.title}>Payment</Text>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.dividerSection}>
            <View style={commonStyle.rowSpaceBetween}>
              <View>
                <View style={styles.divider} />
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.textDisplayNone}>→ </Text>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.outerCircle(3, activeIndex)}>
            <View style={styles.circle(3, activeIndex)}>
              {activeIndex >= 3 ? (
                <RightTickSvg />
              ) : (
                <Text style={styles.index(3, activeIndex)}>3</Text>
              )}
            </View>
          </View>
          <View>
            <Text style={styles.title}>Success</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerCircle(index, activeIndex) {
    return {
      width: 36,
      height: 36,
      borderRadius: 18,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:
        index <= activeIndex
          ? 'rgba(128, 196, 89, 0.5)'
          : 'rgba(255, 255, 255, 0.5)',
    };
  },
  circle(index, activeIndex) {
    return {
      width: 28,
      height: 28,
      borderRadius: 14,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: index <= activeIndex ? '#80C459' : '#FFFFFF',
    };
  },
  dividerSection: {
    alignItems: 'center',
    marginHorizontal: 4,
  },
  column: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    borderTopWidth: 5,
    borderTopColor: 'white',
    width: widthPercentageToDP('15%'),
    borderRadius: 5,
  },
  CircleDivider: {
    width: 5,
    height: 5,
    borderRadius: 5 / 2,
    backgroundColor: Colors.white,
  },
  index(index, activeIndex) {
    return {
      fontFamily: Font.AvenirHeavy,
      fontSize: 16,
      color: index <= activeIndex ? Colors.white : Colors.primary,
    };
  },
  textDisplayNone: {
    color: 'transparent',
  },
  title: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: Colors.white,
  },
});

export default StatusStepBar;
