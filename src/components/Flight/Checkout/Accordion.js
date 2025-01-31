import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Font from '../../../layout/Font';

import VisaCard from '../../Svg/VisaCard.svg';
import MasterCard from '../../Svg/MasterCard.svg';
import commonStyle from '../../../layout/Style';
import Colors from '../../../layout/Colors';
import {Icon} from 'react-native-elements';

function Accordion({title, visible, Content}) {
  const [expanded, setExpanded] = useState(visible);

  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <View style={commonStyle.rowFlexStart}>
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={commonStyle.rowCenter}>
            <View style={commonStyle.marginHorizontal(5)}>
              <MasterCard />
            </View>
            <View style={commonStyle.marginHorizontal(5)}>
              <VisaCard />
            </View>
          </View>
        </View>
        <View style={commonStyle.marginHorizontal(8)}>
          <Icon
            name={expanded ? 'up' : 'down'}
            onPress={() => setExpanded(!expanded)}
            type={'antdesign'}
            size={16}
            color={Colors.primary}
          />
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
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(157,196,241,0.5)',
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#26698E',
  },
});
export default Accordion;
