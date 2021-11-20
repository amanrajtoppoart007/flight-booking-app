import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import commonStyle from '../../layout/Style';
import Colors from '../../layout/Colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Font from '../../layout/Font';
import SearchSvg from '../Svg/Search.svg';
import RouteCard from './Route/RouteCard';
import FlightStatus from './Route/FlightStatus';

function RouteSection() {
  return (
    <View style={commonStyle.marginVertical(15)}>
      <View style={commonStyle.rowSpaceEven}>
        <View>
          <TextInput
            placeholder={'From'}
            placeholderTextColor={'#6C6C6C'}
            style={styles.searchInput}
          />
        </View>
        <View>
          <TextInput
            placeholder={'To'}
            placeholderTextColor={'#6C6C6C'}
            style={styles.searchInput}
          />
        </View>
        <View>
          <View style={styles.dateCard}>
            <View style={styles.date}>
              <Text style={styles.month}>September</Text>
            </View>
            <View style={commonStyle.center}>
              <Text style={styles.dateText}>20</Text>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.searchButton}>
            <SearchSvg />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={commonStyle.center}>
                <Text style={styles.cardTitle}>Qatar Airways 1018</Text>
                <Text style={styles.cardTitle}>
                  One time . Departs in 04:18:24
                </Text>
              </View>
            </View>
            <View>
              <RouteCard />
            </View>
          </View>
          <View style={commonStyle.marginVertical(5)}>
            <View style={styles.flightSection}>
              <View>
                <Text style={styles.flightTitle}>Aircraft</Text>
              </View>
              <View style={commonStyle.marginHorizontal(30)}>
                <Text style={styles.flightNumberText}>Airbus A350-900</Text>
              </View>
            </View>
          </View>
          <View style={commonStyle.marginVertical(5)}>
            <FlightStatus title={'Departing'} />
          </View>
          <View style={commonStyle.marginVertical(5)}>
            <FlightStatus title={'Arrival'} />
          </View>
          <View style={commonStyle.marginVertical(80)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 0.5,
    borderColor: '#DDDDDD',
    marginVertical: 15,
  },
  cardTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: Colors.white,
  },
  cardHeader: {
    height: 55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    backgroundColor: '#13A869',
    paddingHorizontal: 8,
  },
  cardBody: {
    backgroundColor: Colors.white,
  },
  flightSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 45,
    borderWidth: 0.5,
    borderColor: '#DDDDDD',
    borderRadius: 6,
    paddingHorizontal: 8,
  },
  dateCard: {
    height: 45,
    borderWidth: 1,
    borderColor: '#1D8CCC',
    borderRadius: 4,
  },
  flightTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#000000',
  },
  flightNumberText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
  },
  month: {
    fontFamily: Font.AvenirMedium,
    fontSize: 11,
    color: 'white',
  },
  date: {
    backgroundColor: '#1D8CCC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    width: wp('25%'),
    height: 45,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#C3C3C3',
  },
  searchButton: {
    width: 46,
    height: 45,
    borderRadius: 4,
    backgroundColor: '#F15922',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: Colors.black,
  },

  dateText: {
    fontFamily: Font.AvenirRoman,
    fontSize: 14,
    color: '#163D68',
  },
  headerText: {
    fontFamily: Font.AvenirRoman,
    fontSize: 14,
    color: '#242A37',
  },
  flightNumber: {
    fontFamily: Font.AvenirRoman,
    fontSize: 14,
    color: '#6C6C6C',
  },
  placeTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#242A37',
  },
  statusTextPrimary: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: '#13A869',
  },
  statusTextSecondary: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#13A869',
  },
});

export default RouteSection;
