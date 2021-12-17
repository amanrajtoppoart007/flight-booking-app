import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import commonStyle from '../../../../layout/Style';
import Font from '../../../../layout/Font';
import {Icon} from 'react-native-elements';
import Colors from '../../../../layout/Colors';
import Deer from '../../../Svg/Deer.svg';
import Bag from '../../../Svg/Bag.svg';
import MoreOptions from '../../FlightBy/MoreOptions';
import {useNavigation} from '@react-navigation/native';

function FlightCard({onPressSelect}) {
  const navigation = useNavigation();
  const [isSelectedDeparting, setIsSelectedDeparting] = useState(false);
  const [isSelectedReturning, setIsSelectedReturning] = useState(false);

  const [isMoreOptionVisible, setIsMoreOptionVisible] = useState(false);
  return (
    <View style={styles.card(isMoreOptionVisible)}>
      <View style={styles.cardHeader}>
        <View style={[styles.rowFlexCenter]}>
          <Deer />
          <View style={commonStyle.marginHorizontal(8)}>
            <Text style={styles.cardHeaderText}>Qatar Airways</Text>
          </View>
        </View>
        <View style={styles.colFlexEnd}>
          <Text style={styles.LightText}>
            QAR <Text style={styles.price}>170.00</Text>
          </Text>
          <View style={commonStyle.rowSpaceBetween}>
            <View style={commonStyle.marginHorizontal(5)} />
            <Text style={styles.RedText}>4 Seats Left</Text>
            <View style={commonStyle.marginHorizontal(5)} />
            <Text style={styles.GreenText}>Refundable</Text>
          </View>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.cardBody}>
        <TouchableOpacity
          onPress={() => setIsSelectedDeparting(!isSelectedDeparting)}
          style={styles.DepartingSection(isSelectedDeparting)}>
          <View
            style={[commonStyle.rowSpaceBetween, commonStyle.marginBottom(6)]}>
            <View style={commonStyle.rowFlexStart}>
              <Icon
                name={'flight-takeoff'}
                type={'material'}
                size={20}
                color={'red'}
              />
              <Text
                style={[styles.DepartingText, commonStyle.marginHorizontal(4)]}>
                Departing
              </Text>
            </View>
            <Text style={styles.LightText}>QR - 3801</Text>
          </View>
          <View
            style={[
              commonStyle.rowSpaceBetween,
              commonStyle.marginVertical(6),
            ]}>
            <Text style={[styles.HeavyText]}>10:00 → 12:15</Text>
            <Text style={styles.LightText}>5h 30m</Text>
          </View>
          <View style={commonStyle.rowSpaceBetween}>
            <Text style={styles.LightText}>DOH</Text>
            <Text style={styles.LightText}>DXB</Text>
            <View style={commonStyle.rowFlexStart}>
              <Bag />
              <View style={commonStyle.marginHorizontal(2)} />
              <Text style={[styles.LightText]}>23 Kgs</Text>
            </View>
          </View>
          <View
            style={[commonStyle.rowSpaceBetween, commonStyle.marginTop(17)]}>
            <Text style={styles.LightText}>1 Stop</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Review')}
              style={commonStyle.rowFlexStart}>
              <Text style={styles.BlueText}>Details</Text>
              <View style={commonStyle.marginHorizontal(1)} />
              <Icon
                name={'caretright'}
                type={'antdesign'}
                size={14}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <View style={styles.VDivider} />
        <TouchableOpacity
          onPress={() => setIsSelectedReturning(!isSelectedReturning)}
          style={styles.DepartingSection(isSelectedReturning)}>
          <View
            style={[commonStyle.rowSpaceBetween, commonStyle.marginBottom(6)]}>
            <View style={commonStyle.rowFlexStart}>
              <Icon
                name={'flight-takeoff'}
                type={'material'}
                size={20}
                color={'red'}
              />
              <Text
                style={[styles.DepartingText, commonStyle.marginHorizontal(4)]}>
                Returning
              </Text>
            </View>
            <Text style={styles.LightText}>QR - 3802</Text>
          </View>
          <View
            style={[
              commonStyle.rowSpaceBetween,
              commonStyle.marginVertical(6),
            ]}>
            <Text style={[styles.HeavyText]}>15:45 → 16:00</Text>
            <Text style={styles.LightText}>5h 30m</Text>
          </View>
          <View style={commonStyle.rowSpaceBetween}>
            <Text style={styles.LightText}>DOH</Text>
            <Text style={styles.LightText}>DXB</Text>
            <View style={commonStyle.rowFlexStart}>
              <Bag />
              <View style={commonStyle.marginHorizontal(2)} />
              <Text style={[styles.LightText]}>23 Kgs</Text>
            </View>
          </View>
          <View
            style={[commonStyle.rowSpaceBetween, commonStyle.marginTop(17)]}>
            <Text style={styles.LightText}>1 Stop</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Review')}
              style={commonStyle.rowFlexStart}>
              <Text style={styles.BlueText}>Details</Text>
              <View style={commonStyle.marginHorizontal(1)} />
              <Icon
                name={'caretright'}
                type={'antdesign'}
                size={14}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  card(value) {
    return {
      marginBottom: 12,
      borderWidth: value ? 2 : 0,
      borderColor: '#F15922',
      borderRadius: value ? 8 : 0,
    };
  },
  DepartingSection(isSelected) {
    return {
      flex: 0.47,
      backgroundColor: !isSelected ? null : '#E8E8E8',
    };
  },
  Running: {
    backgroundColor: '#FF0000',
    padding: 2,
    borderRadius: 8,
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
  HeavyText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#242A37',
  },
  GreenText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#13A869',
  },
  RedText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#FF0000',
  },
  DepartingText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#F15922',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 6,
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
  VDivider: {
    borderRightWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#707070',
    alignSelf: 'stretch',
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
