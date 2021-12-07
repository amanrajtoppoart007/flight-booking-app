import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, FlatList} from 'react-native';
import commonStyle from '../../../layout/Style';

import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../../../layout/Colors';
import Font from '../../../layout/Font';
import CustomStatusBar from '../../../components/CustomStatusBar';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';
import PlaneSmall from '../../../components/Svg/PlaneSmall.svg';
import Departure from '../../../components/Svg/Departure.svg';
import FlightCard from '../../../components/Flight/FlightBy/FlightCard';
import Footer from '../../../components/Flight/Footer';
import SortFilter from '../../../components/Flight/FlightResults/SortFilter';

function SearchResult({navigation}) {
  const [shortVisible, setShortVisible] = useState(false);
  const [SelectedIndex, setSelectedIndex] = useState(0);

  return (
    <SafeAreaView style={commonStyle.container}>
      <CustomStatusBar backgroundColor={Colors.primary} />
      <View style={[commonStyle.flex(1), commonStyle.wrapper]}>
        <View style={[commonStyle.flex(1), commonStyle.content]}>
          <LinearGradient colors={['#1C8CCC', '#015F95']} style={styles.canvas}>
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
                  <View style={styles.titleWrapper}>
                    <View>
                      <Text style={styles.title}>Doha</Text>
                    </View>
                    <View style={commonStyle.marginHorizontal(8)}>
                      <PlaneSmall />
                    </View>
                    <View>
                      <Text style={styles.title}>Dubai</Text>
                    </View>
                  </View>
                </View>
                <View style={commonStyle.rowCenter}>
                  <View style={commonStyle.marginHorizontal(5)}>
                    <Icon
                      onPress={() => navigation.navigate('ModifySearch')}
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
              <View style={styles.subTitleSection}>
                <Text style={styles.subTitle}>
                  15 Sep - 20 Sep | 4 Travellers | Economy
                </Text>
              </View>
            </View>
          </LinearGradient>
          <View style={styles.topBarContainer}>
            <Departure />
            <View style={commonStyle.marginHorizontal(5)} />
            <Text style={styles.topBarText}>Select your return flight</Text>
          </View>
          <View style={commonStyle.flex(1)}>
            <FlatList
              data={[0, 1, 2]}
              renderItem={({_, index}) => (
                <FlightCard
                  onPress={() => setSelectedIndex(index)}
                  isSelected={SelectedIndex === index}
                />
              )}
            />
            <Footer
              data={[
                {title: 'DOH → DXB', subtext: '1 stop'},
                {title: 'DXB → DOH', subtext: '1 stop'},
              ]}
              buttonText={'QAR 350.00'}
              buttonIcon={false}
              onPress={() => navigation.navigate('ReviewItinerary')}
            />
          </View>
          <View />
        </View>
      </View>
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
    height: hp('14%'),
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleSection: {
    marginVertical: 10,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topBarContainer: {
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 74, 74, 0.2)',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 18,
    color: Colors.white,
  },
  subTitleSection: {marginVertical: 3, marginLeft: 32},
  subTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#90E0FF',
  },
  tabTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
  },
  tabBar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBarText: {
    fontSize: 14,
    color: '#F15922',
    marginVertical: 5,
    fontFamily: Font.AvenirHeavy,
  },
  underline: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#3F8815',
    marginTop: 10,
  },
  underlineTransparent: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#DDDDDD',
    marginTop: 10,
  },
  tabItem(isActive) {
    return {
      width: '33.33%',
      alignItems: 'center',
      borderLeftWidth: 0.5,
      borderRightWidth: 0.5,
      borderLeftColor: '#707070',
      borderRightColor: '#707070',
      backgroundColor: isActive ? '#CFD7E0' : Colors.white,
    };
  },
});

export default SearchResult;
