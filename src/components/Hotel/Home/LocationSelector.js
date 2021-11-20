import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {BottomSheet, Icon, Input} from 'react-native-elements';
import Colors from '../../../layout/Colors';
import SearchHistorySlider from './SearchHistorySlider';

function LocationSelector({
  isLocationSelectorVisible,
  setIsLocationSelectorVisible,
}) {
  const [cities] = useState([
    {
      id: 'city-id-one',
      name: 'Doha, Qatar',
    },
    {
      id: 'city-id-two',
      name: 'Dohan, Bouillon, Walloon Region, Belgium',
    },
    {
      id: 'city-id-three',
      name: 'Dohalice, Hradec Kralove, Czech Republic',
    },
  ]);
  const [hotels] = useState([
    {
      id: 'hotel-id-one',
      name: 'Doha Dynasty Hotel, Doha, Qatar',
    },
    {
      id: 'hotel-id-two',
      name: 'Hilton Doha, Doha, Qatar',
    },
    {
      id: 'hotel-id-three',
      name: 'InterContinental Doha, Doha, Qatar',
    },
    {
      id: 'hotel-id-four',
      name: 'New Residency Doha, Doha, Qatar',
    },
    {
      id: 'hotel-id-five',
      name: 'Al-ber Doha, Doha, Qatar',
    },
    {
      id: 'hotel-id-six',
      name: 'New Prime Doha, Doha, Qatar',
    },
    {
      id: 'hotel-id-seven',
      name: 'Continent Blue Doha, Doha, Qatar',
    },
    {
      id: 'hotel-id-eight',
      name: 'Awesome Nation Doha, Doha, Qatar',
    },
    {
      id: 'hotel-id-nine',
      name: 'Fame Hall Doha, Doha, Qatar',
    },
  ]);
  return (
    <BottomSheet
      isVisible={isLocationSelectorVisible}
      containerStyle={{backgroundColor: Colors.white}}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.searchSection}>
            <View>
              <Icon
                onPress={() => setIsLocationSelectorVisible(false)}
                name={'ios-arrow-back-sharp'}
                type={'ionicon'}
                size={35}
                color={Colors.black}
              />
            </View>
            <View>
              <Icon
                name={'location-pin'}
                type={'material-icon'}
                size={35}
                color={Colors.lightText}
              />
            </View>
            <View>
              <TextInput
                style={styles.searchInputStyle}
                placeholder={'Search Destination, City or Hotel Name'}
                placeholderTextColor={'#979797'}
              />
            </View>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.cardBody}>
          <View style={[styles.section, {height: hp('18%')}]}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Recently Searched</Text>
            </View>
            <View>
              <View style={{marginVertical: 10}}>
                <SearchHistorySlider />
              </View>
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>City</Text>
            </View>
            <View>
              <View style={{marginVertical: 10}}>
                {cities &&
                  cities.map((item, index) => {
                    return (
                      <View
                        key={item?.id?.toString()}
                        style={styles.locationCard}>
                        <View>
                          <Icon
                            name={'location-pin'}
                            type={'material-icon'}
                            size={35}
                            color={Colors.lightText}
                          />
                        </View>
                        <View style={{marginHorizontal: 5}}>
                          <Text style={styles.locationText}>{item?.name}</Text>
                        </View>
                      </View>
                    );
                  })}
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Hotel</Text>
            </View>
            <View>
              <View style={{marginVertical: 10}}>
                {hotels &&
                  hotels.map((item, index) => {
                    return (
                      <View
                        key={item?.id?.toString()}
                        style={styles.locationCard}>
                        <View>
                          <Icon
                            name={'building'}
                            type={'font-awesome-5'}
                            size={25}
                            color={Colors.lightText}
                          />
                        </View>
                        <View style={{marginHorizontal: 5}}>
                          <Text style={styles.locationText}>{item?.name}</Text>
                        </View>
                      </View>
                    );
                  })}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  bottomSheet: {
    width: wp('100%'),
    height: hp('95%'),
    backgroundColor: Colors.primary,
  },
  card: {
    width: wp('100%'),
    height: hp('100%'),
    backgroundColor: Colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardHeader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardBody: {
    marginVertical: 20,
    width: wp('100%'),
    height: hp('80%'),
  },
  searchSection: {
    width: wp('95%'),
    height: 60,
    borderRadius: 6,
    backgroundColor: '#EDEDED',
    borderWidth: 0.1,
    borderColor: '#979797',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  searchInputStyle: {width: 280, height: 60},
  cardTitle: {
    fontSize: 18,
    color: Colors.white,
  },
  section: {
    height: hp('30%'),
    paddingVertical: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  sectionHeader: {
    width: wp('95%'),
    height: 40,
    borderRadius: 6,
    backgroundColor: '#EDEDED',
    borderWidth: 0.1,
    borderColor: '#979797',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    color: Colors.black,
  },
  locationCard: {
    width: wp('95%'),
    height: 60,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#BFCAD7',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 14,
    color: Colors.lightText,
  },
});

export default LocationSelector;
