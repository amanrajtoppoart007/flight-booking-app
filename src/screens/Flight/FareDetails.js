import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../layout/Colors';
import {Icon} from 'react-native-elements';
import commonStyle from '../../layout/Style';
import Font from '../../layout/Font';

export default function FairDetails() {
  const [adultopen, setAdultopen] = useState(false);
  const [childopen, setChildopen] = useState(false);
  const [infantopen, setInfantopen] = useState(false);

  return (
    <View style={{flex: 1}}>
      <View>
        <View
          style={[
            commonStyle.rowSpaceBetween,
            commonStyle.marginHorizontal(10),
          ]}>
          <View style={styles.rowFlexStartBaseline}>
            <Text
              style={[
                styles.textbold,
                {
                  color: Colors.primary,
                  marginRight: 5,
                },
              ]}>
              Adult 1
            </Text>
            <Icon
              name={adultopen ? 'up' : 'down'}
              onPress={() => setAdultopen(!adultopen)}
              type={'antdesign'}
              size={16}
              color={Colors.primary}
            />
          </View>
          <Text style={styles.textbold}>
            <Text style={styles.qarText}>QAR</Text> 170.00
          </Text>
        </View>
        <View style={styles.divider} />
        {adultopen && (
          <View style={styles.blueBackground}>
            <View style={styles.sectionContentContainer}>
              <Text style={[styles.textbold, {fontSize: 16}]}>Fare</Text>
              <Text style={[styles.textbold, {fontSize: 16}]}>
                <Text style={styles.qarText}>QAR</Text> 140.00
              </Text>
            </View>
            <View style={styles.sectionContentContainer}>
              <Text style={[styles.textbold, {fontSize: 16}]}>Taxes & Fee</Text>
              <Text style={[styles.textbold, {fontSize: 16}]}>
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
            <Text
              style={[
                styles.textbold,
                {
                  color: Colors.primary,
                  marginRight: 5,
                },
              ]}>
              Child 1
            </Text>
            <Icon
              name={childopen ? 'up' : 'down'}
              onPress={() => setChildopen(!childopen)}
              type={'antdesign'}
              size={16}
              color={Colors.primary}
            />
          </View>
          <Text style={styles.textbold}>
            <Text style={styles.qarText}>QAR</Text> 80.00
          </Text>
        </View>
        <View style={styles.divider} />
        {childopen && (
          <View style={styles.blueBackground}>
            <View style={styles.sectionContentContainer}>
              <Text style={[styles.textbold, {fontSize: 16}]}>Fare</Text>
              <Text style={[styles.textbold, {fontSize: 16}]}>
                <Text style={styles.qarText}>QAR</Text> 60.00
              </Text>
            </View>
            <View style={styles.sectionContentContainer}>
              <Text style={[styles.textbold, {fontSize: 16}]}>Taxes & Fee</Text>
              <Text style={[styles.textbold, {fontSize: 16}]}>
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
            <Text
              style={[
                styles.textbold,
                {
                  color: Colors.primary,
                  marginRight: 5,
                },
              ]}>
              Infant 1
            </Text>
            <Icon
              name={infantopen ? 'up' : 'down'}
              onPress={() => setInfantopen(!infantopen)}
              type={'antdesign'}
              size={16}
              color={Colors.primary}
            />
          </View>
          <Text style={styles.textbold}>
            <Text style={styles.qarText}>QAR</Text> 50.00
          </Text>
        </View>
        <View style={styles.divider} />
        {infantopen && (
          <View style={styles.blueBackground}>
            <View style={styles.sectionContentContainer}>
              <Text style={[styles.textbold, {fontSize: 16}]}>Fare</Text>
              <Text style={[styles.textbold, {fontSize: 16}]}>
                <Text style={styles.qarText}>QAR</Text> 40.00
              </Text>
            </View>
            <View style={styles.sectionContentContainer}>
              <Text style={[styles.textbold, {fontSize: 16}]}>Taxes & Fee</Text>
              <Text style={[styles.textbold, {fontSize: 16}]}>
                <Text style={styles.qarText}>QAR</Text> 10.00
              </Text>
            </View>
          </View>
        )}
      </View>
      <View style={styles.totalContainer}>
        <View>
          <Text style={[styles.textbold]}>Grand Total</Text>
          <Text style={[styles.text, {color: Colors.lightText}]}>
            Taxes and fees Inculuded
          </Text>
        </View>
        <Text style={styles.textbold}>
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
  marginh: {
    marginLeft: 10,
  },
  margin: {
    padding: 15,
  },
  input: {
    color: 'black',
    marginHorizontal: 5,
    flex: 1,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: '#D9D9D9',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  headertext: {
    color: 'black',
    fontSize: 20,
    fontFamily: Font.AvenirHeavy,
    margin: 10,
  },
  qarText: {
    fontSize: 14,
    fontFamily: Font.AvenirLight,
    color: Colors.lightText,
  },
  itemcontainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#D9D9D9',
  },
  item: {
    borderBottomWidth: 1.2,
    borderColor: Colors.primary,
    paddingBottom: 10,
    marginRight: 15,
    marginTop: 10,
  },
  textbold: {
    color: 'black',
    fontSize: 18,
    fontFamily: Font.AvenirRegular,
  },
  text: {
    fontSize: 13,
    color: 'black',
    fontFamily: Font.AvenirRegular,
  },
  itemtext: {
    color: 'gray',
    fontSize: 14,
    fontFamily: Font.AvenirHeavy,
  },
  DetailsHearder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    alignItems: 'center',
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
