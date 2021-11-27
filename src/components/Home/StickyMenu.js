import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import commonStyle from '../../layout/Style';
import Colors from '../../layout/Colors';
import {useNavigation} from '@react-navigation/native';
import Font from '../../layout/Font';

import PlaneSvg from '../Svg/StickyMenu/Plane.svg';
import HotelSvg from '../Svg/StickyMenu/Hotel.svg';
import AssistanceSvg from '../Svg/StickyMenu/Assistance.svg';
function StickyMenu() {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <Pressable
          onPress={() => navigation.navigate('FlightStack')}
          style={styles.card}>
          <View style={[styles.circle, styles.flightMenu]}>
            <PlaneSvg style={styles.menuIcon} />
          </View>
          <View style={commonStyle.marginHorizontal(5)}>
            <Text style={styles.title}>Flight</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.content}>
        <Pressable
          onPress={() => navigation.navigate('HotelStack')}
          style={styles.card}>
          <View style={[styles.circle, styles.hotelMenu]}>
            <HotelSvg style={styles.menuIcon} />
          </View>
          <View style={commonStyle.marginHorizontal(5)}>
            <Text style={styles.title}>Hotels</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.content}>
        <Pressable style={styles.card}>
          <View style={[styles.circle, styles.assistanceMenu]}>
            <AssistanceSvg style={styles.menuIcon} />
          </View>
          <View style={commonStyle.marginHorizontal(5)}>
            <Text style={styles.title}>Assistance</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'white',
  },
  content: {
    width: '33.33%',
    paddingHorizontal: 10,
  },
  card: {
    height: 45,
    borderRadius: 50,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#707070',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flightMenu: {
    backgroundColor: '#1C8CCC',
  },
  hotelMenu: {
    backgroundColor: '#F15922',
  },
  assistanceMenu: {
    backgroundColor: '#26698E',
  },
  title: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: Colors.black,
  },
  menuIcon: {},
});

export default StickyMenu;
