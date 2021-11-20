import React from 'react';
import {BottomSheet, Input} from 'react-native-elements';
import Colors from '../../layout/Colors';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import commonStyle from '../../layout/Style';
import Font from '../../layout/Font';

import CloseDarkSvg from '../Svg/CloseDark.svg';

function EnquiryModal({isVisible, setIsVisible}) {
  return (
    <BottomSheet isVisible={isVisible} containerStyle={styles.bottomSheetStyle}>
      <View style={styles.card}>
        <View
          style={[commonStyle.rowSpaceBetween, commonStyle.marginVertical(5)]}>
          <View>
            <Text style={styles.title}>Enquiry</Text>
          </View>
          <View>
            <Pressable onPress={() => setIsVisible(false)}>
              <CloseDarkSvg />
            </Pressable>
          </View>
        </View>
        <Text style={styles.primaryText}>
          Discover Dubai! A jewel in the Arabian desert
        </Text>
        <View style={commonStyle.marginVertical(10)}>
          <Input placeholder="First Name*" />
          <Input placeholder="Last Name" />
          <View style={[commonStyle.rowFlexStart, styles.marginLeft(10)]}>
            <TextInput
              style={styles.Input(0.3)}
              placeholderTextColor={Colors.lightText}
              placeholder="+974"
            />
            <TextInput
              style={styles.Input(0.7)}
              placeholderTextColor={Colors.lightText}
              placeholder="Contact No."
            />
          </View>
          <Input style={commonStyle.marginTop(10)} placeholder="E-mail ID" />
          <TextInput
            style={styles.Area}
            placeholderTextColor={Colors.lightText}
            placeholder="Description…"
          />
        </View>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.WhiteText}>Submit Enquiry</Text>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp('100%'),
    height: hp('100%'),
  },
  bottomSheetStyle: {
    flex: 1,
    backgroundColor: Colors.bottomSheet,
  },
  Area: {
    borderWidth: 1,
    borderColor: Colors.border,
    paddingBottom: 40,
    marginHorizontal: 10,
  },
  marginRight(m) {
    return {
      marginRight: m,
    };
  },
  marginLeft(m) {
    return {
      marginLeft: m,
    };
  },
  Input(f) {
    return {
      borderBottomWidth: 1,
      borderBottomColor: Colors.border,
      marginRight: 10,
      flex: f,
    };
  },
  card: {
    height: hp('90%'),
    backgroundColor: Colors.white,
    padding: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  Button: {
    borderRadius: 8,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  title: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: Colors.black,
  },
  primaryText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: Colors.primary,
  },
  BlackText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: Colors.black,
  },
  WhiteText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 16,
    color: Colors.white,
  },
  tabTitle(isActive) {
    return {
      fontFamily: Font.AvenirMedium,
      fontSize: 12,
      color: isActive ? Colors.primary : '#6C6C6C',
    };
  },
  LightText: {
    fontFamily: Font.AvenirLight,
    color: Colors.lightText,
    fontSize: 14,
  },
  smallText: {
    fontFamily: Font.AvenirLight,
    color: Colors.lightText,
    fontSize: 12,
  },

  tabBar: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  underline: {
    width: '90%',
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
    marginTop: 10,
  },
  underlineTransparent: {
    width: '90%',
    borderBottomWidth: 2,
    borderBottomColor: Colors.transparent,
    marginTop: 10,
  },
  tabItem: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
});

export default EnquiryModal;
