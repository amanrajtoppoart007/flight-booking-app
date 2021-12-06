import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import FeatureSlider from './FeatureSlider';
import HotelDetail from './HotelDetail';
import commonStyle from '../../../layout/Style';

function ChooseRooms() {
  const [result] = useState([
    {
      roomNumber: 1,
      title: 'Spectacular Room, 2 Dou…',
      options: [
        {
          title: 'Spectacular Room, 2 Double Beds, Non Smoking…',
          rooms: [
            {
              title: '2 Double Beds',
              keyFeature: 'Bed & Breakfast',
              cancellationPolicy: 'cancellable',
              price: 4790.0,
              discountedPrice: 3395.0,
              currency: 'QAR',
              isSelected: true,
            },
            {
              title: '1 King Bed',
              keyFeature: 'Bed & Breakfast',
              cancellationPolicy: 'cancellable',
              price: 4790.0,
              discountedPrice: 3395.0,
              currency: 'QAR',
              isSelected: false,
            },
            {
              title: '2 Double Beds',
              keyFeature: 'Bed & Breakfast',
              cancellationPolicy: 'cancellable',
              price: 4790.0,
              discountedPrice: 3395.0,
              currency: 'QAR',
              isSelected: false,
            },
          ],
        },
        {
          title: 'Fabulous Room, Deluxe Room, 1 King Bed, Non S…',
          rooms: [
            {
              title: '2 Double Beds',
              keyFeature: 'Bed & Breakfast',
              cancellationPolicy: 'cancellable',
              price: 4790.0,
              discountedPrice: 3395.0,
              currency: 'QAR',
              isSelected: false,
            },
            {
              title: '1 King Bed',
              keyFeature: 'Bed & Breakfast',
              cancellationPolicy: 'cancellable',
              price: 4790.0,
              discountedPrice: 3395.0,
              currency: 'QAR',
              isSelected: false,
            },
            {
              title: '2 Double Beds',
              keyFeature: 'Bed & Breakfast',
              cancellationPolicy: 'cancellable',
              price: 4790.0,
              discountedPrice: 3395.0,
              currency: 'QAR',
              isSelected: false,
            },
          ],
        },
      ],
    },
    {
      roomNumber: 2,
      title: 'Fabulous Room, Deluxe Ro…',
      options: [
        {
          title: 'Spectacular Room, 2 Double Beds, Non Smoking…',
          rooms: [
            {
              title: '2 Double Beds',
              keyFeature: 'Bed & Breakfast',
              cancellationPolicy: 'cancellable',
              price: 4790.0,
              discountedPrice: 3395.0,
              currency: 'QAR',
              isSelected: false,
            },
            {
              title: '1 King Bed',
              keyFeature: 'Bed & Breakfast',
              cancellationPolicy: 'cancellable',
              price: 4790.0,
              discountedPrice: 3395.0,
              currency: 'QAR',
              isSelected: false,
            },
            {
              title: '2 Double Beds',
              keyFeature: 'Bed & Breakfast',
              cancellationPolicy: 'cancellable',
              price: 4790.0,
              discountedPrice: 3395.0,
              currency: 'QAR',
              isSelected: false,
            },
          ],
        },
        {
          title: 'Fabulous Room, Deluxe Room, 1 King Bed, Non S…',
          rooms: [
            {
              title: '2 Double Beds',
              keyFeature: 'Bed & Breakfast',
              cancellationPolicy: 'cancellable',
              price: 4790.0,
              discountedPrice: 3395.0,
              currency: 'QAR',
              isSelected: false,
            },
            {
              title: '1 King Bed',
              keyFeature: 'Bed & Breakfast',
              cancellationPolicy: 'cancellable',
              price: 4790.0,
              discountedPrice: 3395.0,
              currency: 'QAR',
              isSelected: false,
            },
            {
              title: '2 Double Beds',
              keyFeature: 'Bed & Breakfast',
              cancellationPolicy: 'cancellable',
              price: 4790.0,
              discountedPrice: 3395.0,
              currency: 'QAR',
              isSelected: false,
            },
          ],
        },
      ],
    },
    {
      roomNumber: 3,
      title: 'Fabulous Room, Deluxe Ro…',
      options: [
        {
          title: 'Spectacular Room, 2 Double Beds, Non Smoking…',
          rooms: [
            {
              title: '2 Double Beds',
              keyFeature: 'Bed & Breakfast',
              cancellationPolicy: 'cancellable',
              price: 4790.0,
              discountedPrice: 3395.0,
              currency: 'QAR',
              isSelected: false,
            },
            {
              title: '1 King Bed',
              keyFeature: 'Bed & Breakfast',
              cancellationPolicy: 'cancellable',
              price: 4790.0,
              discountedPrice: 3395.0,
              currency: 'QAR',
              isSelected: false,
            },
            {
              title: '2 Double Beds',
              keyFeature: 'Bed & Breakfast',
              cancellationPolicy: 'cancellable',
              price: 4790.0,
              discountedPrice: 3395.0,
              currency: 'QAR',
              isSelected: false,
            },
          ],
        },
        {
          title: 'Fabulous Room, Deluxe Room, 1 King Bed, Non S…',
          rooms: [
            {
              title: '2 Double Beds',
              keyFeature: 'Bed & Breakfast',
              cancellationPolicy: 'cancellable',
              price: 4790.0,
              discountedPrice: 3395.0,
              currency: 'QAR',
              isSelected: false,
            },
            {
              title: '1 King Bed',
              keyFeature: 'Bed & Breakfast',
              cancellationPolicy: 'cancellable',
              price: 4790.0,
              discountedPrice: 3395.0,
              currency: 'QAR',
              isSelected: false,
            },
            {
              title: '2 Double Beds',
              keyFeature: 'Bed & Breakfast',
              cancellationPolicy: 'cancellable',
              price: 4790.0,
              discountedPrice: 3395.0,
              currency: 'QAR',
              isSelected: false,
            },
          ],
        },
      ],
    },
    {
      roomNumber: 4,
      title: 'Fabulous Room, Deluxe Ro…',
      options: [
        {
          title: 'Spectacular Room, 2 Double Beds, Non Smoking…',
          rooms: [
            {
              title: '2 Double Beds',
              keyFeature: 'Bed & Breakfast',
              cancellationPolicy: 'cancellable',
              price: 4790.0,
              discountedPrice: 3395.0,
              currency: 'QAR',
              isSelected: false,
            },
            {
              title: '1 King Bed',
              keyFeature: 'Bed & Breakfast',
              cancellationPolicy: 'cancellable',
              price: 4790.0,
              discountedPrice: 3395.0,
              currency: 'QAR',
              isSelected: false,
            },
            {
              title: '2 Double Beds',
              keyFeature: 'Bed & Breakfast',
              cancellationPolicy: 'cancellable',
              price: 4790.0,
              discountedPrice: 3395.0,
              currency: 'QAR',
              isSelected: false,
            },
          ],
        },
        {
          title: 'Fabulous Room, Deluxe Room, 1 King Bed, Non S…',
          rooms: [
            {
              title: '2 Double Beds',
              keyFeature: 'Bed & Breakfast',
              cancellationPolicy: 'cancellable',
              price: 4790.0,
              discountedPrice: 3395.0,
              currency: 'QAR',
              isSelected: false,
            },
            {
              title: '1 King Bed',
              keyFeature: 'Bed & Breakfast',
              cancellationPolicy: 'cancellable',
              price: 4790.0,
              discountedPrice: 3395.0,
              currency: 'QAR',
              isSelected: false,
            },
            {
              title: '2 Double Beds',
              keyFeature: 'Bed & Breakfast',
              cancellationPolicy: 'cancellable',
              price: 4790.0,
              discountedPrice: 3395.0,
              currency: 'QAR',
              isSelected: false,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <View>
      <View style={styles.sliderSection}>
        <FeatureSlider />
      </View>
      <View>
        {result &&
          result.map((item, index) => {
            return (
              <View key={index} style={commonStyle.marginVertical(6)}>
                <HotelDetail item={item} index={index} />
              </View>
            );
          })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    paddingHorizontal: 12,
  },
  sliderSection: {
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
  header: {
    height: 45,
    backgroundColor: '#FEF5F2',
  },
});

export default ChooseRooms;
