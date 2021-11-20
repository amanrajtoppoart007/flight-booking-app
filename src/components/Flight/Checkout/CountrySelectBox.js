import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import commonStyle from '../../../layout/Style';
import SelectDropdown from 'react-native-select-dropdown';
import Font from '../../../layout/Font';
import Colors from '../../../layout/Colors';
import countries from '../../../utils/country';
function CountrySelectBox({title}) {
  return (
    <View style={styles.card}>
      <View style={[commonStyle.rowFlexStart, commonStyle.marginHorizontal(8)]}>
        <View>
          <Text style={styles.label}>{title}</Text>
        </View>
        <View style={commonStyle.marginHorizontal(4)}>
          <Text style={styles.required}>*</Text>
        </View>
      </View>
      <SelectDropdown
        defaultButtonText={title}
        buttonStyle={styles.dropDownButtonStyle}
        buttonTextStyle={styles.dropDownButtonTextStyle}
        renderDropdownIcon={() => {
          return (
            <Icon
              type={'font-awesome'}
              name="chevron-down"
              color={'#163D68'}
              size={14}
            />
          );
        }}
        data={countries}
        onSelect={selectedItem => {
          return selectedItem.item;
        }}
        buttonTextAfterSelection={selectedItem => {
          return selectedItem?.name;
        }}
        rowTextForSelection={item => {
          return item?.name;
        }}
        renderCustomizedButtonChild={item => {
          return (
            <View style={commonStyle.rowFlexStart}>
              <Text>{item?.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    marginVertical: 10,
  },
  label: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
  },
  required: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#FF0000',
  },
  title: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#AAAAAA',
  },
  icon: {width: 20, height: 20},
  dropdownBtnTxtStyle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#163D68',
  },
  dropDownButtonStyle: {
    width: '95%',
    height: 45,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
  },
  dropDownButtonTextStyle: {
    fontSize: 18,
    color: Colors.lightText,
  },
});

export default CountrySelectBox;
