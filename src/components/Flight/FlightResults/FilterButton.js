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
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: !selected ? Colors.border : Colors.orange,
      borderRadius: 6,
      paddingVertical: 5,
      backgroundColor: Colors.white,
      elevation: 8,
    };
  },
  ButtonText(selected = false) {
    return {
      fontSize: 14,
      color: !selected ? Colors.black : Colors.orange,
      fontFamily: Font.AvenirMedium,
    };
  },
});
