import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Font from '../../../layout/Font';
import Colors from '../../../layout/Colors';
import {Icon} from 'react-native-elements';
import commonStyle from '../../../layout/Style';

function Footer({onPress, price, handleBottomSheetPress}) {
  return (
    <View style={styles.footerSection}>
      <View style={commonStyle.rowSpaceBetween}>
        <View>
          <View>
            <Text style={styles.helperText}>Your total stay price</Text>
          </View>
          <View>
            <View style={commonStyle.rowFlexStart}>
              <View>
                <Text style={styles.currency}>QAR</Text>
              </View>
              <View style={commonStyle.marginHorizontal(5)}>
                <Text style={styles.price}> {price}</Text>
              </View>
              <View style={commonStyle.marginHorizontal(8)}>
                <Icon
                  onPress={handleBottomSheetPress}
                  name={'chevron-up'}
                  type={'entypo'}
                  color={'#898989'}
                />
              </View>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={onPress} style={[styles.continueButton]}>
            <Text style={styles.buttonText}>Continue</Text>
            <Icon
              name={'arrowright'}
              type={'antdesign'}
              size={18}
              color={Colors.white}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerSection: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 75,
    backgroundColor: '#242A37',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  continueButton: {
    padding: 8,
    borderRadius: 5,
    backgroundColor: Colors.secondary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  helperText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: Colors.white,
  },
  buttonText: {
    fontSize: 14,
    color: Colors.white,
    fontFamily: Font.AvenirHeavy,
  },
  textNormalLight: {
    fontSize: 12,
    color: Colors.lightText,
    fontFamily: Font.AvenirMedium,
  },
  currency: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#AAAAAA',
  },
  price: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: '#FFFFFF',
  },
  textBigWhite: {
    fontSize: 16,
    color: Colors.white,
    fontFamily: Font.AvenirHeavy,
  },

  rowFlexStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
});
export default Footer;
