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

function Filter() {
  return (
    <ScrollView>
      <View style={commonStyle.marginVertical(5)}>
        <Text style={styles.title}>Hotel Name</Text>
        <SearchBar text="Search by Hotel" />
      </View>
      <View style={styles.divider} />
      <View style={commonStyle.marginVertical(5)}>
        <Text style={styles.title}>Board Basis</Text>
        <View
          style={[
            commonStyle.rowSpaceAround,
            commonStyle.marginHorizontal(10),
          ]}>
          <FilterButton onPress={() => {}} title="Room Only" />
          <FilterButton onPress={() => {}} title="Breakfast" />
        </View>
        <View
          style={[
            commonStyle.rowSpaceAround,
            commonStyle.marginHorizontal(10),
          ]}>
          <FilterButton onPress={() => {}} title="HalfBoard" />
          <FilterButton onPress={() => {}} title="FullBoard" />
        </View>
      </View>
      <View style={styles.divider} />
      <GraphSlider />
      <Ratings />
      <View style={commonStyle.marginVertical(5)}>
        <Text style={styles.title}>Area</Text>
        <SearchBar text="Search by Area" />
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
        <Text style={styles.title}>Landmarks</Text>
        <SearchBar text="Search by Landmarks" />
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
