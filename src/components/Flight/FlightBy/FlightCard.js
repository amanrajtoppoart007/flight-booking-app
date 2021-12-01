import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import commonStyle from '../../../layout/Style';
import Font from '../../../layout/Font';
import {Icon} from 'react-native-elements';
import Colors from '../../../layout/Colors';
import Deer from '../../Svg/Deer.svg';
import Bag from '../../Svg/Bag.svg';
import MoreOptions from './MoreOptions';
function FlightCard({isSelected, onPress, onPressSelect}) {
  const [isMoreOptionVisible, setIsMoreOptionVisible] = useState(false);
  return (
    <TouchableOpacity onPress={onPress} style={styles.card(isSelected)}>
      <View style={styles.cardHeader}>
        <View style={[styles.rowFlexCenter]}>
          <Deer />
          <View style={commonStyle.marginHorizontal(8)}>
            <Text style={styles.cardHeaderText}>
              Qatar Airways |<Text style={styles.smallText}> QR - 3413</Text>
            </Text>
            <Text style={styles.cardSubHeaderText}>Operated by FlyDubai</Text>
          </View>
        </View>
        <View style={styles.colFlexEnd}>
          <Text style={styles.LightText}>
            QAR <Text style={styles.price}>170.00</Text>
          </Text>
          <Text style={styles.GreenText}>Refundable</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View
        style={[
          commonStyle.paddingHorizontal(12),
          commonStyle.marginVertical(6),
        ]}>
        <View style={commonStyle.rowSpaceBetween}>
          <View>
            <Text style={styles.TimeText}>10:00</Text>
            <Text style={styles.LightText}>DOH</Text>
          </View>
          <View style={commonStyle.rowFlexStart}>
            <View style={styles.alignItemsCenter}>
              <Text style={styles.LightText}>AMM</Text>
              <View style={commonStyle.rowFlexStart}>
                <Icon
                  name={'circle'}
                  type={'entypo'}
                  size={12}
                  color={'#D9D9D9'}
                />
                <View style={styles.Line} />
                <Icon
                  name={'circle'}
                  type={'entypo'}
                  size={12}
                  color={'#D9D9D9'}
                />
              </View>
              <Text style={[styles.LightText]}>2h 30m</Text>
            </View>
          </View>
          <View style={styles.alignItemsEnd}>
            <Text style={styles.TimeText}>10:00</Text>
            <Text style={styles.LightText}>DOH</Text>
          </View>
          <View style={styles.alignItemsEnd}>
            <Text style={styles.smallText}>Total Duration</Text>
            <Text style={styles.LightText}>5h 30m</Text>
          </View>
        </View>
      </View>
      <View
        style={[
          commonStyle.rowSpaceBetween,
          commonStyle.marginVertical(6),
          commonStyle.marginHorizontal(12),
        ]}>
        <View style={commonStyle.rowFlexStart}>
          <Text style={styles.LightText}>1 Stop |</Text>
          <Bag style={commonStyle.marginHorizontal(8)} />
          <Text style={styles.LightText}>
            Check In: <Text style={styles.LightHeavyText}>1 piece</Text>
          </Text>
        </View>
        <Text style={styles.LightText}>Cabin: 7 Kg</Text>
        <TouchableOpacity style={commonStyle.rowCenter}>
          <Text style={styles.BlueText}>Details</Text>
          <Icon
            name={'caretright'}
            type={'antdesign'}
            size={15}
            color={Colors.primary}
          />
        </TouchableOpacity>
      </View>
      <View style={[commonStyle.rowSpaceAround, commonStyle.marginTop(6)]}>
        <TouchableOpacity
          onPress={() => setIsMoreOptionVisible(!isMoreOptionVisible)}
          style={styles.MoreOptionsButton}>
          <Text style={styles.LightText}>More Flight Options</Text>
          <View style={commonStyle.marginHorizontal(3)} />
          <Icon
            name={isMoreOptionVisible ? 'angle-double-up' : 'angle-double-down'}
            type={'font-awesome'}
            size={16}
            color={Colors.black}
          />
        </TouchableOpacity>
      </View>
      {isMoreOptionVisible && (
        <>
          <View style={commonStyle.backgroundColor('rgba(49, 179, 223, 0.15)')}>
            <MoreOptions />
          </View>
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
                style={styles.selectButton}
                onPress={onPressSelect}>
                <Text style={styles.selectButtonText}>Select</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card(value) {
    return {
      backgroundColor: value ? 'rgba(29,140,204,0.1)' : Colors.white,
      marginBottom: 12,
      borderWidth: value ? 1 : 0,
      borderColor: '#1D8CCC',
    };
  },
  rowFlexCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  alignItemsCenter: {alignItems: 'center'},
  alignItemsEnd: {
    alignItems: 'flex-end',
  },
  MoreOptionsButton: {
    backgroundColor: 'rgba(61, 181, 255, 0.15)',
    padding: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  Line: {
    width: 80,
    borderWidth: 1,
    borderColor: '#D9D9D9',
  },
  colFlexEnd: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  cardHeaderText: {
    fontFamily: Font.AvenirRoman,
    fontSize: 14,
    color: '#242A37',
  },
  cardSubHeaderText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 11,
    color: '#1C8CCC',
  },
  BlueText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#1C8CCC',
  },
  TimeText: {
    fontSize: 14,
    color: '#242A37',
    marginVertical: 5,
    fontFamily: Font.AvenirHeavy,
  },
  LightText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#50555F',
  },
  LightHeavyText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 12,
    color: '#50555F',
  },
  GreenText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#13A869',
  },
  smallText: {
    fontFamily: Font.AvenirRoman,
    fontSize: 12,
    color: '#50555F',
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
    marginVertical: 10,
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
    marginVertical: 6,
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
