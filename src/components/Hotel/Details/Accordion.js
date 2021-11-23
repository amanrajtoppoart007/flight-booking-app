import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Font from '../../../layout/Font';
import {Icon} from 'react-native-elements';
import commonStyle from '../../../layout/Style';

function Accordion({isVisible, title, Content}) {
  const [isAccordionVisible, setIsAccordionVisible] = useState(isVisible);
  return (
    <View>
      <View style={commonStyle.rowSpaceBetween}>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={commonStyle.marginHorizontal(15)}>
          <Icon
            onPress={() => setIsAccordionVisible(!isAccordionVisible)}
            name={isAccordionVisible ? 'minus' : 'plus'}
            type={'font-awesome'}
            size={18}
            color={'#26698E'}
          />
        </View>
      </View>
      {isAccordionVisible && <View>{Content && Content}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: '#242A37',
  },
});

export default Accordion;
