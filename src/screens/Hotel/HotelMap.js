import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Font from '../../layout/Font';
import Colors from '../../layout/Colors';
import CustomStatusBar from '../../components/CustomStatusBar';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import commonStyle from '../../layout/Style';
function GuestReviews() {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}></SafeAreaView>;
}

const styles = StyleSheet.create({});
export default GuestReviews;
