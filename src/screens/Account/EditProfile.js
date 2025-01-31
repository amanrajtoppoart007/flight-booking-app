import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import commonStyle from '../../layout/Style';
import Font from '../../layout/Font';
import Colors from '../../layout/Colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import CustomStatusBar from '../../components/CustomStatusBar';
import {Input} from 'react-native-elements';
import CalenderSvg from '../../components/Svg/Calender.svg';
import PhoneTextInput from '../../components/Common/PhoneTextInput';
import {UPDATE_PROFILE} from '../../redux/api';
import AppToast from '../../layout/AppToast';
import axios from 'axios';

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

function EditProfile() {
  const [phoneCode, setPhoneCode] = useState('+974');
  const [mobile, setMobile] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');

  const submit = async () => {
    if (!phoneCode) {
      AppToast.topToast('Please enter phone number');
      return false;
    }
    if (!mobile) {
      AppToast.topToast('Please enter mobile');
      return false;
    }
    if (!firstName) {
      AppToast.topToast('Please enter firstName');
      return false;
    }
    if (!lastName) {
      AppToast.topToast('Please enter lastName');
      return false;
    }
    if (!dob) {
      AppToast.topToast('Please enter dob');
      return false;
    }
    if (!email) {
      AppToast.topToast('Please enter valid email');
      return false;
    }
    const params = {
      fname: firstName,
      lname: lastName,
      email: email,
      phno: mobile,
      phc: phoneCode,
    };
    try {
      const response = await axios.post(UPDATE_PROFILE, params);
      if (response.status === 200) {
        const result = response?.data;
        if (result?.suc) {
          AppToast.topToast('Updated Successfully');
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
      <CustomStatusBar backgroundColor={Colors.primary} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={commonStyle.wrapper}>
          <View style={commonStyle.content}>
            <LinearGradient
              colors={['#1C8CCC', '#015F95']}
              style={styles.canvas}>
              <View style={commonStyle.center}>
                <Text style={styles.title}>Edit Profile</Text>
              </View>
              <View style={styles.contentWrapper}>
                <View style={styles.canvasContent}>
                  <View style={commonStyle.marginVertical(10)}>
                    <View style={commonStyle.rowSpaceBetween}>
                      <View>
                        <View>
                          <Text style={styles.name}>Hello, Mubeen</Text>
                        </View>
                        <View>
                          <Text style={styles.email}>syed@gmail.com</Text>
                        </View>
                      </View>
                      <View>
                        <View style={styles.circle}>
                          <Text style={styles.firstLetter}>M</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </LinearGradient>
            <View style={styles.bottomSection}>
              <View style={styles.formCard}>
                <View
                  style={[
                    commonStyle.marginHorizontal(5),
                    commonStyle.marginVertical(10),
                  ]}>
                  <Text style={styles.headerTitle}>Account Information</Text>
                </View>
                <View>
                  <View style={commonStyle.marginVertical(8)}>
                    <Input
                      label={<Label title={'First Name'} />}
                      inputContainerStyle={styles.inputContainerStyle}
                      inputStyle={styles.inputTextStyle}
                      onChangeText={text => setFirstName(text)}
                    />
                  </View>
                  <View style={commonStyle.marginVertical(8)}>
                    <Input
                      label={<Label title={'Last Name'} />}
                      inputContainerStyle={styles.inputContainerStyle}
                      inputStyle={styles.inputTextStyle}
                      onChangeText={text => setLastName(text)}
                    />
                  </View>
                  <View
                    style={[
                      commonStyle.marginVertical(8),
                      commonStyle.width('50%'),
                    ]}>
                    <Input
                      label={<Label title={'Date of Birth'} />}
                      inputContainerStyle={styles.inputContainerStyle}
                      inputStyle={styles.inputTextStyle}
                      rightIcon={<CalenderSvg />}
                      onChangeText={text => setDob(text)}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.formCard}>
                <View
                  style={[
                    commonStyle.marginHorizontal(5),
                    commonStyle.marginVertical(10),
                  ]}>
                  <Text style={styles.headerTitle}>Contact Details</Text>
                </View>
                <View>
                  <View style={commonStyle.marginVertical(8)}>
                    <Input
                      label={<Label title={'E-mail ID'} />}
                      inputContainerStyle={styles.inputContainerStyle}
                      inputStyle={styles.inputTextStyle}
                      onChangeText={text => setEmail(text)}
                    />
                  </View>
                  <View style={styles.phoneNumberSection}>
                    <PhoneTextInput
                      cardStyle={styles.inputStyle}
                      title={'Country Code'}
                      setPhoneCode={setPhoneCode}
                      phoneCode={'+974'}
                      value={mobile}
                      setValue={setMobile}
                      type={'mobile'}
                      placeholder={'Contact No'}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[
                commonStyle.center,
                commonStyle.marginVertical(20),
                commonStyle.backgroundColor('transparent'),
              ]}>
              <TouchableOpacity onPress={() => submit()} style={styles.button}>
                <Text style={styles.buttonText}>Save Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    paddingHorizontal: 20,
    width: '100%',
  },
  canvas: {
    flex: 1,
    width: '100%',
    height: hp('22%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: Colors.white,
  },
  canvasContent: {
    width: '100%',
  },
  bottomSection: {
    backgroundColor: '#F5F7FB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: Colors.white,
  },
  email: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: Colors.white,
  },
  firstLetter: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 24,
    color: '#1D8CCC',
  },

  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  headerTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: '#242A37',
  },
  inputContainerStyle: {
    height: 35,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#D9D9D9',
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
  formCard: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    borderColor: '#707070',
    paddingHorizontal: 4,
    marginVertical: 15,
    backgroundColor: Colors.white,
    marginHorizontal: 15,
    alignSelf: 'stretch',
  },
  phoneNumberSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    paddingHorizontal: 2,
  },
  button: {
    borderRadius: 6,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginHorizontal: 15,
  },
  buttonText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: Colors.white,
    marginVertical: 15,
  },
  inputStyle: {
    marginHorizontal: 20,
  },
});

export default EditProfile;
