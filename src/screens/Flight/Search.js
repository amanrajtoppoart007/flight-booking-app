import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  FlatList,
} from 'react-native';
import Colors from '../../layout/Colors';
import CustomStatusBar from '../../components/CustomStatusBar';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import Font from '../../layout/Font';
import {strings} from '../../Localization/LocalizedConstants';
import {useRtlContext} from 'react-native-easy-localization-and-rtl';

function Search() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([
    {
      name: 'Dubai International Airport',
      address: 'Dubai, United Arab Emirates',
      shortForm: 'DXB',
    },
    {
      name: 'Sharjah International Airport',
      address: 'Sharjah, United Arab Emirates',
      shortForm: 'SHJ',
    },
    {
      name: 'Abu Dhabi International Airport',
      address: 'Abu Dhabi, United Arab Emirates',
      shortForm: 'AUH',
    },
    {
      name: 'Cochin International Airport',
      address: 'Kochi, India',
      shortForm: 'COK',
    },
    {
      name: 'Chatrapati Shivaji International Airport',
      address: 'Mumbai, India',
      shortForm: 'BOM',
    },
    {
      name: 'Cairo International Airport',
      address: 'Cairo, Egy',
      shortForm: 'AUH',
    },
    {
      name: 'Calicut International Airport',
      address: 'Kakode, India',
      shortForm: 'COK',
    },
  ]);

  function handleTextInput(t) {
    if (t.length <= 0) {
      setData([
        {
          name: 'Dubai International Airport',
          address: 'Dubai, United Arab Emirates',
          shortForm: 'DXB',
        },
        {
          name: 'Sharjah International Airport',
          address: 'Sharjah, United Arab Emirates',
          shortForm: 'SHJ',
        },
        {
          name: 'Abu Dhabi International Airport',
          address: 'Abu Dhabi, United Arab Emirates',
          shortForm: 'AUH',
        },
        {
          name: 'Cochin International Airport',
          address: 'Kochi, India',
          shortForm: 'COK',
        },
        {
          name: 'Chatrapati Shivaji International Airport',
          address: 'Mumbai, India',
          shortForm: 'BOM',
        },
        {
          name: 'Cairo International Airport',
          address: 'Cairo, Egy',
          shortForm: 'AUH',
        },
        {
          name: 'Calicut International Airport',
          address: 'Kakode, India',
          shortForm: 'COK',
        },
      ]);
      setSearchText(t);
      return;
    }
    const d = data.filter(item => item.name.includes(t));
    setSearchText(t);
    setData(d);
  }
  const {RtlStyles, language} = useRtlContext();

  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar />
      <View style={styles.TopContainer}>
        <View style={[styles.inputContainer, RtlStyles.containerRow]}>
          <View style={RtlStyles.flipHorizontal}>
            <Icon
              onPress={() => navigation.goBack()}
              name={'arrowleft'}
              type={'antdesign'}
              size={20}
              color={'black'}
            />
          </View>
          <Icon
            style={[styles.marginH]}
            name={'flight-takeoff'}
            type={'material'}
            size={20}
            color={'gray'}
          />
          <TextInput
            style={styles.input}
            onChangeText={t => handleTextInput(t)}
            value={searchText}
            placeholder={strings.from}
            placeholderTextColor="gray"
          />
        </View>
        <View style={[styles.inputContainer, RtlStyles.containerRow]}>
          <Icon
            name={'flight-land'}
            type={'material'}
            size={20}
            color={'gray'}
          />
          <TextInput
            style={styles.input}
            placeholder={strings.to}
            placeholderTextColor="gray"
          />
        </View>
      </View>

      <FlatList
        data={data}
        ListHeaderComponent={
          !(searchText.length > 0) && (
            <View style={styles.TopOriginContainer}>
              <Text style={styles.headerText}>{strings.topOrigins}</Text>
            </View>
          )
        }
        renderItem={({item}) => {
          return (
            <View>
              <View style={[styles.itemContainer, RtlStyles.containerRow]}>
                <Icon
                  name={'flight-takeoff'}
                  type={'material'}
                  size={20}
                  color={'gray'}
                />
                <View
                  style={[styles.itemTextContainer, RtlStyles.containerColumn]}>
                  <Text style={styles.itemText}>{item.name}</Text>
                  <Text style={styles.itemSmallText}>{item.address}</Text>
                </View>
                <Text style={styles.itemTextBold}>{item.shortForm}</Text>
              </View>
              <View style={styles.divider} />
            </View>
          );
        }}
        keyExtractor={() => Math.random() * 465}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  TopContainer: {
    backgroundColor: Colors.white,
    elevation: 10,
    padding: 15,
  },

  TopOriginContainer: {
    paddingVertical: 10,
    backgroundColor: '#F5F7FB',
    marginHorizontal: 5,
  },
  marginH: {
    marginHorizontal: 8,
  },
  margin: {
    padding: 15,
  },
  input: {
    color: 'black',
    marginHorizontal: 5,
    flex: 1,
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: '#D9D9D9',
    marginVertical: 10,
    marginHorizontal: 15,
  },
  inputContainer: {
    height: 45,
    marginHorizontal: 5,
    backgroundColor: 'gainsboro',
    borderRadius: 8,
    paddingHorizontal: 14,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  headerText: {
    color: 'black',
    fontSize: 16,
    margin: 10,
    fontFamily: Font.AvenirBlack,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    paddingHorizontal: 15,
  },
  itemTextContainer: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 13,
    justifyContent: 'center',
  },
  itemText: {
    color: '#242A37',
    fontSize: 14,
    fontFamily: Font.AvenirMedium,
  },
  itemSmallText: {
    color: '#6C6C6C',
    fontSize: 12,
    fontFamily: Font.AvenirMedium,
  },
  itemTextBold: {
    color: '#242A37',
    fontSize: 14,
    fontFamily: Font.AvenirHeavy,
  },
});

export default Search;
