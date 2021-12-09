import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import commonStyle from '../../../layout/Style';
import Colors from '../../../layout/Colors';
import Font from '../../../layout/Font';
import TicketCard from './TicketCard';

function TicketList() {
  const [tickets, setTickets] = useState([
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
    <View style={commonStyle.padding(15)}>
      {tickets.map((item, index) => {
        return <TicketCard key={index} item={item} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#26698E',
  },
  ticketTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
  },
  ticketNumber: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#26698E',
  },
  textSection: {
    marginVertical: 5.5,
  },
  textRow: {
    ...commonStyle.rowFlexStart,
    ...commonStyle.flex(1),
  },

  dataTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
  },
  dataDescription: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#26698E',
  },
  specialRequestTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#242A37',
  },
  divider: {
    width: '100%',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.lightText,
    alignSelf: 'center',
  },
});

export default TicketList;
