import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import commonStyle from '../../../layout/Style';

import PriceSection from './PriceSection';

import WifiSvg from '../../Svg/Hotel/Wifi.svg';
import PoolSvg from '../../Svg/Hotel/Pool.svg';
import MealSvg from '../../Svg/Hotel/Meal.svg';
import GymSvg from '../../Svg/Hotel/Gym.svg';

function HotelDetail({item, index}) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={commonStyle.rowSpaceBetween}>
          <View>
            <Text>
              Room {item?.roomNumber}: {item?.title}
            </Text>
            <Text>1 King Bed, Room Only</Text>
          </View>
          <View>
            <Text>QAR 4790</Text>
            <Text>QAR 3395</Text>
          </View>
        </View>
      </View>
      {item?.options &&
        item?.options.map((option, i) => {
          return (
            <View key={i} style={styles.cardBody}>
              <View>
                <Text>{option?.title}</Text>
              </View>
              <View style={commonStyle.rowFlexStart}>
                <View>
                  <WifiSvg />
                </View>
                <View style={commonStyle.marginHorizontal(5)}>
                  <MealSvg />
                </View>
                <View style={commonStyle.marginHorizontal(5)}>
                  <GymSvg />
                </View>
                <View>
                  <PoolSvg />
                </View>
                <View
                  style={[
                    commonStyle.rowFlexStart,
                    commonStyle.marginHorizontal(5),
                  ]}>
                  <View>
                    <Text>+</Text>
                  </View>
                  <View>
                    <Text>More</Text>
                  </View>
                </View>
              </View>
              <View style={commonStyle.center}>
                {option?.rooms &&
                  option?.rooms.map((room, j) => {
                    return (
                      <View key={j} style={commonStyle.marginVertical(8)}>
                        <PriceSection item={room} isActive={room?.isSelected} />
                      </View>
                    );
                  })}
              </View>
            </View>
          );
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    paddingHorizontal: 12,
  },
  card: {},
  cardHeader: {
    backgroundColor: '#FEF5F2',
    padding: 12,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  cardBody: {
    marginVertical: 3.5,
    paddingHorizontal: 12,
  },
});

export default HotelDetail;
