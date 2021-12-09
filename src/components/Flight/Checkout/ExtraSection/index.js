import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Font from '../../../../layout/Font';

import OtherPreference from './OtherPreference';
import FrequentFlyer from './FrequentFlyer';
import commonStyle from '../../../../layout/Style';

function Index() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sections] = useState([
    {
      index: 0,
      title: 'Other Preference',
      Scene: OtherPreference,
    },
    {
      index: 1,
      title: 'Add Frequent Flyer#',
      Scene: FrequentFlyer,
    },
  ]);
  return (
    <View>
      <View style={styles.tabBar}>
        {sections &&
          sections.map((item, index) => {
            return (
              <View key={index} style={styles.tabItem(index === currentIndex)}>
                <TouchableOpacity onPress={() => setCurrentIndex(index)}>
                  <Text style={styles.tabItemTitle(index === currentIndex)}>
                    {item?.title}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
      </View>
      <>
        {currentIndex === 0 ? (
          <OtherPreference key={'other-preference-index' + Math.random()} />
        ) : (
          <FrequentFlyer key={'frequent-flyer-index' + Math.random()} />
        )}
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabItem(isActive) {
    return {
      width: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: isActive ? 2 : 1,
      borderBottomColor: isActive ? '#1D8CCC' : '#DDDDDD',
      paddingVertical: 7,
    };
  },
  tabItemTitle(isActive) {
    return {
      fontFamily: Font.AvenirMedium,
      fontSize: 14,
      color: isActive ? '#1D8CCC' : '#0B151F',
    };
  },
});

export default Index;
