import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import commonStyle from '../../../layout/Style';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Font from '../../../layout/Font';
import Colors from '../../../layout/Colors';
import FareCard from './FareCard';
import {Icon} from 'react-native-elements';

function PriceSectionContent({title, subTitle, visible = false}) {
  const [expanded, setExpanded] = useState(visible);
  return (
    <View style={styles.priceSectionContent}>
      <View>
        <Text style={styles.priceSectionTitle}>{title}</Text>
      </View>
      <View style={commonStyle.rowSpaceBetween}>
        <View
          style={[commonStyle.rowSpaceBetween, commonStyle.marginVertical(4)]}>
          <View>
            <Text style={styles.priceSectionContentTitle}>{subTitle}</Text>
          </View>
          <View style={commonStyle.marginHorizontal(5)}>
            <Icon
              name={expanded ? 'up' : 'down'}
              onPress={() => setExpanded(!expanded)}
              type={'ant-design'}
              size={16}
              color={'#898989'}
            />
          </View>
        </View>
        <View style={commonStyle.rowSpaceBetween}>
          <View style={commonStyle.marginHorizontal(5)}>
            <Text style={styles.priceSectionContentText('#6C6C6C', 'currency')}>
              QAR
            </Text>
          </View>

          <View>
            <Text style={styles.priceSectionContentText('#0B151F', 'price')}>
              3395.00
            </Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.divider} />
      </View>
      <View>{expanded && <FareCard />}</View>
    </View>
  );
}
const styles = StyleSheet.create({
  divider: {
    width: '100%',
    borderWidth: 0.3,
    borderColor: Colors.lightText,
    alignSelf: 'center',
    marginVertical: 18,
  },
  priceSectionContent: {
    paddingVertical: 7,
  },
  priceSectionTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#26698E',
  },
  priceSectionContentTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#26698E',
  },
  priceSectionContentText(color, type) {
    return {
      fontFamily: type === 'currency' ? Font.AvenirMedium : Font.AvenirBlack,
      fontSize: 14,
      color,
    };
  },
});
export default PriceSectionContent;
