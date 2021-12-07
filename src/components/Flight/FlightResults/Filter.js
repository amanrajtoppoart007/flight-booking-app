import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import commonStyle from '../../../layout/Style';
import FilterButton from './FilterButton';
import GraphSlider from '../../Hotel/SortFilter/GraphSlider';
import FlightTabView from './FilterTabs';
import Colors from '../../../layout/Colors';
import Font from '../../../layout/Font';

function Stops() {
  const [Selected, setSelected] = useState();
  return (
    <View>
      <View style={[commonStyle.marginHorizontal(15)]}>
        <Text style={styles.title}>Stops</Text>
      </View>
      <View
        style={[
          commonStyle.rowSpaceBetween,
          commonStyle.marginVertical(10),
          commonStyle.marginHorizontal(15),
        ]}>
        <FilterButton
          selected={Selected === 'Non-stop'}
          onPress={() => setSelected('Non-stop')}
          text="Non-stop"
        />
        <FilterButton
          selected={Selected === '1 stop'}
          onPress={() => setSelected('1 stop')}
          text="1 stop"
        />
        <FilterButton
          selected={Selected === '2+ stop'}
          onPress={() => setSelected('2+ stop')}
          text="2+ stop"
        />
      </View>
      <View style={styles.divider} />
    </View>
  );
}

function Filter() {
  return (
    <ScrollView>
      <View style={commonStyle.marginVertical(15)} />
      <GraphSlider />
      <Stops />
      <FlightTabView />
    </ScrollView>
  );
}
export default Filter;

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#D9D9D9',
    marginVertical: 19,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: Font.AvenirMedium,
  },
});
