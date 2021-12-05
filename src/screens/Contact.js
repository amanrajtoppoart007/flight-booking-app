import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import commonStyle from '../layout/Style';

function Contact() {
  return (
    <SafeAreaView style={commonStyle.container}>
      <View style={commonStyle.wrapper}>
        <View style={commonStyle.content}>
          <Text>Contact us screen</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Contact;
