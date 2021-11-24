import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Animated,
  TextInput,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Colors from '../../layout/Colors';
import {TabView} from 'react-native-tab-view';
import RangeSlider from 'rn-range-slider';
import Font from '../../layout/Font';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import commonStyle from '../../layout/Style';
import HighPrice from '../Svg/Hotel/HighPrice.svg';
import ThumbsUp from '../Svg/Hotel/ThumbsUp.svg';
import Offer from '../Svg/Hotel/Offer.svg';
import Stars from '../Svg/Hotel/Stars.svg';
import LowPrice from '../Svg/Hotel/LowPrice.svg';
import Plane from '../Svg/Hotel/Plane.svg';
import OrangeSearch from '../Svg/Hotel/OrangeSearch.svg';
import DarkStar from '../Svg/Hotel/DarkStar.svg';
import OrangeStar from '../Svg/Hotel/OrangeStar.svg';

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

const Header = ({onClose}) => {
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
    </View>
  );
};

function SearchBar({text}) {
  return (
    <View style={styles.SearchBar}>
      <TextInput
        placeholder={text}
        placeholderTextColor={Colors.lightText}
        style={styles.input}
      />
      <OrangeSearch />
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
      <View
        style={[commonStyle.rowSpaceBetween, commonStyle.marginHorizontal(5)]}>
        <Text style={styles.Money}>
          <Text style={styles.LightText}> QAR </Text>100.00
        </Text>
        <Text style={styles.Money}>
          <Text style={styles.LightText}> QAR </Text>1500.00
        </Text>
      </View>
      <View style={styles.divider} />
    </View>
  );
}

function BorderButton({onPress, num, selected = false}) {
  return (
    <TouchableOpacity style={styles.BorderButton(selected)} onPress={onPress}>
      <Text style={styles.ButtonText(selected)}>{num}</Text>
      {selected ? <OrangeStar /> : <DarkStar />}
    </TouchableOpacity>
  );
}

function Ratings() {
  const [Selected, setSelected] = useState();
  return (
    <View>
      <Text style={styles.listTitle()}>Ratings</Text>
      <View style={[commonStyle.rowSpaceBetween, commonStyle.margin(10)]}>
        <BorderButton
          selected={Selected === '5'}
          onPress={() => setSelected('5')}
          num="5"
        />
        <BorderButton
          selected={Selected === '4'}
          onPress={() => setSelected('4')}
          num="4"
        />
        <BorderButton
          selected={Selected === '3'}
          onPress={() => setSelected('3')}
          num="3"
        />
        <BorderButton
          selected={Selected === '2'}
          onPress={() => setSelected('2')}
          num="2"
        />
        <BorderButton
          selected={Selected === '1'}
          onPress={() => setSelected('1')}
          num="1"
        />
      </View>
      <View style={styles.divider} />
    </View>
  );
}

function Filter() {
  return (
    <ScrollView>
      <View style={commonStyle.marginVertical(5)}>
        <Text style={styles.listTitle()}>Hotel Name</Text>
        <SearchBar text="Search by Hotel" />
      </View>
      <View style={styles.divider} />
      <View style={commonStyle.marginVertical(5)}>
        <Text style={styles.listTitle()}>Board Basis</Text>
        <View
          style={[
            commonStyle.rowSpaceAround,
            commonStyle.marginHorizontal(10),
          ]}>
          <LightBorderBtn onPress={() => {}} listTitle="Room Only" />
          <LightBorderBtn onPress={() => {}} listTitle="Breakfast" />
        </View>
        <View
          style={[
            commonStyle.rowSpaceAround,
            commonStyle.marginHorizontal(10),
          ]}>
          <LightBorderBtn onPress={() => {}} listTitle="HalfBoard" />
          <LightBorderBtn onPress={() => {}} listTitle="FullBoard" />
        </View>
      </View>
      <View style={styles.divider} />
      <GraphSlider />
      <Ratings />
      <View style={commonStyle.marginVertical(5)}>
        <Text style={styles.listTitle()}>Area</Text>
        <SearchBar text="Search by Area" />
        <View
          style={[
            commonStyle.marginVertical(5),
            commonStyle.marginHorizontal(5),
          ]}>
          <ListCheckBox text="Al Barsha" />
          <ListCheckBox text="Al Bustan Center" />
          <ListCheckBox text="Al Bustan Center" />
          <ListCheckBox text="Al Mamzar Beach Park" />
          <ListCheckBox text="Al Qusais" />
        </View>
      </View>
      <View style={styles.divider} />

      <View style={commonStyle.marginVertical(5)}>
        <Text style={styles.listTitle()}>Landmarks</Text>
        <SearchBar text="Search by Landmarks" />
        <View
          style={[
            commonStyle.marginVertical(5),
            commonStyle.marginHorizontal(5),
          ]}>
          <ListCheckBox text="Al Barsha" />
          <ListCheckBox text="Al Bustan Center" />
          <ListCheckBox text="Al Bustan Center" />
          <ListCheckBox text="Al Mamzar Beach Park" />
          <ListCheckBox text="Al Qusais" />
        </View>
      </View>
      <View style={commonStyle.marginVertical(30)} />
    </ScrollView>
  );
}

const SortButton = ({isSelected = false, listTitle, onPress, ShortBtnIcon}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.sortButton}>
      {ShortBtnIcon}
      <Text style={styles.listTitle(isSelected)}>{listTitle}</Text>
    </TouchableOpacity>
  );
};
const LightBorderBtn = ({listTitle, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.Button}>
      <Text style={styles.BorderBtnText}>{listTitle}</Text>
    </TouchableOpacity>
  );
};

const SortBy = () => {
  const [Selected, setSelected] = useState('Recommended');
  return (
    <ScrollView>
      <SortButton
        onPress={() => setSelected('Recommended')}
        listTitle="Recommended"
        ShortBtnIcon={<ThumbsUp />}
        isSelected={Selected === 'Recommended'}
      />
      <SortButton
        onPress={() => setSelected('Deals')}
        listTitle="Deals"
        ShortBtnIcon={<Offer />}
        isSelected={Selected === 'Deals'}
      />
      <SortButton
        onPress={() => setSelected('Stars (Highest)')}
        listTitle="Stars (Highest)"
        ShortBtnIcon={<Stars />}
        isSelected={Selected === 'Stars (Highest)'}
      />
      <SortButton
        onPress={() => setSelected('Price (Highest)')}
        listTitle="Price (Highest)"
        ShortBtnIcon={<HighPrice />}
        isSelected={Selected === 'Price (Highest)'}
      />
      <SortButton
        onPress={() => setSelected('Price (Lowest)')}
        listTitle="Price (Lowest)"
        ShortBtnIcon={<LowPrice />}
        isSelected={Selected === 'Price (Lowest)'}
      />
      <SortButton
        onPress={() => setSelected('Expedia Rating')}
        listTitle="Expedia Rating"
        ShortBtnIcon={<Plane />}
        isSelected={Selected === 'Expedia Rating'}
      />
    </ScrollView>
  );
};

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
      fontFamily: Font.AvenirRegular,
      marginRight: 4,
    };
  },
  BorderButton(selected = false) {
    return {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 8,
      borderWidth: 1,
      borderColor: !selected ? Colors.border : Colors.orange,
      borderRadius: 6,
      paddingVertical: 5,
      backgroundColor: Colors.white,
      elevation: 8,
      marginHorizontal: 4,
    };
  },
  CheckText: {
    fontSize: 16,
    color: Colors.lightText,
    fontFamily: Font.AvenirMedium,
  },
  SearchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#AAAAAA',
    marginHorizontal: 10,
    marginTop: 10,
    alignItems: 'center',
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
  input: {
    fontSize: 14,
    margin: 0,
    padding: 0,
    fontFamily: Font.AvenirRegular,
    color: Colors.black,
    flex: 0.95,
  },
  LightText: {
    fontSize: 14,
    color: Colors.lightText,
    fontFamily: Font.AvenirLight,
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
    paddingTop: 20,
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
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: Colors.black,
  },
  sortClear: {
    fontSize: 14,
    color: Colors.secondary,
    fontFamily: Font.AvenirMedium,
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
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#AAAAAA',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    margin: 10,
    alignSelf: 'stretch',
  },
  Button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#AAAAAA',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    width: '45%',
    marginTop: 10,
  },
  listIcon: {
    marginRight: 8,
    color: Colors.black,
  },
  listTitle(isSelected = false) {
    return {
      fontSize: 16,
      color: isSelected ? Colors.primary : Colors.black,
      fontFamily: Font.AvenirRegular,
      marginLeft: 15,
    };
  },
  Money: {
    fontFamily: Font.AvenirRegular,
    fontSize: 14,
    color: Colors.black,
  },
  BorderBtnText: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: Font.AvenirRegular,
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
