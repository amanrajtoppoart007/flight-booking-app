import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import commonStyle from '../../../../layout/Style';
import Font from '../../../../layout/Font';
import Colors from '../../../../layout/Colors';

import SeatSvg from '../../../Svg/Flight/Seat.svg';

function SeatSelectionCard() {
  const [visible, setVisible] = useState(false);
  return (
    <View style={commonStyle.marginHorizontal(12)}>
      <TouchableOpacity
        onPress={() => setVisible(!visible)}
        style={styles.header}>
        <View>
          <Text style={styles.userName}>Mr. Syed Ahmed -</Text>
        </View>
        <View style={commonStyle.rowSpaceBetween}>
          <View>
            <SeatSvg />
          </View>
          <View style={commonStyle.marginHorizontal(8)}>
            <Text style={styles.seatNumber}>22C</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => setVisible(!visible)}
            style={styles.button}>
            <Text style={styles.buttonText}>
              {visible ? 'Select' : 'Change'}
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <>{visible && <View />}</>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 7.5,
  },
  seatNumber: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#26698E',
  },
  userName: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#242A37',
  },
  button: {
    width: 70,
    height: 34,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#F15922',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#F15922',
  },
});

export default SeatSelectionCard;
