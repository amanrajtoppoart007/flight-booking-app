import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import SortList from './SortList';

const SortBy = () => {
  const [Selected, setSelected] = useState('Departure (Earliest)');
  return (
    <ScrollView>
      <SortList
        onPress={() => setSelected('Departure (Earliest)')}
        listTitle="Departure (Earliest)"
        isSelected={Selected === 'Departure (Earliest)'}
      />
      <SortList
        onPress={() => setSelected('Departure (Latest)')}
        listTitle="Departure (Latest)"
        isSelected={Selected === 'Departure (Latest)'}
      />
      <SortList
        onPress={() => setSelected('Arrival (Earliest)')}
        listTitle="Arrival (Earliest)"
        isSelected={Selected === 'Arrival (Earliest)'}
      />
      <SortList
        onPress={() => setSelected('Arrival (Latest)')}
        listTitle="Arrival (Latest)"
        isSelected={Selected === 'Arrival (Latest)'}
      />
      <SortList
        onPress={() => setSelected('Duration (Shortest)')}
        listTitle="Duration (Shortest)"
        isSelected={Selected === 'Duration (Shortest)'}
      />
      <SortList
        onPress={() => setSelected('Duration (Longest)')}
        listTitle="Duration (Longest)"
        isSelected={Selected === 'Duration (Longest)'}
      />
      <SortList
        onPress={() => setSelected('Price (Highest)')}
        listTitle="Price (Highest)"
        isSelected={Selected === 'Price (Highest)'}
      />
      <SortList
        onPress={() => setSelected('Price (Lowest)')}
        listTitle="Price (Lowest)"
        isSelected={Selected === 'Price (Lowest)'}
      />
    </ScrollView>
  );
};

export default SortBy;
