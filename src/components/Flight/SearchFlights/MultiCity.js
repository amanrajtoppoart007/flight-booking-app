import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../../layout/Colors';
import {Icon} from 'react-native-elements';
import commonStyle from '../../../layout/Style';
import Font from '../../../layout/Font';
import moment from 'moment';

export default function MultiCity({
  setIsLocationSelectorVisible,
  setGuestEntryModal,
  Location,
  onSwap,
  handleAddFlight,
  handleDelete,
  Travellers,
  dates,
  setIsDatePickerVisible,
}) {
  return (
    <>
      <View style={styles.card}>
        <View style={styles.subSection}>
          {Location.map((_, index) => (
            <View
              key={index}
              style={[styles.dataContainer(index === Location.length - 1)]}>
              <View style={styles.fromContainer}>
                <View style={commonStyle.marginBottom(7)}>
                  <Text style={styles.helperText}>From</Text>
                </View>
                <View style={commonStyle.marginBottom(7)}>
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
                <View style={commonStyle.marginBottom(7)}>
                  <Text style={styles.helperText}>To</Text>
                </View>
                <View style={commonStyle.marginBottom(7)}>
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
                <View style={commonStyle.marginBottom(10)}>
                  <Text style={styles.Departure}>Departure</Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      setIsDatePickerVisible(index);
                    }}>
                    <Text style={styles.dateFilterText}>
                      {moment(dates[index]).format('ddd, D MMM')}
                    </Text>
                  </TouchableOpacity>
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
          <View style={commonStyle.marginBottom(8)}>
            <Text style={styles.helperText}>Travellers & Class</Text>
          </View>
          <View style={commonStyle.marginBottom(8)}>
            <Pressable onPress={() => setGuestEntryModal(true)}>
              <Text style={styles.roomFilterText}>
                {(Travellers?.adult > 0 ? `${Travellers?.adult} Adult` : '') +
                  (Travellers?.child > 0
                    ? `${Travellers?.adult > 0 ? ', ' : ''}` +
                      `${Travellers?.child} Children`
                    : '') +
                  (Travellers?.infant > 0
                    ? `${
                        Travellers?.child > 0 || Travellers?.adult > 0
                          ? ', '
                          : ''
                      }` + `${Travellers?.infant} Infant`
                    : '') +
                  `, ${Travellers.class}`}
              </Text>
            </Pressable>
          </View>
          <View style={styles.divider} />
        </View>
      </View>
    </>
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

  Departure: {
    fontSize: 14,
    color: Colors.lightText,
    fontFamily: Font.AvenirMedium,
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
  card: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignSelf: 'stretch',
    marginHorizontal: 20,
    backgroundColor: Colors.white,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.border,
    elevation: 5,
    padding: 15,
    top: -40,
  },
  subSection: {
    justifyContent: 'center',
    marginBottom: 20,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: '#D9D9D9',
    marginTop: 15,
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
    marginHorizontal: 20,
  },
  fromContainer: {
    marginRight: 15,
  },
  toContainer: {
    marginLeft: 15,
    alignItems: 'flex-end',
  },
  dataContainer(isLastElement) {
    return {
      alignSelf: 'stretch',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: '#D9D9D9',
      paddingBottom: 14,
      marginBottom: isLastElement ? 0 : 15,
    };
  },
  addFlightContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#D9D9D9',
    paddingBottom: 15,
    paddingHorizontal: 3,
  },
  bottomContainer: {
    justifyContent: 'center',
    marginTop: 15,
  },
});
