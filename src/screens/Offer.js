import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import commonStyle from '../layout/Style';
import Font from '../layout/Font';
import Colors from '../layout/Colors';

function Offer() {
  return (
    <SafeAreaView style={commonStyle.container}>
      <View style={commonStyle.wrapper}>
        <View style={commonStyle.content}>
          <View style={[{height: '100%'}, commonStyle.center]}>
            <Text style={styles.title}>Offer Screen</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 18,
    color: Colors.black,
  },
});

export default Offer;
