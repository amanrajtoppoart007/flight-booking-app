import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../../../layout/Colors';
import Font from '../../../layout/Font';
import commonStyle from '../../../layout/Style';

function SortByButton({isSelected = false, listTitle, onPress, ShortBtnIcon}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.sortButton}>
      {ShortBtnIcon}
      <View style={commonStyle.marginHorizontal(10)} />
      <Text style={styles.listTitle(isSelected)}>{listTitle}</Text>
    </TouchableOpacity>
  );
}
export default SortByButton;

const styles = StyleSheet.create({
  listTitle(isSelected = false) {
    return {
      fontSize: 14,
      color: isSelected ? Colors.primary : Colors.black,
      fontFamily: Font.AvenirMedium,
    };
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#AAAAAA',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 15,
    marginVertical: 7.5,
    alignSelf: 'stretch',
  },
});
