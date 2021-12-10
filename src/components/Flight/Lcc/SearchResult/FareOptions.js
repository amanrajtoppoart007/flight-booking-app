import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../../../layout/Colors';
import {BottomSheet, Icon} from 'react-native-elements';
import commonStyle from '../../../../layout/Style';
import Font from '../../../../layout/Font';
import FareOptionCard from './FareOptionCard';
import {useNavigation} from '@react-navigation/native';

function FareOptions({isVisible, setIsVisible}) {
  const navigation = useNavigation();
  const [fareOptions, setFareOptions] = useState([
    {
      id: 'price-item-one',
      title: 'Standard',
      isSelected: true,
      color: '#F15922',
      backgroundColor: 'rgba(241, 89, 34, 0.16)',
    },
    {
      id: 'price-item-two',
      title: 'Inclusive',
      isSelected: false,
      color: '#1D8CCC',
      backgroundColor: 'rgba(29, 140, 204, 0.16)',
    },
    {
      id: 'price-item-three',
      title: 'Flexible',
      isSelected: false,
      color: '#13A869',
      backgroundColor: 'rgba(19, 168, 105, 0.16)',
    },
  ]);

  const setSelected = selectedIndex => {
    const newFareList = fareOptions.map((item, index) => {
      return {
        ...item,
        isSelected: index === selectedIndex,
      };
    });
    setFareOptions(newFareList);
  };

  const _renderItem = ({item, index}) => (
    <FareOptionCard setSelected={setSelected} index={index} item={item} />
  );
  return (
    <BottomSheet isVisible={isVisible}>
      <View style={styles.bottomSheetContent}>
        <View style={styles.contentSection}>
          <View>
            <View style={commonStyle.rowSpaceBetween}>
              <View>
                <Text style={styles.title}>Select below fare options</Text>
              </View>
              <View>
                <Icon
                  onPress={() => setIsVisible(false)}
                  name={'close'}
                  type={'font-awesome'}
                  size={18}
                  color={Colors.lightText}
                />
              </View>
            </View>
          </View>
          <View style={commonStyle.marginVertical(10)}>
            <Text>Doha (DOH) → Dubai (DXB)</Text>
          </View>
          <View>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={fareOptions}
              renderItem={_renderItem}
              contentContainerStyle={styles.sliderStyle(fareOptions?.length)}
            />
          </View>
        </View>
        <View style={styles.fixedBottomSection}>
          <View style={styles.fixedBottomContent}>
            <View>
              <Text style={commonStyle.rowSpaceBetween}>
                <Text style={styles.selectionTitle}>Your Selection </Text>
                <Text style={styles.selectionText}>(For 4 Travellers)</Text>
              </Text>
            </View>
          </View>

          <View
            style={[styles.fixedBottomContent, commonStyle.marginVertical(8)]}>
            <View
              style={[commonStyle.rowSpaceBetween, commonStyle.width('50%')]}>
              <View style={commonStyle.width('50%')}>
                <Text style={styles.placeTitle}>DXB→DOH</Text>
                <Text style={styles.placeText}>1 stop</Text>
              </View>
              <View style={commonStyle.width('50%')}>
                <Text style={styles.placeTitle}>DXB→DOH</Text>
                <Text style={styles.placeText}>1 stop</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => setIsVisible(!isVisible)}
                style={styles.continueButton}>
                <Text style={styles.continueButtonText}>QAR 400.00</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </BottomSheet>
  );
}
const styles = StyleSheet.create({
  sliderStyle(length) {
    const factor = (parseInt(length, 10) / 6) * 115;
    return {
      height: hp(`${factor}%`),
    };
  },
  bottomSheetContent: {
    width: wp('100%'),
    height: hp('90%'),
    backgroundColor: Colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  contentSection: {
    flex: 1,
    padding: 20,
  },
  priceCard(color) {
    return {
      width: '100%',
      borderWidth: 2,
      borderColor: color,
      borderRadius: 8,
    };
  },

  cardHeader(color) {
    return {
      height: 45,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderTopColor: '#DDDDDD',
      borderBottomColor: '#DDDDDD',
      paddingHorizontal: 14,
      backgroundColor: color,
    };
  },
  rowSection: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#DDDDDD',
    borderBottomColor: '#DDDDDD',
    paddingHorizontal: 14,
  },
  fixedBottomSection: {
    width: '100%',
    height: 90,
    backgroundColor: '#242A37',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  fixedBottomContent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectionTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: Colors.white,
  },
  selectionText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#AAAAAA',
  },
  placeTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: Colors.white,
  },
  placeText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#AAAAAA',
  },
  continueButton: {
    padding: 5,
    borderRadius: 6,
    backgroundColor: '#F15922',
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButtonText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: Colors.white,
  },
});

export default FareOptions;
