import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Colors from '../../layout/Colors';
import commonStyle from '../../layout/Style';

import CloseSvg from '../Svg/SideBar/Close.svg';
import LanguageSvg from '../Svg/SideBar/Language.svg';
import CurrencySvg from '../Svg/SideBar/Qar.svg';
import AboutSvg from '../Svg/SideBar/About.svg';
import CallSvg from '../Svg/SideBar/Call.svg';
import PolicySvg from '../Svg/SideBar/Policy.svg';
import TermsSvg from '../Svg/SideBar/Terms.svg';
import SocialSvg from '../Svg/SideBar/Social.svg';
import ArrowRightSvg from '../Svg/SideBar/ArrowRight.svg';

import QatarSvg from '../Svg/SideBar/Qatar.svg';
import SaudiSvg from '../Svg/SideBar/Saudi.svg';
import UAESvg from '../Svg/SideBar/UAE.svg';

import Font from '../../layout/Font';
import Accordion from './Accordion';

const SideBar = props => {
  const [menus] = useState([
    {
      key: 'menu-item-one',
      title: 'About Us',
      svg: AboutSvg,
      route: 'Terms',
    },
    {
      key: 'menu-item-two',
      title: 'Contact Us',
      svg: CallSvg,
      route: 'Faq',
    },
    {
      key: 'menu-item-three',
      title: 'Privacy & Policy',
      svg: PolicySvg,
      route: 'Privacy',
    },
    {
      key: 'menu-item-four',
      title: 'Terms & Conditions',
      svg: TermsSvg,
      route: 'Terms',
    },
    {
      key: 'menu-item-five',
      title: 'Social',
      svg: SocialSvg,
      route: 'Social',
    },
    {
      key: 'menu-item-six',
      title: 'Lcc Navigator',
      svg: SocialSvg,
      route: 'LccNavigator',
    },
    {
      key: 'menu-item-seven',
      title: 'Flight by Flight Navigator',
      svg: SocialSvg,
      route: 'FlightByNavigator',
    },
  ]);

  const [currencies] = useState([
    {
      id: 'currency-id-one',
      name: 'Qatari Riyal',
      shortName: 'QAR',
      svg: QatarSvg,
    },
    {
      id: 'currency-id-two',
      name: 'UAE Dirham',
      shortName: 'AED',
      svg: UAESvg,
    },
    {
      id: 'currency-id-three',
      name: 'Saudi Riyal',
      shortName: 'SAR',
      svg: SaudiSvg,
    },
  ]);

  const logout = async () => {};

  const navigate = routeKey => {
    routeKey === 'LogOut' ? logout() : props.navigation.navigate(routeKey);
  };

  const renderItem = ({item}) => (
    <View style={styles.menu}>
      <View style={commonStyle.rowSpaceBetween}>
        <View>
          <item.svg />
        </View>
        <View style={commonStyle.marginHorizontal(8)}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigate(item?.route)}>
          <ArrowRightSvg />
        </TouchableOpacity>
      </View>
    </View>
  );

  const CurrencySection = () => {
    return (
      <View style={styles.currencyMenuWrapper}>
        {currencies &&
          currencies.map((item, index) => {
            return (
              <View
                key={index}
                style={styles.currencyMenu(index, currencies?.length)}>
                <View>
                  <item.svg />
                </View>
                <View>
                  <Text style={styles.title}>{item.name}</Text>
                </View>
              </View>
            );
          })}
      </View>
    );
  };

  const keyExtractor = item => item.key.toString();
  return (
    <SafeAreaView style={styles.container}>
      <View style={commonStyle.flex(1)}>
        <View style={styles.headerSection}>
          <View>
            <Text style={styles.moreText}>More</Text>
          </View>
          <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
            <CloseSvg />
          </TouchableOpacity>
        </View>
        <View style={commonStyle.marginVertical(10)}>
          <View style={commonStyle.marginVertical(15)}>
            <Accordion
              SvgIcon={LanguageSvg}
              title={'Languages'}
              visible={false}
              Content={<CurrencySection />}
            />
          </View>
          <View style={commonStyle.marginVertical(15)}>
            <Accordion
              SvgIcon={CurrencySvg}
              title={'Change Currency'}
              visible={false}
              Content={<CurrencySection />}
            />
          </View>

          <FlatList
            keyExtractor={keyExtractor}
            data={menus}
            renderItem={renderItem}
          />
        </View>
      </View>
      <View style={styles.versionSection}>
        <Text style={styles.version}>App Version V1.1.0</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  headerSection: {
    ...commonStyle.rowSpaceBetween,
    ...commonStyle.marginVertical(10),
  },
  moreText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#242A37',
  },
  versionSection: {
    flex: 1,
    position: 'absolute',
    bottom: 20,
    left: 15,
  },
  version: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#163D68',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
    marginVertical: 15,
  },
  currencyMenuWrapper: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#C3C3C3',
    padding: 8,
    marginVertical: 10,
  },
  currencyMenu(index, length) {
    return {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: Colors.white,
      height: 50,
      borderBottomWidth: index !== length - 1 ? StyleSheet.hairlineWidth : 0,
      borderBottomColor: '#163D68',
    };
  },

  title: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#0B151F',
  },
});
export default SideBar;
