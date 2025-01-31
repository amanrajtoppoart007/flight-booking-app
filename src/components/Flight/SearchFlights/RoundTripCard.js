import React from 'react';
import {
  Pressable,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Colors from '../../../layout/Colors';
import {Icon} from 'react-native-elements';
import commonStyle from '../../../layout/Style';
import Font from '../../../layout/Font';
import moment from 'moment';

export default function RoundTripCard({
  setIsLocationSelectorVisible,
  setIsDateRangeVisible,
  setGuestEntryModal,
  Location,
  onSwap,
  Travellers,
  dateFrom,
  dateUpTo,
}) {
  return (
    <View style={styles.card}>
      <View style={styles.subSection}>
        <View style={commonStyle.rowCenter}>
          <View style={[styles.underlineRight]}>
            <View style={commonStyle.marginBottom(6)}>
              <Text style={styles.helperText}>From</Text>
            </View>
            <View style={commonStyle.marginBottom(6)}>
              <Pressable onPress={() => setIsLocationSelectorVisible(true)}>
                <Text style={styles.searchText}>{Location.fromText}</Text>
              </Pressable>
            </View>
            <View style={commonStyle.marginBottom(15)}>
              <Text style={styles.helperText}>{Location.from}</Text>
            </View>
          </View>
          <Icon
            name={'swap'}
            type={'antdesign'}
            size={20}
            color={Colors.primary}
            onPress={() => onSwap()}
          />
          <View style={[styles.underlineLeft]}>
            <View style={commonStyle.marginBottom(6)}>
              <Text style={styles.helperText}>To</Text>
            </View>
            <View style={commonStyle.marginBottom(6)}>
              <Pressable onPress={() => setIsLocationSelectorVisible(true)}>
                <Text style={styles.searchText}>{Location.toText}</Text>
              </Pressable>
            </View>
            <View style={commonStyle.marginBottom(15)}>
              <Text style={styles.helperText}>{Location.to}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.subSection}>
        <View style={commonStyle.rowSpaceBetween}>
          <View style={styles.underlineRight}>
            <View style={commonStyle.marginBottom(8)}>
              <Text style={styles.helperText}>Departure</Text>
            </View>
            <View style={commonStyle.marginBottom(8)}>
              <Pressable onPress={() => setIsDateRangeVisible(true)}>
                <Text style={styles.dateFilterText}>
                  {moment(dateFrom).format('ddd, D MMM')}
                </Text>
              </Pressable>
            </View>
          </View>
          <View style={[styles.underlineLeft]}>
            <View style={commonStyle.marginBottom(8)}>
              <Text style={styles.helperText}>X Return</Text>
            </View>
            <View style={commonStyle.marginBottom(8)}>
              <Pressable onPress={() => setIsDateRangeVisible(true)}>
                <Text style={styles.dateFilterText}>
                  {moment(dateUpTo).format('ddd, D MMM')}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.subSection}>
        <View style={commonStyle.marginBottom(8)}>
          <Text style={styles.helperText}>Travellers & Class</Text>
        </View>
        <View style={commonStyle.marginBottom(15)}>
          <TouchableOpacity onPress={() => setGuestEntryModal(true)}>
            <Text style={styles.roomFilterText}>
              {(Travellers?.adult > 0 ? `${Travellers?.adult} Adult` : '') +
                (Travellers?.child > 0
                  ? `${Travellers?.adult > 0 ? ', ' : ''}` +
                    `${Travellers?.child} Children`
                  : '') +
                (Travellers?.infant > 0
                  ? `${
                      Travellers?.child > 0 || Travellers?.adult > 0 ? ', ' : ''
                    }` + `${Travellers?.infant} Infant`
                  : '') +
                `, ${Travellers.class}`}
            </Text>
          </TouchableOpacity>
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
    marginVertical: 7,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
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
  },
  underlineRight: {
    borderBottomWidth: 1,
    borderColor: '#D9D9D9',
    flex: 1,
    marginRight: 15,
  },
  underlineLeft: {
    borderBottomWidth: 1,
    borderColor: '#D9D9D9',
    flex: 1,
    marginLeft: 15,
    alignItems: 'flex-end',
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
    fontSize: 18,
    color: Colors.black,
    fontFamily: Font.AvenirHeavy,
    marginVertical: 5,
  },
  roomFilterText: {
    fontSize: 18,
    color: Colors.black,
    fontFamily: Font.AvenirHeavy,
  },
});
