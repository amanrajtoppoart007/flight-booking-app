import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import OpenDoorSvg from '../../Svg/Hotel/OpenDoor.svg';
import commonStyle from '../../../layout/Style';
import SelectDropdown from 'react-native-select-dropdown';
import Font from '../../../layout/Font';
import Colors from '../../../layout/Colors';
import {Icon} from 'react-native-elements';

const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={buttonStyle.card}>
      <View>
        <Icon
          onPress={() => setCount(count - 1)}
          name={'minus'}
          type={'font-awesome'}
          size={18}
          color={Colors.lightText}
        />
      </View>
      <View>
        <Text style={buttonStyle.text}>{count}</Text>
      </View>
      <View>
        <Icon
          onPress={() => setCount(count + 1)}
          name={'plus'}
          type={'font-awesome'}
          size={18}
          color={Colors.lightText}
        />
      </View>
    </View>
  );
};

const GuestCard = ({item}) => {
  const [ageRange] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

  return (
    <View style={styles.card}>
      <View>
        <View style={styles.rowFlexStart}>
          <View>
            <OpenDoorSvg />
          </View>
          <View style={commonStyle.marginHorizontal(10)}>
            <Text style={styles.title}>{item?.title} </Text>
          </View>
        </View>
        <View style={styles.divider} />
      </View>

      <View>
        <View style={styles.rowSpaceBetween}>
          <View>
            <Text style={styles.ageSelectorTitle}>Adults</Text>
            <Text style={styles.ageSelectorHelperText}>12 yrs & above</Text>
          </View>
          <View>
            <Button />
          </View>
        </View>
        <View style={styles.rowSpaceBetween}>
          <View>
            <Text style={styles.ageSelectorTitle}>Children</Text>
            <Text style={styles.ageSelectorHelperText}>2-12 yrs</Text>
          </View>
          <View>
            <Button />
          </View>
        </View>
      </View>

      <View style={commonStyle.marginVertical(10)}>
        <View style={styles.selectSection}>
          <View>
            <Text style={styles.pickerHelper}>Specify each child’s age</Text>
          </View>
          <View>
            <View style={styles.selectBoxSection}>
              <View>
                <SelectDropdown
                  defaultButtonText={'Select Age'}
                  buttonStyle={styles.dropDownButtonStyle}
                  buttonTextStyle={styles.dropDownButtonTextStyle}
                  dropdownIconPosition={'right'}
                  data={ageRange}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  buttonTextAfterSelection={selectedItem => {
                    return selectedItem + ' Years';
                  }}
                  rowTextForSelection={row => {
                    return row + ' Years';
                  }}
                />
              </View>
              <View>
                <SelectDropdown
                  defaultButtonText={'Select Age'}
                  buttonStyle={styles.dropDownButtonStyle}
                  buttonTextStyle={styles.dropDownButtonTextStyle}
                  dropdownIconPosition={'right'}
                  data={ageRange}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  buttonTextAfterSelection={selectedItem => {
                    return selectedItem + ' Years';
                  }}
                  rowTextForSelection={rowText => {
                    return rowText + ' Years';
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.divider} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 18,
    color: Colors.black,
  },
  selectBoxSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  rowFlexStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },

  ageSelectorTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 18,
    color: '#242A37',
  },
  ageSelectorHelperText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#6C6C6C',
  },
  pickerHelper: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#242A37',
  },
  card: {
    marginVertical: 15,
  },
  divider: {
    width: '100%',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#D9D9D9',
    marginVertical: 8,
  },
  selectSection: {
    width: 345,
    height: 111,
    borderRadius: 6,
    backgroundColor: '#F5F5F5',
    padding: 15,
  },
  dropDownButtonStyle: {
    width: 150,
    height: 45,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#FFF',
  },
  dropDownButtonTextStyle: {
    fontSize: 18,
    color: Colors.lightText,
  },
});

const buttonStyle = StyleSheet.create({
  card: {
    width: 110,
    height: 45,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.border,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 5,
  },
  text: {
    fontSize: 18,
    color: Colors.lightText,
  },
});

export default GuestCard;
