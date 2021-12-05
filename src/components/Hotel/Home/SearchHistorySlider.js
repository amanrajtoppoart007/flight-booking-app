import React from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Colors from '../../../layout/Colors';
import commonStyle from '../../../layout/Style';
import Font from '../../../layout/Font';
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
      <View style={commonStyle.marginVertical(2)}>
        <Text style={styles.title}>{item?.title}</Text>
      </View>
      <View style={commonStyle.marginVertical(2)}>
        <Text style={styles.date}>15 Sep - Fri, 17 Sep - 2 Guests</Text>
      </View>
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
    width: wp('44%'),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(206,207,208,0.76)',
    padding: 5,
    marginHorizontal: 2,
  },
  title: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: Colors.black,
  },
  date: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#898989',
  },
});

export default SearchHistorySlider;
