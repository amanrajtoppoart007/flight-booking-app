import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View, ScrollView} from 'react-native';
import Colors from '../../layout/Colors';
import {Icon} from 'react-native-elements';
import Font from '../../layout/Font';
import commonStyle from '../../layout/Style';

function ExpandableSection({children, name}) {
  const [open, setOpen] = useState(false);
  return (
    <View>
      <View style={styles.expandableSections}>
        <Text style={styles.expandableSectionsText}>{name}</Text>
        <Icon
          name={open ? 'up' : 'down'}
          onPress={() => setOpen(!open)}
          type={'antdesign'}
          size={22}
          color={Colors.primary}
        />
      </View>
      <View style={styles.divider} />
      {open && <View style={commonStyle.marginHorizontal(10)}>{children}</View>}
    </View>
  );
}

export default function FareRules() {
  const [tabBar, setTabBar] = useState('DOH-DXB');
  const d = [
    'Penalties',
    'Minimum Stay',
    'Maximum Stay',
    'Seasonality',
    'Blackout Date',
  ];
  return (
    <ScrollView>
      <View style={[commonStyle.flex(1)]}>
        <Text style={[styles.textBold, commonStyle.marginHorizontal(15)]}>
          Flight Long Fare Rules
        </Text>
        <View style={styles.warningBackground}>
          <Text style={[styles.redText, commonStyle.marginBottom(8)]}>
            Tickets are non-refundable
          </Text>
          <Text style={[styles.text]}>
            We Kindly remind that you may need visa for the following countries:
            United Arab Emirates.+
            {'\n\n'}
            Additional baggage fee may apply,{' '}
            <Text style={{color: Colors.primary}}>click here</Text> for more
            information.
          </Text>
        </View>
        <View style={styles.termsContainer}>
          <Text style={[styles.textBold, {color: Colors.primary}]}>
            Terms & Policies
          </Text>
          <Icon
            name={'minus'}
            type={'antdesign'}
            size={22}
            color={Colors.primary}
          />
        </View>
        <View style={styles.itemContainer}>
          <Pressable
            onPress={() => setTabBar('DOH-DXB')}
            style={styles.item(tabBar, 'DOH-DXB')}>
            <Text style={styles.itemText(tabBar === 'DOH-DXB')}>DOH-DXB</Text>
          </Pressable>
          <Pressable
            onPress={() => setTabBar('DXB-DOH')}
            style={styles.item(tabBar, 'DXB-DOH')}>
            <Text style={styles.itemText(tabBar === 'DXB-DOH')}>DXB-DOH</Text>
          </Pressable>
        </View>
        {d.map(item => (
          <ExpandableSection key={item} name={item}>
            <Text style={[styles.text]}>
              PE.PENALTIES
              {'\n\n\t\t\t'}
              CANCELLATIONS
              {'\n\n\t\t\t\t'}
              CHARGE QAR 800 FOR NO-SHOW.
              {'\n\n\t\t\t\t\t'}
              NOTE
              {'\n\t\t\t\t\t'}
              IN CASE OF NO-SHOW ONLY ONE FEE IS TO BE
              {'\n\n'}C{'\n\n\t\t\t\t\t'}
              LE EITHER THE NO-SHOW FEE OR THE
              {'\n\n'}
              REFUND F{'\n\n\t\t\t\t\t\t\t'}
              WHICHEVER IS HIGHER
              {'\n\n\t\t\t\t\t'}
              BEFORE DEPARTURE
              {'\n\n\t\t\t\t\t\t'}
              CHARGE OAR 400 FOR REFUND.
              {'\n\n\n\t\t\t\t\t\t'}
              CHILD/INFANT DISCOUNTS APPLY.
            </Text>
          </ExpandableSection>
        ))}
      </View>
    </ScrollView>
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
  itemText(isActive) {
    return {
      fontSize: 12,
      color: isActive ? Colors.primary : 'black',
      fontFamily: Font.AvenirMedium,
    };
  },
  redText: {
    fontSize: 12,
    fontFamily: Font.AvenirMedium,
    color: '#F15922',
  },
  divider: {
    borderWidth: 0.5,
    borderColor: '#D9D9D9',
    marginVertical: 13,
    marginHorizontal: 15,
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: '#D9D9D9',
  },
  item(value, name) {
    return {
      borderBottomWidth: value === name ? 1.2 : 0,
      borderColor: Colors.primary,
      paddingBottom: 10,
      marginRight: 15,
      marginTop: 10,
    };
  },
  textBold: {
    color: 'black',
    fontSize: 14,
    fontFamily: Font.AvenirHeavy,
  },
  text: {
    fontSize: 12,
    color: 'black',
    fontFamily: Font.AvenirMedium,
  },

  expandableSections: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 10,
  },
  expandableSectionsText: {
    fontSize: 14,
    color: Colors.primary,
    marginRight: 5,
    fontFamily: Font.AvenirHeavy,
  },
  warningBackground: {
    backgroundColor: 'rgba(150,150,150,0.1)',
    marginHorizontal: 16,
    borderRadius: 5,
    marginVertical: 10,
    padding: 12,
  },
  termsContainer: {
    backgroundColor: 'rgba(61, 181, 255, 0.15)',
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
