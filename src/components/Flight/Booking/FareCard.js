import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../../layout/Colors';
import {Icon} from 'react-native-elements';
import commonStyle from '../../../layout/Style';
import Font from '../../../layout/Font';

function FareCard({item}) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={commonStyle.marginVertical(8)}>
      <View>
        <View style={commonStyle.rowSpaceBetween}>
          <View style={styles.rowFlexStartBaseline}>
            <View>
              <Text style={styles.headTitle}>
                {item?.section} {item?.count}
              </Text>
            </View>
            <View style={commonStyle.marginHorizontal(5)}>
              <Icon
                name={isVisible ? 'up' : 'down'}
                onPress={() => setIsVisible(!isVisible)}
                type={'antdesign'}
                size={16}
                color={Colors.primary}
              />
            </View>
          </View>
          <View style={commonStyle.rowSpaceBetween}>
            <View style={commonStyle.marginHorizontal(5)}>
              <Text style={styles.textHelper}>QAR</Text>
            </View>
            <View>
              <Text style={styles.price}>170.00</Text>
            </View>
          </View>
        </View>
        <View style={styles.divider} />
        {isVisible && (
          <View style={styles.priceSection}>
            {item?.fare &&
              item?.fare?.map((fare, fareIndex) => {
                return (
                  <View key={fareIndex} style={styles.sectionContentContainer}>
                    <View>
                      <Text style={styles.title}>{fare.title}</Text>
                    </View>
                    <View style={commonStyle.rowSpaceBetween}>
                      <View style={commonStyle.marginHorizontal(5)}>
                        <Text style={styles.textHelper}>QAR</Text>
                      </View>
                      <View>
                        <Text style={styles.text}>{fare.value.toFixed(2)}</Text>
                      </View>
                    </View>
                  </View>
                );
              })}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  headTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#26698E',
  },
  title: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#0B151F',
  },
  textHelper: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#94979D',
  },
  text: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#0B151F',
  },
  divider: {
    width: '100%',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#D9D9D9',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  price: {
    fontFamily: Font.AvenirBlack,
    fontSize: 14,
    color: 'black',
  },
  priceSection: {
    backgroundColor: '#F5F7FB',
    padding: 8,
    borderRadius: 4,
  },
  rowFlexStartBaseline: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
  },

  sectionContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
});
export default FareCard;
