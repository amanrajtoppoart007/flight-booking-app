import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import LogoSvg from '../Svg/Logo.svg';
import DrawerSvg from '../Svg/Drawer.svg';
import commonStyle from '../../layout/Style';
import Menu from './Menu';
import ChipSection from './ChipSection';
import Font from '../../layout/Font';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View>
      <LinearGradient colors={['#FFFFFF', '#FFFFFF', '#E2F2FF']}>
        <View style={styles.navbarSection}>
          <View>
            <LogoSvg style={styles.logo} resizeMode={'contain'} />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation?.toggleDrawer();
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
        <View style={styles.contentSection}>
          <ChipSection />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
  },
  contentSection: {
    marginHorizontal: 20,
  },
  border: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#707070',
  },

  navbarSection: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 110,
    height: 110,
    left: -10,
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
    marginHorizontal: 20,
  },
  menuFooter: {},
  title: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#242A37',
  },
});

export default Header;
