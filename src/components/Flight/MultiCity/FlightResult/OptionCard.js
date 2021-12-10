import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import commonStyle from '../../../../layout/Style';
import {Icon} from 'react-native-elements';
import Colors from '../../../../layout/Colors';
import Bag from '../../../Svg/Flight/Bag.svg';
import DeerSvg from '../../../Svg/Deer.svg';
import Font from '../../../../layout/Font';

function OptionCard({
  item,
  setSelected,
  index,
  isMoreVisible,
  setIsMoreVisible,
  lastIndex,
}) {
  const navigation = useNavigation();
  return (
    <View style={styles.card(item?.isSelected)}>
      <View style={commonStyle.marginVertical(12)}>
        <View style={commonStyle.rowSpaceBetween}>
          <View style={commonStyle.rowSpaceBetween}>
            <View>
              <Icon
                onPress={() => setSelected(index)}
                name={item?.isSelected ? 'dot-circle-o' : 'circle-o'}
                type={'font-awesome'}
                size={26}
                color={Colors.primary}
              />
            </View>
            <View style={commonStyle.marginHorizontal(8)}>
              <DeerSvg />
            </View>
            <View>
              <Text style={commonStyle.rowSpaceBetween}>
                <Text style={styles.airlineName}>Qatar Airways</Text>
                <Text style={styles.flightNumber}> | QR - 3801 </Text>
              </Text>
              <View style={commonStyle.marginVertical(3)}>
                <Text style={styles.flightOperator}>Operated by FlyDubai</Text>
              </View>
            </View>
          </View>
          <View style={commonStyle.alignFlexEnd}>
            <Text style={styles.flightOption}>4 Seats Left</Text>
            <Text style={styles.refundPolicy}>Refundable</Text>
          </View>
        </View>
        <View style={styles.scheduleSection}>
          <View>
            <Text style={styles.time}>10:00</Text>
            <Text style={styles.text}>DOH</Text>
          </View>
          <View style={commonStyle.rowFlexStart}>
            <View style={commonStyle.alignItemCenter}>
              <Text style={styles.text}>AMM</Text>
              <View style={commonStyle.rowFlexStart}>
                <View style={styles.circle} />
                <View style={styles.circleConnector} />
                <View style={styles.circle} />
              </View>
              <Text style={styles.text}>2h 30m</Text>
            </View>
          </View>
          <View>
            <Text style={styles.time}>12:00</Text>
            <Text style={styles.text}>DXB</Text>
          </View>
          <View style={commonStyle.alignFlexEnd}>
            <Text style={styles.text}>Total Duration</Text>
            <Text style={styles.text}>5h 30m</Text>
          </View>
        </View>
        <View style={commonStyle.rowSpaceBetween}>
          <View style={commonStyle.rowFlexStart}>
            <Text style={styles.dartText}>1 Stop |</Text>
            <Bag style={commonStyle.marginHorizontal(8)} />
            <Text style={styles.dartText}>Check In: 1 piece</Text>
          </View>
          <Text style={styles.dartText}>Cabin: 7 Kg</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Review')}
            style={commonStyle.rowCenter}>
            <Text style={styles.detailsText}>Details</Text>
            <Icon
              name={'caretright'}
              type={'antdesign'}
              size={12}
              color={Colors.primary}
            />
          </TouchableOpacity>
        </View>
      </View>
      {index === 1 && !isMoreVisible && (
        <View style={styles.cardFooter}>
          <TouchableOpacity
            onPress={() => setIsMoreVisible(!isMoreVisible)}
            style={styles.moreItemButton}>
            <Text style={styles.moreItemButtonText}>More Options</Text>
            <Icon
              type={'feather'}
              name={isMoreVisible ? 'chevrons-up' : 'chevrons-down'}
              size={12}
            />
          </TouchableOpacity>
          <View style={styles.divider} />
        </View>
      )}
      {index === lastIndex && (
        <View style={styles.cardFooter}>
          <TouchableOpacity
            onPress={() => setIsMoreVisible(!isMoreVisible)}
            style={styles.moreItemButton}>
            <Text style={styles.moreItemButtonText}>Less Options</Text>
            <Icon
              type={'feather'}
              name={isMoreVisible ? 'chevrons-up' : 'chevrons-down'}
              size={12}
            />
          </TouchableOpacity>
          <View style={styles.divider} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card(isSelected) {
    return {
      paddingHorizontal: 12,
      backgroundColor: isSelected ? 'rgba(29, 140, 204, 0.15)' : Colors.white,
      borderRadius: 10,
      marginVertical: 5,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: isSelected ? Colors.primary : Colors.border,
    };
  },
  scheduleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },

  airlineName: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: Font.AvenirRoman,
  },
  flightNumber: {
    fontSize: 12,
    fontFamily: Font.AvenirRoman,
    color: '#6C6C6C',
  },
  flightOperator: {
    fontFamily: Font.AvenirMedium,
    fontSize: 11,
    color: '#1D8CCC',
  },
  flightOption: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#FF0000',
  },
  refundPolicy: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#13A869',
  },
  header: {
    paddingHorizontal: 10,
  },
  text: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#6C6C6C',
  },
  dartText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#0B151F',
  },
  time: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: Colors.black,
  },
  detailsText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#1C8CCC',
  },
  circle: {
    width: 12,
    height: 12,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: '#AAAAAA',
  },
  circleConnector: {width: 80, height: 2, backgroundColor: '#AAAAAA'},
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
});

export default OptionCard;
