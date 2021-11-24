import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import commonStyle from '../../../layout/Style';
import WifiSvg from '../../Svg/Hotel/Wifi.svg';
import PoolSvg from '../../Svg/Hotel/Pool.svg';
import MealSvg from '../../Svg/Hotel/Meal.svg';
import GymSvg from '../../Svg/Hotel/Gym.svg';
import PriceGrid from './PriceGrid';
import {Icon} from 'react-native-elements';
import Font from '../../../layout/Font';
import RoomInfo from './RoomInfo';

function HotelDetail({item, index}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isRoomInfoVisible, setIsRoomInfoVisible] = useState(false);
  return (
    <View>
      <View style={styles.cardHeader}>
        <View style={commonStyle.rowSpaceBetween}>
          <View>
            <Text style={commonStyle.rowSpaceBetween}>
              <Text style={styles.roomCountTitle}>
                Room {item?.roomNumber}:
              </Text>
              <Text style={styles.cardTitle}>{item?.title}</Text>
            </Text>

            <Text style={styles.subTitle}>1 King Bed, Room Only</Text>
          </View>
          <View>
            <View style={commonStyle.rowSpaceBetween}>
              <View style={commonStyle.marginHorizontal(5)}>
                <Text style={styles.price}>QAR</Text>
              </View>
              <View>
                <Text style={styles.discountedPrice}>4790</Text>
              </View>
            </View>
            <View style={commonStyle.rowSpaceBetween}>
              <View style={commonStyle.marginHorizontal(5)}>
                <Text style={styles.price}>QAR</Text>
              </View>
              <View>
                <Text style={styles.discountedPrice}>3395</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Icon
            onPress={() => setIsVisible(!isVisible)}
            name={isVisible ? 'chevron-up' : 'chevron-right'}
            type={'feather'}
            size={16}
            color={'#242A37'}
          />
        </View>
      </View>
      {isVisible &&
        item?.options &&
        item?.options.map((option, i) => {
          return (
            <View key={i} style={styles.cardBody}>
              <View>
                <Text style={styles.roomTitle}>{option?.title}</Text>
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
                <View style={commonStyle.marginHorizontal(5)}>
                  <TouchableOpacity onPress={() => setIsRoomInfoVisible(true)}>
                    <Text style={styles.moreText}> + More</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <PriceGrid option={option} />
              </View>
            </View>
          );
        })}
      <View>
        <RoomInfo
          isRoomInfoVisible={isRoomInfoVisible}
          setIsRoomInfoVisible={setIsRoomInfoVisible}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    paddingHorizontal: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FEF5F2',
    padding: 12,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  roomCountTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#242A37',
  },
  cardTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#F15922',
  },
  subTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#6C6C6C',
  },
  currency: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#6C6C6C',
  },
  price: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#6C6C6C',
  },
  discountedPrice: {
    fontFamily: Font.AvenirBlack,
    fontSize: 14,
    color: '#0B151F',
  },
  cardBody: {
    marginVertical: 3.5,
    paddingHorizontal: 12,
  },
  roomTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#1D8CCC',
  },
  moreText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#1D8CCC',
  },
});

export default HotelDetail;
