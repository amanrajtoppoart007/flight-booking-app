import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Colors from '../../layout/Colors';
import {Icon} from 'react-native-elements';

import SelectDropdown from 'react-native-select-dropdown';
import Font from '../../layout/Font';
import commonStyle from '../../layout/Style';

function CustomTextInput({style, setValue, placeholder, listValues}) {
  return (
    <View {...style}>
      <View style={styles.inputContainerStyle}>
        <SelectDropdown
          defaultButtonText={placeholder}
          buttonStyle={styles.dropDownButtonStyle}
          buttonTextStyle={styles.dropDownButtonTextStyle}
          renderDropdownIcon={() => {
            return (
              <Icon
                name={'caretdown'}
                type={'antdesign'}
                size={14}
                color={Colors.primary}
              />
            );
          }}
          renderCustomizedButtonChild={item => {
            return (
              <View style={commonStyle.rowSpaceBetween}>
                <View style={commonStyle.marginHorizontal(4)}>
                  <Text style={styles.dropdownBtnTxtStyle}>
                    {item ?? placeholder}
                  </Text>
                </View>
              </View>
            );
          }}
          dropdownIconPosition={'right'}
          data={listValues}
          onSelect={selectedItem => {
            setValue(selectedItem);
          }}
          buttonTextAfterSelection={selectedItem => {
            return selectedItem;
          }}
          rowTextForSelection={item => {
            return item;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {width: 20, height: 20},
  inputStyle: {
    fontSize: 14,
    height: 35,
  },
  inputTextStyle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: Colors.black,
  },
  dropdownBtnTxtStyle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#163D68',
  },
  inputContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropDownButtonStyle: {
    width: 100,
    height: 48.5,
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderColor: '#FFF',
    marginHorizontal: 5,
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
  },
  dropDownButtonTextStyle: {
    fontSize: 18,
    color: Colors.lightText,
  },
});

export default CustomTextInput;
