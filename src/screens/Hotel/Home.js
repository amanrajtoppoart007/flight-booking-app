import React, {useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Colors from '../../layout/Colors';
import LinearGradient from 'react-native-linear-gradient';
import CustomStatusBar from '../../components/CustomStatusBar';
import {Icon} from 'react-native-elements';
import SearchHistorySlider from '../../components/Hotel/Home/SearchHistorySlider';
import {useNavigation} from '@react-navigation/native';
import GuestListEntry from '../../components/Hotel/Home/GuestListEntry';
import DateRangePicker from '../../components/Hotel/Home/DateRangePicker';
import LocationSelector from '../../components/Hotel/Home/LocationSelector';
import commonStyle from '../../layout/Style';

function Home() {
  const navigation = useNavigation();
  const [guestEntryModal, setGuestEntryModal] = useState(false);
  const [isDateRangeVisible, setIsDateRangeVisible] = useState(false);
  const [isLocationSelectorVisible, setIsLocationSelectorVisible] =
    useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar backgroundColor={'#1C8CCC'} />
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <View style={{height: hp('70%')}}>
            <LinearGradient
              colors={['#1C8CCC', '#015F95']}
              style={styles.canvas}>
              <View style={[styles.titleSection, styles.rowCenter]}>
                <View>
                  <Icon
                    name={'md-arrow-back-sharp'}
                    type={'ionicon'}
                    size={18}
                    color={Colors.white}
                  />
                </View>
                <View style={{marginHorizontal: 10}}>
                  <Text style={styles.title}>Search Hotels</Text>
                </View>
              </View>
              <View
                style={{
                  top: hp('10%'),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={styles.card}>
                  <View style={styles.subSection}>
                    <View style={styles.margin}>
                      <Text style={styles.cardTitle}>Destination</Text>
                    </View>
                    <View style={styles.margin}>
                      <Pressable
                        onPress={() => setIsLocationSelectorVisible(true)}>
                        <Text style={styles.searchText}>Doha, Qatar</Text>
                      </Pressable>
                    </View>
                    <View style={styles.margin}>
                      <Text style={styles.helperText}>
                        Search Destination, City or Hotel Name
                      </Text>
                    </View>
                    <View style={styles.divider} />
                  </View>

                  <View style={styles.subSection}>
                    <View style={commonStyle.rowCenter}>
                      <View>
                        <View style={styles.margin}>
                          <Text style={styles.helperText}>Check-In</Text>
                        </View>
                        <View style={styles.margin}>
                          <Pressable
                            onPress={() => setIsDateRangeVisible(true)}>
                            <Text style={styles.dateFilterText}>
                              Sun, 15 Sep
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
                          <Text style={styles.helperText}>6 Nights</Text>
                        </View>
                      </View>
                      <View>
                        <View style={styles.margin}>
                          <Text style={styles.helperText}>Check-Out</Text>
                        </View>
                        <View style={styles.margin}>
                          <Pressable
                            onPress={() => setIsDateRangeVisible(true)}>
                            <Text style={styles.dateFilterText}>
                              Mon, 20 Sep
                            </Text>
                          </Pressable>
                        </View>
                      </View>
                    </View>
                    <View style={styles.divider} />
                  </View>

                  <View style={styles.subSection}>
                    <View style={styles.margin}>
                      <Text style={styles.helperText}>Rooms & Guests</Text>
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
          <View style={commonStyle.center}>
            <Pressable
              onPress={() => navigation.navigate('SearchResult')}
              style={styles.searchButton}>
              <Icon
                name={'search'}
                type={'font-awesome'}
                size={16}
                color={Colors.white}
              />
              <View style={{marginHorizontal: 5}}>
                <Text style={styles.searchButtonText}>Search Hotels</Text>
              </View>
            </Pressable>
          </View>
          <View style={{paddingHorizontal: 10}}>
            <View style={{marginVertical: 15}}>
              <Text style={styles.recentSearchTitle}>Recently Searched</Text>
            </View>
            <View>
              <SearchHistorySlider />
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
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    color: Colors.white,
  },
  searchSection: {
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
    borderWidth: 0.1,
    borderColor: Colors.border,
    elevation: 5,
    padding: 15,
  },
  subSection: {
    justifyContent: 'center',
  },
  divider: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#D9D9D9',
    marginVertical: 8,
  },

  cardTitle: {
    fontSize: 14,
    color: Colors.lightText,
  },
  searchButton: {
    width: 335,
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
  },
  searchButtonText: {
    fontSize: 14,
    color: Colors.white,
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
    fontWeight: 'bold',
  },
  searchText: {
    fontSize: 24,
    color: Colors.black,
    fontWeight: 'bold',
  },
  searchHelperText: {
    fontSize: 14,
    color: Colors.lightText,
  },
  helperText: {
    fontSize: 14,
    color: Colors.lightText,
  },
  dateFilterText: {
    fontSize: 18,
    color: Colors.lightText,
    fontWeight: 'bold',
  },
  roomFilterText: {
    fontSize: 18,
    color: Colors.black,
  },
});
export default Home;
