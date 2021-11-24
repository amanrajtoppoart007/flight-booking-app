import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Colors from '../../../layout/Colors';
import ImageSlider from './ImageSlider';
import StarRating from '../../StarRating';
import {Icon} from 'react-native-elements';

function ResultItem() {
  return (
    <View style={styles.card}>
      <View>
        <ImageSlider />
      </View>
      <View>
        <View style={styles.titleSection}>
          <View>
            <Text style={styles.title}>W Doha</Text>
          </View>
          <View style={{marginHorizontal: 5}}>
            <StarRating rating={3} size={16} />
          </View>
        </View>
        <View style={styles.footer}>
          <View style={{width: '65%'}}>
            <View style={styles.locationSection}>
              <View>
                <Icon
                  name={'location-sharp'}
                  type={'ionicon'}
                  size={12}
                  color={'#6C6C6C'}
                />
              </View>
              <View style={{marginHorizontal: 5}}>
                <Text style={styles.place}>Diplomatic Area, Doha, QA</Text>
              </View>
            </View>
            <View style={styles.buttonSection}>
              <View>
                <View style={styles.button}>
                  <Text>Breakfast Included</Text>
                </View>
              </View>
              <View style={{marginHorizontal: 3}}>
                <View style={styles.withoutBgButton}>
                  <Text style={styles.buttonText}>Free Cancellation</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{width: '35%'}}>
            <View style={styles.rowFlexEnd}>
              <View>
                <Text style={styles.currency}>QAR</Text>
              </View>
              <View style={{marginHorizontal: 3}}>
                <Text style={styles.price}>13000</Text>
              </View>
              <View style={styles.cross} />
            </View>
            <View style={styles.rowFlexEnd}>
              <View>
                <Text style={styles.currency}>QAR</Text>
              </View>
              <View style={{marginHorizontal: 3}}>
                <Text style={styles.price}>12500</Text>
              </View>
            </View>
            <View style={styles.rowFlexEnd}>
              <Text style={styles.days}>Per Night</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderWidth: 0.1,
    borderColor: Colors.border,
    borderRadius: 6,
    marginVertical: 10,
    padding: 10,
    paddingHorizontal: 5,
    height: 235,
    elevation: 1,
  },
  titleSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 5,
  },
  cross: {
    position: 'absolute',
    borderColor: '#FF2D55',
    borderBottomWidth: 2,
    bottom: 0,
    width: '60%',
    borderRadius: 8,
    transform: [{rotateZ: '170deg'}, {translateY: 8}],
  },
  title: {
    fontSize: 18,
    color: Colors.black,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 3,
    paddingHorizontal: 5,
  },
  locationSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  place: {
    fontSize: 12,
    color: '#6C6C6C',
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
    height: 24,
    borderRadius: 4,
    backgroundColor: '#CFEEE1',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    paddingHorizontal: 5,
  },
  withoutBgButton: {
    height: 24,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 12,
    color: '#13A869',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.black,
  },
  currency: {
    fontSize: 14,
    color: '#6C6C6C',
  },
  days: {
    fontSize: 12,
    color: '#6C6C6C',
  },
  rowFlexEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default ResultItem;
