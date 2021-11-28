import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import commonStyle from '../../layout/Style';
import {Icon} from 'react-native-elements';
import Colors from '../../layout/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Departure from './Schedule/Departure';
import Arrival from './Schedule/Arrival';
import {TabView} from 'react-native-tab-view';
import Font from '../../layout/Font';

function Schedule() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'departure', title: 'Departure'},
    {key: 'arrival', title: 'Arrival'},
  ]);

  const renderScene = ({route, jumpTo}) => {
    switch (route.key) {
      case 'departure':
        return <Departure jumpTo={jumpTo} />;
      case 'arrival':
        return <Arrival jumpTo={jumpTo} />;
      default:
        return <Departure jumpto={jumpTo} />;
    }
  };

  const _handleIndexChange = i => setIndex(i);

  const _renderTabBar = props => {
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const isActive = i === index;

          return (
            <TouchableOpacity
              key={i?.toString()}
              style={styles.tabItem}
              onPress={() => setIndex(i)}>
              <Text style={styles.tabTitle(isActive)}>{route.title}</Text>
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
    <View style={commonStyle.marginVertical(10)}>
      <View style={commonStyle.rowSpaceBetween}>
        <View>
          <TextInput placeholder={'Airport Name…'} style={styles.searchInput} />
        </View>
        <View>
          <TouchableOpacity style={styles.searchButton}>
            <Icon
              name={'search'}
              type={'font-awesome'}
              color={Colors.white}
              size={25}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={styles.tabViewWrapper}>
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            renderTabBar={_renderTabBar}
            onIndexChange={_handleIndexChange}
            initialLayout={{width: wp('100%')}}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabViewWrapper: {
    marginVertical: 10,
    height: hp('100%'),
  },
  tabTitle(isActive) {
    return {
      fontFamily: isActive ? Font.AvenirHeavy : Font.AvenirMedium,
      fontSize: 14,
      color: isActive ? Colors.primary : '#6C6C6C',
    };
  },
  searchInput: {
    width: wp('75%'),
    height: 45,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#C3C3C3',
    paddingHorizontal: 5,
  },
  searchButton: {
    width: 46,
    height: 45,
    borderRadius: 4,
    backgroundColor: '#F15922',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: Colors.black,
  },
  tabBar: {
    width: wp('50%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#DDDDDD',
  },
  underline: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
    marginTop: 10,
  },
  underlineTransparent: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: Colors.transparent,
    marginTop: 10,
  },
  tabItem: {
    alignItems: 'center',
  },
});

export default Schedule;
