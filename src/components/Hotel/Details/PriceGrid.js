import React, {useState} from 'react';
import commonStyle from '../../../layout/Style';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PriceSection from './PriceSection';
import {Icon} from 'react-native-elements';

function PriceGrid({option}) {
  const [rooms, setRooms] = useState(option?.rooms);
  const [isExtraVisible, setIsExtraVisible] = useState(false);

  const setSelected = selectedIndex => {
    const newList = rooms.map((item, index) => {
      return index === selectedIndex
        ? {
            ...item,
            isSelected: true,
          }
        : {
            ...item,
            isSelected: false,
          };
    });
    setRooms(newList);
  };
  return (
    <View style={commonStyle.center}>
      {rooms &&
        rooms.map((room, j) => {
          if (isExtraVisible) {
            if (j <= 1) {
              return (
                <View key={j} style={commonStyle.marginVertical(8)}>
                  <PriceSection
                    setSelected={setSelected}
                    index={j}
                    item={room}
                    isActive={room?.isSelected}
                  />
                </View>
              );
            } else {
              return (
                <View key={j}>
                  <View style={commonStyle.marginVertical(8)}>
                    <PriceSection
                      setSelected={setSelected}
                      index={j}
                      item={room}
                      isActive={room?.isSelected}
                    />
                  </View>
                  <View style={commonStyle.center}>
                    <TouchableOpacity
                      onPress={() => setIsExtraVisible(!isExtraVisible)}
                      style={styles.button}>
                      <View>
                        <Text>Show Less</Text>
                      </View>
                      <View style={commonStyle.marginHorizontal(5)}>
                        <Icon
                          name={
                            isExtraVisible ? 'chevrons-up' : 'chevrons-down'
                          }
                          type={'feather'}
                          size={10}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }
          } else {
            if (j <= 1) {
              return (
                <View key={j} style={commonStyle.marginVertical(8)}>
                  <PriceSection
                    setSelected={setSelected}
                    index={j}
                    item={room}
                    isActive={room?.isSelected}
                  />
                </View>
              );
            } else {
              return (
                <View key={j}>
                  <TouchableOpacity
                    onPress={() => setIsExtraVisible(!isExtraVisible)}
                    style={styles.button}>
                    <View>
                      <Text>Show More</Text>
                    </View>
                    <View style={commonStyle.marginHorizontal(5)}>
                      <Icon
                        name={isExtraVisible ? 'chevrons-up' : 'chevrons-down'}
                        type={'feather'}
                        size={10}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }
          }
        })}
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: 'rgba(49, 179, 223, 0.3)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
});

export default PriceGrid;
