import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import SortByButton from './SortByButton';
import ThumbsUp from '../../Svg/Hotel/ThumbsUp.svg';
import Offer from '../../Svg/Hotel/Offer.svg';
import Stars from '../../Svg/Hotel/Stars.svg';
import HighPrice from '../../Svg/Hotel/HighPrice.svg';
import LowPrice from '../../Svg/Hotel/LowPrice.svg';
import Plane from '../../Svg/Hotel/Plane.svg';

const SortBy = () => {
  const [Selected, setSelected] = useState('Recommended');
  return (
    <ScrollView>
      <SortByButton
        onPress={() => setSelected('Recommended')}
        listTitle="Recommended"
        ShortBtnIcon={<ThumbsUp />}
        isSelected={Selected === 'Recommended'}
      />
      <SortByButton
        onPress={() => setSelected('Deals')}
        listTitle="Deals"
        ShortBtnIcon={<Offer />}
        isSelected={Selected === 'Deals'}
      />
      <SortByButton
        onPress={() => setSelected('Stars (Highest)')}
        listTitle="Stars (Highest)"
        ShortBtnIcon={<Stars />}
        isSelected={Selected === 'Stars (Highest)'}
      />
      <SortByButton
        onPress={() => setSelected('Price (Highest)')}
        listTitle="Price (Highest)"
        ShortBtnIcon={<HighPrice />}
        isSelected={Selected === 'Price (Highest)'}
      />
      <SortByButton
        onPress={() => setSelected('Price (Lowest)')}
        listTitle="Price (Lowest)"
        ShortBtnIcon={<LowPrice />}
        isSelected={Selected === 'Price (Lowest)'}
      />
      <SortByButton
        onPress={() => setSelected('Expedia Rating')}
        listTitle="Expedia Rating"
        ShortBtnIcon={<Plane />}
        isSelected={Selected === 'Expedia Rating'}
      />
    </ScrollView>
  );
};

export default SortBy;
