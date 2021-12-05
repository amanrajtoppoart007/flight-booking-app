import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {ListItem} from 'react-native-elements';
import Colors from '../../layout/Colors';
import commonStyle from '../../layout/Style';

import CloseSvg from '../Svg/SideBar/Close.svg';
import CurrencySvg from '../Svg/SideBar/Qar.svg';
import AboutSvg from '../Svg/SideBar/About.svg';
import CallSvg from '../Svg/SideBar/Call.svg';
import PolicySvg from '../Svg/SideBar/Policy.svg';
import TermsSvg from '../Svg/SideBar/Terms.svg';
import SocialSvg from '../Svg/SideBar/Social.svg';
import Font from '../../layout/Font';

const SideBar = props => {
  const [expanded, setExpanded] = useState(false);
  const [menus] = useState([
    {
      key: 'menu-item-one',
      title: 'About Us',
      image: require('../../assets/icons/sideBar/terms.png'),
      svg: AboutSvg,
      route: 'Terms',
    },
    {
      key: 'menu-item-two',
      title: 'Contact Us',
      image: require('../../assets/icons/sideBar/faq.png'),
      svg: CallSvg,
      route: 'Faq',
    },
    {
      key: 'menu-item-three',
      title: 'Privacy & Policy',
      image: require('../../assets/icons/sideBar/social.png'),
      svg: PolicySvg,
      route: 'Privacy',
    },
    {
      key: 'menu-item-four',
      title: 'Terms & Conditions',
      image: require('../../assets/icons/sideBar/social.png'),
      svg: TermsSvg,
      route: 'Terms',
    },
    {
      key: 'menu-item-five',
      title: 'Social',
      image: require('../../assets/icons/sideBar/social.png'),
      svg: SocialSvg,
      route: 'Social',
    },
  ]);

  const [currencies] = useState([
    {
      id: 'currency-id-one',
      name: 'Qatari Riyal',
      shortName: 'QAR',
      image: require('../../assets/icons/country/qar.png'),
    },
    {
      id: 'currency-id-two',
      name: 'UAE Dirham',
      shortName: 'AED',
      image: require('../../assets/icons/country/aed.png'),
    },
    {
      id: 'currency-id-three',
      name: 'Saudi Riyal',
      shortName: 'SAR',
      image: require('../../assets/icons/country/sar.png'),
    },
  ]);

  const logout = async () => {};

  const renderItem = ({item}) => (
    <ListItem
      containerStyle={styles.menuContainerStyle}
      onPress={() =>
        item.route === 'LogOut'
          ? logout()
          : props.navigation.navigate(item.route)
      }
      bottomDivider>
      <item.svg />
      <ListItem.Content>
        <ListItem.Title style={styles.title}>{item.title}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron color={Colors.black} size={30} />
    </ListItem>
  );

  const keyExtractor = item => item.key.toString();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.card}>
        <View style={commonStyle.rowSpaceBetween}>
          <View>
            <Text style={styles.moreText}>More</Text>
          </View>
          <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
            <CloseSvg />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <ListItem.Accordion
          content={
            <>
              <Image
                resizeMode={'contain'}
                source={require('../../assets/icons/sideBar/language.png')}
                style={{width: 20, height: 20}}
              />
              <ListItem.Content>
                <ListItem.Title
                  style={[commonStyle.marginHorizontal(5), styles.title]}>
                  Change Currency
                </ListItem.Title>
              </ListItem.Content>
            </>
          }
          isExpanded={expanded}
          onPress={() => {
            setExpanded(!expanded);
          }}>
          {currencies.map((item, i) => (
            <ListItem key={i} bottomDivider>
              <Image
                style={{width: 20, height: 20}}
                resizeMode={'contain'}
                source={item?.image}
              />
              <ListItem.Content>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <ListItem.Title style={[{width: '50%'}, styles.title]}>
                    {item?.shortName}
                  </ListItem.Title>
                  <ListItem.Title style={styles.title}>
                    {item?.name}
                  </ListItem.Title>
                </View>
              </ListItem.Content>
            </ListItem>
          ))}
        </ListItem.Accordion>

        <FlatList
          keyExtractor={keyExtractor}
          data={menus}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  moreText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#242A37',
  },
  menuContainerStyle: {
    height: 60,
    backgroundColor: Colors.white,
  },
  menuIconStyle: {
    fontSize: 20,
    color: Colors.black,
  },
  menuIconContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    padding: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    color: '#0B151F',
  },
});
export default SideBar;
