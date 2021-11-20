import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import commonStyle from '../../layout/Style';
import Colors from '../../layout/Colors';
import {useNavigation} from '@react-navigation/native';
import Font from '../../layout/Font';

import PlaneSvg from '../Svg/Plane.svg';
import HotelSvg from '../Svg/Hotel.svg';
import AssistanceSvg from '../Svg/Assistance.svg';
function StickyMenu() {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <View>
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
      <View>
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
      <View>
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
    flex: 1,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    backgroundColor: 'red',
  },
  card: {
    width: 125,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#707070',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  circle: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
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
    fontSize: 14,
    color: Colors.black,
  },
  menuIcon: {},
});

export default StickyMenu;
