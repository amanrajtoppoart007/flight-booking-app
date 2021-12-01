import React, {useState} from 'react';
import {View} from 'react-native';
import SeatSelectionCard from './SeatSelectionCard';

function UserList() {
  const [users] = useState([
    {
      id: 'user-id-one',
      title: 'Mr. Syed Ahmed -',
    },
    {
      id: 'user-id-two',
      title: 'Mr. Syed Ahmed -',
    },
    {
      id: 'user-id-three',
      title: 'Mr. Syed Ahmed -',
    },
  ]);
  return (
    <View>
      {users &&
        users.map((item, index) => {
          return <SeatSelectionCard key={index} item={item} />;
        })}
    </View>
  );
}

export default UserList;
