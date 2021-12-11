import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import SelectDropdown from 'react-native-select-dropdown';
import Font from '../../layout/Font';

function SelectBox({items, value, setValue, title = ''}) {
  return (
    <View style={styles.card}>
      <View>
        <View>
          {items && (
            <SelectDropdown
              defaultValueByIndex={0}
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
                  <View>
                    <Text style={styles.dropDownButtonTextStyle}>
                      {item?.title}
                    </Text>
                  </View>
                );
              }}
              rowTextStyle={styles.dropDownButtonTextStyle}
              dropdownIconPosition={'right'}
              data={items}
              onSelect={selectedItem => {
                setValue(selectedItem?.value);
              }}
              buttonTextAfterSelection={selectedItem => {
                return selectedItem?.title;
              }}
              rowTextForSelection={item => {
                return item?.title;
              }}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
  },
  icon: {width: 20, height: 20},

  dropdownBtnTxtStyle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#163D68',
  },
  dropDownButtonStyle: {
    width: '100%',
    height: 35,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderBottomColor: '#D9D9D9',
    borderWidth: 0,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  dropDownButtonTextStyle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
    textAlign: 'left',
  },
});

export default SelectBox;
