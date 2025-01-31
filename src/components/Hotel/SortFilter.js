import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Colors from '../../layout/Colors';
import {TabView} from 'react-native-tab-view';
import Font from '../../layout/Font';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from './SortFilter/Header';
import Filter from './SortFilter/Filter';
import Sort from './SortFilter/Sort';

function SortFilter({onClose}) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'SortBy', title: 'Sort by'},
    {key: 'Filter', title: 'Filters'},
  ]);

  const renderScene = ({route, jumpTo}) => {
    switch (route.key) {
      case 'SortBy':
        return <Sort jumpTo={jumpTo} />;
      case 'Filter':
        return <Filter jumpTo={jumpTo} />;
      default:
        return <Sort jumpto={jumpTo} />;
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
  tabTitle(isActive) {
    return {
      fontFamily: Font.AvenirHeavy,
      fontSize: 14,
      color: isActive ? Colors.primary : '#6C6C6C',
    };
  },
  container: {
    width: wp('100%'),
    height: hp('100%'),
    position: 'absolute',
    backgroundColor: 'rgba(100,100,100,0.5)',
    top: 0,
    right: 0,
    alignItems: 'flex-end',
    zIndex: 0,
  },
  subContainer: {
    backgroundColor: 'white',
    width: wp('75%'),
    height: hp('100%'),
    paddingTop: 20,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth5,
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
});
