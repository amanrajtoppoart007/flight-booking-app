import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../layout/Colors';
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
              placeholder={title}
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

export default SelectBox;
