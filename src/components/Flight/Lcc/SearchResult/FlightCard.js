import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import FlightWing from '../../../Svg/Flight/FlightWing.svg';
import commonStyle from '../../../../layout/Style';
import TimeCard from './TimeCard';
import Font from '../../../../layout/Font';
import {Icon} from 'react-native-elements';
import Colors from '../../../../layout/Colors';

function FlightCard() {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={commonStyle.rowSpaceBetween}>
          <View>
            <FlightWing />
          </View>
          <View style={commonStyle.marginHorizontal(5)}>
            <Text style={styles.airlineName}>Air Arabia</Text>
          </View>
        </View>
        <View>
          <Text style={commonStyle.rowCenter}>
            <Text style={styles.currency}>QAR </Text>
            <Text style={styles.price}>400.00</Text>
          </Text>
          <Text style={styles.refundPolicy}>Refundable</Text>
        </View>
      </View>
      <View style={styles.cardBody}>
        <View style={commonStyle.marginVertical(12)}>
          <View style={styles.divider} />
        </View>
        <View style={commonStyle.rowSpaceBetween}>
          <View style={commonStyle.width('48%')}>
            <TimeCard />
          </View>
          <View>
            <View style={styles.itemSeparator} />
          </View>
          <View style={commonStyle.width('48%')}>
            <TimeCard />
          </View>
        </View>
      </View>
      <View style={styles.cardFooter}>
        <TouchableOpacity style={styles.moreItemButton}>
          <Text style={styles.moreItemButtonText}>More Options</Text>
          <Icon type={'feather'} name={'chevrons-up'} size={12} />
        </TouchableOpacity>
        <View style={styles.divider} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 12,
    backgroundColor: Colors.white,
  },
  itemSeparator: {
    width: 1,
    backgroundColor: '#DDDDDD',
    height: 150,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 12,
  },
  cardBody: {
    paddingHorizontal: 12,
  },
  airlineName: {
    fontFamily: Font.AvenirRoman,
    fontSize: 14,
    color: '#242A37',
  },
  currency: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#6C6C6C',
  },
  price: {
    fontFamily: Font.AvenirBlack,
    fontSize: 16,
    color: '#0B151F',
  },
  refundPolicy: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#13A869',
  },
  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#707070',
    width: '100%',
  },
  cardFooter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreItemButton: {
    width: 110,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(49, 179, 223, 0.2)',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  moreItemButtonText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#50555F',
  },
});

export default FlightCard;
