import React, {useState} from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import Colors from '../../../layout/Colors';
import commonStyle from '../../../layout/Style';
import {widthPercentageToDP} from 'react-native-responsive-screen';

import HotelActiveSvg from '../../../components/Svg/Profile/HotelActive.svg';
import PlaneActiveSvg from '../../../components/Svg/Profile/PlaneActive.svg';
import Font from '../../../layout/Font';

function UpComingTrips({type}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [list] = useState([
    {
      id: 'trip-id-one',
      type: 'flight',
      title: 'Qatar (DOH) → Abu Dhabi (AUH)',
      dateTime: 'Mon, Sep 2021 06:42:02 AM',
      bookingId: 'A145XD',
      status: 'confirmed',
    },
    {
      id: 'trip-id-two',
      type: 'hotel',
      title: 'Mandarin Oriental Doha',
      dateTime: 'Mon, Sep 2021 06:42:02 AM',
      bookingId: 'A145XD',
      status: 'confirmed',
    },
    {
      id: 'trip-id-three',
      type: 'flight',
      title: 'Qatar (DOH) → Abu Dhabi (AUH)',
      dateTime: 'Mon, Sep 2021 06:42:02 AM',
      bookingId: 'A145XD',
      status: 'confirmed',
    },
    {
      id: 'trip-id-four',
      type: 'hotel',
      title: 'Mandarin Oriental Doha',
      dateTime: 'Mon, Sep 2021 06:42:02 AM',
      bookingId: 'A145XD',
      status: 'confirmed',
    },
    {
      id: 'trip-id-five',
      type: 'flight',
      title: 'Qatar (DOH) → Abu Dhabi (AUH)',
      dateTime: 'Mon, Sep 2021 06:42:02 AM',
      bookingId: 'A145XD',
      status: 'confirmed',
    },
    {
      id: 'trip-id-six',
      type: 'hotel',
      title: 'Mandarin Oriental Doha',
      dateTime: 'Mon, Sep 2021 06:42:02 AM',
      bookingId: 'A145XD',
      status: 'confirmed',
    },
    {
      id: 'trip-id-seven',
      type: 'flight',
      title: 'Qatar (DOH) → Abu Dhabi (AUH)',
      dateTime: 'Mon, Sep 2021 06:42:02 AM',
      bookingId: 'A145XD',
      status: 'confirmed',
    },
    {
      id: 'trip-id-eight',
      type: 'hotel',
      title: 'Mandarin Oriental Doha',
      dateTime: 'Mon, Sep 2021 06:42:02 AM',
      bookingId: 'A145XD',
      status: 'confirmed',
    },
    {
      id: 'trip-id-nine',
      type: 'flight',
      title: 'Qatar (DOH) → Abu Dhabi (AUH)',
      dateTime: 'Mon, Sep 2021 06:42:02 AM',
      bookingId: 'A145XD',
      status: 'confirmed',
    },
  ]);
  const _renderItem = ({item, index}) => (
    <View style={styles.wrapper}>
      <Pressable
        onPress={() => setActiveIndex(index)}
        style={styles.card(index === activeIndex)}>
        <View style={{width: '10%'}}>
          {item?.type === 'flight' && <PlaneActiveSvg />}
          {item?.type === 'hotel' && <HotelActiveSvg />}
        </View>
        <View style={{width: '90%'}}>
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={styles.dateTime}>{item?.dateTime}</Text>
          <View style={commonStyle.rowSpaceBetween}>
            <Text style={styles.idText}>Booking Id# {item?.bookingId}</Text>
            <Text style={styles.status(item?.status)}>{item?.status}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={list}
        renderItem={_renderItem}
        keyExtractor={item => item?.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  card(isActive) {
    return {
      width: widthPercentageToDP('95%'),
      height: 87,
      backgroundColor: Colors.white,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderWidth: 0.5,
      borderColor: isActive ? '#1C8CCC' : '#707070',
      borderRadius: 6,
      padding: 8,
    };
  },
  title: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#163D68',
  },
  dateTime: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#898989',
  },
  idText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#898989',
  },
  status(status) {
    let color = '#13A869';
    switch (status) {
      case 'completed':
        color = '#13A869';
        break;
      case 'on-hold':
      case 'cancelled':
        color = '#FF0031';
        break;
    }
    return {
      fontFamily: Font.AvenirMedium,
      fontSize: 12,
      color: color,
    };
  },
});

export default UpComingTrips;
