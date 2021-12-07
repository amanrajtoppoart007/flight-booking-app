import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import commonStyle from '../../../layout/Style';
import AirPlaneDepartureSvg from '../../Svg/AirplaneDeparture.svg';
import Font from '../../../layout/Font';
import Colors from '../../../layout/Colors';

import DeerSvg from '../../Svg/Deer.svg';
import BusySvg from '../../Svg/Busy.svg';
import BaggageSvg from '../../Svg/Baggage.svg';
import ClockSvg from '../../../components/Svg/Flight/Clock.svg';

function ItineraryCard() {
  return (
    <>
      <View
        style={[commonStyle.rowSpaceBetween, commonStyle.marginVertical(8)]}>
        <View style={commonStyle.rowFlexStart}>
          <View>
            <DeerSvg />
          </View>
          <View style={commonStyle.marginHorizontal(8)}>
            <Text style={styles.airlineName}>Qatar Airways |</Text>
          </View>
          <View>
            <Text style={styles.airlineNumber}>QR - 3801</Text>
          </View>
        </View>
        <View style={commonStyle.rowSpaceBetween}>
          <View style={commonStyle.marginHorizontal(5)}>
            <BusySvg />
          </View>
          <View>
            <Text style={styles.seatCountText}>4 Seats Left</Text>
          </View>
        </View>
      </View>

      <View style={[commonStyle.marginVertical(4), commonStyle.rowFlexStart]}>
        <View>
          <Text style={styles.features}>Economy </Text>
        </View>
        <View style={styles.columnDivider} />
        <View>
          <Text style={styles.specialFeature}>Refundable</Text>
        </View>
        <View style={styles.columnDivider} />
        <View style={commonStyle.rowSpaceBetween}>
          <View style={commonStyle.marginHorizontal(5)}>
            <BaggageSvg />
          </View>
          <View>
            <Text style={styles.features}>1 piece</Text>
          </View>
        </View>
      </View>

      <View>
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
              <View style={commonStyle.rowSpaceBetween}>
                <View>
                  <ClockSvg />
                </View>
                <View style={commonStyle.marginHorizontal(5)}>
                  <Text style={styles.airPortText}>2h 30m</Text>
                </View>
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
    </>
  );
}
const styles = StyleSheet.create({
  airlineName: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#242A37',
  },
  airlineNumber: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#6C6C6C',
  },
  seatCountText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#FF0000',
  },
  columnDivider: {
    height: 10,
    borderWidth: 0.5,
    backgroundColor: Colors.lightText,
    marginHorizontal: 10,
  },

  features: {
    fontFamily: Font.AvenirRoman,
    fontSize: 12,
    color: '#6C6C6C',
  },
  specialFeature: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#13A869',
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

export default ItineraryCard;
