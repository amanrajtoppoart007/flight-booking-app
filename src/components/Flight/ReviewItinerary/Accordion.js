import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import Font from '../../../layout/Font';
import commonStyle from '../../../layout/Style';
import DepartureSvg from '../../Svg/Departure.svg';

function Accordion({title, itinerary, Content, isCollapsed}) {
  const [expanded, setExpanded] = useState(isCollapsed);

  return (
    <View>
      <View style={styles.card}>
        <View style={commonStyle.rowSpaceBetween}>
          <View style={commonStyle.rowSpaceBetween}>
            <View style={commonStyle.rowCenter}>
              <View>
                <DepartureSvg />
              </View>
              <View style={commonStyle.marginHorizontal(8)}>
                <Text style={styles.title}>{title}</Text>
              </View>
            </View>
            <View>
              <Text style={styles.itinerary}>{itinerary}</Text>
            </View>
          </View>
          <View style={commonStyle.marginHorizontal(15)}>
            <Icon
              onPress={() => setExpanded(!expanded)}
              name={expanded ? 'minus' : 'plus'}
              type={'font-awesome'}
              size={18}
              color={'#26698E'}
            />
          </View>
        </View>
      </View>
      <>{expanded && <View>{Content && Content}</View>}</>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 50,
    backgroundColor: 'rgba(157,196,241,0.16)',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  title: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#F15922',
  },
  itinerary: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#242A37',
  },
});
export default Accordion;
