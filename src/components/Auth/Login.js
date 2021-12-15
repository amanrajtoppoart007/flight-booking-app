import React, {useState} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import commonStyle from '../../layout/Style';
import Colors from '../../layout/Colors';
import {CheckBox} from 'react-native-elements';
import CustomTextInput from '../Common/CustomTextInput';
import Font from '../../layout/Font';
import Toast from '../../layout/AppToast';

import {LOGIN_URL} from '../../redux/api';

function Login({jumpTo}) {
  const navigation = useNavigation();
  const [checked, setChecked] = useState('email');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [phoneCode, setPhoneCode] = useState('');

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

  const login = async () => {
    navigation.navigate('HomeStack');
    return false;
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
    const emailParams = {
      uname: email,
      pwd: password,
      type: 'email',
    };

    const mobileParams = {
      mobile: mobileNumber,
      phc: phoneCode,
      pwd: password,
      type: 'mobile',
    };

    const params = checked === 'email' ? emailParams : mobileParams;

    try {
      const response = await axios.post(LOGIN_URL, params);
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
    <SafeAreaView style={commonStyle.container}>
      <View style={commonStyle.wrapper}>
        <View style={commonStyle.content}>
          <View style={styles.container}>
            <View style={styles.greetingSection}>
              <Text style={styles.greetingText}>Welcome Back!</Text>
            </View>
            <View style={styles.buttonSection}>
              <View>
                <TouchableOpacity style={[styles.button, styles.googleButton]}>
                  <Image
                    style={styles.socialIcon}
                    source={require('../../assets/icons/google.png')}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={[styles.button, styles.facebookButton]}>
                  <Image
                    style={styles.socialIcon}
                    source={require('../../assets/icons/facebook.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.dividerSection}>
              <View style={commonStyle.rowCenter}>
                <View style={styles.divider} />
                <View style={commonStyle.marginHorizontal(5)}>
                  <Text style={styles.dividerText}>OR</Text>
                </View>
                <View style={styles.divider} />
              </View>
            </View>
          </View>

          <View style={styles.checkBoxSection}>
            <View style={[commonStyle.rowFlexStart]}>
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
            <View style={styles.forgotPasswordSection}>
              <View style={commonStyle.rowFlexStart}>
                <View>
                  <Text style={styles.helperTitle}>Forgot your password? </Text>
                </View>
                <View>
                  <Text style={styles.helperLinkText}>Retrieve</Text>
                </View>
              </View>
            </View>

            <View style={[commonStyle.center, commonStyle.marginVertical(20)]}>
              <TouchableOpacity
                onPress={() => login()}
                style={styles.signInButton}>
                <Text style={styles.signInButtonText}>Sign In</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.forgotPasswordSection}>
              <View style={commonStyle.rowCenter}>
                <View>
                  <Text style={styles.accountHelperTitle}>
                    Don’t have an account?
                  </Text>
                </View>
                <View style={commonStyle.marginHorizontal(3)}>
                  <TouchableOpacity onPress={() => jumpTo('register')}>
                    <Text style={styles.accountHelperLink}>Signup</Text>
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
  checkBoxSection: {
    marginHorizontal: 8,
    marginVertical: 30,
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
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: 160,
    height: 54,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleButton: {
    backgroundColor: Colors.google,
  },
  facebookButton: {
    backgroundColor: Colors.facebook,
  },
  socialIcon: {
    width: 30,
    height: 30,
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
    fontFamily: Font.AvenirRoman,
    fontSize: 14,
    color: '#AAAAAA',
  },
  helperLinkText: {
    fontFamily: Font.AvenirRoman,
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

export default Login;
