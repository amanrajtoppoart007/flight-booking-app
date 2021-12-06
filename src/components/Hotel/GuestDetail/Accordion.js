import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Font from '../../../layout/Font';
import commonStyle from '../../../layout/Style';
import {Icon} from 'react-native-elements';
import Colors from '../../../layout/Colors';
function Accordion({title, subTitle, visible, Content}) {
  const [expanded, setExpanded] = useState(visible);

  return (
    <View style={styles.container(expanded)}>
      <View style={styles.cardHeader}>
        <View>
          <View style={commonStyle.rowSpaceBetween}>
            <View>
              <Text style={styles.title}>{title}</Text>
            </View>
            <View style={commonStyle.marginHorizontal(5)}>
              <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
          </View>
        </View>
        <View style={commonStyle.marginHorizontal(8)}>
          <Icon
            name={expanded ? 'minus' : 'plus'}
            onPress={() => setExpanded(!expanded)}
            type={'font-awesome-5'}
            size={16}
            color={'#26698E'}
          />
        </View>
      </View>
      <View>{expanded && Content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container(extended) {
    return {
      marginHorizontal: extended ? 2 : 0,
      borderWidth: 1,
      borderColor: Colors.border,
      borderTopRightRadius: extended ? 8 : 0,
      borderTopLeftRadius: extended ? 8 : 0,
    };
  },
  cardHeader: {
    width: '100%',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#26698E',
  },
  subTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#26698E',
  },
});
export default Accordion;
