import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Colors from '../../layout/Colors';
import commonStyle from '../../layout/Style';
import PathSvg from '../Svg/Path.svg';
import Font from '../../layout/Font';

function RouteItem({item}) {
  return (
    <View style={styles.card}>
      <View style={commonStyle.rowFlexStart}>
        <View>
          <PathSvg />
        </View>
        <View style={commonStyle.marginHorizontal(10)}>
          <Text style={styles.text}>{item?.from}</Text>
          <Text style={styles.text}>{item?.to}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: wp('45%'),
    height: 80,
    backgroundColor: Colors.white,
    borderRadius: 5,
    margin: 5,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#242A37',
  },
});

export default RouteItem;
