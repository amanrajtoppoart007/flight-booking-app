import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
  Platform,
  UIManager,
} from 'react-native';
import commonStyle from '../layout/Style';
import Font from '../layout/Font';
import Colors from '../layout/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';
import OfferSlider from '../components/Home/OfferSlider';
import PackageModal from '../components/Home/PackageModal';
import TimaticSvg from '../components/Svg/Timatic.svg';
import ArrowRightSvg from '../components/Svg/ArrowRight.svg';
import TimaticFeature from '../components/Home/TimaticFeature';
import RouteItem from '../components/Home/RouteItem';
import CustomStatusBar from '../components/CustomStatusBar';
import StickyMenu from '../components/Home/StickyMenu';
import Header from '../components/Home/Header';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
function Home({navigation}) {
  const [offerModalVisible, setOfferModalVisible] = useState(false);
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
  const {diffClamp} = Animated;
  const navbarHeight = 70;
  const ref = useRef(null);

  const scrollY = useRef(new Animated.Value(0));
  const navbarScrollYClamped = diffClamp(scrollY.current, 0, navbarHeight);

  const navBarTranslateY = navbarScrollYClamped.interpolate({
    inputRange: [0, navbarHeight],
    outputRange: [-navbarHeight, 0],
  });

  const navbarTranslateYNumber = useRef();

  navBarTranslateY.addListener(({value}) => {
    navbarTranslateYNumber.current = value;
  });

  const handleScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {y: scrollY.current},
        },
      },
    ],
    {
      useNativeDriver: true,
    },
  );

  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar backgroundColor={'white'} />
      <Animated.View
        style={[
          styles.stickyNavBar,
          {transform: [{translateY: navBarTranslateY}]},
        ]}>
        <View style={styles.border}>
          <StickyMenu />
        </View>
      </Animated.View>
      <Animated.ScrollView
        scrollEventThrottle={16}
        ref={ref}
        onScroll={handleScroll}
        showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <View style={styles.content}>
            <Header />
            <View>
              <View>
                <OfferSlider
                  setOfferModalVisible={setOfferModalVisible}
                  offerModalVisible={offerModalVisible}
                />
              </View>
              <LinearGradient
                colors={['#FFFFFF', '#E2F2FF', '#FFFFFF', '#F5F7FB']}>
                <View style={styles.contentSection}>
                  <View style={commonStyle.marginTop(20)}>
                    <Text style={styles.routeTitle}>Popular</Text>
                    <Text style={styles.routeTitle}>Routes</Text>
                  </View>
                  <View style={styles.routeWrapper}>
                    {popularRoutes &&
                      popularRoutes.map(item => {
                        return (
                          <RouteItem key={item?.id?.toString()} item={item} />
                        );
                      })}
                  </View>
                  <View style={commonStyle.marginVertical(10)}>
                    <View style={styles.card}>
                      <View style={commonStyle.rowSpaceBetween}>
                        <View>
                          <Text style={styles.cardTitle}>
                            Track your flight
                          </Text>
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
                            <View style={styles.outerCircle}>
                              <View style={styles.circle}>
                                <Icon
                                  name={'plane'}
                                  type={'font-awesome'}
                                  size={10}
                                  color={'white'}
                                />
                              </View>
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
                      <View style={commonStyle.marginVertical(5)}>
                        <Text style={styles.timaticSectionHelperText}>
                          Timatic delivers airlines accurate information based
                          on the passenger’s
                        </Text>
                      </View>
                      <View style={styles.timaticFeatures}>
                        <View style={styles.timaticFeatureSection}>
                          <View>
                            <TimaticFeature title="Nationality" />
                            <View style={commonStyle.marginVertical(7.5)} />
                            <TimaticFeature title="Destination" />
                          </View>
                          <View>
                            <TimaticFeature title="Passport" />
                            <View style={commonStyle.marginVertical(7.5)} />
                            <TimaticFeature title="Transit Points" />
                          </View>
                          <View>
                            <TimaticFeature title="Visas" />
                          </View>
                          <View style={commonStyle.justifyContent('flex-end')}>
                            <TouchableOpacity
                              onPress={() =>
                                navigation.navigate('TimaticWebView')
                              }>
                              <ArrowRightSvg />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </View>
          </View>
        </View>
      </Animated.ScrollView>
      <PackageModal
        isVisible={offerModalVisible}
        setIsVisible={setOfferModalVisible}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...commonStyle.container,
    ...commonStyle.flex(1),
    ...commonStyle.backgroundColor('transparent'),
  },
  wrapper: {
    ...commonStyle.wrapper,
    ...commonStyle.flex(1),
  },
  content: {
    ...commonStyle.content,
    ...commonStyle.flex(1),
  },

  stickyNavBar: {
    position: 'absolute',
    backgroundColor: Colors.white,
    zIndex: 999,
  },
  border: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#707070',
  },

  contentSection: {
    marginHorizontal: 20,
  },
  navbarSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    backgroundColor: 'transparent',
  },
  card: {
    width: '100%',
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
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#F15922',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#DDDDDD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    height: 2,
    backgroundColor: '#DDDDDD',
    width: 120,
  },
  webViewSection: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  webView: {
    width: '100%',
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
  chipSectionWrapper: {height: 70, justifyContent: 'center'},
});

export default Home;
