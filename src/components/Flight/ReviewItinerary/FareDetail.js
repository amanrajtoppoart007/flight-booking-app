import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../../layout/Colors';
import {Icon} from 'react-native-elements';
import commonStyle from '../../../layout/Style';
import Font from '../../../layout/Font';

function FairDetail() {
  const [adultOpen, setAdultOpen] = useState(false);
  const [childOpen, setChildOpen] = useState(false);
  const [infantOpen, setInfantOpen] = useState(false);

  return (
    <View style={commonStyle.marginVertical(8)}>
      <View>
        <View
          style={[
            commonStyle.rowSpaceBetween,
            commonStyle.marginHorizontal(10),
          ]}>
          <View style={styles.rowFlexStartBaseline}>
            <View>
              <Text style={styles.headTitle}>Adult 1</Text>
            </View>
            <View style={commonStyle.marginHorizontal(5)}>
              <Icon
                name={adultOpen ? 'up' : 'down'}
                onPress={() => setAdultOpen(!adultOpen)}
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
              <Text style={styles.textBold}>170.00</Text>
            </View>
          </View>
        </View>
        <View style={styles.divider} />
        {adultOpen && (
          <View style={styles.blueBackground}>
            <View style={styles.sectionContentContainer}>
              <View>
                <Text style={styles.title}>Fare</Text>
              </View>
              <View style={commonStyle.rowSpaceBetween}>
                <View style={commonStyle.marginHorizontal(5)}>
                  <Text style={styles.textHelper}>QAR</Text>
                </View>
                <View>
                  <Text style={styles.text}>140.00</Text>
                </View>
              </View>
            </View>
            <View style={styles.sectionContentContainer}>
              <View>
                <Text style={styles.title}>Taxes & Fee</Text>
              </View>
              <View style={commonStyle.rowSpaceBetween}>
                <View style={commonStyle.marginHorizontal(5)}>
                  <Text style={styles.textHelper}>QAR</Text>
                </View>
                <View>
                  <Text style={styles.text}>30.00</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      </View>

      <View>
        <View
          style={[
            commonStyle.rowSpaceBetween,
            commonStyle.marginHorizontal(10),
          ]}>
          <View style={styles.rowFlexStartBaseline}>
            <View>
              <Text style={styles.headTitle}>Child 1</Text>
            </View>
            <View style={commonStyle.marginHorizontal(5)}>
              <Icon
                name={adultOpen ? 'up' : 'down'}
                onPress={() => setChildOpen(!childOpen)}
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
              <Text style={styles.textBold}>170.00</Text>
            </View>
          </View>
        </View>
        <View style={styles.divider} />
        {childOpen && (
          <View style={styles.blueBackground}>
            <View style={styles.sectionContentContainer}>
              <View>
                <Text style={styles.title}>Fare</Text>
              </View>
              <View style={commonStyle.rowSpaceBetween}>
                <View style={commonStyle.marginHorizontal(5)}>
                  <Text style={styles.textHelper}>QAR</Text>
                </View>
                <View>
                  <Text style={styles.text}>140.00</Text>
                </View>
              </View>
            </View>
            <View style={styles.sectionContentContainer}>
              <View>
                <Text style={styles.title}>Taxes & Fee</Text>
              </View>
              <View style={commonStyle.rowSpaceBetween}>
                <View style={commonStyle.marginHorizontal(5)}>
                  <Text style={styles.textHelper}>QAR</Text>
                </View>
                <View>
                  <Text style={styles.text}>30.00</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      </View>

      <View>
        <View
          style={[
            commonStyle.rowSpaceBetween,
            commonStyle.marginHorizontal(10),
          ]}>
          <View style={styles.rowFlexStartBaseline}>
            <View>
              <Text style={styles.headTitle}>Infant 1</Text>
            </View>
            <View style={commonStyle.marginHorizontal(5)}>
              <Icon
                name={adultOpen ? 'up' : 'down'}
                onPress={() => setInfantOpen(!infantOpen)}
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
              <Text style={styles.textBold}>170.00</Text>
            </View>
          </View>
        </View>
        <View style={styles.divider} />
        {infantOpen && (
          <View style={styles.blueBackground}>
            <View style={styles.sectionContentContainer}>
              <View>
                <Text style={styles.title}>Fare</Text>
              </View>
              <View style={commonStyle.rowSpaceBetween}>
                <View style={commonStyle.marginHorizontal(5)}>
                  <Text style={styles.textHelper}>QAR</Text>
                </View>
                <View>
                  <Text style={styles.text}>140.00</Text>
                </View>
              </View>
            </View>
            <View style={styles.sectionContentContainer}>
              <View>
                <Text style={styles.title}>Taxes & Fee</Text>
              </View>
              <View style={commonStyle.rowSpaceBetween}>
                <View style={commonStyle.marginHorizontal(5)}>
                  <Text style={styles.textHelper}>QAR</Text>
                </View>
                <View>
                  <Text style={styles.text}>30.00</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      </View>

      <View style={styles.totalContainer}>
        <View>
          <Text style={styles.textBold}>Grand Total</Text>
          <Text style={styles.title}>Taxes and fees Included</Text>
        </View>
        <Text style={styles.textBold}>
          <Text style={styles.textHelper}>QAR</Text> 300.00
        </Text>
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
    borderWidth: 0.5,
    borderColor: '#D9D9D9',
    marginVertical: 10,
    marginHorizontal: 10,
  },

  item: {
    borderBottomWidth: 1.2,
    borderColor: Colors.primary,
    paddingBottom: 10,
    marginRight: 15,
    marginTop: 10,
  },
  textBold: {
    fontFamily: Font.AvenirBlack,
    fontSize: 18,
    color: 'black',
  },
  blueBackground: {
    backgroundColor: 'rgba(61, 181, 255, 0.05)',
    marginHorizontal: 10,
    borderRadius: 5,
    paddingHorizontal: 5,
    marginBottom: 10,
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
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
});
export default FairDetail;
