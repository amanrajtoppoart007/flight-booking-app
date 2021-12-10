import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import commonStyle from '../../../../layout/Style';

import Font from '../../../../layout/Font';

import FlightSvg from '../../../Svg/Flight/Flight.svg';
import ClockSvg from '../../../Svg/Flight/Clock.svg';
import Baggage from '../../../Svg/Flight/Baggage.svg';
import Arrow from '../../../Svg/Flight/Arrow.svg';
import ArrowRight from '../../../Svg/Flight/ArrowRight.svg';
function TimeCard({isFareOptionVisible, setIsFareOptionVisible}) {
  return (
    <View>
      <View style={styles.contentSection}>
        <View style={commonStyle.rowSpaceBetween}>
          <View>
            <FlightSvg />
          </View>
          <View style={commonStyle.marginHorizontal(5)}>
            <Text style={styles.title}>Departing</Text>
          </View>
        </View>
        <View>
          <Text style={styles.flightNumber}>QR - 3801</Text>
        </View>
      </View>

      <View style={styles.contentSection}>
        <View style={commonStyle.rowCenter}>
          <View>
            <Text style={styles.time}>10:00</Text>
          </View>
          <View>
            <Text style={styles.time}>→</Text>
          </View>
          <View>
            <Text style={styles.time}>12:15</Text>
          </View>
        </View>
        <View style={commonStyle.rowCenter}>
          <View style={commonStyle.marginHorizontal(5)}>
            <ClockSvg />
          </View>
          <View>
            <Text style={styles.interval}>5h 30m</Text>
          </View>
        </View>
      </View>

      <View style={styles.contentSection}>
        <View style={[commonStyle.rowSpaceBetween, commonStyle.width('50%')]}>
          <View>
            <Text style={styles.place}>DOH</Text>
          </View>
          <View>
            <Text style={styles.place}>DXB</Text>
          </View>
        </View>
        <View style={commonStyle.rowCenter}>
          <View style={commonStyle.marginHorizontal(5)}>
            <Baggage />
          </View>
          <View>
            <Text style={styles.quantity}>23 Kgs</Text>
          </View>
        </View>
      </View>

      <View style={styles.contentSection}>
        <View>
          <Text style={styles.text}>1 Stop</Text>
        </View>
        <View style={commonStyle.rowSpaceBetween}>
          <View style={commonStyle.marginHorizontal(5)}>
            <Text>Details</Text>
          </View>
          <View>
            <Arrow />
          </View>
        </View>
      </View>
      <View style={styles.contentSection}>
        <TouchableOpacity
          onPress={() => setIsFareOptionVisible(!isFareOptionVisible)}
          style={styles.button}>
          <View style={commonStyle.marginHorizontal(5)}>
            <Text style={styles.buttonText}>Standard</Text>
          </View>
          <View>
            <ArrowRight />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {},
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 6,
  },
  cardBody: {
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#F15922',
  },
  flightNumber: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#6C6C6C',
  },
  time: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#242A37',
  },
  interval: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#50555F',
  },
  place: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#6C6C6C',
  },
  quantity: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#6C6C6C',
  },
  text: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#6C6C6C',
  },
  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#707070',
    width: '100%',
  },
  button: {
    width: 100,
    height: 28,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#F15922',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 12,
    color: '#F15922',
  },
});

export default TimeCard;
