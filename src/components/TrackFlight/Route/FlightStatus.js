import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import commonStyle from '../../../layout/Style';
import DepartureSvg from '../../Svg/Departure.svg';
import Font from '../../../layout/Font';

function FlightStatus({title}) {
  return (
    <View style={styles.card}>
      <View style={[commonStyle.marginVertical(5), commonStyle.rowFlexStart]}>
        <View style={commonStyle.rowCenter}>
          <View>
            <DepartureSvg />
          </View>
          <View style={commonStyle.marginHorizontal(8)}>
            <Text style={styles.statusTitle}>{title}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.airportName}>Doha Hamad Intl</Text>
        </View>
      </View>

      <View
        style={[commonStyle.marginVertical(5), commonStyle.rowSpaceBetween]}>
        <View>
          <Text style={styles.dataDef}>Gate time scheduled</Text>
        </View>
        <View>
          <Text style={styles.dataDesc}>7:00</Text>
        </View>
      </View>
      <View
        style={[commonStyle.marginVertical(5), commonStyle.rowSpaceBetween]}>
        <View>
          <Text style={styles.dataDef}>Status</Text>
        </View>
        <View>
          <Text style={styles.statusText}>On Time</Text>
        </View>
      </View>
      <View style={[commonStyle.marginVertical(8), commonStyle.center]}>
        <View style={styles.divider} />
      </View>
      <View
        style={[commonStyle.marginVertical(5), commonStyle.rowSpaceBetween]}>
        <View>
          <Text style={styles.dataDef}>Runway time scheduled</Text>
        </View>
        <View>
          <Text style={styles.dataDesc}>N/A</Text>
        </View>
      </View>
      <View
        style={[commonStyle.marginVertical(5), commonStyle.rowSpaceBetween]}>
        <View>
          <Text style={styles.dataDef}>Status</Text>
        </View>
        <View>
          <Text style={styles.dataDesc}>N/A</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 0.5,
    borderColor: '#DDDDDD',
    borderRadius: 6,
    padding: 8,
  },
  statusTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#F15922',
  },
  statusText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#13A869',
  },

  airportName: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
  },
  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth5,
    borderBottomColor: '#AAAAAA',
    width: '100%',
  },
  dataDef: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#242A37',
  },
  dataDesc: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
  },
});

export default FlightStatus;
