import {ScrollView, StyleSheet, Text, View} from 'react-native';
import commonStyle from '../../../layout/Style';
import SearchBar from './SearchBar';
import GraphSlider from './GraphSlider';
import Ratings from './Ratings';
import ListCheckBox from './CheckBox';
import React from 'react';
import Font from '../../../layout/Font';
import Colors from '../../../layout/Colors';

import FilterButton from './FilterButton';
import {strings} from '../../../Localization/LocalizedConstants';
import {useRtlContext} from 'react-native-easy-localization-and-rtl';

function Filter() {
  useRtlContext();

  return (
    <ScrollView>
      <View style={commonStyle.marginVertical(5)}>
        <Text style={styles.title}>{strings.hotelName}</Text>
        <SearchBar text={strings.searchHotel} />
      </View>
      <View style={styles.divider} />
      <View style={commonStyle.marginVertical(5)}>
        <Text style={styles.title}>{strings.boardBasis}</Text>
        <View
          style={[
            commonStyle.rowSpaceAround,
            commonStyle.marginHorizontal(10),
          ]}>
          <FilterButton onPress={() => {}} title={strings.roomOnly} />
          <FilterButton onPress={() => {}} title={strings.breakfast} />
        </View>
        <View
          style={[
            commonStyle.rowSpaceAround,
            commonStyle.marginHorizontal(10),
          ]}>
          <FilterButton onPress={() => {}} title={strings.halfBoard} />
          <FilterButton onPress={() => {}} title={strings.fullBoard} />
        </View>
      </View>
      <View style={styles.divider} />
      <GraphSlider />
      <Ratings />
      <View style={commonStyle.marginVertical(5)}>
        <Text style={styles.title}>{strings.area}</Text>
        <SearchBar text={strings.searchArea} />
        <View style={commonStyle.marginVertical(5)} />
        <View
          style={[
            commonStyle.marginVertical(5),
            commonStyle.marginHorizontal(5),
          ]}>
          <ListCheckBox text="Al Barsha" />
          <ListCheckBox text="Al Bustan Center" />
          <ListCheckBox text="Al Bustan Center" />
          <ListCheckBox text="Al Mamzar Beach Park" />
          <ListCheckBox text="Al Qusais" />
        </View>
      </View>
      <View style={styles.divider} />

      <View style={commonStyle.marginVertical(5)}>
        <Text style={styles.title}>{strings.landmarks}</Text>
        <SearchBar text={strings.searchLandmarks} />
        <View style={commonStyle.marginVertical(5)} />

        <View
          style={[
            commonStyle.marginVertical(5),
            commonStyle.marginHorizontal(5),
          ]}>
          <ListCheckBox text="Al Barsha" />
          <ListCheckBox text="Al Bustan Center" />
          <ListCheckBox text="Al Bustan Center" />
          <ListCheckBox text="Al Mamzar Beach Park" />
          <ListCheckBox text="Al Qusais" />
        </View>
      </View>
      <View style={commonStyle.marginVertical(30)} />
    </ScrollView>
  );
}
export default Filter;

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#D9D9D9',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: Font.AvenirMedium,
    marginHorizontal: 15,
  },
});
