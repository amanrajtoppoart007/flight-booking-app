import {StyleSheet, TextInput, View} from 'react-native';
import Colors from '../../../layout/Colors';
import OrangeSearch from '../../Svg/Hotel/OrangeSearch.svg';
import React from 'react';
import Font from '../../../layout/Font';

function SearchBar({text}) {
  return (
    <View style={styles.SearchBar}>
      <TextInput
        placeholder={text}
        placeholderTextColor={Colors.lightText}
        style={styles.input}
      />
      <OrangeSearch />
    </View>
  );
}
const styles = StyleSheet.create({
  SearchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#AAAAAA',
    marginHorizontal: 15,
    marginTop: 10,
    alignItems: 'center',
  },
  input: {
    fontSize: 14,
    margin: 0,
    padding: 0,
    fontFamily: Font.AvenirMedium,
    color: Colors.black,
    flex: 0.95,
  },
});

export default SearchBar;
