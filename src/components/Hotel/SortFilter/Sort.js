import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import SortByButton from './SortByButton';
import ThumbsUp from '../../Svg/Hotel/ThumbsUp.svg';
import Offer from '../../Svg/Hotel/Offer.svg';
import Stars from '../../Svg/Hotel/Stars.svg';
import HighPrice from '../../Svg/Hotel/HighPrice.svg';
import LowPrice from '../../Svg/Hotel/LowPrice.svg';
import Plane from '../../Svg/Hotel/Plane.svg';
import {strings} from '../../../Localization/LocalizedConstants';
import {useRtlContext} from 'react-native-easy-localization-and-rtl';

const SortBy = () => {
  const [Selected, setSelected] = useState('Recommended');
  useRtlContext();

  return (
    <ScrollView>
      <SortByButton
        onPress={() => setSelected('Recommended')}
        listTitle={strings.recommended}
        ShortBtnIcon={<ThumbsUp />}
        isSelected={Selected === 'Recommended'}
      />
      <SortByButton
        onPress={() => setSelected('Deals')}
        listTitle={strings.deals}
        ShortBtnIcon={<Offer />}
        isSelected={Selected === 'Deals'}
      />
      <SortByButton
        onPress={() => setSelected('Stars (Highest)')}
        listTitle={strings.starsHighest}
        ShortBtnIcon={<Stars />}
        isSelected={Selected === 'Stars (Highest)'}
      />
      <SortByButton
        onPress={() => setSelected('Price (Highest)')}
        listTitle={strings.priceHighest}
        ShortBtnIcon={<HighPrice />}
        isSelected={Selected === 'Price (Highest)'}
      />
      <SortByButton
        onPress={() => setSelected('Price (Lowest)')}
        listTitle={strings.priceLowest}
        ShortBtnIcon={<LowPrice />}
        isSelected={Selected === 'Price (Lowest)'}
      />
      <SortByButton
        onPress={() => setSelected('Expedia Rating')}
        listTitle={strings.expediaRating}
        ShortBtnIcon={<Plane />}
        isSelected={Selected === 'Expedia Rating'}
      />
    </ScrollView>
  );
};

export default SortBy;
