import React from 'react';
import {
  Animated,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import LogoSvg from '../Svg/Logo.svg';
import DrawerSvg from '../Svg/Drawer.svg';
import commonStyle from '../../layout/Style';
import Menu from './Menu';
import ChipSection from './ChipSection';
import Font from '../../layout/Font';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import StickyMenu from './StickyMenu';
import Colors from '../../layout/Colors';

const HEADER_MAX_HEIGHT = heightPercentageToDP('40%');
const HEADER_MIN_HEIGHT = 140;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const AnimatedHeader = ({scrollY}) => {
  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });

  const contentScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });
  const contentScaleY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, -8],
    extrapolate: 'clamp',
  });

  const topBarScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  });
  const topBarScaleY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, 0],
    extrapolate: 'clamp',
  });

  const navigation = useNavigation();

  return (
    <Animated.View
      style={[styles.header, {transform: [{translateY: headerTranslateY}]}]}>
      <Animated.View
        style={[
          {
            transform: [{scale: contentScale}, {translateY: contentScaleY}],
          },
        ]}>
        <LinearGradient colors={['#FFFFFF', '#FFFFFF', '#E2F2FF']}>
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
      </Animated.View>

      <Animated.View
        style={[
          styles.stickyNavBar,
          {
            transform: [{scale: topBarScale}, {translateY: topBarScaleY}],
          },
        ]}>
        <View style={styles.border}>
          <StickyMenu />
        </View>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  stickyNavBar: {
    position: 'absolute',
    marginTop: HEADER_MIN_HEIGHT + StatusBar.currentHeight,
    zIndex: 999,
    backgroundColor: Colors.white,
  },
  border: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#707070',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_MIN_HEIGHT + StatusBar.currentHeight,
    backgroundColor: 'white',
  },
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
});

export default AnimatedHeader;
