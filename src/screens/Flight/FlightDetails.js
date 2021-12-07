import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../layout/Colors';
import {Icon} from 'react-native-elements';
import commonStyle from '../../layout/Style';
import Font from '../../layout/Font';
import Deer from '../../components/Svg/Deer.svg';
import Bag from '../../components/Svg/Bag.svg';

function FlightDetails() {
  return (
    <View style={commonStyle.flex(1)}>
      <View style={styles.DetailHeader}>
        <View>
          <View style={[commonStyle.rowCenter, commonStyle.marginVertical(5)]}>
            <Text style={styles.titleText}>Doha (DOH) → Dubai (DXB)</Text>
          </View>
          <Text style={styles.Roman(12)}>Wed, 15 Sep</Text>
        </View>
        <View style={styles.flexEnd}>
          <Text style={styles.Roman(12)}>Total Duration</Text>
          <Text style={styles.text}>5h 30m</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View>
        <View style={commonStyle.rowSpaceBetween}>
          <View style={styles.contentContainer}>
            <Deer width={25} />
            <View>
              <Text style={styles.header}>
                Qatar Airways
                <Text style={styles.LightRoman}> | QR - 3801</Text>
              </Text>
              <Text style={styles.subHeader}>Operated by FlyDubai</Text>
              <Text style={styles.text}>
                Economy |<Text style={styles.greenText}> Refundable</Text>
              </Text>
            </View>
          </View>
          <View style={styles.rowHLeft}>
            <Bag style={commonStyle.margin(6)} />
            <View style={commonStyle.marginHorizontal(5)}>
              <Text style={styles.HeavyText}>Check in</Text>
              <Text style={styles.text}>1 piece</Text>
            </View>
            <View style={commonStyle.marginHorizontal(5)}>
              <Text style={styles.HeavyText}>Cabin</Text>
              <Text style={styles.text}>7 Kg</Text>
            </View>
          </View>
        </View>

        <View
          style={[
            commonStyle.rowSpaceBetween,
            commonStyle.marginHorizontal(15),
          ]}>
          <View style={commonStyle.marginVertical(10)}>
            <Text style={styles.timeText}>07:55</Text>
            <Text style={[styles.blueText, commonStyle.marginVertical(3)]}>
              Doha (DOH)
            </Text>
            <Text style={styles.Roman(12)}>Hamad Int Airport</Text>
            <Text style={[styles.blueText, commonStyle.marginVertical(3)]}>
              Terminal: 1
            </Text>
          </View>
          <View style={styles.center}>
            <Icon
              name={'aircraft-take-off'}
              type={'entypo'}
              size={30}
              style={styles.icon}
              color={Colors.lightText}
            />
            <Text style={styles.text}>2h 30m</Text>
          </View>

          <View style={styles.flexEndColumn}>
            <Text style={styles.timeText}>08:20</Text>
            <Text style={[styles.blueText, commonStyle.marginVertical(3)]}>
              Amman (AMM)
            </Text>
            <Text style={styles.text}>Queen Alia Int Airport</Text>
            <Text style={[styles.blueText, commonStyle.marginVertical(3)]}>
              Terminal: 1
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.layoverContainer}>
        <Text style={[styles.redText, commonStyle.marginVertical(10)]}>
          Layover: 7h 5m Queen Alia International Airport
        </Text>
      </View>
      <View>
        <View style={commonStyle.rowSpaceBetween}>
          <View style={styles.contentContainer}>
            <Deer width={25} />
            <View>
              <Text style={styles.header}>
                Qatar Airways
                <Text style={styles.LightRoman}> | QR - 3802</Text>
              </Text>
              <Text style={styles.subHeader}>Operated by FlyDubai</Text>
              <Text style={styles.text}>
                Economy |<Text style={styles.greenText}> Refundable</Text>
              </Text>
            </View>
          </View>
          <View style={styles.rowHLeft}>
            <Bag style={commonStyle.margin(6)} />

            <View style={commonStyle.marginHorizontal(5)}>
              <Text style={styles.HeavyText}>Check in</Text>
              <Text style={styles.text}>1 piece</Text>
            </View>
            <View style={commonStyle.marginHorizontal(5)}>
              <Text style={styles.HeavyText}>Cabin</Text>
              <Text style={styles.text}>7 Kg</Text>
            </View>
          </View>
        </View>

        <View
          style={[
            commonStyle.rowSpaceBetween,
            commonStyle.marginHorizontal(15),
          ]}>
          <View style={commonStyle.marginVertical(10)}>
            <Text style={styles.timeText}>10:00</Text>
            <Text style={[styles.blueText, commonStyle.marginVertical(3)]}>
              Amman (AMM)
            </Text>
            <Text style={styles.text}>Queen Alia Int Airport</Text>
            <Text style={[styles.blueText, commonStyle.marginVertical(3)]}>
              Terminal: 1
            </Text>
          </View>
          <View style={styles.center}>
            <Icon
              name={'aircraft-take-off'}
              type={'entypo'}
              size={30}
              style={styles.icon}
              color={Colors.lightText}
            />
            <Text style={styles.text}>2h 30m</Text>
          </View>

          <View style={styles.flexEndColumn}>
            <Text style={styles.timeText}>
              12:15
              <Text
                style={[styles.redHeavyText, commonStyle.marginHorizontal(3)]}>
                +1
              </Text>
            </Text>
            <Text style={[styles.blueText, commonStyle.marginVertical(3)]}>
              Dubai (DXB)
            </Text>
            <Text style={styles.text}>Dubai Int Airport</Text>
            <Text style={[styles.blueText, commonStyle.marginVertical(3)]}>
              Terminal: 3
            </Text>
          </View>
        </View>
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
  contentContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-start',
    margin: 10,
    marginHorizontal: 15,
  },
  redHeavyText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 12,
    color: '#FF0000',
  },
  blueText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#26698E',
  },
  divider: {
    borderWidth: 0.5,
    borderColor: '#D9D9D9',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  Roman(value) {
    return {
      fontSize: value,
      fontFamily: Font.AvenirRoman,
      color: '#50555F',
    };
  },
  center: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeavyText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 12,
    color: '#0B151F',
  },
  redText: {
    color: '#F15922',
    fontSize: 12,
    fontFamily: Font.AvenirMedium,
  },

  flexEnd: {flexDirection: 'column', alignItems: 'flex-end'},
  subHeader: {
    fontSize: 11,
    color: '#1C8CCC',
    fontFamily: Font.AvenirMedium,
  },
  header: {
    fontSize: 14,
    color: '#163D68',
    fontFamily: Font.AvenirRoman,
  },
  LightRoman: {
    fontSize: 12,
    fontFamily: Font.AvenirRoman,
    color: '#6C6C6C',
  },
  item: {
    borderBottomWidth: 1.2,
    borderColor: Colors.primary,
    paddingBottom: 10,
    marginRight: 15,
    marginTop: 10,
  },
  titleText: {
    color: '#242A37',
    fontSize: 16,
    fontFamily: Font.AvenirMedium,
  },
  text: {
    fontSize: 12,
    color: '#6C6C6C',
    fontFamily: Font.AvenirMedium,
  },
  DetailHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    alignItems: 'center',
    marginHorizontal: 15,
  },

  flexEndColumn: {
    flexDirection: 'column',
    marginVertical: 10,
    alignItems: 'flex-end',
  },
  greenText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#13A869',
  },
  rowHLeft: {
    flexDirection: 'row',
    marginHorizontal: 5,
    marginLeft: 10,
  },
  icon: {
    paddingHorizontal: 15,
    borderBottomWidth: 3,
    borderColor: Colors.lightText,
    marginVertical: 5,
  },
  layoverContainer: {
    backgroundColor: 'rgba(255, 74, 74, 0.2)',
    alignItems: 'center',
    marginVertical: 15,
  },
  timeText: {
    fontSize: 16,
    fontFamily: Font.AvenirHeavy,
    color: 'black',
  },
});

export default FlightDetails;
