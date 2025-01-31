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
import {Icon, Input} from 'react-native-elements';
import Info from '../../components/Svg/Info.svg';
import AppToast from '../../layout/AppToast';
import axios from 'axios';
import {CHANGE_PASSWORD} from '../../redux/api';

function PasswordReset({navigation}) {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const submit = async () => {
    if (password === '') {
      AppToast.topToast('Please enter your current password');
      return false;
    }
    if (newPassword === '') {
      AppToast.topToast('Please enter your new password');
      return false;
    }
    if (confirmNewPassword === '') {
      AppToast.topToast('Please confirm your new password');
      return false;
    }

    const params = {
      pwd: password,
      newpwd: newPassword,
      confirmPwd: confirmNewPassword,
    };
    try {
      const response = await axios.post(CHANGE_PASSWORD, params);
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
              <View
                style={[
                  commonStyle.width('100%'),
                  commonStyle.rowFlexStart,
                  commonStyle.paddingHorizontal(15),
                ]}>
                <View>
                  <Icon
                    onPress={() => navigation.goBack()}
                    name={'arrow-left'}
                    type={'font-awesome-5'}
                    size={20}
                    color={Colors.white}
                  />
                </View>
                <View style={commonStyle.marginHorizontal(8)}>
                  <Text style={styles.title}>Change Password</Text>
                </View>
              </View>
            </LinearGradient>
            <View style={styles.bottomSection}>
              <View style={commonStyle.marginVertical(10)}>
                <View style={styles.warningSection}>
                  <Info />
                  <View style={commonStyle.marginHorizontal(4)} />
                  <Text style={styles.warningText}>
                    Enter your current password, set a new one and then re-enter
                    the new password for confirmation.
                  </Text>
                </View>
              </View>
              <View style={styles.formCard}>
                <View>
                  <View style={commonStyle.marginVertical(5)}>
                    <Input
                      placeholder={'Current Password'}
                      inputContainerStyle={styles.inputContainerStyle}
                      inputStyle={styles.inputTextStyle}
                      value={password}
                      onChangeText={t => setPassword(t)}
                    />
                  </View>
                  <View style={commonStyle.marginVertical(5)}>
                    <Input
                      placeholder={'New Password'}
                      inputContainerStyle={styles.inputContainerStyle}
                      inputStyle={styles.inputTextStyle}
                      value={newPassword}
                      onChangeText={t => setNewPassword(t)}
                    />
                  </View>
                  <View style={commonStyle.marginVertical(5)}>
                    <Input
                      placeholder={'Confirm Password'}
                      inputContainerStyle={styles.inputContainerStyle}
                      inputStyle={styles.inputTextStyle}
                      value={confirmNewPassword}
                      onChangeText={t => setConfirmNewPassword(t)}
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
              <TouchableOpacity onPress={submit} style={styles.button}>
                <Text style={styles.buttonText}>Change Password</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    width: '100%',
    height: hp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: Colors.white,
  },

  warningSection: {
    backgroundColor: 'rgba(28, 140, 204, 0.2)',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginHorizontal: 15,
  },
  warningText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: Colors.primary,
  },
  bottomSection: {
    backgroundColor: '#F5F7FB',
    justifyContent: 'center',
    alignItems: 'center',
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
    height: 45,
    borderBottomWidth: 1,
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
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: '#707070',
    paddingHorizontal: 4,
    marginVertical: 15,
    backgroundColor: Colors.white,
    alignSelf: 'stretch',
    marginHorizontal: 15,
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
    marginVertical: 16,
  },
});

export default PasswordReset;
