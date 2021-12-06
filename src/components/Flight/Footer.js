import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Font from '../../layout/Font';
import PlaneSmall from '../Svg/PlaneSmall.svg';
import DeerWhiteBg from '../Svg/DeerWhiteBg.svg';
import Colors from '../../layout/Colors';
import {Icon} from 'react-native-elements';
import commonStyle from '../../layout/Style';

function Footer({
  onPress,
  buttonText = 'Continue',
  buttonIcon = true,
  price,
  data = [{title: 'DOH → DXB', subtext: '1 stop'}],
}) {
  return (
    <View style={styles.bottomCanvas}>
      <View style={[commonStyle.marginHorizontal(5)]}>
        <View style={[commonStyle.rowFlexStart]}>
          <PlaneSmall style={commonStyle.marginRight(5)} />
          <Text style={[styles.textNormalWhite]}>
            Your Selection
            <Text style={styles.textNormalLight}> (For 4 Travellers)</Text>
          </Text>
        </View>
        <View style={[commonStyle.rowSpaceBetween, commonStyle.marginTop(10)]}>
          {data &&
            data.map(item => (
              <View
                key={String(Math.floor(Math.random() * 356))}
                style={[commonStyle.rowSpaceEven, commonStyle.marginRight(10)]}>
                <View style={commonStyle.rowSpaceBetween}>
                  <DeerWhiteBg />
                  <View style={commonStyle.marginLeft(5)}>
                    <Text style={styles.textSmallWhite}>{item?.title}</Text>
                    <Text style={styles.textNormalLight}>{item?.subtext}</Text>
                  </View>
                </View>
              </View>
            ))}
        </View>
      </View>
      <View
        style={[
          styles.RightContainer,
          {justifyContent: !price ? 'center' : 'space-between'},
        ]}>
        {price && (
          <Text style={styles.textBigWhite}>
            <Text style={styles.textBigLight}>QAR</Text> {price}
          </Text>
        )}
        <TouchableOpacity onPress={onPress} style={[styles.continueButton]}>
          <Text style={styles.textNormalWhite}>{buttonText}</Text>
          {buttonIcon && (
            <Icon
              name={'arrowright'}
              type={'antdesign'}
              size={18}
              style={styles.marginLeft(5)}
              color={Colors.white}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  continueButton: {
    padding: 8,
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: Colors.secondary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  RightContainer: {
    marginHorizontal: 5,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  bottomCanvas: {
    width: '100%',
    minHeight: hp('10%'),
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#242A37',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textSmallWhite: {
    fontSize: 12,
    color: Colors.white,
    fontFamily: Font.AvenirMedium,
  },
  textNormalWhite: {
    fontSize: 14,
    color: Colors.white,
    fontFamily: Font.AvenirHeavy,
  },
  textNormalLight: {
    fontSize: 12,
    color: Colors.lightText,
    fontFamily: Font.AvenirMedium,
  },
  textBigLight: {
    fontSize: 14,
    color: Colors.lightText,
    fontFamily: Font.AvenirMedium,
  },
  textBigWhite: {
    fontSize: 16,
    color: Colors.white,
    fontFamily: Font.AvenirHeavy,
  },

  marginRight(t) {
    return {
      marginRight: t,
    };
  },
  marginLeft(t) {
    return {
      marginLeft: t,
    };
  },
  rowFlexStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
});
export default Footer;
