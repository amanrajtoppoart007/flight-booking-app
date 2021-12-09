import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../../layout/Colors';
import commonStyle from '../../../layout/Style';
import Font from '../../../layout/Font';
import FareCard from './FareCard';

function FairDetail() {
  const [list] = useState([
    {
      section: 'Adult',
      count: 1,
      fare: [
        {
          title: 'Fare',
          value: 140,
          currency: 'QAR',
        },
        {
          title: 'Taxes & Fee',
          value: 30,
          currency: 'QAR',
        },
      ],
    },
    {
      section: 'Child',
      count: 1,
      fare: [
        {
          title: 'Fare',
          value: 140,
          currency: 'QAR',
        },
        {
          title: 'Taxes & Fee',
          value: 30,
          currency: 'QAR',
        },
      ],
    },
    {
      section: 'Infant',
      count: 1,
      fare: [
        {
          title: 'Fare',
          value: 140,
          currency: 'QAR',
        },
        {
          title: 'Taxes & Fee',
          value: 30,
          currency: 'QAR',
        },
      ],
    },
  ]);

  return (
    <View style={styles.card}>
      <View>
        <View>
          <Text style={styles.sectionTitle}>Fare Summery</Text>
        </View>
      </View>

      <View>
        {list &&
          list.map((item, index) => {
            return <FareCard item={item} key={index} />;
          })}
      </View>

      <View style={commonStyle.rowSpaceBetween}>
        <View>
          <Text style={styles.discountTitle}>Promo Discount</Text>
        </View>
        <View style={commonStyle.rowSpaceBetween}>
          <View style={commonStyle.marginHorizontal(5)}>
            <Text style={styles.discountCurrency}>- QAR</Text>
          </View>
          <View>
            <Text style={styles.discountPrice}>300.00</Text>
          </View>
        </View>
      </View>
      <View style={styles.divider} />

      <View style={commonStyle.rowSpaceBetween}>
        <View>
          <Text style={styles.totalTitle}>Grand Total</Text>
          <Text style={styles.title}>Taxes and fees Included</Text>
        </View>
        <View style={commonStyle.rowSpaceBetween}>
          <View style={commonStyle.marginHorizontal(5)}>
            <Text style={styles.textHelper}>QAR</Text>
          </View>
          <View>
            <Text style={styles.price}>300.00</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    width: '100%',
    backgroundColor: Colors.white,
  },
  divider: {
    width: '100%',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#D9D9D9',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  sectionTitle: {
    fontFamily: Font.AvenirBlack,
    fontSize: 14,
    color: '#242A37',
  },

  textHelper: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#94979D',
  },
  price: {
    fontFamily: Font.AvenirBlack,
    fontSize: 14,
    color: '#0B151F',
  },

  totalTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: 'black',
  },
  discountTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#13A869',
  },
  discountCurrency: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#13A869',
  },
  discountPrice: {
    fontFamily: Font.AvenirBlack,
    fontSize: 14,
    color: '#13A869',
  },
});
export default FairDetail;
