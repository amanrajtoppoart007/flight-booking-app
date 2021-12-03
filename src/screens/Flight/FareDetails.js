import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../layout/Colors';
import {Icon} from 'react-native-elements';
import commonStyle from '../../layout/Style';
import Font from '../../layout/Font';

export default function FairDetails() {
  const [AdultOpen, setAdultOpen] = useState(false);
  const [ChildOpen, setChildOpen] = useState(false);
  const [InfantOpen, setInfantOpen] = useState(false);

  return (
    <View style={commonStyle.flex(1)}>
      <View>
        <View
          style={[
            commonStyle.rowSpaceBetween,
            commonStyle.marginHorizontal(10),
          ]}>
          <View style={styles.rowFlexStartBaseline}>
            <Text style={styles.header}>Adult 1</Text>
            <Icon
              name={AdultOpen ? 'up' : 'down'}
              onPress={() => setAdultOpen(!AdultOpen)}
              type={'antdesign'}
              size={16}
              color={Colors.primary}
            />
          </View>
          <Text style={styles.textBold}>
            <Text style={styles.qarText}>QAR</Text> 170.00
          </Text>
        </View>
        <View style={styles.divider} />
        {AdultOpen && (
          <View style={styles.blueBackground}>
            <View style={styles.sectionContentContainer}>
              <Text style={styles.subHeading}>Fare</Text>
              <Text style={styles.MoneyText}>
                <Text style={styles.qarText}>QAR</Text> 140.00
              </Text>
            </View>
            <View style={styles.sectionContentContainer}>
              <Text style={styles.subHeading}>Taxes & Fee</Text>
              <Text style={styles.MoneyText}>
                <Text style={styles.qarText}>QAR</Text> 30.00
              </Text>
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
            <Text style={styles.header}>Child 1</Text>
            <Icon
              name={ChildOpen ? 'up' : 'down'}
              onPress={() => setChildOpen(!ChildOpen)}
              type={'antdesign'}
              size={16}
              color={Colors.primary}
            />
          </View>
          <Text style={styles.textBold}>
            <Text style={styles.qarText}>QAR</Text> 80.00
          </Text>
        </View>
        <View style={styles.divider} />
        {ChildOpen && (
          <View style={styles.blueBackground}>
            <View style={styles.sectionContentContainer}>
              <Text style={styles.subHeading}>Fare</Text>
              <Text style={styles.MoneyText}>
                <Text style={styles.qarText}>QAR</Text> 60.00
              </Text>
            </View>
            <View style={styles.sectionContentContainer}>
              <Text style={styles.subHeading}>Taxes & Fee</Text>
              <Text style={styles.MoneyText}>
                <Text style={styles.qarText}>QAR</Text> 20.00
              </Text>
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
            <Text style={styles.header}>Infant 1</Text>
            <Icon
              name={InfantOpen ? 'up' : 'down'}
              onPress={() => setInfantOpen(!InfantOpen)}
              type={'antdesign'}
              size={16}
              color={Colors.primary}
            />
          </View>
          <Text style={styles.textBold}>
            <Text style={styles.qarText}>QAR</Text> 50.00
          </Text>
        </View>
        <View style={styles.divider} />
        {InfantOpen && (
          <View style={styles.blueBackground}>
            <View style={styles.sectionContentContainer}>
              <Text style={styles.subHeading}>Fare</Text>
              <Text style={styles.MoneyText}>
                <Text style={styles.qarText}>QAR</Text> 40.00
              </Text>
            </View>
            <View style={styles.sectionContentContainer}>
              <Text style={styles.subHeading}>Taxes & Fee</Text>
              <Text style={styles.MoneyText}>
                <Text style={styles.qarText}>QAR</Text> 10.00
              </Text>
            </View>
          </View>
        )}
      </View>
      <View style={styles.totalContainer}>
        <View>
          <Text style={styles.subHeading}>Grand Total</Text>
          <Text style={[styles.text, {color: Colors.lightText}]}>
            Taxes and fees Included
          </Text>
        </View>
        <Text style={styles.BlackText}>
          <Text style={styles.qarText}>QAR</Text> 300.00
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
  margin: {
    padding: 15,
  },
  input: {
    color: 'black',
    marginHorizontal: 5,
    flex: 1,
  },
  BlackText: {
    fontFamily: Font.AvenirBlack,
    color: '#0B151F',
    fontSize: 14,
  },

  subHeading: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: 'black',
  },
  Total: {
    fontSize: 14,
    fontFamily: Font.AvenirHeavy,
  },
  header: {
    fontSize: 14,
    color: Colors.primary,
    fontFamily: Font.AvenirMedium,
    marginRight: 5,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: '#D9D9D9',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  qarText: {
    fontSize: 14,
    fontFamily: Font.AvenirMedium,
    color: Colors.lightText,
  },
  item: {
    borderBottomWidth: 1.2,
    borderColor: Colors.primary,
    paddingBottom: 10,
    marginRight: 15,
    marginTop: 10,
  },
  MoneyText: {
    fontSize: 14,
    fontFamily: Font.AvenirMedium,
    color: '#0B151F',
  },

  textBold: {
    color: 'black',
    fontSize: 14,
    fontFamily: Font.AvenirBlack,
  },
  text: {
    fontSize: 12,
    color: 'black',
    fontFamily: Font.AvenirMedium,
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
    alignItems: 'flex-end',
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
