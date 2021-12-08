import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import commonStyle from '../../../../layout/Style';
import DeerSvg from '../../../Svg/Deer.svg';
import {Icon} from 'react-native-elements';

function FlyerCard({item, index, removeRow}) {
  return (
    <View style={styles.flyerRow}>
      <View style={styles.firstColumn}>
        <View>
          <DeerSvg />
        </View>
        <View style={commonStyle.marginHorizontal(7)}>
          <Text>QR</Text>
        </View>
      </View>
      <View style={styles.secondColumn}>
        <Text>{item?.number}</Text>
      </View>
      <View style={styles.lastColumn}>
        <Icon
          onPress={() => removeRow(index)}
          name={'trash-2'}
          type={'feather'}
          color={'#FF1D1D'}
          size={14}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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

export default FlyerCard;
