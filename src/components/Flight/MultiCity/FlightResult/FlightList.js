import React, {useState} from 'react';
import {View} from 'react-native';
import OptionCard from './OptionCard';

function FlightList({item}) {
  const [isMoreOptionVisible, setIsMoreOptionVisible] = useState(false);
  const [flightOptions, setFlightOptions] = useState(item);

  const LAST_INDEX = item?.length ? item?.length - 1 : 0;

  const setSelected = index => {
    const flightOptionList = flightOptions.map((flight, i) => {
      return {
        ...flight,
        isSelected: index === i,
      };
    });
    setFlightOptions(flightOptionList);
  };
  return (
    <View>
      <View>
        {flightOptions &&
          flightOptions.map((flight, index) => {
            if (isMoreOptionVisible) {
              return (
                <View key={index}>
                  <View>
                    <OptionCard
                      key={index}
                      isMoreVisible={isMoreOptionVisible}
                      setIsMoreVisible={setIsMoreOptionVisible}
                      setSelected={setSelected}
                      index={index}
                      item={flight}
                      lastIndex={LAST_INDEX}
                    />
                  </View>
                </View>
              );
            } else {
              if (index <= 1) {
                return (
                  <View key={index}>
                    <View>
                      <OptionCard
                        key={index}
                        setSelected={setSelected}
                        isMoreVisible={isMoreOptionVisible}
                        setIsMoreVisible={setIsMoreOptionVisible}
                        index={index}
                        item={flight}
                        lastIndex={LAST_INDEX}
                      />
                    </View>
                  </View>
                );
              }
            }
          })}
      </View>
    </View>
  );
}

export default FlightList;
