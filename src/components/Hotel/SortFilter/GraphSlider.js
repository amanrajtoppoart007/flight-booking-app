import React, {useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import Colors from '../../../layout/Colors';
import RangeSlider from 'rn-range-slider';
import commonStyle from '../../../layout/Style';
import Font from '../../../layout/Font';

function GraphSlider() {
  const renderThumb = useCallback(
    () => (
      <View elevation={5} style={styles.SliderIconContainer}>
        <Icon
          name={'circle'}
          type={'entypo'}
          size={16}
          color={Colors.primary}
        />
      </View>
    ),
    [],
  );
  const renderRail = useCallback(() => <View style={styles.Rail} />, []);
  const renderRailSelected = useCallback(
    () => <View style={styles.RailSelected} />,
    [],
  );
  return (
    <View>
      <View style={commonStyle.marginHorizontal(15)}>
        <Text style={styles.listTitle()}>Price</Text>
      </View>
      <RangeSlider
        style={[commonStyle.margin(10), commonStyle.marginTop(40)]}
        min={0}
        max={100}
        step={1}
        floatingLabel
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
      />
      <View
        style={[commonStyle.rowSpaceBetween, commonStyle.marginHorizontal(5)]}>
        <Text style={styles.Money}>
          <Text style={styles.qarText}> QAR </Text>100.00
        </Text>
        <Text style={styles.Money}>
          <Text style={styles.qarText}> QAR </Text>1500.00
        </Text>
      </View>
      <View style={styles.divider} />
    </View>
  );
}
export default GraphSlider;

const styles = StyleSheet.create({
  SliderIconContainer: {
    margin: 3,
    padding: 2,
    borderRadius: 22,
    backgroundColor: Colors.white,
  },
  Rail: {flex: 1, height: 6, backgroundColor: '#E4E9F7'},
  RailSelected: {flex: 1, height: 6, backgroundColor: Colors.primary},
  listTitle(isSelected = false) {
    return {
      fontSize: 14,
      color: isSelected ? Colors.primary : Colors.black,
      fontFamily: Font.AvenirMedium,
    };
  },
  Money: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: Colors.black,
  },
  qarText: {
    fontSize: 14,
    color: Colors.lightText,
    fontFamily: Font.AvenirBook,
  },
  divider: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#D9D9D9',
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
