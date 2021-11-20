import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../../layout/Colors';
import Font from '../../../layout/Font';

function FareCard() {
  return (
    <View>
      <View style={styles.row}>
        <View>
          <Text style={styles.text}>Base Fare</Text>
        </View>
        <View>
          <Text style={styles.text}>QAR 3,399.00</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View>
          <Text style={styles.text}>Taxes & Fee</Text>
        </View>
        <View>
          <Text style={styles.text}>QAR 0.00</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View>
          <Text style={styles.text}>Discount</Text>
        </View>
        <View>
          <Text style={styles.text}>QAR 5.00</Text>
        </View>
      </View>
      <View>
        <View style={styles.divider} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 3,
  },
  text: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
  },
  divider: {
    width: '100%',
    borderWidth: 0.3,
    borderColor: Colors.lightText,
    alignSelf: 'center',
    marginVertical: 18,
  },
});

export default FareCard;
