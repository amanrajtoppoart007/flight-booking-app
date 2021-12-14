import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../layout/Colors';
import LinearGradient from 'react-native-linear-gradient';
import CustomStatusBar from '../../components/CustomStatusBar';
import {Icon} from 'react-native-elements';
import SearchHistorySlider from '../../components/Flight/SearchHistorySlider';
import DateRangePicker from '../../components/Hotel/Home/DateRangePicker';
import DateRangePickerMultiCity from '../../components/Flight/MultiCity/DateRangePicker';
import DatePicker from '../../components/Flight/OneWay/DatePicker';
import TravellerAndClass from '../../components/Flight/TravellerAndClass';
import RoundTripCard from '../../components/Flight/SearchFlights/RoundTripCard';
import OneWayTripCard from '../../components/Flight/SearchFlights/OneWayTrip';
import MultiCityCard from '../../components/Flight/SearchFlights/MultiCity';
import Font from '../../layout/Font';
import commonStyle from '../../layout/Style';
import Back from '../../assets/icons/svg/Back.svg';
import moment from 'moment';

export default function Home({navigation}) {
  const [guestEntryModal, setGuestEntryModal] = useState(false);
  const [flightType, setFlightType] = useState('round-trip');
  const [isDateRangeVisible, setIsDateRangeVisible] = useState(false);

  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const [isDateRangeMultiCityVisible, setIsDateRangeMultiCityVisible] =
    useState(-1);

  const date = new Date();
  const dateFromTimeStamp = moment(date).format('YYYYMMDD');
  const dateUptoTimeStamp = moment(date).add(5, 'days').format('YYYYMMDD');
  const [dateFrom, setDateFrom] = useState(dateFromTimeStamp);
  const [dateUpto, setDateUpto] = useState(dateUptoTimeStamp);
  const [dateMultiCity, setMultiCity] = useState([
    dateFromTimeStamp,
    dateUptoTimeStamp,
  ]);

  const [Location, setLocation] = useState([
    {
      to: 'Dubai',
      toText: 'DXB',
      from: 'DOH',
      fromText: 'Doha',
      canDelete: false,
    },
    {
      to: 'Dubai',
      toText: 'LHR',
      from: 'DXB',
      fromText: 'Doha',
      canDelete: false,
    },
  ]);

  const [travellersClass, setTravellersClass] = useState({
    adult: 1,
    child: 0,
    infant: 0,
    class: 'Economy',
  });

  function _handleDelete(index) {
    let temp = [...Location];
    let t = [...dateMultiCity];
    if (index > -1) {
      temp.splice(index, 1);
      t.splice(index, 1);
    }
    setMultiCity(t);

    setLocation(temp);
  }
  function _handleAddFlight() {
    let temp = [...Location];
    temp.push({
      to: 'Dubai',
      toText: 'DOH',
      from: Location[Location.length - 1].to,
      fromText: Location[Location.length - 1].toText,
    });
    let t = [...dateMultiCity];
    t.push(
      moment(moment(t[t.length - 1]).format('YYYYMMDD'))
        .add(5, 'days')
        .format('YYYYMMDD'),
    );
    setMultiCity(t);
    setLocation(temp);
  }
  function _handleSearchFlight() {
    if (flightType === 'round-trip') {
      navigation.navigate('FlightResult');
    } else if (flightType === 'one-way') {
      navigation.navigate('OneWay');
    } else {
      navigation.navigate('MultiCity');
    }
  }
  function _onSwap(index = 0) {
    let temp = [...Location];
    let ele = temp[index].from;
    temp[index].from = temp[index].to;
    temp[index].to = ele;
    ele = temp[index].fromText;
    temp[index].fromText = temp[index].toText;
    temp[index].toText = ele;
    setLocation(temp);
  }
  function editDate(index, editDateItem) {
    if (index === -1) {
      return;
    }
    let t = [...dateMultiCity];
    t[index] = moment(editDateItem).format('YYYYMMDD');
    setMultiCity(t);
  }
  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar backgroundColor={'#1C8CCC'} />
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={styles.content}>
            <View>
              <LinearGradient
                colors={['#1C8CCC', '#015F95']}
                style={styles.canvas}>
                <View style={[styles.titleSection, styles.rowCenter]}>
                  <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                      <Back />
                    </TouchableOpacity>
                  </View>
                  <View style={commonStyle.marginHorizontal(10)}>
                    <Text style={styles.title}>Search flights</Text>
                  </View>
                </View>

                <View style={styles.headerContainer}>
                  <View style={styles.topBar}>
                    <Pressable
                      onPress={() => setFlightType('round-trip')}
                      style={styles.topBarElements(flightType, 'round-trip')}>
                      <Text style={styles.topBarText(flightType, 'round-trip')}>
                        Round Trip
                      </Text>
                    </Pressable>
                    <Pressable
                      onPress={() => setFlightType('one-way')}
                      style={styles.topBarElements(flightType, 'one-way')}>
                      <Text style={styles.topBarText(flightType, 'one-way')}>
                        One Way
                      </Text>
                    </Pressable>
                    <Pressable
                      onPress={() => setFlightType('multi-city')}
                      style={styles.topBarElements(flightType, 'multi-city')}>
                      <Text style={styles.topBarText(flightType, 'multi-city')}>
                        Multi-City
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </LinearGradient>
            </View>
            {flightType === 'round-trip' ? (
              <RoundTripCard
                setIsLocationSelectorVisible={() =>
                  navigation.navigate('Search')
                }
                setIsDateRangeVisible={setIsDateRangeVisible}
                setGuestEntryModal={setGuestEntryModal}
                Location={Location[0]}
                onSwap={_onSwap}
                Travellers={travellersClass}
                dateFrom={dateFrom}
                dateUpTo={dateUpto}
              />
            ) : flightType === 'multi-city' ? (
              <MultiCityCard
                setIsLocationSelectorVisible={() =>
                  navigation.navigate('Search')
                }
                setGuestEntryModal={setGuestEntryModal}
                Location={Location}
                onSwap={_onSwap}
                handleAddFlight={_handleAddFlight}
                handleDelete={_handleDelete}
                Travellers={travellersClass}
                dates={dateMultiCity}
                editDate={editDate}
              />
            ) : (
              <OneWayTripCard
                setIsLocationSelectorVisible={() =>
                  navigation.navigate('Search')
                }
                setIsDateRangeVisible={setIsDatePickerVisible}
                setGuestEntryModal={setGuestEntryModal}
                Location={Location[0]}
                onSwap={_onSwap}
                handleAddReturn={() => setFlightType('round-trip')}
                Travellers={travellersClass}
                date={dateFrom}
              />
            )}

            <View style={[commonStyle.center]}>
              <Pressable
                onPress={_handleSearchFlight}
                style={styles.searchButton}>
                <Icon
                  name={'search'}
                  type={'font-awesome'}
                  size={18}
                  color={Colors.white}
                />
                <Text
                  style={[
                    styles.searchButtonText,
                    commonStyle.marginHorizontal(5),
                  ]}>
                  Search flights
                </Text>
              </Pressable>
            </View>

            <View style={commonStyle.paddingHorizontal(20)}>
              <View style={commonStyle.marginVertical(15)}>
                <Text style={styles.recentSearchTitle}>Recently Searched</Text>
              </View>
              <View>
                <SearchHistorySlider />
              </View>
            </View>
            <View>
              <TravellerAndClass
                Visible={guestEntryModal}
                setVisible={setGuestEntryModal}
                data={travellersClass}
                setData={setTravellersClass}
              />
              <DateRangePicker
                isDateRangeVisible={isDateRangeVisible}
                setIsDateRangeVisible={setIsDateRangeVisible}
                dateUpto={dateUpto}
                dateFrom={dateFrom}
                setDateFrom={setDateFrom}
                setDateUpto={setDateUpto}
              />

              <DateRangePickerMultiCity
                isDateRangeVisible={!(isDateRangeMultiCityVisible === -1)}
                setIsDateRangeVisible={setIsDateRangeMultiCityVisible}
                editDate={editDate}
                index={isDateRangeMultiCityVisible}
                dates={dateMultiCity}
              />
              <DatePicker
                isDatePickerVisible={isDatePickerVisible}
                setIsDatePickerVisible={setIsDatePickerVisible}
                editDate={setDateFrom}
                date={dateFrom}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  margin: {
    marginVertical: 5,
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignSelf: 'stretch',
  },
  canvas: {
    width: '100%',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleSection: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: Font.AvenirHeavy,
  },

  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'stretch',
    marginHorizontal: 20,
    backgroundColor: Colors.white,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.border,
    elevation: 5,
    paddingVertical: 5,
    paddingHorizontal: 2,
  },
  topBarElements(type, name) {
    return {
      backgroundColor: type === name ? '#1C8CCC' : 'white',
      flex: 1,
      borderRadius: 8,
      marginHorizontal: 3,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 12,
    };
  },
  topBarText(type, name) {
    return {
      fontSize: 14,
      fontFamily: Font.AvenirHeavy,
      color: type === name ? 'white' : Colors.lightText,
    };
  },
  searchButton: {
    alignSelf: 'stretch',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    marginHorizontal: 20,
  },
  searchButtonText: {
    fontSize: 16,
    color: Colors.white,
    fontFamily: Font.AvenirHeavy,
    marginVertical: 17,
  },
  searchHistoryCard: {
    width: 218,
    height: 60,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#163D68',
  },
  recentSearchTitle: {
    fontSize: 16,
    color: Colors.black,
    fontFamily: Font.AvenirBlack,
  },
});
