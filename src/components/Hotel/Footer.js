import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Font from '../../layout/Font';
import Colors from '../../layout/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';
import commonStyle from '../../layout/Style';

function Footer({onPress, title, price, handleBottomSheetPress}) {
  return (
    <LinearGradient colors={['#242A37', '#3C4250']} style={styles.bottomCanvas}>
      <View>
        <Text style={[styles.textNormalWhite, commonStyle.marginBottom(10)]}>
          {title}
        </Text>
        <View style={[styles.rowFlexStart]}>
          <Text style={styles.textBigWhite}>
            <Text style={[styles.textNormalLight]}>QAR</Text> {price}
          </Text>
          <TouchableOpacity onPress={handleBottomSheetPress}>
            <Icon
              name={'down'}
              type={'antdesign'}
              size={18}
              style={commonStyle.marginHorizontal(10)}
              color={Colors.lightText}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={[commonStyle.rowCenter, commonStyle.marginHorizontal(5)]}>
        <TouchableOpacity onPress={onPress} style={styles.continueButton}>
          <Text style={styles.textNormalWhite}>Continue</Text>
          <Icon
            name={'arrowright'}
            type={'antdesign'}
            size={18}
            style={styles.marginLeft(5)}
            color={Colors.white}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
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

  bottomCanvas: {
    width: '100%',
    height: hp('10%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  textNormalWhite: {
    fontSize: 14,
    color: Colors.white,
    fontFamily: Font.AvenirRegular,
  },
  textNormalLight: {
    fontSize: 14,
    color: Colors.lightText,
    fontFamily: Font.AvenirRegular,
  },

  textBigWhite: {
    fontSize: 16,
    color: Colors.white,
    fontFamily: Font.AvenirMedium,
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
