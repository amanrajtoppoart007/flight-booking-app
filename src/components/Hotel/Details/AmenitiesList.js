import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RightTickSvg from '../../Svg/Hotel/RightTick.svg';
import commonStyle from '../../../layout/Style';
import Font from '../../../layout/Font';

function AmenitiesList() {
  const [amenitiesLimit, setAmenitiesLimit] = useState(10);
  const [amenities] = useState([
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
      title: 'Concierge redux',
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
    <View>
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
                    <Text style={styles.amenitiesItemTitle}>{item?.title}</Text>
                  </View>
                </View>
              ) : (
                <View style={styles.displayNone} key={index} />
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
  );
}

const styles = StyleSheet.create({
  displayNone: {
    display: 'none',
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

export default AmenitiesList;
