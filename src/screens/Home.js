import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import commonStyle from '../layout/Style';
import CustomStatusBar from '../components/CustomStatusBar';
import Menu from '../components/Home/Menu';
import Colors from '../layout/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {Icon} from 'react-native-elements';
import Font from '../layout/Font';

import LogoSvg from '../components/Svg/Logo.svg';
import TimaticSvg from '../components/Svg/Timatic.svg';
import DrawerSvg from '../components/Svg/Drawer.svg';
import ArrowRightSvg from '../components/Svg/ArrowRight.svg';

import TimaticFeature from '../components/Home/TimaticFeature';
import ChipSection from '../components/Home/ChipSection';
import OfferSlider from '../components/Home/OfferSlider';
import RouteItem from '../components/Home/RouteItem';
import StickyMenu from '../components/Home/StickyMenu';
function Home({navigation}) {
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 55);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 0],
    outputRange: [0, 55],
  });

  const [popularRoutes] = useState([
    {
      id: 'popular-route-item-one',
      from: 'Qatar(QHA)',
      to: 'Abu Dhabi (AUH)',
    },
    {
      id: 'popular-route-item-two',
      from: 'Dubai (DXB)',
      to: 'Cairo (CAI)',
    },
    {
      id: 'popular-route-item-three',
      from: 'Qatar(QHA)',
      to: 'Abu Dhabi (AUH)',
    },
    {
      id: 'popular-route-item-four',
      from: 'Dubai (DXB)',
      to: 'Cairo (CAI)',
    },
  ]);

  return (
    <SafeAreaView style={commonStyle.container}>
      <CustomStatusBar backgroundColor={Colors.white} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={e => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}>
        <View style={commonStyle.wrapper}>
          <View style={commonStyle.content}>
            <LinearGradient colors={['#FFFFFF', '#FFFFFF', '#E2F2FF']}>
              {/*<Animated.View
                style={{
                  transform: [{translateY: translateY}],
                  elevation: 4,
                  zIndex: 100,
                }}>
                <StickyMenu />
              </Animated.View>*/}

              <View style={styles.navbarSection}>
                <View>
                  <LogoSvg style={styles.logo} resizeMode={'contain'} />
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.toggleDrawer();
                    }}
                    style={styles.drawerToggleButton}>
                    <DrawerSvg />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.menuHeader}>
                <View style={commonStyle.marginVertical(8)}>
                  <Text style={styles.title}>Welcome Faiyaz !</Text>
                </View>
                <View style={commonStyle.marginVertical(8)}>
                  <Menu />
                </View>
              </View>
              <View style={styles.menuFooter}>
                <ChipSection />
              </View>
            </LinearGradient>

            <View>
              <OfferSlider />
            </View>
            <LinearGradient
              style={commonStyle.paddingHorizontal(8)}
              colors={['#FFFFFF', '#FFFFFF', '#E2F2FF', '#F5F7FB']}>
              <View style={commonStyle.marginHorizontal(5)}>
                <Text style={styles.routeTitle}>Popular</Text>
                <Text style={styles.routeTitle}>Routes</Text>
              </View>
              <View style={styles.routeWrapper}>
                {popularRoutes &&
                  popularRoutes.map(item => {
                    return <RouteItem key={item?.id?.toString()} item={item} />;
                  })}
              </View>
              <View style={commonStyle.marginVertical(10)}>
                <View style={styles.card}>
                  <View style={commonStyle.rowSpaceBetween}>
                    <View>
                      <Text style={styles.cardTitle}>Track your flight</Text>
                    </View>
                    <View>
                      <TouchableOpacity>
                        <ArrowRightSvg />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={commonStyle.marginVertical(10)}>
                    <View style={commonStyle.rowSpaceBetween}>
                      <View>
                        <Icon
                          name={'primitive-dot'}
                          type={'octicon'}
                          size={30}
                          color={'#F15922'}
                        />
                      </View>
                      <View style={styles.divider} />
                      <View>
                        <View style={styles.circle}>
                          <Icon
                            name={'plane'}
                            type={'font-awesome'}
                            size={15}
                            color={'white'}
                          />
                        </View>
                      </View>
                      <View style={styles.divider} />
                      <View>
                        <Icon
                          name={'location-pin'}
                          type={'material-icon'}
                          size={30}
                          color={'#F15922'}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              <View style={commonStyle.marginVertical(15)}>
                <View style={styles.webView}>
                  <View style={commonStyle.marginVertical(10)}>
                    <TimaticSvg />
                  </View>
                  <Text style={styles.timaticSectionHelperText}>
                    Timatic delivers airlines accurate information based on the
                    passenger’s
                  </Text>
                  <View style={styles.timaticFeatures}>
                    <View style={styles.timaticFeatureSection}>
                      <View>
                        <TimaticFeature title="Nationality" />
                        <TimaticFeature title="Destination" />
                      </View>
                      <View>
                        <TimaticFeature title="Passport" />
                        <TimaticFeature title="Transit Points" />
                      </View>
                      <View>
                        <TimaticFeature title="Visas" />
                      </View>
                      <View style={commonStyle.justifyContent('flex-end')}>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('TimaticWebView')}>
                          <ArrowRightSvg />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navbarSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  logo: {
    width: 110,
    height: 110,
  },
  drawerToggleButton: {
    width: 44,
    height: 44,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(79, 191, 219, 0.2)',
  },
  menuHeader: {
    paddingHorizontal: 10,
  },
  menuFooter: {
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#242A37',
  },

  routeTitle: {
    fontFamily: Font.AvenirBlack,
    fontSize: 16,
    color: Colors.black,
  },
  routeWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    width: wp('95%'),
    height: 100,
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 20,
  },

  cardTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: Colors.black,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#F15922',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    borderWidth: 1,
    borderColor: Colors.lightText,
    width: 120,
  },
  webViewSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  webView: {
    width: wp('95%'),
    height: hp('25%'),
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 20,
  },
  timaticFeatureSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  timaticFeatures: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  timaticNavigationSection: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height: '65%',
  },
  timaticSectionHelperText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#242A37',
  },
});

export default Home;
