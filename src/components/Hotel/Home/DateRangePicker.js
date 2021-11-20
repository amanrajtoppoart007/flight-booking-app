import React, {useState} from 'react';
import {BottomSheet, Icon} from 'react-native-elements';
import {StyleSheet, View, Text} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import DatepickerRange from 'react-native-range-datepicker';
import Colors from '../../../layout/Colors';

function DateRangePicker({isDateRangeVisible, setIsDateRangeVisible}) {
  const [dateFrom, setDateFrom] = useState(null);
  const [dateUpto, setDateUpto] = useState(null);

  function setDate(startDate, untilDate) {
    setDateFrom(startDate);
    setDateUpto(untilDate);
    setIsDateRangeVisible(false);
  }

  return (
    <BottomSheet
      containerStyle={{backgroundColor: Colors.primary}}
      isVisible={isDateRangeVisible}>
      <View style={styles.bottomSheet}>
        <View>
          <View style={styles.cardHeader}>
            <View>
              <Icon
                onPress={() => setIsDateRangeVisible(false)}
                name={'close'}
                type={'font-awesome'}
                size={18}
                color={Colors.white}
              />
            </View>
            <View style={{marginHorizontal: 12}}>
              <Text style={styles.cardTitle}>Select dates</Text>
            </View>
          </View>
          <View style={styles.card}>
            <DatepickerRange
              startDate={dateFrom?.toString()}
              untilDate={dateUpto?.toString()}
              onConfirm={(startDate, untilDate) =>
                setDate(startDate, untilDate)
              }
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

export default DateRangePicker;
