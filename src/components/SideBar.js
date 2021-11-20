import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import {ListItem} from 'react-native-elements';
import Colors from '../layout/Colors';
import commonStyle from '../layout/Style';

const SideBar = props => {
  const [expanded, setExpanded] = useState(false);
  const [menus] = useState([
    {
      key: 'menu-item-one',
      title: 'Terms & Condition',
      image: require('../assets/icons/sideBar/terms.png'),
      route: 'Terms',
    },
    {
      key: 'menu-item-two',
      title: 'FAQ’s',
      image: require('../assets/icons/sideBar/faq.png'),
      route: 'Faq',
    },
    {
      key: 'menu-item-three',
      title: 'Social',
      image: require('../assets/icons/sideBar/social.png'),
      route: 'Social',
    },
  ]);

  const [currencies] = useState([
    {
      id: 'currency-id-one',
      name: 'Qatari Riyal',
      shortName: 'QAR',
      image: require('../assets/icons/country/qar.png'),
    },
    {
      id: 'currency-id-two',
      name: 'UAE Dirham',
      shortName: 'AED',
      image: require('../assets/icons/country/aed.png'),
    },
    {
      id: 'currency-id-three',
      name: 'Saudi Riyal',
      shortName: 'SAR',
      image: require('../assets/icons/country/sar.png'),
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
      <Image
        resizeMode={'contain'}
        source={item?.image}
        style={{width: 20, height: 20}}
      />
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
        <View style={commonStyle.rowFlexEnd}>
          <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
            <Image
              resizeMode={'contain'}
              source={require('../assets/icons/close.png')}
              style={{width: 15, height: 15}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <ListItem.Accordion
          content={
            <>
              <Image
                resizeMode={'contain'}
                source={require('../assets/icons/sideBar/language.png')}
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
