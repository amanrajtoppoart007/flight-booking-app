import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Font from '../../../layout/Font';
import commonStyle from '../../../layout/Style';
import {Icon} from 'react-native-elements';
import Colors from '../../../layout/Colors';
function Accordion({title, visible, Content}) {
  const [expanded, setExpanded] = useState(visible);

  return (
    <View style={styles.container(expanded)}>
      <View style={styles.cardHeader}>
        <View>
          <Text style={styles.title}>{title}</Text>
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
  container(E) {
    return {
      marginHorizontal: E ? 2 : 0,
      borderWidth: E ? 1 : 0,
      borderBottomWidth: 1,
      borderTopWidth: 1,
      borderColor: Colors.border,
      borderTopRightRadius: E ? 8 : 0,
      borderTopLeftRadius: E ? 8 : 0,
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
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#26698E',
  },
});
export default Accordion;
