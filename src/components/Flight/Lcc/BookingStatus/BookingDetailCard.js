import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import commonStyle from '../../../../layout/Style';
import Font from '../../../../layout/Font';
import Colors from '../../../../layout/Colors';
import {Icon} from 'react-native-elements';
import DepartureSvg from '../../../Svg/Departure.svg';
import AirPlaneDepartureSvg from '../../../Svg/AirplaneDeparture.svg';
import DeerSvg from '../../../Svg/AirArabia.svg';
import BagSvg from '../../../Svg/Baggage.svg';
import ClockSvg from '../../../Svg/Flight/Clock.svg';
function BookingDetailCard({icon, name, Returning = false}) {
  return (
    <View style={styles.card}>
      <View style={commonStyle.marginVertical(12)}>
        <View style={commonStyle.rowSpaceBetween}>
          <View style={commonStyle.rowFlexStart}>
            <View>
              <DepartureSvg />
            </View>
            <View style={commonStyle.marginHorizontal(8)}>
              <Text style={styles.journeyTitle}>
                {Returning ? 'Returning' : 'Departing'}
              </Text>
            </View>
          </View>
        </View>
        <View style={[commonStyle.rowFlexStart, commonStyle.marginVertical(8)]}>
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
          <View style={commonStyle.marginHorizontal(35)}>
            <Text style={styles.date}>Wed, 15 Sep</Text>
          </View>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={commonStyle.marginVertical(12)}>
        <View style={commonStyle.rowSpaceBetween}>
          <View>
            <View style={commonStyle.rowFlexStart}>
              <View>{icon ? icon : <DeerSvg />}</View>
              <View>
                <Text style={styles.airlineName}>
                  {name ? name : 'Qatar Airways'}
                </Text>
              </View>
              <View>
                <Text>|</Text>
              </View>
              <View>
                <Text style={styles.flightNumber}> QR - 3801</Text>
              </View>
            </View>
            <View
              style={[commonStyle.marginVertical(4), commonStyle.rowFlexStart]}>
              <View>
                <Text style={styles.features}>Economy </Text>
              </View>
              <View style={styles.columnDivider} />
              <View>
                <Text style={styles.specialFeature}>Refundable</Text>
              </View>
              <View style={styles.columnDivider} />
              <View style={commonStyle.rowFlexStart}>
                <View>
                  <BagSvg />
                </View>
                <View style={commonStyle.marginHorizontal(5)}>
                  <Text style={styles.features}>1 piece</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.pnrContainer}>
            <Text style={styles.pnrTitle}>
              Airline PNR: <Text style={styles.pnrNumber}>5TSY4A</Text>
            </Text>
            <Text style={styles.pnrTitle}>
              GDS PNR: <Text style={styles.pnrNumber}>N/A</Text>
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
              <Text style={styles.airportName}>Hamad Int Airport</Text>
            </View>
            <View style={commonStyle.rowFlexStart}>
              <View>
                <ClockSvg />
              </View>
              <View style={commonStyle.marginHorizontal(5)}>
                <Text style={styles.remainingTime}>2h 30m</Text>
              </View>
            </View>
            <View>
              <Text style={styles.airportName}>Queen Alia Int Airport</Text>
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

      <View>
        <View style={styles.warningSection}>
          <Text style={styles.warningText}>
            Layover: 7h 5m Queen Alia International Airport
          </Text>
        </View>
      </View>
      <View style={commonStyle.marginVertical(12)}>
        <View style={commonStyle.rowSpaceBetween}>
          <View>
            <View style={commonStyle.rowFlexStart}>
              <View>{icon ? icon : <DeerSvg />}</View>
              <View>
                <Text style={styles.airlineName}>
                  {name ? name : 'Qatar Airways'}
                </Text>
              </View>
              <View>
                <Text>|</Text>
              </View>
              <View>
                <Text style={styles.flightNumber}> QR - 3801</Text>
              </View>
            </View>
            <View
              style={[commonStyle.marginVertical(4), commonStyle.rowFlexStart]}>
              <View>
                <Text style={styles.features}>Economy </Text>
              </View>
              <View style={styles.columnDivider} />
              <View>
                <Text style={styles.specialFeature}>Refundable</Text>
              </View>
              <View style={styles.columnDivider} />
              <View style={commonStyle.rowFlexStart}>
                <View>
                  <BagSvg />
                </View>
                <View style={commonStyle.marginHorizontal(5)}>
                  <Text style={styles.features}>1 piece</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.pnrContainer}>
            <Text style={styles.pnrTitle}>
              Airline PNR: <Text style={styles.pnrNumber}>5TSY4A</Text>
            </Text>
            <Text style={styles.pnrTitle}>
              GDS PNR: <Text style={styles.pnrNumber}>N/A</Text>
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
              <Text style={styles.airportName}>Hamad Int Airport</Text>
            </View>
            <View style={commonStyle.rowFlexStart}>
              <View>
                <ClockSvg />
              </View>
              <View style={commonStyle.marginHorizontal(5)}>
                <Text style={styles.remainingTime}>2h 30m</Text>
              </View>
            </View>
            <View>
              <Text style={styles.airportName}>Queen Alia Int Airport</Text>
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
    backgroundColor: Colors.white,
    paddingHorizontal: 15,
    ...Platform.select({
      ios: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#707070',
      },
      android: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#707070',
        elevation: 1,
      },
    }),
  },
  pnrContainer: {alignSelf: 'flex-start', alignItems: 'flex-end'},
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
    fontSize: 12,
    color: '#6C6C6C',
  },
  remainingTime: {
    fontFamily: Font.AvenirRoman,
    fontSize: 12,
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
  airportName: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#6C6C6C',
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    height: 40,
    paddingHorizontal: 20,
  },
  cardBody: {},
  headTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 15,
    color: Colors.white,
  },
  divider: {
    width: '100%',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#BFCAD7',
    alignSelf: 'center',
  },
  warningSection: {
    backgroundColor: 'rgba(241, 89, 34, 0.2)',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
  },
  warningText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#F15922',
  },
});

export default BookingDetailCard;
