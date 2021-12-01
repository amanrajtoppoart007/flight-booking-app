import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import commonStyle from '../../../layout/Style';
import SelectDropdown from 'react-native-select-dropdown';
import {Icon} from 'react-native-elements';
import Font from '../../../layout/Font';
import Colors from '../../../layout/Colors';

function ServiceSelectionCard() {
  const [visible, setVisible] = useState(false);
  const [baggage] = useState([20, 30, 40, 50, 60, 70]);
  const [meals] = useState([1, 2, 3]);
  return (
    <View style={commonStyle.marginHorizontal(12)}>
      <TouchableOpacity
        onPress={() => setVisible(!visible)}
        style={styles.header}>
        <View>
          <Text style={styles.userName}>Mr. Syed Ahmed -</Text>
        </View>
        <View>
          <View style={commonStyle.rowSpaceBetween}>
            <View style={commonStyle.marginHorizontal(8)}>
              <Text style={styles.currency}>QAR</Text>
            </View>
            <View>
              <Text style={styles.price}>0.00</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <>
        {visible && (
          <View>
            <View style={commonStyle.marginVertical(7.5)}>
              <SelectDropdown
                defaultValueByIndex={0}
                defaultButtonText={'Request Type'}
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
                        {item} kg
                      </Text>
                    </View>
                  );
                }}
                data={baggage}
                onSelect={selectedItem => {}}
                buttonTextAfterSelection={selectedItem => {
                  return selectedItem;
                }}
                rowTextForSelection={item => {
                  return item + ' kg';
                }}
              />
            </View>
            <View style={commonStyle.marginVertical(7.5)}>
              <SelectDropdown
                defaultValueByIndex={0}
                defaultButtonText={'Request Type'}
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
                      <Text style={styles.dropDownButtonTextStyle}>{item}</Text>
                    </View>
                  );
                }}
                data={meals}
                onSelect={selectedItem => {}}
                buttonTextAfterSelection={selectedItem => {
                  return selectedItem;
                }}
                rowTextForSelection={item => {
                  return item;
                }}
              />
            </View>
          </View>
        )}
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 7.5,
  },
  title: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 18,
    color: Colors.white,
  },
  dropDownSection: {
    marginTop: 20,
  },
  dropDownButtonStyle: {
    width: '100%',
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: '#26698E',
    borderRadius: 4,
  },
  dropDownButtonTextStyle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#26698E',
  },
  userName: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#242A37',
  },
  currency: {
    fontFamily: Font.AvenirMedium,
    fontSize: 16,
    color: '#6C6C6C',
  },
  price: {
    fontFamily: Font.AvenirBlack,
    fontSize: 16,
    color: '#0B151F',
  },
});

export default ServiceSelectionCard;
