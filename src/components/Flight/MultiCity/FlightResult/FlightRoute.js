import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import commonStyle from '../../../../layout/Style';
import Font from '../../../../layout/Font';
import Colors from '../../../../layout/Colors';
import FlightSvg from '../../../Svg/Flight/Flight.svg';
import FlightList from './FlightList';

function FlightRoute({item}) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={commonStyle.rowSpaceBetween}>
          <View>
            <FlightSvg />
          </View>
          <View style={commonStyle.marginHorizontal(8)}>
            <Text style={styles.title}>Departing </Text>
          </View>
          <View style={commonStyle.marginHorizontal(8)}>
            <Text style={styles.place}>
              {item?.from} - {item?.to}
            </Text>
          </View>
        </View>
      </View>
      <View>
        <FlightList item={item?.flights} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 6,
    backgroundColor: Colors.white,
    paddingHorizontal: 12,
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
    backgroundColor: '#EAF1F9',
    height: 45,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginVertical: 12,
  },
  cardBody: {},
  title: {
    fontFamily: Font.AvenirRoman,
    fontSize: 14,
    color: '#F15922',
  },
  place: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#242A37',
  },
  text: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#50555F',
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
    backgroundColor: 'rgba(49, 179, 223, 0.15)',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  moreItemButtonText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#50555F',
  },
  selectButton: {
    width: 110,
    height: 45,
    backgroundColor: '#F15922',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectButtonSection: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  selectButtonText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 16,
    color: Colors.white,
  },
});

export default FlightRoute;
