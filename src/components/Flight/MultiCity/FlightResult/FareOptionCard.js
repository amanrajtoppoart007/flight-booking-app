import React, {useState} from 'react';
import commonStyle from '../../../../layout/Style';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import LuggageSvg from '../../../Svg/Flight/Luggage.svg';
import MealSvg from '../../../Svg/Flight/Meal.svg';
import RefreshSvg from '../../../Svg/Flight/Refresh.svg';
import CancelSvg from '../../../Svg/Flight/Cancel.svg';
import Font from '../../../../layout/Font';

function FareOptionCard({item, index, setSelected}) {
  return (
    <View style={commonStyle.marginVertical(7.5)}>
      <View style={styles.priceCard(item?.color)}>
        <View style={styles.cardHeader(item?.backgroundColor)}>
          <View>
            <Text style={styles.titleText(item?.color)}>{item?.title}</Text>
          </View>
          <View style={commonStyle.rowCenter}>
            <View style={commonStyle.marginHorizontal(20)}>
              <View style={commonStyle.rowSpaceBetween}>
                <View style={commonStyle.marginHorizontal(5)}>
                  <Text style={styles.currency}>QAR</Text>
                </View>
                <View>
                  <Text style={styles.price}>200.00</Text>
                </View>
              </View>
            </View>
            <View>
              <Icon
                onPress={() => setSelected(index)}
                name={item?.isSelected ? 'dot-circle-o' : 'circle-o'}
                type={'font-awesome'}
                size={26}
                color={'#242A37'}
              />
            </View>
          </View>
        </View>
        {item?.isSelected && (
          <>
            <View style={styles.rowSection}>
              <View style={commonStyle.rowSpaceBetween}>
                <View>
                  <LuggageSvg />
                </View>
                <View style={commonStyle.marginHorizontal(15)}>
                  <Text style={styles.dataTitle}>Cabin baggage</Text>
                </View>
              </View>
              <View>
                <Text style={styles.dataText}>7 KG</Text>
              </View>
            </View>
            <View style={styles.rowSection}>
              <View style={commonStyle.rowSpaceBetween}>
                <View>
                  <MealSvg />
                </View>
                <View style={commonStyle.marginHorizontal(15)}>
                  <Text style={styles.dataTitle}>Meal Selection</Text>
                </View>
              </View>
              <View>
                <Text style={styles.dataText}>For a fee</Text>
              </View>
            </View>
            <View style={styles.rowSection}>
              <View style={commonStyle.rowSpaceBetween}>
                <View>
                  <RefreshSvg />
                </View>
                <View style={commonStyle.marginHorizontal(15)}>
                  <Text style={styles.dataTitle}>Change Booking</Text>
                </View>
              </View>
              <View>
                <Text style={styles.dataText}>QAR 125</Text>
              </View>
            </View>
            <View style={styles.rowSection}>
              <View style={commonStyle.rowSpaceBetween}>
                <View>
                  <CancelSvg />
                </View>
                <View style={commonStyle.marginHorizontal(15)}>
                  <Text style={styles.dataTitle}>Cancel Booking</Text>
                </View>
              </View>
              <View>
                <Text style={styles.dataText}>Not Allowed</Text>
              </View>
            </View>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  priceCard(color) {
    return {
      width: '100%',
      borderWidth: 2,
      borderColor: color,
      borderRadius: 8,
    };
  },

  cardHeader(color) {
    return {
      height: 45,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderTopColor: '#DDDDDD',
      borderBottomColor: '#DDDDDD',
      paddingHorizontal: 14,
      backgroundColor: color,
    };
  },
  titleText(color) {
    return {
      fontFamily: Font.AvenirHeavy,
      fontSize: 20,
      color,
    };
  },
  dataTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#242A37',
  },
  dataText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#26698E',
  },
  currency: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
  },
  price: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 18,
    color: '#0B151F',
  },
  rowSection: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#DDDDDD',
    borderBottomColor: '#DDDDDD',
    paddingHorizontal: 14,
  },
});

export default FareOptionCard;
