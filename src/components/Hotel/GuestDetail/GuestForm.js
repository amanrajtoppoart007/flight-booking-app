import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Font from '../../../layout/Font';
import Colors from '../../../layout/Colors';
import {Icon} from 'react-native-elements';
import commonStyle from '../../../layout/Style';
import SelectTextInput from '../../Common/SelectTextInput';

import Info from '../../../components/Svg/Hotel/Info.svg';
import InfoBlue from '../../../components/Svg/Hotel/InfoBlue.svg';
import Line from '../../../components/Svg/Hotel/Line.svg';

function GuestForm() {
  const [title, setTitle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [extraVisible, setExtraVisible] = useState(false);

  return (
    <View style={commonStyle.marginVertical(5)}>
      <View style={commonStyle.rowSpaceEven}>
        <SelectTextInput
          value={title}
          placeholder="Title"
          setValue={setTitle}
          listValues={['Mr.', 'Mrs', 'Miss']}
        />
        <View style={styles.inputContainer}>
          <TextInput
            value={firstName}
            onChangeText={t => setFirstName(t)}
            style={styles.Input}
            placeholder="First Name"
            placeholderTextColor={Colors.lightText}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={lastName}
            onChangeText={t => setLastName(t)}
            style={styles.Input}
            placeholder="Last Name"
            placeholderTextColor={Colors.lightText}
          />
        </View>
      </View>
      <View style={styles.infoSection}>
        <View style={commonStyle.rowFlexStart}>
          <View>
            <Text style={styles.infoTitle}>Cancellation Policy</Text>
          </View>
          <View style={commonStyle.marginHorizontal(8)}>
            <InfoBlue />
          </View>
        </View>
        <View style={commonStyle.rowFlexStart}>
          <View>
            <Text style={styles.secondaryText}>Important Info</Text>
          </View>
          <View style={commonStyle.marginHorizontal(8)}>
            <Info />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => setExtraVisible(!extraVisible)}
          style={commonStyle.rowFlexStart}>
          <View>
            <Text style={[styles.infoTitle]}>Extras</Text>
          </View>
          <View style={commonStyle.marginHorizontal(8)}>
            <Icon
              name={extraVisible ? 'caretup' : 'caretdown'}
              type={'antdesign'}
              size={14}
              color={Colors.primary}
            />
          </View>
        </TouchableOpacity>
      </View>
      {extraVisible && (
        <>
          <Line />
          <View style={styles.borderContainer}>
            <Text style={styles.extraInfoText}>
              Please enter any special request that you may have.
            </Text>
            <Text style={styles.extraInfoText}>
              (Eg: Late Check-In, VIP Pax)
            </Text>
          </View>
          <View
            style={[
              commonStyle.marginHorizontal(10),
              commonStyle.marginVertical(5),
            ]}>
            <Text style={styles.noteText}>
              Note: Special requests are not guaranteed and are at the hotel’s
              discretion. Additional charges may apply depending on the hotel’s
              policies.
            </Text>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  rowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    borderColor: '#D9D9D9',
    marginRight: 10,
  },

  infoTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#26698E',
  },
  lightText: {
    fontSize: 12,
    fontFamily: Font.AvenirMedium,
    color: Colors.lightText,
  },
  secondaryText: {
    fontSize: 14,
    fontFamily: Font.AvenirMedium,
    color: Colors.secondary,
  },
  borderContainer: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    padding: 10,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  extraInfoText: {
    fontSize: 12,
    fontFamily: Font.AvenirMedium,
    color: '#AAAAAA',
  },
  noteText: {
    fontSize: 12,
    fontFamily: Font.AvenirMedium,
    color: '#AAAAAA',
  },

  infoSection: {
    ...commonStyle.rowSpaceBetween,
    ...commonStyle.marginVertical(15),
    ...commonStyle.marginHorizontal(5),
  },
});

export default GuestForm;
