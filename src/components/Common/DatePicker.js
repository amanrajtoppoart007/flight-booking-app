import React from 'react';
import {BottomSheet, Icon} from 'react-native-elements';
import {StyleSheet, View, Text} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SingleDatepicker} from '../../lib/Datepicker/index';
import Colors from '../../layout/Colors';
import commonStyle from '../../layout/Style';
import Font from '../../layout/Font';

function DatePicker({isDatePickerVisible, setIsDatePickerVisible}) {
  const currentMonth = new Date().getMonth();
  function setDate() {
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
              initialMonth={currentMonth}
              showSelectionInfo={false}
              minDate={''}
              maxDate={''}
              onConfirm={(startDate, untilDate) =>
                setDate(startDate, untilDate)
              }
              buttonColor={'#F15922'}
              showButton={true}
              selectedBackgroundColor={'#F15922'}
              todayColor={'#F15922'}
              infoText={''}
              infoStyle={styles.infoStyle}
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
  infoStyle: {
    fontFamily: Font.AvenirMedium,
    color: 'white',
    fontSize: 13,
  },
});

export default DatePicker;
