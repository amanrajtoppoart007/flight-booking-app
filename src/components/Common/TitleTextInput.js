import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Colors from '../../layout/Colors';
import {Icon} from 'react-native-elements';
import SelectDropdown from 'react-native-select-dropdown';
import Font from '../../layout/Font';

function TitleTextInput({title, setTitle, value, setValue, type}) {
  const [titles] = useState([
    {
      title: 'Mr.',
      value: 'mr',
    },
    {
      title: 'Mrs.',
      value: 'mrs',
    },
    {
      title: 'Mis.',
      value: 'mis',
    },
  ]);

  return (
    <View>
      <View style={styles.inputContainerStyle}>
        {type === 'select' && (
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
            renderCustomizedButtonChild={item => {
              return (
                <View>
                  <Text style={styles.dropdownBtnTxtStyle}>
                    {item?.title ?? 'Title'}
                  </Text>
                </View>
              );
            }}
            dropdownIconPosition={'right'}
            data={titles}
            onSelect={selectedItem => {
              setTitle(selectedItem.value);
            }}
            buttonTextAfterSelection={selectedItem => {
              return selectedItem?.title;
            }}
            rowTextForSelection={item => {
              return item?.title;
            }}
          />
        )}
        <TextInput
          value={value}
          onChangeText={text => setValue(text)}
          style={[styles.inputStyle, styles.inputTextStyle]}
          placeholderTextColor={Colors.lightText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#AAAAAA',
  },
  icon: {width: 20, height: 20},
  inputStyle: {
    width: '65%',
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
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
  },
  dropDownButtonStyle: {
    width: 80,
    height: 35,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#FFF',
  },
  dropDownButtonTextStyle: {
    fontSize: 18,
    color: Colors.lightText,
  },
});

export default TitleTextInput;
