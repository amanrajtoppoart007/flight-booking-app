import React from 'react';
import {BottomSheet, Icon} from 'react-native-elements';
import Colors from '../../layout/Colors';
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import commonStyle from '../../layout/Style';
import {TabView} from 'react-native-tab-view';
import Font from '../../layout/Font';

import CloseDarkSvg from '../Svg/CloseDark.svg';
import HotelImg from '../Svg/Slider/HotelImageTwo.svg';

function OverView() {
  return (
    <ScrollView>
      <Text style={styles.smallText}>
        DESERT SAFARI IN QATAR{'\n'} A visit to Doha, Qatar, is undeniably
        incomplete if you miss the inland sea desert safari.{'\n'}Desert safari
        in Doha, Qatar is an electrifying experience in itself and a must among
        the Holiday packages in Qatar. An exciting desert adventure and a day
        out with a thrilling dune bashing experience in Mesaieed’s relaxing
        singing dunes. Stop at the camel camp to ride a camel or relax in the
        Arabic tent. Our team of professional drivers will take you to a
        thrilling desert, driving across the dunes. This getaway takes you to
        the beautiful inland sea, a.k.a Khor Al Adaid, where Saudi Arabia is on
        the opposite side. Explore this UNESCO-recognized natural reserve with
        its ecosystem; this is one of the few places in the world where the sea
        meets the heart of the desert. While the drivers are handling the 4X4
        vehicle to give you either a quick and bumpy ride or a smooth and casual
        one, enjoy the unparalleled view of the majestic endless desert.
      </Text>
    </ScrollView>
  );
}

function PackageModal({isVisible, setIsVisible}) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Overview', title: 'Overview'},
    {key: 'InclusionsExclusions', title: 'Inclusions & Exclusions'},
    {key: 'Cancellation', title: 'Cancellation'},
  ]);

  const renderScene = ({route, jumpTo}) => {
    switch (route.key) {
      case 'Overview':
        return <OverView jumpTo={jumpTo} />;
      case 'InclusionsExclusions':
        return <OverView jumpTo={jumpTo} />;
      case 'Cancellation':
        return <OverView jumpTo={jumpTo} />;
      default:
        return <OverView jumpto={jumpTo} />;
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
              <Animated.Text style={styles.tabTitle(isActive)}>
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
    <BottomSheet isVisible={isVisible} containerStyle={styles.bottomSheetStyle}>
      <View style={styles.card}>
        <View
          style={[commonStyle.rowSpaceBetween, commonStyle.marginVertical(5)]}>
          <View>
            <Text style={styles.title}>
              Discover Dubai! {'\n'}A jewel in the Arabian desert
            </Text>
          </View>
          <TouchableOpacity
            style={styles.zIndex}
            onPress={() => setIsVisible(false)}>
            <CloseDarkSvg />
          </TouchableOpacity>
        </View>
        <HotelImg />
        <View style={commonStyle.marginVertical(10)}>
          <Text style={styles.LightText}>
            QAR <Text style={styles.BlackText}>1500.00</Text>
          </Text>
          <Text style={styles.smallText}>
            (Per person on Double/Twin Occupancy)
          </Text>
          <View
            style={[commonStyle.rowFlexStart, commonStyle.marginVertical(5)]}>
            <View style={[commonStyle.rowFlexStart, styles.marginRight(20)]}>
              <Icon
                name={'clockcircleo'}
                type={'antdesign'}
                size={16}
                color={Colors.primary}
              />
              <Text style={styles.LightText}> Half Day</Text>
            </View>
            <View style={commonStyle.rowFlexStart}>
              <Icon
                name={'calendar'}
                type={'antdesign'}
                size={16}
                color={Colors.primary}
              />
              <Text style={styles.LightText}> 09/11/2020 to 10/31/2021</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.WhiteText}>Submit Enquiry</Text>
        </TouchableOpacity>

        <View>
          <View style={{height: hp('100%')}}>
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
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp('100%'),
    height: hp('100%'),
  },
  bottomSheetStyle: {
    flex: 1,
    backgroundColor: Colors.bottomSheet,
  },
  marginRight(m) {
    return {
      marginRight: m,
    };
  },
  zIndex: {
    zIndex: 1,
  },
  smallText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#6C6C6C',
  },
  LightText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
  },
  card: {
    height: hp('90%'),
    backgroundColor: Colors.white,
    padding: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  Button: {
    borderRadius: 8,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    marginHorizontal: 5,
  },
  title: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: Colors.primary,
  },
  BlackText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: Colors.black,
  },
  WhiteText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 16,
    color: Colors.white,
  },
  tabTitle(isActive) {
    return {
      fontFamily: Font.AvenirMedium,
      fontSize: 12,
      color: isActive ? Colors.primary : '#6C6C6C',
    };
  },

  tabBar: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
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
    marginHorizontal: 5,
  },
});

export default PackageModal;
