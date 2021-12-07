import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import Colors from '../../../layout/Colors';
import React from 'react';
import Font from '../../../layout/Font';

const SortList = ({isSelected = false, listTitle, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.listContainer}>
      <Icon
        name={'check'}
        type={'antdesign'}
        size={22}
        color={isSelected ? 'green' : Colors.transparent}
      />
      <Text style={styles.listTitle(isSelected)}>{listTitle}</Text>
    </TouchableOpacity>
  );
};
export default SortList;

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.gray,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DDDDDD',
    paddingVertical: 14,
    paddingHorizontal: 10,
  },
  listTitle(isSelected = false) {
    return {
      fontSize: 14,
      color: isSelected ? 'green' : Colors.black,
      fontFamily: Font.AvenirMedium,
      marginHorizontal: 10,
    };
  },
});
