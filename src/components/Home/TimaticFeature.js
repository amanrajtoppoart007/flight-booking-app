import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import commonStyle from '../../layout/Style';
import {Icon} from 'react-native-elements';
import Font from '../../layout/Font';

function TimaticFeature({title}) {
  return (
    <View style={commonStyle.rowFlexStart}>
      <View>
        <Icon
          name={'check'}
          type={'font-awesome'}
          size={12}
          color={'#2525FF'}
        />
      </View>
      <View style={commonStyle.marginHorizontal(5)}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#242A37',
  },
});

export default TimaticFeature;
