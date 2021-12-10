import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import FlightWing from '../../../Svg/Flight/FlightWing.svg';
import commonStyle from '../../../../layout/Style';
import TimeCard from './TimeCard';
import Font from '../../../../layout/Font';
import {Icon} from 'react-native-elements';
import Colors from '../../../../layout/Colors';
import MoreOptions from './MoreOptions';
import FareOptions from './FareOptions';
import {useNavigation} from '@react-navigation/native';

function FlightCard() {
  const navigation = useNavigation();
  const [isMoreOptionVisible, setIsMoreOptionVisible] = useState(false);
  const [isFareOptionsVisible, setIsFareOptionsVisible] = useState(false);
  return (
    <>
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
              <TimeCard
                isFareOptionVisible={isFareOptionsVisible}
                setIsFareOptionVisible={setIsFareOptionsVisible}
              />
            </View>
            <View>
              <View style={styles.itemSeparator} />
            </View>
            <View style={commonStyle.width('48%')}>
              <TimeCard
                isFareOptionVisible={isFareOptionsVisible}
                setIsFareOptionVisible={setIsFareOptionsVisible}
              />
            </View>
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
        <View style={styles.selectButtonSection}>
          <View>
            <View style={commonStyle.rowFlexStart}>
              <View>
                <Text style={styles.currency}>QAR</Text>
              </View>
              <View style={commonStyle.marginHorizontal(5)}>
                <Text style={styles.price}>170.00</Text>
              </View>
            </View>
            <Text style={styles.text}>(For 1 Travellers)</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('LccCheckout')}
              style={styles.selectButton}>
              <Text style={styles.selectButtonText}>Select</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  },
  cardBody: {
    paddingHorizontal: 12,
  },
  airlineName: {
    fontFamily: Font.AvenirRoman,
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
