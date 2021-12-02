import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../../layout/Colors';
import {Icon} from 'react-native-elements';
import commonStyle from '../../../layout/Style';
import Font from '../../../layout/Font';

export default function MultiCity({
  setIsLocationSelectorVisible,
  setIsDateRangeVisible,
  setGuestEntryModal,
  Location,
  onSwap,
  handleAddFlight,
  handleDelete,
}) {
  return (
    <View style={styles.card(Location.length)}>
      <View style={styles.subSection}>
        {Location.map((_, index) => (
          <View key={index} style={styles.dataContainer}>
            <View style={styles.fromContainer}>
              <View style={styles.margin}>
                <Text style={styles.helperText}>From</Text>
              </View>
              <View style={styles.margin}>
                <Pressable onPress={() => setIsLocationSelectorVisible(true)}>
                  <Text style={styles.searchText}>
                    {Location[index].fromText}
                  </Text>
                </Pressable>
              </View>
              <View style={commonStyle.marginBottom(10)}>
                <Text style={styles.helperText}>{Location[index].from}</Text>
              </View>
            </View>
            <Icon
              name={'swap'}
              type={'antdesign'}
              size={20}
              color={Colors.primary}
              onPress={() => onSwap(index)}
            />
            <View style={styles.toContainer}>
              <View style={styles.margin}>
                <Text style={styles.helperText}>To</Text>
              </View>
              <View style={styles.margin}>
                <Pressable onPress={() => setIsLocationSelectorVisible(true)}>
                  <Text style={styles.searchText}>
                    {Location[index].toText}
                  </Text>
                </Pressable>
              </View>
              <View style={commonStyle.marginBottom(10)}>
                <Text style={styles.helperText}>{Location[index].to}</Text>
              </View>
            </View>
            <View style={styles.verticalLine} />
            <View>
              {index > 1 ? (
                <View style={styles.AlignSelfEnd}>
                  <Icon
                    name={'closecircle'}
                    type={'antdesign'}
                    size={16}
                    color={Colors.lightText}
                    onPress={() => handleDelete(index)}
                  />
                </View>
              ) : null}
              <View style={styles.margin}>
                <Text style={styles.Departure}>Departure</Text>
              </View>
              <View style={styles.margin}>
                <Pressable onPress={() => setIsDateRangeVisible(true)}>
                  <Text style={styles.dateFilterText}>Sun, 15 Sep</Text>
                </Pressable>
              </View>
            </View>
          </View>
        ))}
      </View>
      <Pressable
        onPress={() => handleAddFlight()}
        style={styles.addFlightContainer}>
        <Icon
          name={'plus'}
          type={'antdesign'}
          size={20}
          color={Colors.secondary}
        />
        <Text style={styles.addFlightText}>Add Flight</Text>
      </Pressable>
      <View style={styles.bottomContainer}>
        <View style={styles.margin}>
          <Text style={styles.helperText}>Travellers & Class</Text>
        </View>
        <View style={styles.margin}>
          <Pressable onPress={() => setGuestEntryModal(true)}>
            <Text style={styles.roomFilterText}>1 Adult, Economy</Text>
          </Pressable>
        </View>
        <View style={styles.divider} />
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
    marginVertical: 5,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
  },
  canvas: {
    width: '100%',
    height: hp('20%'),
  },
  Departure: {
    fontSize: 14,
    color: Colors.lightText,
    fontFamily: Font.AvenirRegular,
  },
  AlignSelfEnd: {
    alignSelf: 'flex-end',
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleSection: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    color: Colors.white,
  },
  card(lo) {
    return {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      width: wp('90%'),
      backgroundColor: Colors.white,
      borderRadius: 8,
      borderWidth: 0.1,
      borderColor: Colors.border,
      elevation: 5,
      paddingHorizontal: 15,
      height: hp(`${lo > 2 ? lo * 18 + 19 : 56}%`),
    };
  },
  subSection: {
    justifyContent: 'center',
    paddingTop: 10,
  },
  divider: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#D9D9D9',
    marginVertical: 8,
  },
  underline: {
    borderBottomWidth: 1,
    borderColor: '#D9D9D9',
    flex: 1,
  },

  cardTitle: {
    fontSize: 14,
    color: Colors.lightText,
  },
  searchText: {
    fontSize: 24,
    color: Colors.black,
    fontFamily: Font.AvenirBlack,
  },
  searchHelperText: {
    fontSize: 14,
    color: Colors.lightText,
    fontFamily: Font.AvenirLight,
  },
  helperText: {
    fontSize: 14,
    color: Colors.lightText,
    fontFamily: Font.AvenirMedium,
  },
  dateFilterText: {
    fontSize: 16,
    color: Colors.black,
    marginLeft: 5,
    fontFamily: Font.AvenirHeavy,
  },
  roomFilterText: {
    fontSize: 16,
    color: Colors.black,
    fontFamily: Font.AvenirHeavy,
  },
  addFlightText: {
    fontSize: 14,
    color: Colors.secondary,
    fontFamily: Font.AvenirHeavy,
    marginLeft: 5,
  },

  verticalLine: {
    borderLeftWidth: 1,
    borderColor: '#D9D9D9',
    height: '50%',
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  fromContainer: {
    marginRight: 15,
  },
  toContainer: {
    marginLeft: 15,
    alignItems: 'flex-end',
  },
  dataContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#D9D9D9',
    height: hp('15%'),
    marginVertical: 5,
  },
  addFlightContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#D9D9D9',
    paddingBottom: 5,
    height: hp('7.5%'),
    paddingHorizontal: 3,
  },
  bottomContainer: {
    justifyContent: 'center',
    height: hp('12%'),
    marginVertical: 10,
  },
});
