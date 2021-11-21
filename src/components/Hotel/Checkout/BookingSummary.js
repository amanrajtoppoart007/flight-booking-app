import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BottomSheet, Icon} from 'react-native-elements';
import Colors from '../../../layout/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Font from '../../../layout/Font';

function TravellerandClass({
  isBookingSummaryVisible,
  setIsBookingSummaryVisible,
}) {
  return (
    <BottomSheet isVisible={isBookingSummaryVisible}>
      <View style={styles.bottomSheet}>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text style={styles.title}>Booking Summary</Text>
            </View>
            <View>
              <Icon
                onPress={() => setIsBookingSummaryVisible(false)}
                name={'close'}
                type={'antdesign'}
                size={18}
                color={Colors.lightText}
              />
            </View>
          </View>
        </View>
      </View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  bottomSheet: {
    width: wp('100%'),
    height: hp('60%'),
    backgroundColor: Colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
  },
  title: {
    fontSize: 18,
    color: Colors.black,
    fontFamily: Font.AvenirRegular,
  },
  helper: {
    fontSize: 16,
    color: Colors.black,
    fontFamily: Font.AvenirRegular,
  },

  button: {
    height: 45,
    borderRadius: 6,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 12,
    color: Colors.white,
    fontFamily: Font.AvenirRegular,
  },
  selectContainer: {
    borderWidth: 2,
    borderRadius: 8,
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: Colors.white,
    elevation: 5,
  },
  selectText: {
    marginHorizontal: 10,
    marginVertical: 8,
    fontSize: 16,
    color: 'black',
  },
});
const buttonStyle = StyleSheet.create({
  card: {
    width: 110,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 5,
    backgroundColor: Colors.white,
    elevation: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    color: Colors.lightText,
    fontFamily: Font.AvenirLight,
  },
});
export default TravellerandClass;
