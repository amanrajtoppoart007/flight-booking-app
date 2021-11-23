import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import commonStyle from '../../../layout/Style';
import {CheckBox, Icon} from 'react-native-elements';
import Colors from '../../../layout/Colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Font from '../../../layout/Font';

function PriceSection({item, isActive}) {
  return (
    <View style={styles.card(isActive)}>
      <View style={commonStyle.rowFlexStart}>
        <View style={commonStyle.width('75%')}>
          <View style={commonStyle.rowSpaceBetween}>
            <View>
              <Text>2 Double Beds</Text>
            </View>
            <View>
              <Text>Bed & Breakfast</Text>
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
        <View style={[commonStyle.width('25%'), commonStyle.center]}>
          <View style={commonStyle.rowCenter}>
            <View>
              <View style={styles.offerCard}>
                <Text style={styles.offerText}>5% off</Text>
              </View>
              <View>
                <Text style={commonStyle.rowCenter}>
                  <Text>QAR </Text>
                  <Text style={styles.price}>4790 </Text>
                </Text>
              </View>
              <View>
                <Text style={commonStyle.rowCenter}>
                  <Text>QAR </Text>
                  <Text style={styles.price}>3395 </Text>
                </Text>
              </View>
            </View>
            <View>
              <CheckBox
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
      width: wp('95%'),
      height: 80,
      backgroundColor: isActive ? '#FEF5F2' : Colors.white,
      borderRadius: 8,
      padding: 10,
    };
  },
  offerCard: {
    width: 45,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF2D55',
  },
  offerText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 12,
    color: Colors.white,
  },
  price: {
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
