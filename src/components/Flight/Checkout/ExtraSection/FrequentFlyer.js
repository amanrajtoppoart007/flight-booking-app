import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../../../layout/Colors';
import Font from '../../../../layout/Font';

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
  return <View />;
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

export default FrequentFlyer;
