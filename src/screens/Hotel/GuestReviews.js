import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Font from '../../layout/Font';
import Colors from '../../layout/Colors';
import CustomStatusBar from '../../components/CustomStatusBar';
import {Icon} from 'react-native-elements';
import commonStyle from '../../layout/Style';
import {LinearProgress} from 'react-native-elements';
import ReviewCard from '../../components/Hotel/ReviewCard';
function GuestReviews({navigation}) {
  const [maxVisibleItemCount, setMaxVisibleItemCount] = useState(3);
  const [reviews] = useState([
    {
      name: 'Mohammad',
      date: 'Thu,28 Jun,2021',
      rating: '5.0',
      message:
        'Wow!! So much more than I could have expected. It was a girls weekend to celebrate 2 friends that have birthday’s 5 days apart and when we walked into the hotel, the staff was super kind.',
    },
    {
      name: 'Rashid',
      date: 'Thu,30 May,2021',
      rating: '5.0',
      message:
        'W hotel in Doha was amazing from the beginning of the trip until the end Hamza and the staff treated me so well. Definitely my favorite hotel in Doha',
    },
    {
      name: 'Balushi',
      date: 'Fri, 21 Aug, 2020',
      rating: '5.0',
      message:
        'Great place to stay and stuff we’re very friendly and professional excellent service from front desk girl name rabeb an excellent asset for W hotel. She convinced me to stay in this hotel I was planning to stay one night some other hotel in different part of the town',
    },
    {
      name: 'Mohammad',
      date: 'Thu,28 Jun,2021',
      rating: '5.0',
      message:
        'Wow!! So much more than I could have expected. It was a girls weekend to celebrate 2 friends that have birthday’s 5 days apart and when we walked into the hotel, the staff was super kind.',
    },
    {
      name: 'Rashid',
      date: 'Thu,30 May,2021',
      rating: '5.0',
      message:
        'W hotel in Doha was amazing from the beginning of the trip until the end Hamza and the staff treated me so well. Definitely my favorite hotel in Doha',
    },
    {
      name: 'Balushi',
      date: 'Fri, 21 Aug, 2020',
      rating: '5.0',
      message:
        'Great place to stay and stuff we’re very friendly and professional excellent service from front desk girl name rabeb an excellent asset for W hotel. She convinced me to stay in this hotel I was planning to stay one night some other hotel in different part of the town',
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar backgroundColor={Colors.primary} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={commonStyle.wrapper}>
          <View style={commonStyle.content}>
            <View style={styles.header}>
              <Text style={styles.pageTitle}>Guest Reviews</Text>
              <Icon
                onPress={() => navigation.goBack()}
                name={'close'}
                type={'antdesign'}
                size={22}
                color={'black'}
              />
            </View>
            <View style={styles.contentContainer}>
              <View style={styles.ratingHeaderSection}>
                <Text style={styles.ratingText}>4.5/5</Text>
                <View
                  style={[commonStyle.rowSpaceBetween, commonStyle.flex(1)]}>
                  <View style={commonStyle.marginHorizontal(8)}>
                    <Text style={styles.airBnbRatingText}>Excellent</Text>
                  </View>
                  <View>
                    <Text style={styles.verifiedReviewsText}>
                      312 verified review
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <Text style={styles.ratingParameterText}>Cleanliness</Text>
                <View
                  style={[
                    commonStyle.rowSpaceBetween,
                    commonStyle.marginVertical(5),
                    commonStyle.flex(1),
                  ]}>
                  <LinearProgress
                    trackColor="#DDDDDD"
                    color="#1DAD81"
                    variant="determinate"
                    value={4.7 / 5}
                    style={styles.linearProgressBar}
                  />
                  <Text style={styles.progressBarRatingText}>4.7/5</Text>
                </View>
              </View>
              <View>
                <Text style={styles.ratingParameterText}>Staff & service</Text>
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
                    style={styles.linearProgressBar}
                  />
                  <Text style={styles.progressBarRatingText}>4.6/5</Text>
                </View>
              </View>
              <View>
                <Text style={styles.ratingParameterText}>Amenities</Text>
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
                    style={styles.linearProgressBar}
                  />
                  <Text style={styles.progressBarRatingText}>4.7/5</Text>
                </View>
              </View>
              <View>
                <Text style={styles.ratingParameterText}>
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
                    style={styles.linearProgressBar}
                  />
                  <Text style={styles.progressBarRatingText}>4.6/5</Text>
                </View>
              </View>
              <View style={styles.divider} />
              <Text style={styles.reviewsTitleText}>
                Reviews from travellers
              </Text>
              <View>
                {reviews &&
                  reviews.map((item, index) => {
                    if (index + 1 <= maxVisibleItemCount) {
                      return <ReviewCard item={item} />;
                    }
                  })}
              </View>
              <View style={styles.divider} />
              <View style={[styles.rowCenter, commonStyle.marginVertical(10)]}>
                {maxVisibleItemCount > reviews?.length && (
                  <TouchableOpacity onPress={() => setMaxVisibleItemCount(3)}>
                    <Text style={styles.readAllReviewsText}>
                      Show less reviews
                    </Text>
                  </TouchableOpacity>
                )}
                {maxVisibleItemCount < reviews?.length && (
                  <TouchableOpacity
                    onPress={() => setMaxVisibleItemCount(reviews?.length + 1)}>
                    <Text style={styles.readAllReviewsText}>
                      Read all reviews
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    width: '100%',
    height: hp('10%'),
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    ...Platform.select({
      android: {
        elevation: 10,
      },
      ios: {
        borderBottomWidth: 2,
        borderBottomColor: '#DDDDDD',
      },
    }),
  },
  pageTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 18,
    color: '#242A37',
  },
  contentContainer: {
    flex: 1,
    marginTop: 15,
    backgroundColor: Colors.white,
    paddingHorizontal: 12,
  },
  ratingHeaderSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  reviewsTitleText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 16,
    color: '#000000',
  },

  card: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 8,
    elevation: 5,
    marginVertical: 12,
  },
  divider: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#D9D9D9',
    marginVertical: 12,
    marginHorizontal: 12,
  },
  content: {
    width: '100%',
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

  linearProgressBar: {
    width: '90%',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: Font.AvenirMedium,
  },
  ratingParameterText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#242A37',
  },
  commentText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#242A37',
  },
  ratingParameterTextLight: {
    fontSize: 14,
    color: Colors.lightText,
    fontFamily: Font.AvenirRegular,
  },
  readMoreButtonText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 12,
    color: '#1D8CCC',
  },
  ButtonText: {
    fontSize: 12,
    color: Colors.secondary,
    fontFamily: Font.AvenirRegular,
  },
  verifiedReviewsText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#6C6C6C',
  },
  date: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#6C6C6C',
  },
  textLight: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#6C6C6C',
  },
  progressBarRatingText: {
    fontSize: 12,
    fontFamily: Font.AvenirHeavy,
    color: '#1DAD81',
  },
  ratingText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 24,
    color: '#1DAD81',
  },
  userName: {
    fontSize: 12,
    fontFamily: Font.AvenirHeavy,
    color: '#26698E',
  },
  airBnbRatingText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: '#26698E',
  },
  readAllReviewsText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#1D8CCC',
  },
});
export default GuestReviews;
