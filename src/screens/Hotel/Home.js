import React, {useState} from 'react';
import {
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Colors from '../../layout/Colors';
import LinearGradient from 'react-native-linear-gradient';
import CustomStatusBar from '../../components/CustomStatusBar';
import {Icon} from 'react-native-elements';
import SearchHistorySlider from '../../components/Hotel/Home/SearchHistorySlider';
import GuestListEntry from '../../components/Hotel/Home/GuestListEntry';
import DateRangePicker from '../../components/Hotel/Home/DateRangePicker';
import LocationSelector from '../../components/Hotel/Home/LocationSelector';
import commonStyle from '../../layout/Style';
import Font from '../../layout/Font';
import moment from 'moment';
import {strings} from '../../Localization/LocalizedConstants';
import {useRtlContext} from 'react-native-easy-localization-and-rtl';

function Home({navigation}) {
  const [guestEntryModal, setGuestEntryModal] = useState(false);
  const [isDateRangeVisible, setIsDateRangeVisible] = useState(false);
  const [isLocationSelectorVisible, setIsLocationSelectorVisible] =
    useState(false);
  const {RtlStyles} = useRtlContext();

  const date = new Date();
  const dateFromTimeStamp = moment(date).format('YYYYMMDD');
  const dateUptoTimeStamp = moment(date).add(5, 'days').format('YYYYMMDD');

  const [dateFrom, setDateFrom] = useState(dateFromTimeStamp);
  const [dateUpto, setDateUpto] = useState(dateUptoTimeStamp);

  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar backgroundColor={'#1C8CCC'} />
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <View style={{height: hp('70%')}}>
            <LinearGradient
              colors={['#1C8CCC', '#015F95']}
              style={styles.canvas}>
              <View style={commonStyle.marginHorizontal(20)}>
                <View
                  style={[
                    styles.titleSection,
                    styles.rowCenter,
                    RtlStyles.containerRow,
                  ]}>
                  <View>
                    <TouchableOpacity
                      style={RtlStyles.flipHorizontal}
                      onPress={() => navigation.goBack()}>
                      <Icon
                        name={'md-arrow-back-sharp'}
                        type={'ionicon'}
                        size={18}
                        color={Colors.white}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={commonStyle.marginHorizontal(10)}>
                    <Text style={[styles.title, RtlStyles.text]}>
                      {strings.searchHotels}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.cardWrapper}>
                <View style={styles.card}>
                  <View style={styles.subSection}>
                    <View style={styles.margin}>
                      <Text style={styles.cardTitle}>
                        {strings.destination}
                      </Text>
                    </View>
                    <View style={styles.margin}>
                      <Pressable
                        onPress={() => setIsLocationSelectorVisible(true)}>
                        <Text style={[styles.searchText, RtlStyles.text]}>
                          Doha, Qatar
                        </Text>
                      </Pressable>
                    </View>
                    <View style={styles.margin}>
                      <Text style={styles.helperText}>
                        {strings.searchDestinationName}
                      </Text>
                    </View>
                    <View style={styles.divider} />
                  </View>
                  <View style={styles.subSection}>
                    <View
                      style={[
                        commonStyle.rowSpaceBetween,
                        commonStyle.width('100%'),
                      ]}>
                      <View>
                        <View style={styles.margin}>
                          <Text style={styles.helperText}>
                            {strings.checkIn}
                          </Text>
                        </View>
                        <View style={styles.margin}>
                          <Pressable
                            onPress={() => setIsDateRangeVisible(true)}>
                            <Text style={styles.dateFilterText}>
                              {moment(dateFrom, 'YYYYMMDD').format(
                                'ddd, D MMM',
                              )}
                            </Text>
                          </Pressable>
                        </View>
                      </View>
                      <View>
                        <View style={styles.margin}>
                          <Icon
                            name={'ios-moon'}
                            type={'ionicon'}
                            size={18}
                            color={Colors.lightText}
                          />
                        </View>
                        <View style={styles.margin}>
                          <Text style={styles.helperText}>
                            {moment(dateUpto, 'YYYYMMDD').diff(
                              moment(dateFrom, 'YYYYMMDD'),
                              'days',
                            )}{' '}
                            Nights
                          </Text>
                        </View>
                      </View>
                      <View>
                        <View style={[styles.margin, commonStyle.rowFlexEnd]}>
                          <Text style={styles.helperText}>
                            {strings.checkOut}
                          </Text>
                        </View>
                        <View style={styles.margin}>
                          <Pressable
                            onPress={() => setIsDateRangeVisible(true)}>
                            <Text style={styles.dateFilterText}>
                              {moment(dateUpto, 'YYYYMMDD').format(
                                'ddd, D MMM',
                              )}
                            </Text>
                          </Pressable>
                        </View>
                      </View>
                    </View>
                    <View style={styles.divider} />
                  </View>

                  <View style={styles.subSection}>
                    <View style={styles.margin}>
                      <Text style={styles.helperText}>
                        {strings.roomsGuests}
                      </Text>
                    </View>
                    <View style={styles.margin}>
                      <Pressable onPress={() => setGuestEntryModal(true)}>
                        <Text style={styles.roomFilterText}>
                          1 Room, 1 Guest(s)
                        </Text>
                      </Pressable>
                    </View>
                    <View style={styles.divider} />
                  </View>
                </View>
              </View>
            </LinearGradient>
          </View>
          <View style={commonStyle.marginHorizontal(20)}>
            <View style={[commonStyle.center, commonStyle.width('100%')]}>
              <Pressable
                onPress={() => navigation.navigate('SearchResult')}
                style={[styles.searchButton, RtlStyles.containerRow]}>
                <Icon
                  name={'search'}
                  type={'font-awesome'}
                  size={16}
                  color={Colors.white}
                />
                <View style={commonStyle.marginHorizontal(5)}>
                  <Text style={styles.searchButtonText}>
                    {strings.searchHotels}
                  </Text>
                </View>
              </Pressable>
            </View>
            <View>
              <View style={commonStyle.marginVertical(15)}>
                <Text style={styles.recentSearchTitle}>
                  {strings.recentlySearched}
                </Text>
              </View>
              <View>
                <SearchHistorySlider />
              </View>
            </View>
          </View>

          <View>
            <GuestListEntry
              isGuestBottomSheetVisible={guestEntryModal}
              setIsGuestBottomSheetVisible={setGuestEntryModal}
            />
            <DateRangePicker
              isDateRangeVisible={isDateRangeVisible}
              setIsDateRangeVisible={setIsDateRangeVisible}
              dateFrom={dateFrom}
              setDateFrom={setDateFrom}
              dateUpto={dateUpto}
              setDateUpto={setDateUpto}
            />
            <LocationSelector
              isLocationSelectorVisible={isLocationSelectorVisible}
              setIsLocationSelectorVisible={setIsLocationSelectorVisible}
            />
          </View>
        </View>
      </View>
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
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
  },
  canvas: {
    width: '100%',
    height: hp('20%'),
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleSection: {
    marginVertical: 20,
  },
  title: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 18,
    color: Colors.white,
  },
  searchSection: {
    top: hp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardWrapper: {
    top: hp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: wp('90%'),
    height: hp('50%'),
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 15,
    ...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.border,
      },
    }),
  },

  subSection: {
    width: '100%',
    justifyContent: 'center',
  },
  divider: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    marginVertical: 8,
  },

  cardTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
  },
  searchButton: {
    width: '100%',
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
  },
  searchButtonText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: Colors.white,
  },
  searchHistoryCard: {
    width: '100%',
    height: 60,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#163D68',
  },
  recentSearchTitle: {
    fontFamily: Font.AvenirBlack,
    fontSize: 16,
    color: Colors.black,
  },
  searchText: {
    fontFamily: Font.AvenirBlack,
    fontSize: 24,
    color: '#242A37',
  },
  helperText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: Colors.lightText,
  },
  dateFilterText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 18,
    color: '#242A37',
  },
  roomFilterText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 18,
    color: '#242A37',
  },
});
export default Home;
