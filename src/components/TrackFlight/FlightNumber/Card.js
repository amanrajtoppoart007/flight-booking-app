import {StyleSheet, Text, View} from 'react-native';
import commonStyle from '../../../layout/Style';
import React from 'react';
import Font from '../../../layout/Font';
import Colors from '../../../layout/Colors';

import FlightCalenderSvg from '../../Svg/FlightCalender.svg';
import AlarmClockSvg from '../../Svg/AlarmClock.svg';

function Card() {
  return (
    <View style={styles.card}>
      <View
        style={[commonStyle.marginVertical(8), commonStyle.rowSpaceBetween]}>
        <View style={commonStyle.rowSpaceEven}>
          <View>
            <Text style={styles.title}>DOH</Text>
          </View>
          <View style={commonStyle.marginHorizontal(5)}>
            <Text style={styles.airlineName}>Doha, QA</Text>
          </View>
        </View>
        <View>
          <Text style={styles.headTitle}>Departure Date</Text>
        </View>
      </View>
      <View style={commonStyle.rowSpaceBetween}>
        <View>
          <Text style={styles.airportName}>Hamad International Airport</Text>
        </View>
        <View style={commonStyle.rowSpaceEven}>
          <View>
            <FlightCalenderSvg />
          </View>
          <View style={commonStyle.marginHorizontal(8)}>
            <Text style={styles.dateText}>Jun 26, 2021</Text>
          </View>
        </View>
      </View>
      <View
        style={[
          commonStyle.marginVertical(15),
          commonStyle.paddingVertical(10),
          commonStyle.center,
        ]}>
        <View style={styles.scheduleSectionRightWrapper}>
          <View style={styles.scheduleSectionRight}>
            <View>
              <Text style={styles.blackText}>Scheduled</Text>
            </View>
            <View
              style={[commonStyle.marginVertical(4), commonStyle.rowSpaceEven]}>
              <View>
                <AlarmClockSvg />
              </View>
              <View style={commonStyle.marginHorizontal(8)}>
                <Text style={styles.time}>16:55</Text>
              </View>
            </View>
          </View>
          <View style={styles.scheduleSectionLeft}>
            <View>
              <Text style={styles.blackText}>Estimated</Text>
            </View>
            <View
              style={[commonStyle.marginVertical(4), commonStyle.rowSpaceEven]}>
              <View>
                <AlarmClockSvg />
              </View>
              <View style={commonStyle.marginHorizontal(8)}>
                <Text style={styles.time}>16:55</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={commonStyle.rowSpaceBetween}>
        <View style={commonStyle.rowSpaceBetween}>
          <View>
            <Text style={styles.text}>Terminal</Text>
          </View>
          <View style={commonStyle.marginHorizontal(5)}>
            <Text style={styles.darkText}>2B</Text>
          </View>
        </View>
        <View
          style={[commonStyle.marginVertical(8), commonStyle.rowSpaceBetween]}>
          <View>
            <Text style={styles.text}>Gate</Text>
          </View>
          <View style={commonStyle.marginHorizontal(5)}>
            <Text style={styles.darkText}>N/A</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(29, 140, 204, 0.1)',
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  scheduleSectionRightWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#AAAAAA',
    borderBottomColor: '#AAAAAA',
    width: '95%',
    paddingHorizontal: 8,
  },
  scheduleSectionRight: {
    borderRightWidth: 1,
    borderRightColor: '#AAAAAA',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  scheduleSectionLeft: {
    borderLeftWidth: 1,
    borderLeftColor: '#AAAAAA',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: Colors.black,
    fontWeight: 'bold',
  },
  airlineName: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
  },
  headTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#242A37',
  },
  airportName: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#6C6C6C',
  },
  dateText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
  },
  text: {
    fontSize: 14,
    color: '#6C6C6C',
  },
  darkText: {
    fontSize: 14,
    color: '#000000',
  },
  blackText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: Colors.black,
  },
  time: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: '#1D8CCC',
  },
});

export default Card;
