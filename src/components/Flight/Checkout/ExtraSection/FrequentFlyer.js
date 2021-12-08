import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Colors from '../../../../layout/Colors';
import Font from '../../../../layout/Font';
import commonStyle from '../../../../layout/Style';
import SelectDropdown from 'react-native-select-dropdown';
import {Icon, Input} from 'react-native-elements';
import CalenderSvg from '../../../Svg/Calender.svg';

function FrequentFlyer() {
  const airLines = [
    {
      title: 'QR',
      value: '',
    },
    {
      title: 'QR',
      value: 'qr',
    },
  ];
  return (
    <View>
      <View style={commonStyle.rowFlexStart}>
        <View>
          <SelectDropdown
            defaultValueByIndex={0}
            defaultButtonText={'Special Assistance'}
            buttonStyle={styles.dropDownButtonStyle}
            buttonTextStyle={styles.dropDownButtonTextStyle}
            renderDropdownIcon={() => {
              return (
                <Icon
                  type={'font-awesome'}
                  name="chevron-down"
                  color={'#898989'}
                  size={14}
                />
              );
            }}
            rowTextStyle={styles.dropDownButtonTextStyle}
            renderCustomizedButtonChild={item => {
              return (
                <View>
                  <Text style={styles.dropDownButtonTextStyle}>
                    {item?.title}
                  </Text>
                </View>
              );
            }}
            data={airLines}
            onSelect={selectedItem => {}}
            buttonTextAfterSelection={selectedItem => {
              return selectedItem?.title;
            }}
            rowTextForSelection={item => {
              return item?.title;
            }}
          />
        </View>
        <View>
          <TextInput
            placeholder={'Frequent Flyer Number'}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputTextStyle}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dropDownButtonStyle: {
    width: 100,
    backgroundColor: Colors.white,
  },
  dropDownButtonTextStyle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
  },
  inputContainerStyle: {
    width: 200,
    backgroundColor: Colors.google,
  },
  inputTextStyle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: Colors.black,
  },
});

export default FrequentFlyer;
