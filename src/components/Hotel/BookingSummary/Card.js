import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import commonStyle from '../../../layout/Style';
import {Icon} from 'react-native-elements';
import Colors from '../../../layout/Colors';

import Font from '../../../layout/Font';

function Card({title, subtitle, price, baseFare, tax, discount, index}) {
  const [isOpen, setOpen] = useState(false);
  return (
    <View style={styles.card}>
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.roomText}>
            <Text style={styles.roomTitle}>Room {index}: </Text>
            {title}
          </Text>
          <Text style={styles.roomDetails}>{subtitle}</Text>
        </View>
        <TouchableOpacity onPress={() => setOpen(!isOpen)}>
          <Icon
            name={!isOpen ? 'down' : 'up'}
            type={'antdesign'}
            size={18}
            color={Colors.lightText}
          />
        </TouchableOpacity>
        <Text style={styles.moneyText}>
          <Text style={styles.qarText}>QAR</Text> {price}
        </Text>
      </View>
      {isOpen && (
        <>
          <View style={styles.divider} />
          <View
            style={[
              commonStyle.paddingHorizontal(10),
              commonStyle.paddingVertical(5),
            ]}>
            <View style={commonStyle.rowSpaceBetween}>
              <Text style={styles.subtitle}>Base Fare</Text>
              <Text style={styles.subtitle}>
                QAR <Text style={styles.moneyText}>{baseFare}</Text>
              </Text>
            </View>
            <View style={commonStyle.rowSpaceBetween}>
              <Text style={styles.subtitle}>Taxes & Fee</Text>
              <Text style={styles.subtitle}>
                QAR <Text style={styles.moneyText}>{tax}</Text>
              </Text>
            </View>
            <View style={commonStyle.rowSpaceBetween}>
              <Text style={styles.subtitle}>Discount</Text>
              <Text style={styles.subtitle}>
                QAR <Text style={styles.moneyText}>{discount}</Text>
              </Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 10,
  },
  card: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    marginVertical: 8,
  },
  divider: {
    borderBottomWidth: 1,
    marginVertical: 8,
    borderColor: '#DDDDDD',
  },
  moneyText: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: Font.AvenirMedium,
  },
  roomText: {
    fontSize: 14,
    color: '#26698E',
    fontFamily: Font.AvenirMedium,
  },
  roomTitle: {
    fontSize: 14,
    color: '#26698E',
    fontFamily: Font.AvenirHeavy,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.lightText,
    fontFamily: Font.AvenirMedium,
  },
  roomDetails: {
    fontSize: 14,
    color: Colors.primary,
    fontFamily: Font.AvenirMedium,
  },
});
export default Card;
