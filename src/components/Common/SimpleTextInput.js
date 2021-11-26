import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Colors from '../../layout/Colors';
import Font from '../../layout/Font';

function SimpleTextInput({title, value, setValue, titleType}) {
  return (
    <View>
      {titleType === 'title' && (
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
      )}
      <View style={styles.inputContainerStyle}>
        <TextInput
          placeholder={title}
          value={value}
          onChangeText={text => setValue(text)}
          style={[styles.inputStyle, styles.inputTextStyle]}
          placeholderTextColor={Colors.lightText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#AAAAAA',
  },
  inputStyle: {
    width: '65%',
    fontSize: 14,
    height: 35,
  },
  inputTextStyle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: Colors.black,
  },
  inputContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
  },
});

export default SimpleTextInput;
