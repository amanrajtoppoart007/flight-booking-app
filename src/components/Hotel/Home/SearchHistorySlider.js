import React from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Colors from '../../../layout/Colors';
function SearchHistorySlider() {
  const list = [
    {
      id: 'recent-search-slider-item-one',
      title: 'Four Season Hotel Doha',
    },
    {
      id: 'recent-search-slider-item-two',
      title: 'Four Season Hotel Qutar',
    },
    {
      id: 'recent-search-slider-item-three',
      title: 'Three Star Hotel Neha',
    },
    {
      id: 'recent-search-slider-item-four',
      title: 'Three Star Hotel Neha',
    },
    {
      id: 'recent-search-slider-item-five',
      title: 'Three Star Hotel Neha',
    },
    {
      id: 'recent-search-slider-item-six',
      title: 'Three Star Hotel Neha',
    },
  ];

  const _renderItem = ({item}) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item?.title}</Text>
      <Text style={styles.date}>15 Sep - Fri, 17 Sep - 2 Guests</Text>
    </View>
  );
  return (
    <>
      {list && (
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            initialNumToRender={3}
            horizontal={true}
            keyExtractor={item => item?.id?.toString()}
            data={list}
            renderItem={_renderItem}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 218,
    height: 60,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(206,207,208,0.76)',
    padding: 5,
    marginHorizontal: 2,
  },
  title: {
    fontSize: 14,
    color: Colors.black,
  },
  date: {
    fontSize: 12,
    color: Colors.lightText,
  },
});

export default SearchHistorySlider;
