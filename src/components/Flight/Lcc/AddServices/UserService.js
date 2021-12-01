import React, {useState} from 'react';
import {View} from 'react-native';
import ServiceSelectionCard from './ServiceSelectionCard';

function UserService() {
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
          return <ServiceSelectionCard key={index} item={item} />;
        })}
    </View>
  );
}

export default UserService;
