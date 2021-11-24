import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Colors from '../../layout/Colors';
import CustomStatusBar from '../../components/CustomStatusBar';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';
import ResultItem from '../../components/Hotel/Result/ResultItem';
import {useNavigation} from '@react-navigation/native';
import commonStyle from '../../layout/Style';
import SortFilter from '../../components/Hotel/SortFilter';
function SearchResult() {
  const navigation = useNavigation();
  const [shortVisible, setShortVisible] = useState(false);
  const result = [
    {
      id: 'result-item-one',
      title: '',
      place: '',
      price: '',
      discountedPrice: '',
      rating: 5,
      ratingText: '',
    },
    {
      id: 'result-item-two',
      title: '',
      place: '',
      price: '',
      discountedPrice: '',
      rating: 5,
      ratingText: '',
    },
    {
      id: 'result-item-three',
      title: '',
      place: '',
      price: '',
      discountedPrice: '',
      rating: 5,
      ratingText: '',
    },
    {
      id: 'result-item-four',
      title: '',
      place: '',
      price: '',
      discountedPrice: '',
      rating: 5,
      ratingText: '',
    },
    {
      id: 'result-item-five',
      title: '',
      place: '',
      price: '',
      discountedPrice: '',
      rating: 5,
      ratingText: '',
    },
    {
      id: 'result-item-six',
      title: '',
      place: '',
      price: '',
      discountedPrice: '',
      rating: 5,
      ratingText: '',
    },
    {
      id: 'result-item-seven',
      title: '',
      place: '',
      price: '',
      discountedPrice: '',
      rating: 5,
      ratingText: '',
    },
    {
      id: 'result-item-eight',
      title: '',
      place: '',
      price: '',
      discountedPrice: '',
      rating: 5,
      ratingText: '',
    },
    {
      id: 'result-item-nine',
      title: '',
      place: '',
      price: '',
      discountedPrice: '',
      rating: 5,
      ratingText: '',
    },
    {
      id: 'result-item-ten',
      title: '',
      place: '',
      price: '',
      discountedPrice: '',
      rating: 5,
      ratingText: '',
    },
    {
      id: 'result-item-eleven',
      title: '',
      place: '',
      price: '',
      discountedPrice: '',
      rating: 5,
      ratingText: '',
    },
  ];

  const RenderItem = ({item}) => <ResultItem item={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar backgroundColor={Colors.primary} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <View style={styles.content}>
            <View>
              <LinearGradient
                colors={['#1C8CCC', '#015F95']}
                style={styles.canvas}>
                <View style={styles.header}>
                  <View style={[styles.titleSection, styles.rowSpaceBetween]}>
                    <View style={commonStyle.rowCenter}>
                      <View>
                        <Icon
                          onPress={() => navigation.goBack()}
                          name={'arrow-back'}
                          type={'material-icon'}
                          size={30}
                          color={Colors.white}
                        />
                      </View>
                      <View style={commonStyle.marginHorizontal(5)}>
                        <Text style={styles.title}>Search Hotels</Text>
                      </View>
                    </View>
                    <View style={commonStyle.rowCenter}>
                      <View>
                        <Icon
                          name={'edit'}
                          type={'feather'}
                          size={18}
                          color={Colors.white}
                        />
                      </View>
                      <View style={commonStyle.marginHorizontal(5)}>
                        <Icon
                          onPress={() => setShortVisible(true)}
                          name={'filter-variant'}
                          type={'material-community'}
                          size={18}
                          color={Colors.white}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.dateSection}>
                    <Text style={styles.date}>
                      15 Sep - 20 Sep | Room 1 | 2 Guests
                    </Text>
                  </View>
                </View>
              </LinearGradient>
            </View>
            <View>
              {result &&
                result.map(item => {
                  return <RenderItem item={item} key={item?.id?.toString()} />;
                })}
            </View>
          </View>
        </View>
      </ScrollView>
      {shortVisible && <SortFilter onClose={() => setShortVisible(false)} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
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
    height: hp('15%'),
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleSection: {
    marginVertical: 10,
  },
  header: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    color: Colors.white,
  },
  searchSection: {
    top: hp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: wp('90%'),
    height: hp('50%'),
    backgroundColor: Colors.white,
    borderRadius: 8,
    borderWidth: 0.1,
    borderColor: Colors.border,
    elevation: 5,
    padding: 15,
  },
  cardTitle: {
    fontSize: 14,
    color: Colors.lightText,
  },
  dateSection: {marginVertical: 3, marginLeft: 32},
  date: {
    fontSize: 14,
    color: '#90E0FF',
  },
});

export default SearchResult;
