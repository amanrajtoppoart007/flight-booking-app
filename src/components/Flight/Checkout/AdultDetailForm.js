import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import commonStyle from '../../../layout/Style';
import Font from '../../../layout/Font';
import Colors from '../../../layout/Colors';
import {Input} from 'react-native-elements';
import CalenderSvg from '../../../components/Svg/Calender.svg';
import InfoSvg from '../../Svg/Info.svg';
import PhoneBookSvg from '../../Svg/PhoneBook.svg';
import PhoneTextInput from '../../Common/PhoneTextInput';
import CountrySelectBox from './CountrySelectBox';
function Label({title}) {
  return (
    <View style={commonStyle.rowFlexStart}>
      <View>
        <Text style={styles.label}>{title}</Text>
      </View>
      <View style={commonStyle.marginHorizontal(4)}>
        <Text style={styles.required}>*</Text>
      </View>
    </View>
  );
}

function AdultDetailForm() {
  const [tags, setTags] = useState([
    {
      title: 'Mr.',
      value: 'mr',
      isActive: true,
    },
    {
      title: 'Mrs.',
      value: 'mrs',
      isActive: false,
    },
    {
      title: 'Ms.',
      value: 'ms',
      isActive: false,
    },
  ]);
  const [phoneCode, setPhoneCode] = useState('+974');
  const [mobile, setMobile] = useState(null);
  function setActiveTag(activeIndex) {
    const list = tags.map((item, index) => {
      return {
        title: item?.title,
        value: item?.value,
        isActive: index === activeIndex,
      };
    });
    setTags(list);
  }
  return (
    <View>
      <View style={styles.tagSection}>
        {tags &&
          tags.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => setActiveTag(index)}
                style={styles.tag(item?.isActive)}
                key={item?.value}>
                <Text style={styles.title(item?.isActive)}>{item?.title}</Text>
              </TouchableOpacity>
            );
          })}
      </View>
      <View style={commonStyle.marginVertical(8)}>
        <Input
          label={<Label title={'First Name'} />}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputTextStyle}
        />
      </View>
      <View style={commonStyle.marginVertical(8)}>
        <Input
          label={<Label title={'Last Name'} />}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputTextStyle}
        />
      </View>
      <View style={commonStyle.marginVertical(8)}>
        <Input
          placeholder={'Date Of Birth'}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputTextStyle}
          rightIcon={<CalenderSvg />}
        />
      </View>
      <View style={styles.headerSection}>
        <View style={commonStyle.rowFlexStart}>
          <View>
            <PhoneBookSvg />
          </View>
          <View style={commonStyle.marginHorizontal(10)}>
            <Text style={styles.headerTitle}>Contact Details</Text>
          </View>
        </View>
        <View>
          <Text style={styles.contactHelper}>
            Booking details will be sent to this mobile number & Email address.
          </Text>
        </View>
      </View>
      <View style={commonStyle.marginVertical(8)}>
        <Input
          label={<Label title={'E-mail Id'} />}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputTextStyle}
        />
      </View>
      <View style={styles.phoneNumberSection}>
        <PhoneTextInput
          title={'Country Code'}
          setPhoneCode={setPhoneCode}
          phoneCode={'+974'}
          value={mobile}
          setValue={setMobile}
          type={'mobile'}
          placeholder={'Contact.js No'}
        />
      </View>

      <View style={styles.headerSection}>
        <View style={commonStyle.rowFlexStart}>
          <View>
            <InfoSvg />
          </View>
          <View style={commonStyle.marginHorizontal(10)}>
            <Text style={styles.headerTitle}>Additional Information</Text>
          </View>
        </View>
        <View />
      </View>

      <View style={commonStyle.marginHorizontal(10)}>
        <Text style={styles.header}>Passport Detail</Text>
      </View>
      <View style={commonStyle.marginVertical(8)}>
        <Input
          label={<Label title={'Passport Number'} />}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputTextStyle}
        />
      </View>
      <View style={commonStyle.marginVertical(8)}>
        <Input
          placeholder={'Date Of Birth'}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputTextStyle}
          rightIcon={<CalenderSvg />}
        />
      </View>
      <View style={commonStyle.marginVertical(8)}>
        <Input
          placeholder={'Expiry Date'}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputTextStyle}
          rightIcon={<CalenderSvg />}
        />
      </View>

      <View style={commonStyle.marginVertical(8)}>
        <CountrySelectBox title={'Select Nationality'} />
      </View>
      <View style={commonStyle.marginVertical(8)}>
        <CountrySelectBox title={'Issued Country*'} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  tagSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 12,
  },
  tag(isActive) {
    return {
      width: 50,
      height: 30,
      borderRadius: 30,
      borderWidth: 1,
      borderColor: isActive ? Colors.black : '#AAAAAA',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 5,
    };
  },
  title(isActive) {
    return {
      fontFamily: Font.AvenirMedium,
      fontSize: 12,
      color: isActive ? Colors.black : '#6C6C6C',
    };
  },
  inputContainerStyle: {
    height: 35,
  },
  inputTextStyle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: Colors.black,
  },
  label: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
  },
  required: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#FF0000',
  },
  headerSection: {
    paddingHorizontal: 15,
    marginVertical: 8,
  },
  headerTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: '#242A37',
  },
  header: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 12,
    color: '#242A37',
  },
  contactHelper: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
  },
  phoneNumberSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    paddingHorizontal: 2,
  },
});

export default AdultDetailForm;
