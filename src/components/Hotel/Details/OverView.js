import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Font from '../../../layout/Font';
import commonStyle from '../../../layout/Style';

import RightTickSvg from '../../Svg/Hotel/RightTick.svg';

function OverView() {
  const [amenitiesLimit, setAmenitiesLimit] = useState(10);
  const [amenities, setAmenities] = useState([
    {
      title: 'Bar/lounge',
    },
    {
      title: 'Outdoor pool',
    },
    {
      title: 'ATM/banking',
    },
    {
      title: 'Concierge services',
    },
    {
      title: 'Breakfast available',
    },
    {
      title: 'Laundry facilities',
    },
    {
      title: 'Conference space',
    },
    {
      title: 'Coffee shop or cafe',
    },
    {
      title: 'Poolside bar',
    },
    {
      title: 'Hair salon',
    },
    {
      title: 'Hair salon',
    },
  ]);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.primaryDescription}>
          A stay at W Doha places you in the heart of Doha, within a 15-minute
          walk of Doha Corniche and City Centre Shopping Mall. This 5-star hotel
          is 3.1 mi (4.9 km) from Katara Beach and 4.1 mi (6.6 km) from Souq
          Waqif Art Gallery.Relax at the full-service spa, where you can enjoy
          massages and facials. You can take advantage of recreational amenities
          such as an outdoor pool and a 24-hour fitness center. This hotel also
          features complimentary wireless Internet access, concierge services,
          and a hair salon.Featured amenities include a 24-hour business center,
          limo/town car service, and express check-in. Planning an event in
          Doha? This hotel has facilities measuring 8135 square feet (756 square
          meters), including conference space. More
        </Text>
      </View>
      <View style={styles.dividerWrapper}>
        <View style={styles.divider} />
      </View>
      <View>
        <View>
          <Text style={styles.amenitiesTitle}>Services & Amenities</Text>
        </View>
        <View>
          <Text style={styles.amenitiesHelper}>Most popular facilities</Text>
        </View>
        <View>
          <View style={styles.amenitiesRow}>
            {amenities &&
              amenities.map((item, index) => {
                return index < parseInt(amenitiesLimit, 10) ? (
                  <View key={index} style={styles.amenitiesColumn}>
                    <View>
                      <RightTickSvg />
                    </View>
                    <View style={commonStyle.marginHorizontal(8.3)}>
                      <Text style={styles.amenitiesItemTitle}>
                        {item?.title}
                      </Text>
                    </View>
                  </View>
                ) : (
                  <></>
                );
              })}
          </View>
          {amenities &&
            amenities?.length > 10 &&
            amenities?.length !== amenitiesLimit && (
              <View>
                <TouchableOpacity
                  onPress={() =>
                    setAmenitiesLimit(parseInt(amenities?.length, 10))
                  }>
                  <Text style={styles.moreButtonText}>+ More</Text>
                </TouchableOpacity>
              </View>
            )}
          {amenities && amenities?.length === amenitiesLimit && (
            <View>
              <TouchableOpacity onPress={() => setAmenitiesLimit(10)}>
                <Text style={styles.moreButtonText}>Show Less</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
      <View style={styles.dividerWrapper}>
        <View style={styles.divider} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  primaryDescription: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
  },
  dividerWrapper: {
    marginVertical: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#AAAAAA',
    width: '100%',
  },
  amenitiesTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: '#242A37',
  },
  amenitiesHelper: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#26698E',
  },
  amenitiesRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
  },
  amenitiesColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '50%',
    marginVertical: 7.5,
  },
  amenitiesItemTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
  },
  moreButtonText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#1D8CCC',
  },
});

export default OverView;
