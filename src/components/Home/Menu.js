import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import commonStyle from '../../layout/Style';
import Colors from '../../layout/Colors';
import {useNavigation} from '@react-navigation/native';
import Font from '../../layout/Font';
import {strings} from '../../Localization/LocalizedConstants';
import PlaneSvg from '../Svg/Plane.svg';
import HotelSvg from '../Svg/Hotel.svg';
import AssistanceSvg from '../Svg/Assistance.svg';
function Menu() {
  const navigation = useNavigation();

  return (
    <View style={commonStyle.rowSpaceEven}>
      <View>
        <Pressable
          onPress={() => navigation.navigate('FlightStack')}
          style={styles.card}>
          <View style={[styles.circle, styles.flightMenu]}>
            <PlaneSvg style={styles.menuIcon} />
          </View>
          <View style={commonStyle.marginVertical(10)}>
            <Text style={styles.title}>{strings.flight}</Text>
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
          <View style={commonStyle.marginVertical(10)}>
            <Text style={styles.title}>{strings.hotels}</Text>
          </View>
        </Pressable>
      </View>
      <View>
        <Pressable style={styles.card}>
          <View style={[styles.circle, styles.assistanceMenu]}>
            <AssistanceSvg style={styles.menuIcon} />
          </View>
          <View style={commonStyle.marginVertical(10)}>
            <Text style={styles.title}>{strings.assistance}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 90,
    height: 130,
    borderRadius: 80,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#707070',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
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
  menuIcon: {width: 18, height: 18},
});

export default Menu;
