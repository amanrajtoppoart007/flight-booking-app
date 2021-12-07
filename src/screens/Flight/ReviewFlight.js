import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import FareRules from './FareRules';
import FareDetails from './FareDetails';
import FlightDetails from './FlightDetails';
import commonStyle from '../../layout/Style';
import Colors from '../../layout/Colors';
import Font from '../../layout/Font';
import CustomStatusBar from '../../components/CustomStatusBar';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {TabView} from 'react-native-tab-view';

function ReviewFlight() {
  const navigation = useNavigation();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'FlightDetails', title: 'Flight Details'},
    {key: 'FareDetails', title: 'Fare Details'},
    {key: 'FareRules', title: 'Fare Rules'},
  ]);

  const renderScene = ({route, jumpTo}) => {
    switch (route.key) {
      case 'FlightDetails':
        return <FlightDetails jumpTo={jumpTo} />;
      case 'FareDetails':
        return <FareDetails jumpTo={jumpTo} />;
      case 'FareRules':
        return <FareRules jumpTo={jumpTo} />;
      default:
        return <FlightDetails jumpto={jumpTo} />;
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
              <Animated.Text style={styles.tabTitle(i == index)}>
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
      <CustomStatusBar backgroundColor={Colors.backgroundColor} />
      <View
        style={[
          commonStyle.rowSpaceBetween,
          commonStyle.margin(10),
          commonStyle.marginHorizontal(15),
        ]}>
        <Text style={styles.textBold}>Review your flight to Dubai</Text>
        <Icon
          onPress={() => navigation.goBack()}
          name={'close'}
          type={'antdesign'}
          size={22}
          color={'black'}
        />
      </View>
      <View style={styles.contentContainer}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          renderTabBar={_renderTabBar}
          onIndexChange={_handleIndexChange}
          initialLayout={{width: widthPercentageToDP('100%')}}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  divider: {
    borderWidth: 0.5,
    borderColor: '#D9D9D9',
    marginVertical: 10,
    marginHorizontal: 10,
  },

  textBold: {
    color: 'black',
    fontSize: 16,
    fontFamily: Font.AvenirHeavy,
  },
  tabTitle(isActive) {
    return {
      fontFamily: Font.AvenirMedium,
      fontSize: 12,
      color: isActive ? Colors.primary : '#6C6C6C',
    };
  },
  contentContainer: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 5,
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
});

export default ReviewFlight;
