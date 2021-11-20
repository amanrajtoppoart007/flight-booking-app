import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import commonStyle from '../../../layout/Style';
import Font from '../../../layout/Font';
import AirPlaneDepartureSvg from '../../Svg/AirplaneDeparture.svg';

function RouteCard() {
  return (
    <View style={styles.card}>
      <View style={styles.cardBody}>
        <View>
          <View style={commonStyle.rowSpaceBetween}>
            <View>
              <Text style={styles.time}>07:55</Text>
            </View>
            <View>
              <Text style={styles.time}>08:20</Text>
            </View>
          </View>

          <View
            style={[
              commonStyle.marginVertical(3),
              commonStyle.rowSpaceBetween,
            ]}>
            <View>
              <Text style={styles.place}>Doha (DOH)</Text>
            </View>
            <View>
              <AirPlaneDepartureSvg />
            </View>
            <View>
              <Text style={styles.place}>Amman (AMM)</Text>
            </View>
          </View>

          <View
            style={[
              commonStyle.marginVertical(3),
              commonStyle.rowSpaceBetween,
            ]}>
            <View>
              <Text style={styles.airPortText}>Hamad Int Airport</Text>
            </View>
            <View>
              <Text style={styles.airPortText}>2h 30m</Text>
            </View>
            <View>
              <Text style={styles.airPortText}>Queen Alia Int Airport</Text>
            </View>
          </View>

          <View
            style={[
              commonStyle.marginVertical(3),
              commonStyle.rowSpaceBetween,
            ]}>
            <View>
              <Text style={styles.place}>Terminal: 1</Text>
            </View>
            <View>
              <Text style={styles.place}>Terminal: 3</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  cardBody: {
    marginVertical: 8,
    paddingVertical: 8,
  },
  airPortText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#6C6C6C',
  },
  time: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: '#242A37',
  },
  place: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#26698E',
  },
});

export default RouteCard;
