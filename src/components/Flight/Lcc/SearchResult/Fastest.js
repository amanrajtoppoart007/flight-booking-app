import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import FlightCard from './FlightCard';
import commonStyle from '../../../../layout/Style';

function Fastest() {
  const [flights] = useState([
    {
      id: 'flight-list-id-one',
    },
    {
      id: 'flight-list-id-two',
    },
    {
      id: 'flight-list-id-three',
    },
    {
      id: 'flight-list-id-four',
    },
    {
      id: 'flight-list-id-five',
    },
  ]);
  const _renderItem = () => <FlightCard />;
  return (
    <View style={commonStyle.flex(1)}>
      <View>
        <FlatList
          keyExtractor={item => item?.id?.toString()}
          data={flights}
          renderItem={_renderItem}
        />
      </View>
    </View>
  );
}

export default Fastest;
