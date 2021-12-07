import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import OrangeStar from '../../Svg/Hotel/OrangeStar.svg';
import DarkStar from '../../Svg/Hotel/DarkStar.svg';
import React from 'react';
import Colors from '../../../layout/Colors';
import Font from '../../../layout/Font';
import commonStyle from '../../../layout/Style';

function RatingButton({onPress, num, selected = false}) {
  return (
    <TouchableOpacity style={styles.BorderButton(selected)} onPress={onPress}>
      <Text style={styles.ButtonText(selected)}>{num}</Text>
      <View style={commonStyle.marginHorizontal(1)} />
      {selected ? <OrangeStar /> : <DarkStar />}
    </TouchableOpacity>
  );
}

export default RatingButton;

const styles = StyleSheet.create({
  BorderButton(selected = false) {
    return {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 8,
      borderWidth: 1,
      borderColor: !selected ? Colors.border : Colors.orange,
      borderRadius: 6,
      paddingVertical: 5,
      backgroundColor: Colors.white,
      elevation: 8,
      marginHorizontal: 4,
    };
  },
  ButtonText(selected = false) {
    return {
      fontSize: 14,
      color: !selected ? Colors.black : Colors.orange,
      fontFamily: Font.AvenirHeavy,
    };
  },
});
