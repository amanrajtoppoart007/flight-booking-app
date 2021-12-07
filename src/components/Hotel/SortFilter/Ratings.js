import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import commonStyle from '../../../layout/Style';
import RatingButton from './RatingButton';
import Colors from '../../../layout/Colors';
import Font from '../../../layout/Font';

function Ratings() {
  const [Selected, setSelected] = useState();
  return (
    <View>
      <Text style={styles.title}>Ratings</Text>
      <View
        style={[
          commonStyle.rowSpaceBetween,
          commonStyle.marginVertical(15),
          commonStyle.marginHorizontal(13),
        ]}>
        <RatingButton
          selected={Selected === '5'}
          onPress={() => setSelected('5')}
          num="5"
        />
        <RatingButton
          selected={Selected === '4'}
          onPress={() => setSelected('4')}
          num="4"
        />
        <RatingButton
          selected={Selected === '3'}
          onPress={() => setSelected('3')}
          num="3"
        />
        <RatingButton
          selected={Selected === '2'}
          onPress={() => setSelected('2')}
          num="2"
        />
        <RatingButton
          selected={Selected === '1'}
          onPress={() => setSelected('1')}
          num="1"
        />
      </View>
      <View style={styles.divider} />
    </View>
  );
}

export default Ratings;

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: Font.AvenirMedium,
    marginLeft: 15,
  },
});
