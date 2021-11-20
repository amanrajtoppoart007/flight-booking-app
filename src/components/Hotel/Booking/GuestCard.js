import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import UsersSvg from '../../Svg/Hotel/Users.svg';
import commonStyle from '../../../layout/Style';
import InfoBlueSvg from '../../Svg/Hotel/InfoBlue.svg';
import InfoSvg from '../../Svg/Hotel/Info.svg';
import Font from '../../../layout/Font';

function GuestCard() {
  return (
    <View style={styles.card}>
      <View style={styles.cardRow}>
        <View>
          <Text style={styles.rowTitle}>Lead Guest Name</Text>
        </View>
        <View>
          <Text style={styles.rowText('#26698E')}>John Doe</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.cardRow}>
        <View>
          <Text style={styles.rowTitle}>Occupancy</Text>
        </View>
        <View>
          <UsersSvg />
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.cardRow}>
        <View>
          <Text style={styles.rowTitle}>Board Type</Text>
        </View>
        <View>
          <Text style={styles.rowText('#26698E')}>Bed & Breakfast</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.cardRow}>
        <View>
          <Text style={styles.rowTitle}>Hotel Ref#</Text>
        </View>
        <View>
          <Text style={styles.rowText('#26698E')}>CNT12345</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.cardRow}>
        <View>
          <Text style={styles.rowTitle}>Status</Text>
        </View>
        <View>
          <Text style={styles.rowText('#13A869')}>Confirmed</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={commonStyle.marginVertical(7)}>
        <View>
          <Text style={styles.rowTitle}>Special Request -</Text>
        </View>
        <View style={commonStyle.marginVertical(7)}>
          <Text style={styles.rowText('#26698E')}>Late Check-In</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.infoSection}>
        <View>
          <View style={commonStyle.rowSpaceBetween}>
            <Text style={styles.warningText('#1D8CCC')}>
              Cancellation Policy
            </Text>
            <View style={commonStyle.marginHorizontal(5)}>
              <InfoBlueSvg />
            </View>
          </View>
        </View>
        <View>
          <View style={commonStyle.rowSpaceBetween}>
            <Text style={styles.warningText('#F15922')}>Important Info</Text>
            <View style={commonStyle.marginHorizontal(5)}>
              <InfoSvg />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 15.5,
    paddingVertical: 7,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 7,
  },
  rowTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#242A37',
  },
  rowText(color) {
    return {
      fontFamily: Font.AvenirMedium,
      fontSize: 14,
      color,
    };
  },
  infoSection: {
    width: '75%',
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 6,
  },
  warningText(color) {
    return {
      fontFamily: Font.AvenirMedium,
      fontSize: 12,
      color,
    };
  },
  divider: {
    marginVertical: 12,
    width: '100%',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
});

export default GuestCard;
