import React, {useState} from 'react';
import {
  Image,
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
import {useNavigation} from '@react-navigation/native';
import Font from '../../layout/Font';

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

  return (
    <SafeAreaView style={commonStyle.container}>
      <View style={commonStyle.wrapper}>
        <View style={commonStyle.content}>
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
              <TouchableOpacity style={[styles.button, styles.facebookButton]}>
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

          <View>
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
              onPress={() => navigation.navigate('HomeStack')}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    width: 157,
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
  },
  checkBoxTextStyle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: Colors.lightText,
  },
  inputSection: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  forgotPasswordSection: {
    paddingHorizontal: 20,
    marginVertical: 8,
  },
  signInButton: {
    width: 335,
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
