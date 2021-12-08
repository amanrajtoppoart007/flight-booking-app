import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import commonStyle from '../../../layout/Style';
import Font from '../../../layout/Font';
import Colors from '../../../layout/Colors';

import DepartureSvg from '../../Svg/Departure.svg';
import AirPlaneDepartureSvg from '../../Svg/AirplaneDeparture.svg';
import {Icon} from 'react-native-elements';

function BookingConfirmCard() {
  return (
    <View style={styles.card}>
      <View style={styles.cardBody}>
        <View style={[commonStyle.padding(10), commonStyle.rowSpaceBetween]}>
          <View style={commonStyle.rowFlexStart}>
            <View>
              <DepartureSvg style={{width: 20, height: 20}} />
            </View>
            <View style={commonStyle.marginHorizontal(8)}>
              <Text style={styles.journeyTitle}>Departing</Text>
            </View>
          </View>
          <View style={commonStyle.rowSpaceEven}>
            <Text style={styles.pnrTitle}>Airline PNR: </Text>
            <Text style={styles.pnrNumber}>5TSY4A</Text>
          </View>
        </View>
        <View>
          <View
            style={[commonStyle.marginVertical(10), commonStyle.rowFlexStart]}>
            <View>
              <Text style={styles.journeySource}>Doha (DOH)</Text>
            </View>
            <View style={commonStyle.marginHorizontal(15)}>
              <Icon
                name={'arrow-right'}
                type={'font-awesome'}
                size={15}
                color={Colors.lightText}
              />
            </View>
            <View>
              <Text style={styles.journeyDestination}>Dubai (DXB)</Text>
            </View>
          </View>
          <Text style={styles.date}>Wed, 15 Sep</Text>
        </View>
        <View style={styles.divider} />
        <View style={commonStyle.rowFlexStart}>
          <View>
            <Text style={styles.airlineName}>Qatar Airways</Text>
          </View>
          <View style={commonStyle.marginHorizontal(8)}>
            <Text>|</Text>
          </View>
          <View>
            <Text style={styles.flightNumber}> QR - 3801</Text>
          </View>
        </View>
        <View style={[commonStyle.marginVertical(8), commonStyle.rowFlexStart]}>
          <View>
            <Text style={styles.features}>Economy </Text>
          </View>
          <View style={styles.columnDivider} />
          <View>
            <Text style={styles.specialFeature}>Refundable</Text>
          </View>
          <View style={styles.columnDivider} />
          <View>
            <Text style={styles.features}>1 piece</Text>
          </View>
        </View>

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
              <AirPlaneDepartureSvg style={{width: 55, height: 20}} />
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
              <Text>Hamad Int Airport</Text>
            </View>
            <View>
              <Text>2h 30m</Text>
            </View>
            <View>
              <Text>Queen Alia Int Airport</Text>
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

        <View>
          <View style={styles.warningSection}>
            <Text style={styles.warningText}>
              Layover: 7h 5m Queen Alia International Airport
            </Text>
          </View>
        </View>
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
              <AirPlaneDepartureSvg style={{width: 55, height: 20}} />
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
              <Text>Hamad Int Airport</Text>
            </View>
            <View>
              <Text>2h 30m</Text>
            </View>
            <View>
              <Text>Queen Alia Int Airport</Text>
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
    backgroundColor: Colors.white,
  },
  icon: {
    width: 21,
    height: 21,
  },
  confirmIcon: {
    width: 40,
    height: 40,
  },
  journeyTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#F15922',
  },
  pnrTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#6C6C6C',
  },
  pnrNumber: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#26698E',
  },
  journeySource: {
    fontFamily: Font.AvenirMedium,
    fontSize: 16,
    color: '#242A37',
  },
  journeyDestination: {
    fontFamily: Font.AvenirMedium,
    fontSize: 16,
    color: '#242A37',
  },
  date: {
    fontFamily: Font.AvenirRoman,
    fontSize: 16,
    color: '#6C6C6C',
  },
  airlineName: {
    fontFamily: Font.AvenirRoman,
    fontSize: 14,
    color: '#242A37',
    fontWeight: 'bold',
  },
  flightNumber: {
    fontFamily: Font.AvenirRoman,
    fontSize: 14,
    color: '#6C6C6C',
    fontWeight: 'bold',
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
  time: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: '#242A37',
  },
  estimatedTime: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#6C6C6C',
  },
  place: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#26698E',
  },

  titleHelper: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: Colors.white,
    textAlign: 'center',
    width: 250,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    height: 40,
    paddingHorizontal: 20,
  },
  cardBody: {
    borderBottomWidth: StyleSheet.hairlineWidth5,
    borderBottomColor: Colors.lightText,
    marginVertical: 8,
    paddingVertical: 8,
  },
  headTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 15,
    color: Colors.white,
  },
  divider: {
    width: '95%',
    borderWidth: 0.3,
    borderColor: Colors.lightText,
    alignSelf: 'center',
    marginVertical: 18,
  },
  warningSection: {
    backgroundColor: 'rgba(241, 89, 34, 0.2)',
    height: 35,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  warningText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#F15922',
  },
});

export default BookingConfirmCard;
