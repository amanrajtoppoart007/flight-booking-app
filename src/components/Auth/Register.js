import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import commonStyle from '../../layout/Style';
import Colors from '../../layout/Colors';
import {CheckBox} from 'react-native-elements';
import CustomTextInput from '../Common/CustomTextInput';
import TitleTextInput from '../Common/TitleTextInput';
import Font from '../../layout/Font';
import {useNavigation} from '@react-navigation/native';
import Toast from '../../layout/AppToast';
import axios from 'axios';
import {REGISTER_URL} from '../../redux/api';
import SimpleTextInput from '../Common/SimpleTextInput';

function Register({jumpTo}) {
  const navigation = useNavigation();
  const [checked, setChecked] = useState('email');
  const [title, setTitle] = useState('Title');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [phoneCode, setPhoneCode] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [radioProps, setRadioProps] = useState([
    {label: 'Email Id', value: 'email', checked: true},
    {label: 'Mobile Number', value: 'mobile', checked: false},
  ]);

  const toggleChecked = value => {
    const array = radioProps.map(item => {
      return {
        ...item,
        ...{checked: item?.value === value},
      };
    });
    setRadioProps(array);
    setChecked(value);
  };

  const register = async () => {
    //navigation.navigate('HomeStack');
    if (!title) {
      Toast.bottomToast('Please select title');
      return false;
    }
    if (!firstName) {
      Toast.bottomToast('Please enter first name');
      return false;
    }
    if (!lastName) {
      Toast.bottomToast('Please enter last name');
      return false;
    }
    if (checked === 'email' && !email) {
      Toast.bottomToast('Please enter valid email');
      return false;
    }
    if (checked === 'mobile' && !mobileNumber) {
      Toast.bottomToast('Please enter valid mobile number');
      return false;
    }
    if (!password) {
      Toast.bottomToast('Please enter a password');
      return false;
    }

    if (!termsAccepted) {
      Toast.bottomToast('Please accept our terms and conditions');
      return false;
    }

    const params = {
      fname: firstName,
      lname: lastName,
      tl: title,
      email: email,
      pwd: password,
      phno: mobileNumber,
      phc: phoneCode,
    };

    try {
      const response = await axios.post(REGISTER_URL, params);
      if (response.status === 200) {
        const result = response?.data;
        if (result?.suc) {
          navigation.navigate('HomeStack');
        } else {
          Alert.alert(result?.err);
        }
      } else {
        console.error(response?.message);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SafeAreaView
      style={[commonStyle.container, commonStyle.backgroundColor('white')]}>
      <View style={commonStyle.wrapper}>
        <View style={commonStyle.content}>
          <View style={styles.container}>
            <View style={styles.greetingSection}>
              <Text style={styles.greetingText}>Create an Account</Text>
            </View>
          </View>
          <View style={styles.container}>
            <View>
              <View style={[styles.inputSection, styles.firstNameSection]}>
                <TitleTextInput
                  title={title}
                  setTitle={setTitle}
                  value={firstName}
                  setValue={setFirstName}
                  type={'select'}
                />
              </View>
              <View style={styles.inputSection}>
                <SimpleTextInput
                  titleType={'placeholder'}
                  title={'Last Name'}
                  value={lastName}
                  setValue={setLastName}
                />
              </View>
            </View>
          </View>

          <View style={styles.checkBoxSection}>
            <View style={commonStyle.rowFlexStart}>
              {radioProps &&
                radioProps.map(item => {
                  return (
                    <View key={item?.value?.toString()}>
                      <CheckBox
                        titleProps={{
                          style: styles.checkBoxTextStyle,
                        }}
                        containerStyle={styles.checkBoxContainerStyle}
                        checkedIcon={'dot-circle-o'}
                        uncheckedIcon={'circle-o'}
                        onPress={() => toggleChecked(item?.value)}
                        center
                        title={item?.label}
                        checked={item?.checked}
                      />
                    </View>
                  );
                })}
            </View>
          </View>
          <View style={styles.container}>
            <View>
              <View style={styles.inputSection}>
                {checked === 'email' ? (
                  <CustomTextInput
                    type={'email'}
                    title={'Email'}
                    value={email}
                    setValue={setEmail}
                  />
                ) : (
                  <CustomTextInput
                    type={'mobile'}
                    title={'Mobile Number'}
                    value={mobileNumber}
                    setValue={setMobileNumber}
                    phoneCode={phoneCode}
                    setPhoneCode={setPhoneCode}
                  />
                )}
              </View>
              <View style={styles.inputSection}>
                <CustomTextInput
                  type={'password'}
                  title={'Password'}
                  value={password}
                  setValue={setPassword}
                />
              </View>
            </View>
          </View>
          <View style={styles.termSection}>
            <View style={commonStyle.rowFlexStart}>
              <View>
                <CheckBox
                  containerStyle={styles.checkBoxContainerStyle}
                  onPress={() => {
                    setTermsAccepted(!termsAccepted);
                  }}
                  center
                  checked={termsAccepted}
                />
              </View>
              <View>
                <Text style={styles.helperTitle}>I have agreed to the </Text>
              </View>
              <View>
                <Text style={styles.helperLinkText}>Terms & Conditions</Text>
              </View>
            </View>
          </View>
          <View style={styles.container}>
            <View style={commonStyle.marginVertical(20)}>
              <TouchableOpacity
                onPress={() => register()}
                style={styles.signInButton}>
                <Text style={styles.signInButtonText}>Create Account</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.forgotPasswordSection}>
              <View style={commonStyle.rowCenter}>
                <View>
                  <Text style={styles.accountHelperTitle}>
                    Already have an account?
                  </Text>
                </View>
                <View style={commonStyle.marginHorizontal(3)}>
                  <TouchableOpacity onPress={() => jumpTo('login')}>
                    <Text style={styles.accountHelperLink}>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  firstNameSection: {
    marginBottom: 20,
  },
  greetingSection: {
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: Colors.black,
  },

  checkBoxSection: {
    marginHorizontal: 8,
    marginVertical: 30,
  },

  dividerSection: {
    marginVertical: 20,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: '#AAAAAA',
    width: '10%',
  },
  dividerText: {
    fontSize: 14,
    color: Colors.lightText,
  },
  checkBoxContainerStyle: {
    backgroundColor: Colors.transparent,
    borderWidth: 0,
    margin: 0,
    padding: 0,
  },
  checkBoxTextStyle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: Colors.lightText,
    marginHorizontal: 5,
  },
  inputSection: {
    marginVertical: 10,
  },
  termSection: {
    marginVertical: 8,
    marginHorizontal: 8,
  },
  forgotPasswordSection: {
    marginVertical: 8,
  },
  signInButton: {
    width: '100%',
    height: 56,
    borderRadius: 8,
    backgroundColor: '#F15922',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInButtonText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: Colors.white,
  },
  helperTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#AAAAAA',
  },
  helperLinkText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: Colors.primary,
  },
  accountHelperTitle: {
    fontFamily: Font.AvenirRoman,
    fontSize: 14,
    color: '#242A37',
  },
  accountHelperLink: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#1C8CCC',
  },
});

export default Register;
