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
    <View
      style={{
        flex: 1,
      }}>
      <View style={styles.DetailHeader}>
        <View style={{flexDirection: 'column'}}>
          <View style={[commonStyle.rowCenter, commonStyle.marginVertical(5)]}>
            <Text style={styles.textBold}>Doha (DOH)</Text>
            <Icon
              name={'arrowright'}
              type={'antdesign'}
              size={18}
              style={{marginHorizontal: 3}}
              color={'black'}
            />
            <Text style={styles.textBold}>Dubai (DXB)</Text>
          </View>
          <Text style={styles.text}>Wed, 15 Sep</Text>
        </View>
        <View style={{flexDirection: 'column', alignItems: 'flex-end'}}>
          <Text style={styles.text}>Total Duration</Text>
          <Text style={styles.text}>5h 30m</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={{flexDirection: 'column'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={[
              commonStyle.rowSpaceBetween,
              commonStyle.marginVertical(10),
              commonStyle.marginHorizontal(10),
              {alignItems: 'flex-start'},
            ]}>
            <Deer width={25} />
            <View>
              <Text
                style={[styles.textBold, {color: 'darkblue', fontSize: 14}]}>
                Qatar Airways
                <Text style={styles.text}> | QR - 3801</Text>
              </Text>
              <Text
                style={[styles.text, {color: Colors.primary, fontSize: 11}]}>
                Operated by FlyDubai
              </Text>
              <Text style={styles.text}>
                Economy |
                <Text style={[styles.text, {color: 'green'}]}> Refundable</Text>
              </Text>
            </View>
          </View>
          <View style={styles.rowHLeft}>
            <Bag style={{margin: 6}} />

            <View style={{flexDirection: 'column', marginRight: 5}}>
              <Text style={[styles.textBold, {fontSize: 12}]}>Check in</Text>
              <Text style={styles.text}>1 piece</Text>
            </View>
            <View style={{flexDirection: 'column', marginLeft: 5}}>
              <Text style={[styles.textBold, {fontSize: 12}]}>Cabin</Text>
              <Text style={styles.text}>7 Kg</Text>
            </View>
          </View>
        </View>

        <View
          style={[
            commonStyle.rowSpaceBetween,
            commonStyle.marginHorizontal(5),
          ]}>
          <View
            style={{
              flexDirection: 'column',
              marginVertical: 10,
            }}>
            <Text style={styles.textBold}>07:55</Text>
            <Text
              style={[styles.text, {color: Colors.primary, marginVertical: 3}]}>
              Doha (DOH)
            </Text>
            <Text style={styles.text}>Hamad Int Airport</Text>
            <Text
              style={[styles.text, {color: Colors.primary, marginVertical: 3}]}>
              Terminal: 1
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
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
            <Text style={styles.textBold}>08:20</Text>
            <Text
              style={[styles.text, {color: Colors.primary, marginVertical: 3}]}>
              Amman (AMM)
            </Text>
            <Text style={styles.text}>Queen Alia Int Airport</Text>
            <Text
              style={[styles.text, {color: Colors.primary, marginVertical: 3}]}>
              Terminal: 1
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.layoverContainer}>
        <Text style={[styles.text, {color: 'crimson', marginVertical: 5}]}>
          Layover: 7h 5m Queen Alia International Airport
        </Text>
      </View>
      <View style={{flexDirection: 'column'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={[
              commonStyle.rowSpaceBetween,
              commonStyle.marginVertical(10),
              commonStyle.marginHorizontal(10),
              {alignItems: 'flex-start'},
            ]}>
            <Deer width={25} />
            <View>
              <Text
                style={[styles.textBold, {color: 'darkblue', fontSize: 14}]}>
                Qatar Airways
                <Text style={styles.text}> | QR - 3802</Text>
              </Text>
              <Text
                style={[styles.text, {color: Colors.primary, fontSize: 11}]}>
                Operated by FlyDubai
              </Text>
              <Text style={styles.text}>
                Economy |
                <Text style={[styles.text, {color: 'green'}]}> Refundable</Text>
              </Text>
            </View>
          </View>
          <View style={styles.rowHLeft}>
            <Bag style={{margin: 6}} />

            <View style={{flexDirection: 'column', marginRight: 5}}>
              <Text style={[styles.textBold, {fontSize: 12}]}>Check in</Text>
              <Text style={styles.text}>1 piece</Text>
            </View>
            <View style={{flexDirection: 'column', marginLeft: 5}}>
              <Text style={[styles.textBold, {fontSize: 12}]}>Cabin</Text>
              <Text style={styles.text}>7 Kg</Text>
            </View>
          </View>
        </View>

        <View
          style={[
            commonStyle.rowSpaceBetween,
            commonStyle.marginHorizontal(5),
          ]}>
          <View
            style={{
              flexDirection: 'column',
              marginVertical: 10,
            }}>
            <Text style={styles.textBold}>10:00</Text>
            <Text
              style={[styles.text, {color: Colors.primary, marginVertical: 3}]}>
              Amman (AMM)
            </Text>
            <Text style={styles.text}>Queen Alia Int Airport</Text>
            <Text
              style={[styles.text, {color: Colors.primary, marginVertical: 3}]}>
              Terminal: 1
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
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
            <Text style={styles.textBold}>
              12:15
              <Text style={[styles.text, {color: 'red', marginVertical: 3}]}>
                +1
              </Text>
            </Text>
            <Text
              style={[styles.text, {color: Colors.primary, marginVertical: 3}]}>
              Dubai (DXB)
            </Text>
            <Text style={styles.text}>Dubai Int Airport</Text>
            <Text
              style={[styles.text, {color: Colors.primary, marginVertical: 3}]}>
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
    color: 'black',
    fontSize: 16,
    fontFamily: Font.AvenirRegular,
  },
  text: {
    fontSize: 12,
    color: 'black',
    fontFamily: Font.AvenirRegular,
  },
  DetailHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    alignItems: 'center',
  },

  flexEndColumn: {
    flexDirection: 'column',
    marginVertical: 10,
    alignItems: 'flex-end',
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
    marginBottom: 10,
  },
});

export default FlightDetails;
