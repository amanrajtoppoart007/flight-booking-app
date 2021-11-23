import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import commonStyle from '../../../layout/Style';
import {CheckBox, Icon} from 'react-native-elements';
import Colors from '../../../layout/Colors';
import Font from '../../../layout/Font';

function PriceSection({item, isActive, index, setSelected}) {
  return (
    <View style={styles.card(isActive)}>
      <View style={styles.cardBody}>
        <View style={styles.cardLeftSection}>
          <View style={[commonStyle.rowSpaceBetween, commonStyle.width('80%')]}>
            <View>
              <Text style={styles.bedTypeText}>{item?.title}</Text>
            </View>
            <View>
              <Text style={styles.amenitiesText}>Bed & Breakfast</Text>
            </View>
          </View>
          <View style={commonStyle.marginVertical(6)}>
            <Text style={styles.cancellationPolicyText('refundable')}>
              Free Cancellation
            </Text>
          </View>
          <View>
            <Text style={styles.cancellationPolicyLink}>
              Cancellation Policy
            </Text>
          </View>
        </View>
        <View style={styles.cardRightSection}>
          <View style={commonStyle.rowCenter}>
            <View style={styles.priceSection}>
              <View style={styles.offerCard}>
                <Text style={styles.offerText}>5% off</Text>
              </View>
              <View style={commonStyle.center}>
                <Text style={commonStyle.rowCenter}>
                  <Text>QAR </Text>
                  <Text style={styles.price}>4790 </Text>
                </Text>
              </View>
              <View>
                <Text style={commonStyle.rowCenter}>
                  <Text>QAR </Text>
                  <Text style={styles.discountedPrice}>3395 </Text>
                </Text>
              </View>
            </View>
            <View style={styles.checkBoxSection}>
              <CheckBox
                onPress={() => setSelected(index)}
                containerStyle={styles.checkBoxWrapper}
                checked={isActive}
                checkedIcon={
                  <Icon
                    name={'dot-circle-o'}
                    type={'font-awesome'}
                    color={Colors.primary}
                  />
                }
                uncheckedIcon={
                  <Icon
                    name={'circle-o'}
                    type={'font-awesome'}
                    color={Colors.primary}
                  />
                }
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card(isActive) {
    return {
      width: '100%',
      height: 80,
      backgroundColor: isActive ? '#FEF5F2' : Colors.white,
      borderWidth: 0.5,
      borderColor: Colors.lightText,
      borderRadius: 8,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
    };
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
  },
  cardLeftSection: {
    width: '60%',
    borderRightWidth: 1,
    borderRightColor: '#DDDDDD',
  },
  checkBoxWrapper: {
    padding: 0,
    margin: 0,
  },
  cardRightSection: {
    width: '40%',
    borderLeftWidth: 1,
    borderLeftColor: '#DDDDDD',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bedTypeText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 12,
    color: '#26698E',
  },
  amenitiesText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#242A37',
  },
  priceSection: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBoxSection: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  offerCard: {
    width: 50,
    height: 25,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF2D55',
    padding: 2,
  },
  offerText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 12,
    color: Colors.white,
  },
  price: {
    fontFamily: Font.AvenirBlack,
    fontSize: 12,
    color: '#0B151F',
  },
  discountedPrice: {
    fontFamily: Font.AvenirBlack,
    fontSize: 14,
    color: '#0B151F',
  },
  cancellationPolicyText(type) {
    return {
      fontFamily: Font.AvenirMedium,
      fontSize: 14,
      color: type === 'refundable' ? '#13A869' : '#FF2D55',
    };
  },
  cancellationPolicyLink: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#1D8CCC',
  },
});

export default PriceSection;
