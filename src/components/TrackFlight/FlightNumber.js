import React, {useState} from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import commonStyle from '../../layout/Style';
import Colors from '../../layout/Colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import SelectDropdown from 'react-native-select-dropdown';
import {Icon} from 'react-native-elements';

import Font from '../../layout/Font';
import DeerSvg from '../Svg/Deer.svg';
import SearchSvg from '../Svg/Search.svg';

import Card from './FlightNumber/Card';
import DatePicker from '../Common/DatePicker';
function FlightNumber() {
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [places] = useState([
    {
      place: 'DOH',
      flightName: 'Doha, QA',
      airport: 'Hamad International Airport',
      date: 'Jun 26, 2021',
      scheduledTime: '16:55',
      estimatedTime: '16:55',
      terminal: '2B',
      gate: 'N/A',
    },
    {
      place: 'DOH',
      flightName: 'Doha, QA',
      airport: 'Hamad International Airport',
      date: 'Jun 26, 2021',
      scheduledTime: '16:55',
      estimatedTime: '16:55',
      terminal: '2B',
      gate: 'N/A',
    },
    {
      place: 'DOH',
      flightName: 'Doha, QA',
      airport: 'Hamad International Airport',
      date: 'Jun 26, 2021',
      scheduledTime: '16:55',
      estimatedTime: '16:55',
      terminal: '2B',
      gate: 'N/A',
    },
    {
      place: 'DOH',
      flightName: 'Doha, QA',
      airport: 'Hamad International Airport',
      date: 'Jun 26, 2021',
      scheduledTime: '16:55',
      estimatedTime: '16:55',
      terminal: '2B',
      gate: 'N/A',
    },
    {
      place: 'DOH',
      flightName: 'Doha, QA',
      airport: 'Hamad International Airport',
      date: 'Jun 26, 2021',
      scheduledTime: '16:55',
      estimatedTime: '16:55',
      terminal: '2B',
      gate: 'N/A',
    },
    {
      place: 'DOH',
      flightName: 'Doha, QA',
      airport: 'Hamad International Airport',
      date: 'Jun 26, 2021',
      scheduledTime: '16:55',
      estimatedTime: '16:55',
      terminal: '2B',
      gate: 'N/A',
    },
    {
      place: 'DOH',
      flightName: 'Doha, QA',
      airport: 'Hamad International Airport',
      date: 'Jun 26, 2021',
      scheduledTime: '16:55',
      estimatedTime: '16:55',
      terminal: '2B',
      gate: 'N/A',
    },
    {
      place: 'DOH',
      flightName: 'Doha, QA',
      airport: 'Hamad International Airport',
      date: 'Jun 26, 2021',
      scheduledTime: '16:55',
      estimatedTime: '16:55',
      terminal: '2B',
      gate: 'N/A',
    },
    {
      place: 'DOH',
      flightName: 'Doha, QA',
      airport: 'Hamad International Airport',
      date: 'Jun 26, 2021',
      scheduledTime: '16:55',
      estimatedTime: '16:55',
      terminal: '2B',
      gate: 'N/A',
    },
    {
      place: 'DOH',
      flightName: 'Doha, QA',
      airport: 'Hamad International Airport',
      date: 'Jun 26, 2021',
      scheduledTime: '16:55',
      estimatedTime: '16:55',
      terminal: '2B',
      gate: 'N/A',
    },
    {
      place: 'DOH',
      flightName: 'Doha, QA',
      airport: 'Hamad International Airport',
      date: 'Jun 26, 2021',
      scheduledTime: '16:55',
      estimatedTime: '16:55',
      terminal: '2B',
      gate: 'N/A',
    },
    {
      place: 'DOH',
      flightName: 'Doha, QA',
      airport: 'Hamad International Airport',
      date: 'Jun 26, 2021',
      scheduledTime: '16:55',
      estimatedTime: '16:55',
      terminal: '2B',
      gate: 'N/A',
    },
  ]);

  const airlines = [
    {
      name: 'QR',
    },
    {
      name: 'AR',
    },
    {
      name: 'CR',
    },
    {
      name: 'BR',
    },
  ];
  return (
    <View style={styles.card}>
      <View style={commonStyle.rowSpaceEven}>
        <View>
          <SelectDropdown
            data={airlines}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={''}
            buttonTextAfterSelection={selectedItem => {
              return selectedItem.name;
            }}
            rowTextForSelection={item => {
              return item.name;
            }}
            renderCustomizedButtonChild={item => {
              return (
                <View style={commonStyle.rowSpaceBetween}>
                  <View>
                    <DeerSvg />
                  </View>
                  <View style={commonStyle.marginHorizontal(4)}>
                    <Text style={styles.dropdownBtnTxtStyle}>{item?.name}</Text>
                  </View>
                </View>
              );
            }}
            buttonStyle={styles.dropdownBtnStyle}
            buttonTextStyle={styles.dropdownBtnTxtStyle}
            renderDropdownIcon={() => {
              return (
                <Icon
                  type={'font-awesome'}
                  name="chevron-down"
                  color={'#163D68'}
                  size={18}
                />
              );
            }}
            dropdownIconPosition={'right'}
          />
        </View>
        <View>
          <TextInput
            placeholder={'Flight #'}
            placeholderTextColor={'#6C6C6C'}
            style={styles.searchInput}
          />
        </View>
        <View>
          <Pressable
            onPress={() => setIsDatePickerVisible(true)}
            style={styles.dateCard}>
            <View style={styles.date}>
              <Text style={styles.month}>September</Text>
            </View>
            <View style={commonStyle.center}>
              <Text style={styles.dateText}>20</Text>
            </View>
          </Pressable>
        </View>
        <View>
          <TouchableOpacity style={styles.searchButton}>
            <SearchSvg />
          </TouchableOpacity>
        </View>
      </View>

      <View style={commonStyle.marginVertical(15)}>
        <View style={styles.flightSection}>
          <View style={commonStyle.rowSpaceEven}>
            <View>
              <DeerSvg />
            </View>
            <View style={commonStyle.marginHorizontal(8)}>
              <View style={commonStyle.rowSpaceBetween}>
                <Text style={styles.headerText}>Qatar Airways | </Text>
                <Text style={styles.flightNumber}>QR - 3801</Text>
              </View>
              <Text style={styles.placeTitle}>(DOH) → Dubai</Text>
            </View>
          </View>

          <View>
            <Text style={styles.statusTextPrimary}>Scheduled</Text>
            <Text style={styles.statusTextSecondary}>On time</Text>
          </View>
        </View>
      </View>
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {places &&
            places.map((item, index) => (
              <View
                key={index?.toString()}
                style={commonStyle.marginVertical(10)}>
                <Card item={item} />
              </View>
            ))}
        </ScrollView>
      </View>
      {isDatePickerVisible && (
        <DatePicker
          isDatePickerVisible={isDatePickerVisible}
          setIsDatePickerVisible={setIsDatePickerVisible}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  dropdownBtnStyle: {
    width: wp('25%'),
    height: 45,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#C3C3C3',
    backgroundColor: Colors.white,
  },
  dropdownBtnTxtStyle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#163D68',
  },
  card: {
    paddingVertical: 10,
  },
  dateCard: {
    height: 45,
    borderWidth: 1,
    borderColor: '#1D8CCC',
    borderRadius: 4,
  },
  month: {
    fontFamily: Font.AvenirMedium,
    fontSize: 11,
    color: 'white',
  },
  date: {
    backgroundColor: '#1D8CCC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    width: wp('25%'),
    height: 45,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#C3C3C3',
  },
  searchButton: {
    width: 46,
    height: 45,
    borderRadius: 4,
    backgroundColor: '#F15922',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: Colors.black,
  },
  flightSection: {
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'rgba(19, 168, 105, 0.1)',
    paddingHorizontal: 8,
  },
  dateText: {
    fontFamily: Font.AvenirRoman,
    fontSize: 14,
    color: '#163D68',
  },
  headerText: {
    fontFamily: Font.AvenirRoman,
    fontSize: 14,
    color: '#242A37',
  },
  flightNumber: {
    fontFamily: Font.AvenirRoman,
    fontSize: 14,
    color: '#6C6C6C',
  },
  placeTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#242A37',
  },
  statusTextPrimary: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: '#13A869',
  },
  statusTextSecondary: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#13A869',
  },
});

export default FlightNumber;
