import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../../layout/Colors';
import TicketCard from './TicketCard';

function TicketList() {
  const [tickets] = useState([
    {
      ticketNumber: '2132-43434343434',
      name: 'John Doe',
    },
    {
      ticketNumber: '2132-456546',
      name: 'Roy Nil',
    },
    {
      ticketNumber: '2132-6547678',
      name: 'Joseph Del',
    },
  ]);
  return (
    <View style={styles.container}>
      {tickets.map((item, index) => {
        return <TicketCard key={index} item={item} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: Colors.white,
  },
});

export default TicketList;
