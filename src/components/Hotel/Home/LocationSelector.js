import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {BottomSheet, Icon} from 'react-native-elements';
import Colors from '../../../layout/Colors';
import SearchHistorySlider from './SearchHistorySlider';
import commonStyle from '../../../layout/Style';
import Font from '../../../layout/Font';

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
    <BottomSheet isVisible={isLocationSelectorVisible}>
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
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Recently Searched</Text>
            </View>
            <View>
              <View style={commonStyle.marginVertical(10)}>
                <SearchHistorySlider />
              </View>
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>City</Text>
            </View>
            <View>
              <View style={commonStyle.marginVertical(10)}>
                {cities &&
                  cities.map(item => {
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
                        <View style={commonStyle.marginHorizontal(5)}>
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
              <View style={commonStyle.marginVertical(10)}>
                {hotels &&
                  hotels.map(item => {
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
                        <View style={commonStyle.marginHorizontal(5)}>
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
    flex: 1,
    backgroundColor: Colors.primary,
  },
  card: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
  },
  cardHeader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardBody: {
    flex: 1,
    marginVertical: 20,
  },
  searchSection: {
    width: '100%',
    height: 60,
    backgroundColor: '#EDEDED',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 6,
  },
  searchInputStyle: {width: 280, height: 60},
  cardTitle: {
    fontSize: 18,
    color: Colors.white,
  },
  section: {
    flex: 1,
    paddingVertical: 20,
    marginVertical: 10,
  },
  sectionHeader: {
    height: 40,
    borderRadius: 6,
    backgroundColor: '#EDEDED',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: Colors.black,
  },
  locationCard: {
    width: '100%',
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
