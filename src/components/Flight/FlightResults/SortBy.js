import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {strings} from '../../../Localization/LocalizedConstants';
import {useRtlContext} from 'react-native-easy-localization-and-rtl';
import SortList from './SortList';

const SortBy = () => {
  const [Selected, setSelected] = useState(0);
  useRtlContext();

  const list = [
    strings.departureEarliest,
    strings.departureLatest,
    strings.arrivalEarliest,
    strings.arrivalLatest,
    strings.durationShortest,
    strings.durationLongest,
    strings.priceHighest,
    strings.priceLowest,
  ];
  return (
    <ScrollView>
      {list.map((item, index) => {
        return (
          <SortList
            key={item}
            onPress={() => setSelected(index)}
            listTitle={item}
            isSelected={Selected === index}
          />
        );
      })}
    </ScrollView>
  );
};

export default SortBy;
