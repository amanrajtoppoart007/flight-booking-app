import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import commonStyle from '../../../../layout/Style';
import Font from '../../../../layout/Font';
import {Icon} from 'react-native-elements';
import Colors from '../../../../layout/Colors';
import MoreOptions from './MoreOptions';
import FareOptions from './FareOptions';
import FlightSvg from '../../../Svg/Flight/Flight.svg';
import OptionCard from './OptionCard';

function FlightCard() {
  const [isMoreOptionVisible, setIsMoreOptionVisible] = useState(false);
  const [isFareOptionsVisible, setIsFareOptionsVisible] = useState(false);
  return (
    <>
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
              <Text style={styles.place}>DOH - DXB </Text>
            </View>
          </View>
        </View>
        <View style={styles.cardBody}>
          <View style={commonStyle.marginVertical(12)}>
            <View style={styles.divider} />
          </View>
          <View style={commonStyle.marginVertical(8)}>
            <OptionCard
              item={[]}
              setSelected={() => {}}
              parentIndex={0}
              index={0}
            />
          </View>
        </View>
        <View style={styles.cardFooter}>
          <TouchableOpacity
            onPress={() => setIsMoreOptionVisible(!isMoreOptionVisible)}
            style={styles.moreItemButton}>
            <Text style={styles.moreItemButtonText}>More Options</Text>
            <Icon
              type={'feather'}
              name={isMoreOptionVisible ? 'chevrons-up' : 'chevrons-down'}
              size={12}
            />
          </TouchableOpacity>
          <View style={styles.divider} />
        </View>
        {isMoreOptionVisible && (
          <View style={commonStyle.backgroundColor('rgba(49, 179, 223, 0.15)')}>
            <MoreOptions />
          </View>
        )}
      </View>
      {isFareOptionsVisible && (
        <FareOptions
          isVisible={isFareOptionsVisible}
          setIsVisible={setIsFareOptionsVisible}
        />
      )}
    </>
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
    backgroundColor: '#EAF1F9',
    height: 45,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  cardBody: {
    paddingHorizontal: 12,
  },
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

export default FlightCard;
