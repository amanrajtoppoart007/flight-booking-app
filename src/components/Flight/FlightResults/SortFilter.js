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
import commonStyle from '../../../layout/Style';
import Deer from '../../Svg/Deer.svg';
import AirFrance from '../../Svg/AirFrance.svg';
import EgyptAir from '../../Svg/EgyptAir.svg';
import RoyalJordanian from '../../Svg/RoyalJordanian.svg';

export const Header = ({onClose}) => {
  return (
    <View style={styles.HeaderContainer}>
      <View style={styles.sortContainer2}>
        <Text style={styles.sortTitle}>Sort & Filter Your Results</Text>
        <Text style={styles.sortClear}>Clear</Text>
        <Icon
          onPress={onClose}
          name={'close'}
          type={'antdesign'}
          size={20}
          color={'black'}
        />
      </View>
      <View style={commonStyle.marginBottom(15)} />
    </View>
  );
};

function FlightTabView() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'DOH - DXB', title: 'DOH - DXB'},
    {key: 'DXB - DOH', title: 'DXB - DOH'},
  ]);

  const renderScene = ({route, jumpTo}) => {
    switch (route.key) {
      case 'DOH - DXB':
        return <TabFlightView jumpTo={jumpTo} />;
      case 'DXB - DOH':
        return <TabFlightView jumpTo={jumpTo} />;
      default:
        return <TabFlightView jumpto={jumpTo} />;
    }
  };
  const _handleIndexChange = i => setIndex(i);

  const _renderTabBar = props => {
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = i === index ? Colors.primary : '#6C6C6C';
          return (
            <TouchableOpacity
              key={i?.toString()}
              style={styles.tabItem}
              onPress={() => setIndex(i)}>
              <Animated.Text style={[styles.title, {color}]}>
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
    <View style={styles.FlightTabContainer}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={_renderTabBar}
        onIndexChange={_handleIndexChange}
        initialLayout={{width: wp('75%')}}
      />
    </View>
  );
}

function ListCheckBox({text, svg = null}) {
  const [check, setCheck] = useState(false);
  return (
    <View
      style={[
        commonStyle.rowSpaceBetween,
        commonStyle.marginHorizontal(10),
        commonStyle.marginVertical(5),
      ]}>
      <View style={commonStyle.rowFlexStart}>
        {svg && svg}
        <Text style={styles.CheckText}>{text}</Text>
      </View>
      <Icon
        onPress={() => setCheck(!check)}
        name={check ? 'checkbox-marked' : 'checkbox-blank-outline'}
        type={'material-community'}
        size={22}
        color={Colors.primary}
      />
    </View>
  );
}

function TabFlightView() {
  return (
    <View>
      <View style={commonStyle.marginVertical(5)}>
        <Text style={styles.listTitle()}>Departure Time</Text>
        <View
          style={[
            commonStyle.rowSpaceBetween,
            commonStyle.margin(5),
            commonStyle.marginTop(10),
          ]}>
          <IconButton
            icon="partly-sunny-outline"
            onPress={() => {}}
            text="12AM-6AM"
          />
          <IconButton icon="sunny" onPress={() => {}} text="6AM-12PM" />
        </View>
        <View style={[commonStyle.rowSpaceBetween, commonStyle.margin(5)]}>
          <IconButton
            icon="cloudy-night-outline"
            onPress={() => {}}
            text="12PM-6PM"
          />
          <IconButton icon="moon" onPress={() => {}} text="6PM-12AM" />
        </View>
        <View style={styles.divider} />
      </View>
      <View style={commonStyle.marginVertical(5)}>
        <Text style={styles.listTitle()}>Arrival Time</Text>
        <View
          style={[
            commonStyle.rowSpaceBetween,
            commonStyle.margin(5),
            commonStyle.marginTop(10),
          ]}>
          <IconButton
            icon="partly-sunny-outline"
            onPress={() => {}}
            text="12AM-6AM"
          />
          <IconButton icon="sunny" onPress={() => {}} text="6AM-12PM" />
        </View>
        <View style={[commonStyle.rowSpaceBetween, commonStyle.margin(5)]}>
          <IconButton
            icon="cloudy-night-outline"
            onPress={() => {}}
            text="12PM-6PM"
          />
          <IconButton icon="moon" onPress={() => {}} text="6PM-12AM" />
        </View>
        <View style={styles.divider} />
      </View>
      <View>
        <Text style={styles.listTitle()}>Fare Policy</Text>
        <ListCheckBox text="Refundable" />
        <ListCheckBox text="Non-Refundable" />
        <View style={styles.divider} />
        <Text style={styles.listTitle()}>Airlines</Text>
        <ListCheckBox
          svg={<Deer style={styles.SvgIcon} />}
          text="Qatar Airways"
        />
        <ListCheckBox
          svg={<EgyptAir style={styles.SvgIcon} />}
          text="Egypt Air"
        />
        <ListCheckBox
          svg={<RoyalJordanian style={styles.SvgIcon} />}
          text="Royal Jordanian"
        />
        <ListCheckBox
          svg={<AirFrance style={styles.SvgIcon} />}
          text="Air France"
        />
      </View>
    </View>
  );
}
function GraphSlider() {
  const renderThumb = useCallback(
    () => (
      <View elevation={5} style={styles.SliderIconContainer}>
        <Icon
          name={'circle'}
          type={'entypo'}
          size={16}
          color={Colors.primary}
        />
      </View>
    ),
    [],
  );
  const renderRail = useCallback(() => <View style={styles.Rail} />, []);
  const renderRailSelected = useCallback(
    () => <View style={styles.RailSelected} />,
    [],
  );
  return (
    <View>
      <Text style={styles.listTitle()}>Price</Text>
      <RangeSlider
        style={[commonStyle.margin(10), commonStyle.marginTop(40)]}
        min={0}
        max={100}
        step={1}
        floatingLabel
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
      />
      <View style={commonStyle.rowSpaceBetween}>
        <Text style={styles.listTitle()}>
          <Text style={styles.LightText}> QAR </Text>100.00
        </Text>
        <Text style={styles.listTitle()}>
          <Text style={styles.LightText}> QAR </Text>1500.00
        </Text>
      </View>
      <View style={styles.divider} />
    </View>
  );
}

function BorderButton({onPress, text, selected = false}) {
  return (
    <TouchableOpacity style={styles.BorderButton(selected)} onPress={onPress}>
      <Text style={styles.ButtonText(selected)}>{text}</Text>
    </TouchableOpacity>
  );
}

function IconButton({onPress, text, icon}) {
  return (
    <TouchableOpacity
      style={[styles.IconButton, commonStyle.rowSpaceEven]}
      onPress={onPress}>
      <Icon name={icon} type={'ionicon'} size={18} color={Colors.lightText} />
      <Text style={styles.ButtonText()}>{text}</Text>
    </TouchableOpacity>
  );
}

function Stops() {
  const [Selected, setSelected] = useState();
  return (
    <View>
      <Text style={styles.listTitle()}>Stops</Text>
      <View style={[commonStyle.rowSpaceBetween, commonStyle.margin(10)]}>
        <BorderButton
          selected={Selected === 'Non-stop'}
          onPress={() => setSelected('Non-stop')}
          text="Non-stop"
        />
        <BorderButton
          selected={Selected === '1 stop'}
          onPress={() => setSelected('1 stop')}
          text="1 stop"
        />
        <BorderButton
          selected={Selected === '2+ stop'}
          onPress={() => setSelected('2+ stop')}
          text="2+ stop"
        />
      </View>
      <View style={styles.divider} />
    </View>
  );
}

function Filter() {
  return (
    <ScrollView>
      <GraphSlider />
      <Stops />
      <FlightTabView />
    </ScrollView>
  );
}

const SortList = ({isSelected = false, listTitle, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.listContainer}>
      <Icon
        name={'check'}
        type={'antdesign'}
        size={22}
        color={isSelected ? 'green' : Colors.transparent}
      />
      <Text style={styles.listTitle(isSelected)}>{listTitle}</Text>
    </TouchableOpacity>
  );
};

const SortBy = () => {
  const [Selected, setSelected] = useState('Departure (Earliest)');
  return (
    <ScrollView>
      <SortList
        onPress={() => setSelected('Departure (Earliest)')}
        listTitle="Departure (Earliest)"
        isSelected={Selected === 'Departure (Earliest)'}
      />
      <SortList
        onPress={() => setSelected('Departure (Latest)')}
        listTitle="Departure (Latest)"
        isSelected={Selected === 'Departure (Latest)'}
      />
      <SortList
        onPress={() => setSelected('Arrival (Earliest)')}
        listTitle="Arrival (Earliest)"
        isSelected={Selected === 'Arrival (Earliest)'}
      />
      <SortList
        onPress={() => setSelected('Arrival (Latest)')}
        listTitle="Arrival (Latest)"
        isSelected={Selected === 'Arrival (Latest)'}
      />
      <SortList
        onPress={() => setSelected('Duration (Shortest)')}
        listTitle="Duration (Shortest)"
        isSelected={Selected === 'Duration (Shortest)'}
      />
      <SortList
        onPress={() => setSelected('Duration (Longest)')}
        listTitle="Duration (Longest)"
        isSelected={Selected === 'Duration (Longest)'}
      />
      <SortList
        onPress={() => setSelected('Price (Highest)')}
        listTitle="Price (Highest)"
        isSelected={Selected === 'Price (Highest)'}
      />
      <SortList
        onPress={() => setSelected('Price (Lowest)')}
        listTitle="Price (Lowest)"
        isSelected={Selected === 'Price (Lowest)'}
      />
    </ScrollView>
  );
};

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
  divider: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#D9D9D9',
    marginVertical: 10,
    marginHorizontal: 10,
  },
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
  sortText: {
    fontSize: 15,
    marginRight: 24,
    color: Colors.gray,
    fontFamily: Font.AvenirRegular,
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
