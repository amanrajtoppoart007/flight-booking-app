import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Font from '../../layout/Font';
import Colors from '../../layout/Colors';
import CustomStatusBar from '../../components/CustomStatusBar';
import Plane from '../../components/Svg/Hotel/Plane.svg';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import commonStyle from '../../layout/Style';
import {LinearProgress} from 'react-native-elements';
function GuestReviews() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar backgroundColor={'#1D8CCC'} />
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={styles.Header}>
            <Text style={styles.textBig}>Guest Reviews</Text>
            <Icon
              onPress={() => navigation.goBack()}
              name={'close'}
              type={'antdesign'}
              size={22}
              color={'black'}
            />
          </View>
          <View style={styles.content}>
            <View style={styles.contentConatiner}>
              <View style={[commonStyle.rowFlexStart, commonStyle.margin(12)]}>
                <Text style={styles.greenBigText}>4.5/5</Text>
                <View
                  style={[
                    commonStyle.rowSpaceBetween,
                    {flex: 1},
                    styles.marginLeft(10),
                  ]}>
                  <Text style={styles.blueBigText}>Excellent</Text>
                  <Text style={styles.textLight}>312 verified review</Text>
                </View>
              </View>
              <View style={commonStyle.marginHorizontal(12)}>
                <Text style={styles.textNormal}>Cleanliness</Text>
                <View
                  style={[
                    commonStyle.rowSpaceBetween,
                    commonStyle.marginVertical(5),
                  ]}>
                  <LinearProgress
                    trackColor="#DDDDDD"
                    color="#1DAD81"
                    variant="determinate"
                    value={4.7 / 5}
                    style={{
                      width: '89%',
                      borderRadius: 5,
                    }}
                  />
                  <Text style={styles.greenText}>4.7/5</Text>
                </View>
              </View>
              <View style={commonStyle.marginHorizontal(12)}>
                <Text style={styles.textNormal}>Staff & service</Text>
                <View
                  style={[
                    commonStyle.rowSpaceBetween,
                    commonStyle.marginVertical(5),
                  ]}>
                  <LinearProgress
                    trackColor="#DDDDDD"
                    color="#1DAD81"
                    variant="determinate"
                    value={4.6 / 5}
                    style={{
                      width: '89%',
                      borderRadius: 5,
                    }}
                  />
                  <Text style={styles.greenText}>4.6/5</Text>
                </View>
              </View>
              <View style={commonStyle.marginHorizontal(12)}>
                <Text style={styles.textNormal}>Amenities</Text>
                <View
                  style={[
                    commonStyle.rowSpaceBetween,
                    commonStyle.marginVertical(5),
                  ]}>
                  <LinearProgress
                    trackColor="#DDDDDD"
                    color="#1DAD81"
                    variant="determinate"
                    value={4.7 / 5}
                    style={{
                      width: '89%',
                      borderRadius: 5,
                    }}
                  />
                  <Text style={styles.greenText}>4.7/5</Text>
                </View>
              </View>
              <View style={commonStyle.marginHorizontal(12)}>
                <Text style={styles.textNormal}>
                  Property conditions & facilities
                </Text>
                <View
                  style={[
                    commonStyle.rowSpaceBetween,
                    commonStyle.marginVertical(5),
                  ]}>
                  <LinearProgress
                    trackColor="#DDDDDD"
                    color="#1DAD81"
                    variant="determinate"
                    value={4.6 / 5}
                    style={{
                      width: '89%',
                      borderRadius: 5,
                    }}
                  />
                  <Text style={styles.greenText}>4.6/5</Text>
                </View>
              </View>
              <View style={styles.divider} />
              <Text
                style={[
                  styles.textBig,
                  commonStyle.marginHorizontal(12),
                  commonStyle.marginBottom(10),
                ]}>
                Reviews from travellers
              </Text>
              <Card
                name="Mohammed"
                rating="5.0"
                date="Thu, 28 Jan, 2021"
                message="Wow!! So much more than I could have expected. It was a girls weekend to celebrate 2 friends that have birthday’s 5 days apart and when we walked into the hotel, the staff was super kind."
              />
              <Card
                name="Verified traveler"
                rating="5.0"
                date="Fri, 21 Aug, 2020"
                message="W hotel in Doha was amazing from the beginning of the trip until the end Hamza and the staff treated me so well. Definitely my favorite hotel in Doha."
              />
              <Card
                name="Balushi"
                rating="5.0"
                date="Fri, 21 Aug, 2020"
                message="Great place to stay and stuff we’re very friendly and professional excellent service from front desk girl name rabeb an excellent asset for W hotel. She convinced me to stay in this hotel I was planning to stay one night some other hotel in different part of the town."
              />
              <View style={styles.divider} />
              <View style={styles.rowCenter}>
                <Text style={styles.blueBigText}>Read all reviews</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Card({name, date, rating, message}) {
  return (
    <View style={styles.card}>
      <View style={commonStyle.rowSpaceBetween}>
        <View style={commonStyle.rowFlexStart}>
          <Text style={styles.blueText}>{name} |</Text>
          <Plane style={commonStyle.marginHorizontal(5)} />
          <Text style={styles.textLight}>Expedia</Text>
        </View>
        <Text style={styles.textLight}>{date}</Text>
      </View>
      <View style={[commonStyle.rowFlexStart, commonStyle.marginBottom(5)]}>
        <Text style={[styles.greenText, styles.marginRight(5)]}>{rating}</Text>
        <Text style={styles.blueText}> Excellent</Text>
      </View>
      <Text style={styles.textNormalSmall}>
        {message}
        <Text style={styles.textPrimary}> Read More</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  margin: {
    marginVertical: 5,
  },
  Header: {
    width: '100%',
    height: hp('10%'),
    backgroundColor: Colors.white,
    elevation: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  contentConatiner: {
    flex: 1,
    marginTop: 15,
    backgroundColor: Colors.white,
  },
  continueButton: {
    padding: 8,
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: Colors.secondary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 8,
    elevation: 5,
    margin: 12,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: '#D9D9D9',
    marginVertical: 12,
    marginHorizontal: 12,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
  },
  canvas: {
    width: '100%',
    height: hp('20%'),
  },
  bottomCanvas: {
    width: '100%',
    height: hp('10%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleSection: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  Input: {
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: Colors.black,
    width: '100%',
  },
  title: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: Font.AvenirMedium,
  },
  textNormal: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: Font.AvenirRegular,
  },
  textNormalSmall: {
    fontSize: 13,
    color: Colors.black,
    fontFamily: Font.AvenirRegular,
  },
  textNormalLight: {
    fontSize: 14,
    color: Colors.lightText,
    fontFamily: Font.AvenirRegular,
  },
  textBig: {
    fontSize: 16,
    color: Colors.black,
    fontFamily: Font.AvenirMedium,
  },
  textBigWhite: {
    fontSize: 16,
    color: Colors.white,
    fontFamily: Font.AvenirMedium,
  },
  textPrimary: {
    fontSize: 13,
    color: Colors.primary,
    fontFamily: Font.AvenirRegular,
  },
  ButtonText: {
    fontSize: 12,
    color: Colors.secondary,
    fontFamily: Font.AvenirRegular,
  },
  ContactConatiner: {
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: Colors.background,
  },
  textLight: {
    fontSize: 12,
    color: Colors.lightText,
    fontFamily: Font.AvenirLight,
  },
  greenText: {
    fontSize: 14,
    fontFamily: Font.AvenirLight,
    color: '#1DAD81',
  },
  greenBigText: {
    fontSize: 20,
    fontFamily: Font.AvenirMedium,
    color: '#1DAD81',
  },
  blueText: {
    fontSize: 14,
    color: Colors.lightText,
    fontFamily: Font.AvenirRegular,
    color: '#26698E',
  },
  blueBigText: {
    fontSize: 16,
    fontFamily: Font.AvenirRegular,
    color: '#26698E',
  },
  topConatainer: {
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: Colors.background,
  },
  LoginConatainer: {
    paddingVertical: 10,
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 10,
    backgroundColor: Colors.background,
    borderRadius: 8,
  },
  marginRight(t) {
    return {
      marginRight: t,
    };
  },
  marginLeft(t) {
    return {
      marginLeft: t,
    };
  },
  rowWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  rowFlexStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
export default GuestReviews;
