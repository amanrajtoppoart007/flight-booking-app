import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ListItem} from 'react-native-elements';
import Font from '../../../layout/Font';
import Colors from '../../../layout/Colors';
import commonStyle from '../../../layout/Style';
import DepartureSvg from '../../Svg/Departure.svg';

function Accordion({title, itinerary, Content, isCollapsed}) {
  const [expanded, setExpanded] = useState(isCollapsed);

  return (
    <View>
      <ListItem.Accordion
        containerStyle={styles.container}
        icon={{
          name: 'plus',
          type: 'font-awesome',
          size: 20,
          color: Colors.secondary,
        }}
        expandIcon={{
          name: 'minus',
          type: 'font-awesome',
          size: 20,
          color: Colors.secondary,
        }}
        content={
          <>
            <ListItem.Content>
              <View>
                <View
                  style={[
                    commonStyle.marginVertical(5),
                    commonStyle.rowFlexStart,
                  ]}>
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
              </View>
            </ListItem.Content>
          </>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}>
        {expanded && Content}
      </ListItem.Accordion>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(157,196,241,0.16)',
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
