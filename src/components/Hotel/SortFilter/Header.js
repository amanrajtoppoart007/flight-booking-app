import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import React from 'react';
import Colors from '../../../layout/Colors';
import Font from '../../../layout/Font';

const Header = ({onClose}) => {
  return (
    <View style={styles.HeaderContainer}>
      <View style={styles.subContainer}>
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

const styles = StyleSheet.create({
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingTop: 10,
    width: '75%',
  },
  sortTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: Colors.black,
  },
  sortClear: {
    fontSize: 14,
    color: Colors.secondary,
    fontFamily: Font.AvenirHeavy,
  },
  sortText: {
    fontSize: 15,
    marginRight: 24,
    color: Colors.gray,
    fontFamily: Font.AvenirMedium,
  },
});

export default Header;
