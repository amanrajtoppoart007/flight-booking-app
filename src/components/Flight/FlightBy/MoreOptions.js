import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import commonStyle from '../../../layout/Style';
import {Icon} from 'react-native-elements';
import Colors from '../../../layout/Colors';
import Font from '../../../layout/Font';
import OptionCard from './OptionCard';

import {strings} from '../../../Localization/LocalizedConstants';
import {useRtlContext} from 'react-native-easy-localization-and-rtl';

function MoreOptions() {
  const {RtlStyles, language} = useRtlContext();
  const [flightOptions, setFlightOptions] = useState([
    {
      id: 'flight-option-id-one',
      title: 'Departure',
      options: [
        {
          id: 'option-id-one',
          isSelected: true,
        },
        {
          id: 'option-id-two',
          isSelected: false,
        },
      ],
    },
    {
      id: 'flight-option-id-two',
      title: 'Returning',
      options: [
        {
          id: 'option-id-one',
          isSelected: true,
        },
        {
          id: 'option-id-two',
          isSelected: false,
        },
      ],
    },
  ]);

  const setSelected = (parentIndex, index) => {
    const flightOptionList = flightOptions.map((item, i) => {
      const newOptions = item.options.map((child, j) => {
        let selected;
        if (parentIndex === i) {
          selected = index === j;
        } else {
          selected = child?.isSelected;
        }
        return {
          id: child.id,
          isSelected: selected,
        };
      });
      return {
        id: item?.id,
        title: item?.title,
        options: newOptions,
      };
    });
    setFlightOptions(flightOptionList);
  };
  return (
    <View>
      {flightOptions &&
        flightOptions.map((item, parentIndex) => {
          return (
            <View key={parentIndex} style={styles.card}>
              <View style={[styles.cardHeader, RtlStyles.containerRow]}>
                <View
                  style={[commonStyle.rowFlexStart, RtlStyles.containerRow]}>
                  <Icon
                    name={'flight-takeoff'}
                    type={'material'}
                    size={20}
                    color={'red'}
                  />
                  <View style={commonStyle.marginHorizontal(2)} />
                  <Text style={styles.redTextBig}>
                    {item?.title === 'Returning'
                      ? strings.returning
                      : strings.departing}
                  </Text>
                  <View
                    style={[
                      commonStyle.rowCenter,
                      commonStyle.marginHorizontal(5),
                    ]}>
                    <Text style={styles.place}>Doha (DOH)</Text>
                    <Icon
                      style={commonStyle.marginHorizontal(5)}
                      name={'arrowright'}
                      type={'antdesign'}
                      size={12}
                      color={'gray'}
                    />
                    <Text style={styles.place}>Dubai (DXB)</Text>
                  </View>
                </View>
                <Text style={styles.date}>Wed, 15 Sep</Text>
              </View>
              <View style={styles.cardBody}>
                {item?.options &&
                  item?.options.map((option, index) => {
                    return (
                      <OptionCard
                        key={index}
                        setSelected={setSelected}
                        parentIndex={parentIndex}
                        index={index}
                        item={option}
                      />
                    );
                  })}
              </View>
            </View>
          );
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 12,
  },
  cardHeader: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  place: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: Colors.primary,
  },
  date: {
    fontFamily: Font.AvenirRoman,
    fontSize: 12,
    color: '#50555F',
  },
  redTextBig: {
    color: '#F15922',
    fontSize: 14,
    fontFamily: Font.AvenirMedium,
  },
});

export default MoreOptions;
