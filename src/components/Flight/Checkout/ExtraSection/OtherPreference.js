import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../../../layout/Colors';
import Font from '../../../../layout/Font';
import SelectDropdown from 'react-native-select-dropdown';
import {Icon} from 'react-native-elements';
import commonStyle from '../../../../layout/Style';

function OtherPreference() {
  const specialAssistance = [
    {
      title: 'Special Assistance',
      value: '',
    },
    {
      title: 'Bassinet request for infant',
      value: 'bassinet-request-for-infant',
    },
    {
      title: 'Wheel Chair',
      value: 'wheel-chair',
    },
  ];
  const seatPreference = [
    {
      title: 'Seat Preference',
      value: '',
    },
    {
      title: 'Window Seat',
      value: 'window-seat',
    },
    {
      title: 'Exit rows',
      value: 'exit-rows',
    },
    {
      title: 'Aisle Seat',
      value: 'aisle-seat',
    },
  ];
  const mealPreference = [
    {
      title: 'Meal Preference',
      value: '',
    },
    {
      title: 'Lunch',
      value: 'lunch',
    },
    {
      title: 'Dinner',
      value: 'dinner',
    },
    {
      title: 'BreakFast',
      value: 'breakfast',
    },
  ];
  return (
    <View>
      <View style={commonStyle.marginVertical(6)}>
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
          data={specialAssistance}
          onSelect={selectedItem => {}}
          buttonTextAfterSelection={selectedItem => {
            return selectedItem?.title;
          }}
          rowTextForSelection={item => {
            return item?.title;
          }}
        />
      </View>
      <View style={commonStyle.marginVertical(6)}>
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
          data={seatPreference}
          onSelect={selectedItem => {}}
          buttonTextAfterSelection={selectedItem => {
            return selectedItem?.title;
          }}
          rowTextForSelection={item => {
            return item?.title;
          }}
        />
      </View>
      <View style={commonStyle.marginVertical(6)}>
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
          data={mealPreference}
          onSelect={selectedItem => {}}
          buttonTextAfterSelection={selectedItem => {
            return selectedItem?.title;
          }}
          rowTextForSelection={item => {
            return item?.title;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dropDownButtonStyle: {
    width: '100%',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: '#C3C3C3',
    borderRadius: 4,
  },
  dropDownButtonTextStyle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
  },
});

export default OtherPreference;
