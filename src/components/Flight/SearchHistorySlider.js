import React from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Colors from '../../layout/Colors';
import {Icon} from 'react-native-elements';
import Font from '../../layout/Font';

function SearchHistorySlider() {
  const list = [
    {
      from: 'DXB',
      to: 'DOH',
      date: 'Wed, 15 Sep',
    },
    {
      from: 'DXB',
      to: 'DOH',
      date: 'Wed, 15 Sep',
    },
    {
      from: 'DXB',
      to: 'DOH',
      date: 'Wed, 15 Sep',
    },
    {
      from: 'DXB',
      to: 'DOH',
      date: 'Wed, 15 Sep',
    },
  ];

  const _renderItem = ({item}) => (
    <View style={styles.card}>
      <View style={styles.container}>
        <Text style={styles.title}>{item.from}</Text>
        <Icon
          name={'swap-horizontal'}
          type={'ionicon'}
          size={18}
          color={Colors.lightText}
        />
        <Text style={styles.title}>{item.to}</Text>
      </View>
      <Text style={styles.date}>{item.date} 1 Pax</Text>
    </View>
  );
  return (
    <>
      {list && (
        <View>
          <FlatList
            style={{width: wp('95%')}}
            showsHorizontalScrollIndicator={false}
            initialNumToRender={3}
            horizontal={true}
            keyExtractor={() => Math.random() * 368}
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
    width: 120,
    height: 60,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'gray',
    padding: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: Font.AvenirMedium,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 3,
  },
  date: {
    fontSize: 12,
    color: Colors.lightText,
    textAlign: 'center',
    fontFamily: Font.AvenirMedium,
  },
});

export default SearchHistorySlider;
