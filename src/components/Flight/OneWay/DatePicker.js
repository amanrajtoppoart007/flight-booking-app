import React from 'react';
import {BottomSheet, Icon} from 'react-native-elements';
import {StyleSheet, View, Text} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SingleDatepicker} from '../../../lib/Datepicker/index';
import Colors from '../../../layout/Colors';
import moment from 'moment';
import commonStyle from '../../../layout/Style';

function DatePicker({
  isDatePickerVisible,
  setIsDatePickerVisible,
  editDate,
  date,
}) {
  function setDate(startDate) {
    const dateFromTimeStamp = moment(startDate).format('YYYYMMDD');
    editDate(dateFromTimeStamp);
    setIsDatePickerVisible(false);
  }
  return (
    <BottomSheet
      containerStyle={{backgroundColor: Colors.primary}}
      isVisible={isDatePickerVisible}>
      <View style={styles.bottomSheet}>
        <View>
          <View style={styles.cardHeader}>
            <View>
              <Icon
                onPress={() => setIsDatePickerVisible(false)}
                name={'close'}
                type={'font-awesome'}
                size={18}
                color={Colors.white}
              />
            </View>
            <View style={commonStyle.marginHorizontal(12)}>
              <Text style={styles.cardTitle}>Select dates</Text>
            </View>
          </View>
          <View style={styles.card}>
            <SingleDatepicker
              showSelectionInfo={false}
              onSelect={date => setDate(date)}
              selectedBackgroundColor={'#F15922'}
              todayColor={'#F15922'}
              infoText={''}
              infoStyle={styles.infoStyle}
              startDate={date}
            />
          </View>
        </View>
      </View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  bottomSheet: {
    width: wp('100%'),
    height: hp('95%'),
    backgroundColor: Colors.primary,
  },
  card: {
    width: wp('100%'),
    height: hp('90%'),
    backgroundColor: Colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
  },
  infoStyle: {color: 'white', fontSize: 13},
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 15,
    paddingHorizontal: 20,
  },
  cardTitle: {
    fontSize: 18,
    color: Colors.white,
  },
});

export default DatePicker;
