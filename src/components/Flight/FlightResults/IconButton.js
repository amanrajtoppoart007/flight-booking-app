import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import commonStyle from '../../../layout/Style';
import {Icon} from 'react-native-elements';
import Colors from '../../../layout/Colors';
import React from 'react';
import Font from '../../../layout/Font';

function IconButton({onPress, text, icon}) {
  return (
    <TouchableOpacity
      style={[styles.IconButton, commonStyle.rowSpaceEven]}
      onPress={onPress}>
      <Icon name={icon} type={'ionicon'} size={18} color={Colors.lightText} />
      <Text style={styles.ButtonText}>{text}</Text>
    </TouchableOpacity>
  );
}
export default IconButton;
const styles = StyleSheet.create({
  IconButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: 'white',
    borderRadius: 6,
    paddingVertical: 10,
    marginHorizontal: 6,
    paddingHorizontal: 8,
  },
  ButtonText: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: Font.AvenirMedium,
  },
});
