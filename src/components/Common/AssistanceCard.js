import {Pressable, StyleSheet, Text, View} from 'react-native';
import commonStyle from '../../layout/Style';
import CallSvg from '../Svg/Call.svg';
import EmailSvg from '../Svg/Email.svg';
import CallBackSvg from '../Svg/CallBack.svg';
import React from 'react';
import Colors from '../../layout/Colors';

function AssistanceCard({isVisible, setIsVisible}) {
  return (
    <>
      {isVisible && (
        <View style={cardStyle.card}>
          <View
            style={[commonStyle.rowFlexStart, commonStyle.marginVertical(8)]}>
            <View>
              <CallSvg />
            </View>
            <View style={commonStyle.marginHorizontal(8)}>
              <Text>Call</Text>
            </View>
          </View>
          <Pressable
            onPress={() => setIsVisible(true)}
            style={[commonStyle.rowFlexStart, commonStyle.marginVertical(8)]}>
            <View>
              <EmailSvg />
            </View>
            <View style={commonStyle.marginHorizontal(8)}>
              <Text>Send a request</Text>
            </View>
          </Pressable>
          <View
            style={[commonStyle.rowFlexStart, commonStyle.marginVertical(8)]}>
            <View>
              <CallBackSvg />
            </View>
            <View style={commonStyle.marginHorizontal(8)}>
              <Text>Request call back</Text>
            </View>
          </View>
        </View>
      )}
    </>
  );
}

const cardStyle = StyleSheet.create({
  card: {
    position: 'absolute',
    zIndex: 1,
    width: 165,
    height: 120,
    backgroundColor: Colors.white,
    borderRadius: 8,
    right: -10,
    top: 5,
    padding: 10,
  },
});
export default AssistanceCard;
