import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon} from 'react-native-elements';

function StarRating({size, rating}) {
  const stars = [
    {
      id: 'star-key-one',
      rating: 1,
    },
    {
      id: 'star-key-two',
      rating: 2,
    },
    {
      id: 'star-key-three',
      rating: 3,
    },
    {
      id: 'star-key-four',
      rating: 4,
    },
    {
      id: 'star-key-five',
      rating: 5,
    },
  ];
  return (
    <View style={styles.card}>
      {stars.map((item, index) => {
        return (
          <View
            key={Math.random() + index?.toString()}
            style={{marginHorizontal: 1}}>
            <Icon
              type={'font-awesome'}
              size={size ? size : 12}
              name={index < rating ? 'star' : 'star-o'}
              color={'#F7C000'}
            />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default StarRating;
