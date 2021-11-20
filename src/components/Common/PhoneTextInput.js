import React, {useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import Colors from '../../layout/Colors';
import {Icon} from 'react-native-elements';

import countries from '../../utils/country';
import SelectDropdown from 'react-native-select-dropdown';
import Font from '../../layout/Font';
import commonStyle from '../../layout/Style';

function PhoneTextInput({
  title,
  value,
  setValue,
  phoneCode = '+974',
  setPhoneCode = null,
  placeholder,
}) {
  const [countryList, setCountryList] = useState(countries);
  const [countryCode, setCountryCode] = useState(phoneCode);

  return (
    <View style={styles.card}>
      <View style={[commonStyle.rowFlexStart, commonStyle.marginHorizontal(4)]}>
        <View>
          <Text style={styles.label}>{title}</Text>
        </View>
        <View style={commonStyle.marginHorizontal(4)}>
          <Text style={styles.required}>*</Text>
        </View>
      </View>

      <View style={commonStyle.rowSpaceBetween}>
        <View style={commonStyle.width('25%')}>
          <SelectDropdown
            defaultButtonText={'+97'}
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
            renderCustomizedButtonChild={item => {
              return (
                <View style={commonStyle.rowSpaceBetween}>
                  <View>
                    <Image
                      style={styles.icon}
                      source={require('../../assets/icons/country/qar.png')}
                    />
                  </View>
                  <View style={commonStyle.marginHorizontal(4)}>
                    <Text style={styles.dropdownBtnTxtStyle}>
                      {item?.dial_code ?? '+974'}
                    </Text>
                  </View>
                </View>
              );
            }}
            dropdownIconPosition={'right'}
            data={countryList}
            onSelect={selectedItem => {
              setCountryCode(selectedItem?.dial_code);
              setPhoneCode(selectedItem?.dial_code);
            }}
            buttonTextAfterSelection={selectedItem => {
              return selectedItem?.dial_code;
            }}
            rowTextForSelection={item => {
              return item?.dial_code;
            }}
          />
        </View>
        <View
          style={[commonStyle.width('75%'), commonStyle.marginHorizontal(5)]}>
          <TextInput
            value={value}
            placeholder={placeholder}
            onChangeText={text => setValue(text)}
            style={[styles.inputStyle, styles.inputTextStyle]}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
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
  inputStyle: {
    height: 45,
    fontSize: 14,
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
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
  dropDownButtonStyle: {
    width: 100,
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

export default PhoneTextInput;
