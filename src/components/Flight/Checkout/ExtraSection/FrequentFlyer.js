import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../../../layout/Colors';
import Font from '../../../../layout/Font';
import commonStyle from '../../../../layout/Style';
import SelectDropdown from 'react-native-select-dropdown';
import {Icon} from 'react-native-elements';
import FlyerCard from './FlyerCard';
import Toast from '../../../../layout/AppToast';

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
  const [flyers, setFlyers] = useState([]);

  const [flyerNumber, setFlyerNumber] = useState('');

  function addNewRow() {
    if (!flyerNumber) {
      Toast.topToast('Please enter flyer number');
      return false;
    }
    const newFlyer = {
      number: flyerNumber,
    };
    const list = flyers.map(item => {
      return item;
    });
    list.push(newFlyer);
    setFlyers(list);
    setFlyerNumber('');
  }

  function removeRow(delIndex) {
    const list = flyers.filter((item, index) => {
      return index !== delIndex;
    });
    setFlyers(list);
  }

  return (
    <View>
      <View style={styles.addSection}>
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
            onChangeText={text => setFlyerNumber(text)}
            value={flyerNumber}
            placeholder={'Frequent Flyer Number'}
            style={[styles.inputContainerStyle, styles.inputTextStyle]}
          />
        </View>
        <View>
          <TouchableOpacity onPress={() => addNewRow()} style={styles.button}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {flyers &&
          flyers.map((item, index) => {
            return (
              <View style={commonStyle.marginVertical(5)} key={index}>
                <FlyerCard item={item} index={index} removeRow={removeRow} />
              </View>
            );
          })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addSection: {
    ...commonStyle.rowCenter,
    marginVertical: 10,
  },
  dropDownButtonStyle: {
    width: 100,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
  },
  dropDownButtonTextStyle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
  },
  inputContainerStyle: {
    width: 200,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
  },
  inputTextStyle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: Colors.black,
  },
  button: {
    width: 40,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#1D8CCC',
  },
  buttonText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 12,
    color: '#1D8CCC',
  },
  flyerRow: {
    height: 46,
    ...commonStyle.rowSpaceBetween,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 4,
  },
  column: {
    height: 46,
  },
  firstColumn: {
    ...commonStyle.rowFlexStart,
    height: 46,
    width: '20%',
    paddingHorizontal: 10,
  },
  secondColumn: {
    height: 46,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  lastColumn: {
    height: 46,
    width: '10%',
    borderLeftWidth: 1,
    borderLeftColor: '#DDDDDD',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FrequentFlyer;
