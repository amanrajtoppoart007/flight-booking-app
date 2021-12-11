import React, {useState} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../layout/Colors';
import Font from '../../layout/Font';

function ChipSection() {
  const [chips, setChips] = useState([
    {
      title: 'Trending',
      isActive: true,
    },
    {
      title: 'Stay Near By',
      isActive: false,
    },
    {
      title: 'Top Destinations',
      isActive: false,
    },
  ]);

  const setActive = i => {
    const newOptions = chips.map((item, index) => {
      return {
        title: item.title,
        isActive: index === i,
      };
    });

    setChips(newOptions);
  };
  return (
    <View style={styles.card}>
      {chips &&
        chips.map((item, index) => (
          <TouchableOpacity
            key={index?.toString()}
            onPress={() => setActive(index)}
            style={[styles.chip, styles.toggleChipStatus(item?.isActive)]}>
            <Text style={item?.isActive ? styles.activeTitle : styles.title}>
              {item?.title}
            </Text>
          </TouchableOpacity>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chip: {
    height: 45,
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    ...Platform.select({
      android: {
        elevation: 3,
      },
    }),
  },
  toggleChipStatus(isActive) {
    const color = isActive ? '#F15922' : '#242A37';
    return {
      borderColor: color,
    };
  },

  activeTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#F15922',
  },
  title: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#242A37',
  },
});

export default ChipSection;
