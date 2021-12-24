import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Font from '../../layout/Font';
import commonStyle from '../../layout/Style';

import ArrowUpSvg from '../Svg/SideBar/ArrowUp.svg';
import ArrowDownSvg from '../Svg/SideBar/ArrowDown.svg';
function Accordion({title, SvgIcon, visible, Content}) {
  const [expanded, setExpanded] = useState(visible);

  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <View style={commonStyle.rowSpaceBetween}>
          <View>
            <SvgIcon />
          </View>
          <View style={commonStyle.marginHorizontal(8)}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
        <View style={commonStyle.marginHorizontal(8)}>
          <TouchableOpacity onPress={() => setExpanded(!expanded)}>
            {expanded ? <ArrowUpSvg /> : <ArrowDownSvg />}
          </TouchableOpacity>
        </View>
      </View>
      <View>{expanded && Content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  cardHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#0B151F',
  },
});
export default Accordion;
