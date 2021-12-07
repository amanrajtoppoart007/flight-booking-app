import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../../../layout/Colors';
import Font from '../../../layout/Font';

function BorderButton({onPress, text, selected = false}) {
  return (
    <TouchableOpacity style={styles.BorderButton(selected)} onPress={onPress}>
      <Text style={styles.ButtonText(selected)}>{text}</Text>
    </TouchableOpacity>
  );
}
export default BorderButton;

const styles = StyleSheet.create({
  BorderButton(selected = false) {
    return {
      paddingHorizontal: 13,
      borderWidth: 1,
      borderColor: !selected ? Colors.border : '#F15922',
      borderRadius: 8,
      paddingVertical: 10,
      backgroundColor: Colors.white,
      elevation: 8,
    };
  },
  ButtonText(selected = false) {
    return {
      fontSize: 14,
      color: !selected ? '#242A37' : '#F15922',
      fontFamily: Font.AvenirMedium,
    };
  },
});
