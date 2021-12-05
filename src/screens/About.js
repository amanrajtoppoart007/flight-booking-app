import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import commonStyle from '../layout/Style';

function About() {
  return (
    <SafeAreaView style={commonStyle.container}>
      <View style={commonStyle.wrapper}>
        <View style={commonStyle.content}>
          <Text>About us screen</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default About;
