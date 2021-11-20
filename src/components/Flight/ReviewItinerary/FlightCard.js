import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Font from '../../../layout/Font';
import commonStyle from '../../../layout/Style';
import Colors from '../../../layout/Colors';
import ClockSmSvg from '../../Svg/ClockSm.svg';
import ItineraryCard from '../../TrackFlight/Route/ItineraryCard';
import ClockRedSvg from '../../Svg/ClockRed.svg';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

function FlightCard() {
  return (
    <View>
      <View style={styles.container}>
        <View
          style={[commonStyle.rowSpaceBetween, commonStyle.marginVertical(4)]}>
          <View style={commonStyle.rowFlexStart}>
            <Text style={styles.title}>Doha (DOH)</Text>
            <Text style={[styles.title, {color: Colors.lightText}]}>→</Text>
            <Text style={styles.title}>Dubai (DXB)</Text>
          </View>
          <View>
            <Text style={styles.durationTitle}>Total Duration</Text>
          </View>
        </View>
        <View
          style={[commonStyle.rowSpaceBetween, commonStyle.marginVertical(4)]}>
          <View>
            <Text style={styles.timeText}>Wed, 15 Sep</Text>
          </View>
          <View style={commonStyle.rowCenter}>
            <View>
              <ClockSmSvg />
            </View>
            <View style={commonStyle.marginHorizontal(5)}>
              <Text style={styles.timeText}>5h 30m</Text>
            </View>
          </View>
        </View>
        <View style={[commonStyle.center, commonStyle.marginVertical(8)]}>
          <View style={styles.divider} />
        </View>
        <View>
          <ItineraryCard />
        </View>
      </View>

      <View>
        <View style={styles.layOverSection}>
          <View style={commonStyle.rowCenter}>
            <View style={commonStyle.marginHorizontal(5)}>
              <ClockRedSvg />
            </View>
            <View>
              <Text style={styles.layOverText}>
                Layover: 7h 5m Queen Alia International Airport
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View>
          <ItineraryCard />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    paddingHorizontal: 15,
  },
  title: {
    fontFamily: Font.AvenirMedium,
    fontSize: 16,
    color: '#26698E',
  },
  itinerary: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#242A37',
  },
  durationTitle: {
    fontFamily: Font.AvenirRoman,
    fontSize: 14,
    color: '#6C6C6C',
  },
  timeText: {
    fontFamily: Font.AvenirRoman,
    fontSize: 12,
    color: '#6C6C6C',
  },
  divider: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#AAAAAA',
    width: '100%',
  },
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
  layOverSection: {
    width: wp('100%'),
    height: 45,
    backgroundColor: 'rgba(241, 89, 34, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  layOverText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#F15922',
  },
});

export default FlightCard;
