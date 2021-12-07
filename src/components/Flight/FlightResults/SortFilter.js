import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Colors from '../../../layout/Colors';
import {TabView} from 'react-native-tab-view';
import RangeSlider from 'rn-range-slider';
import Font from '../../../layout/Font';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../../Hotel/SortFilter/Header';
import SortBy from './SortBy';
import Filter from './Filter';

function SortFilter({onClose}) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'SortBy', title: 'Sort by'},
    {key: 'Filter', title: 'Filters'},
  ]);

  const renderScene = ({route, jumpTo}) => {
    switch (route.key) {
      case 'SortBy':
        return <SortBy jumpTo={jumpTo} />;
      case 'Filter':
        return <Filter jumpTo={jumpTo} />;
      default:
        return <SortBy jumpto={jumpTo} />;
    }
  };
  const _handleIndexChange = i => setIndex(i);

  const _renderTabBar = props => {
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          return (
            <TouchableOpacity
              key={i?.toString()}
              style={styles.tabItem}
              onPress={() => setIndex(i)}>
              <Animated.Text style={styles.tabTitle(i === index)}>
                {route.title}
              </Animated.Text>
              {i === index ? (
                <View style={styles.underline} />
              ) : (
                <View style={styles.underlineTransparent} />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header onClose={onClose} />
      <View style={styles.subContainer}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          renderTabBar={_renderTabBar}
          onIndexChange={_handleIndexChange}
          initialLayout={{width: wp('75%')}}
        />
      </View>
    </SafeAreaView>
  );
}

export default SortFilter;

const styles = StyleSheet.create({
  Rail: {flex: 1, height: 6, backgroundColor: '#E4E9F7'},
  RailSelected: {flex: 1, height: 6, backgroundColor: Colors.primary},

  ButtonText(selected = false) {
    return {
      fontSize: 14,
      color: !selected ? Colors.black : Colors.orange,
      fontFamily: Font.AvenirMedium,
    };
  },
  tabTitle(isActive) {
    return {
      fontFamily: Font.AvenirHeavy,
      fontSize: 14,
      color: isActive ? Colors.primary : '#6C6C6C',
    };
  },
  BorderButton(selected = false) {
    return {
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: !selected ? Colors.border : Colors.orange,
      borderRadius: 6,
      paddingVertical: 5,
      backgroundColor: Colors.white,
      elevation: 8,
    };
  },
  CheckText: {
    fontSize: 14,
    color: Colors.lightText,
    fontFamily: Font.AvenirBook,
  },
  IconButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: 'white',
    borderRadius: 6,
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  LightText: {
    fontSize: 14,
    color: Colors.lightText,
    fontFamily: Font.AvenirBook,
  },
  title: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
  },
  SvgIcon: {width: 18, height: 18, marginRight: 5},
  container: {
    width: wp('100%'),
    height: hp('100%'),
    position: 'absolute',
    backgroundColor: 'rgba(100,100,100,0.5)',
    top: 0,
    right: 0,
    alignItems: 'flex-end',
  },
  subContainer: {
    backgroundColor: 'white',
    width: wp('75%'),
    height: hp('100%'),
    paddingTop: 15,
  },
  FlightTabContainer: {
    backgroundColor: 'white',
    width: wp('75%'),
    height: hp('105%'),
  },
  HeaderContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingTop: 10,
    width: '75%',
  },
  sortContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sortTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: Colors.black,
  },
  sortClear: {
    fontSize: 14,
    color: Colors.secondary,
    fontFamily: Font.AvenirHeavy,
  },
  sortTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 8,
  },
  line: {
    marginVertical: 10,
    marginRight: 2,
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.gray,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DDDDDD',
    paddingVertical: 14,
    paddingHorizontal: 10,
  },
  listIcon: {
    marginRight: 8,
    color: Colors.black,
  },
  listTitle(isSelected = false) {
    return {
      fontSize: 14,
      color: isSelected ? 'green' : Colors.black,
      fontFamily: Font.AvenirMedium,
      marginHorizontal: 10,
    };
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#DDDDDD',
    marginBottom: 10,
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
    marginHorizontal: 10,
  },
  SliderIconContainer: {
    margin: 3,
    padding: 2,
    borderRadius: 22,
    backgroundColor: Colors.white,
  },
});
