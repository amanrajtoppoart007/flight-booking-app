import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
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
import CalenderSvg from '../../components/Svg/Calender.svg';
import SelectBox from '../../components/Common/SelectBox';
import Info from '../../components/Svg/Info.svg';
import SelectDropdown from 'react-native-select-dropdown';
import country from '../../utils/country';
import {ADD_TRAVELER} from '../../redux/api';
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

function MyTravelers({navigation}) {
  const countries = [
    {
      name: 'Issuing Country',
      code: '',
    },
    ...country,
  ];
  const nationality = [
    {
      name: 'Nationality',
      code: '',
    },
    ...country,
  ];
  const [title, setTitle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const titles = [
    {
      title: 'Mr.',
      value: 'mr',
    },
    {
      title: 'Mrs.',
      value: 'mrs',
    },
    {
      title: 'Mis',
      value: 'mis',
    },
  ];

  const [documentTypes] = useState([
    {
      title: 'Document Type',
      value: '',
    },
    {
      title: 'Passport',
      value: 'passport',
    },
    {
      title: 'Driving License',
      value: 'driving-license',
    },
    {
      title: 'Govt. Issued Document',
      value: 'govt-issued-doc',
    },
  ]);

  const submit = async () => {
    if (title === '') {
      AppToast.topToast('Please enter the title');
      return false;
    }
    if (firstName === '') {
      AppToast.topToast('Please enter your first name');
      return false;
    }
    if (lastName === '') {
      AppToast.topToast('Please enter your last name');
      return false;
    }
    if (dob === '') {
      AppToast.topToast('Please enter your date of birth');
      return false;
    }
    if (documentType === '') {
      AppToast.topToast('Please fill the document type');
      return false;
    }
    if (passportNumber === '') {
      AppToast.topToast('Please enter the passport number');
      return false;
    }
    if (expiryDate === '') {
      AppToast.topToast('Please enter the expiry date');
      return false;
    }
    const params = {
      tl: title,
      ufn: firstName,
      uln: lastName,
      dob: dob,
      docs: [
        {
          type: documentType,
          number: passportNumber,
          expdt: expiryDate,
        },
      ],
    };
    try {
      const response = await axios.post(ADD_TRAVELER, params);
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
                  <Text style={styles.title}>Add Travellers</Text>
                </View>
              </View>
            </LinearGradient>
            <View style={styles.bottomSection}>
              <View style={commonStyle.marginVertical(10)}>
                <View style={styles.warningSection}>
                  <Info />
                  <View style={commonStyle.marginHorizontal(4)} />
                  <Text style={styles.warningText}>
                    Please make sure your information matches your
                    government-issued identification
                  </Text>
                </View>
              </View>
              <View style={styles.formCard}>
                <View
                  style={[
                    commonStyle.marginHorizontal(5),
                    commonStyle.marginVertical(10),
                  ]}>
                  <Text style={styles.headerTitle}>Add Information</Text>
                </View>
                <View>
                  <View style={commonStyle.marginVertical(8)}>
                    <View style={[commonStyle.rowSpaceBetween]}>
                      <View style={commonStyle.width('30%')}>
                        <SelectBox
                          title={'Title'}
                          setValue={setTitle}
                          value={title}
                          items={titles}
                        />
                      </View>
                      <View style={commonStyle.width('70%')}>
                        <TextInput
                          placeholder={'First Name'}
                          style={styles.inputContainerStyle}
                          placeholderTextColor="#898989"
                          value={firstName}
                          onChangeText={t => setFirstName(t)}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={commonStyle.marginVertical(8)}>
                    <Input
                      placeholder={'Last Name'}
                      inputContainerStyle={styles.inputContainerStyle}
                      inputStyle={styles.inputTextStyle}
                      value={lastName}
                      onChangeText={t => setLastName(t)}
                    />
                  </View>
                  <View
                    style={[
                      commonStyle.marginVertical(8),
                      commonStyle.rowSpaceBetween,
                    ]}>
                    <View style={commonStyle.width('50%')}>
                      <Input
                        placeholder={'Date of Birth'}
                        inputContainerStyle={styles.inputContainerStyle}
                        inputStyle={styles.inputTextStyle}
                        rightIcon={<CalenderSvg />}
                        value={dob}
                        onChangeText={t => setDob(t)}
                      />
                    </View>
                    <View style={commonStyle.width('50%')}>
                      <SelectDropdown
                        defaultValueByIndex={0}
                        defaultButtonText={'Nationality'}
                        buttonStyle={styles.dropDownButtonStyle}
                        buttonTextStyle={styles.dropDownButtonTextStyle}
                        renderDropdownIcon={() => {
                          return (
                            <Icon
                              type={'font-awesome'}
                              name="chevron-down"
                              color={'#898989'}
                              size={14}
                            />
                          );
                        }}
                        rowTextStyle={styles.dropDownButtonTextStyle}
                        renderCustomizedButtonChild={item => {
                          return (
                            <View style={commonStyle.marginHorizontal(8)}>
                              <Text style={styles.dropDownButtonTextStyle}>
                                {item?.name}
                              </Text>
                            </View>
                          );
                        }}
                        data={nationality}
                        onSelect={() => {}}
                        buttonTextAfterSelection={selectedItem => {
                          return selectedItem?.name;
                        }}
                        rowTextForSelection={item => {
                          return item?.name;
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.formCard}>
                <View style={[commonStyle.margin(10)]}>
                  <Text style={styles.headerTitle}>Travel Document</Text>
                </View>
                <View style={commonStyle.marginVertical(8)}>
                  <SelectDropdown
                    defaultValueByIndex={0}
                    defaultButtonText={'Request Type'}
                    buttonStyle={styles.dropDownButtonStyle}
                    buttonTextStyle={styles.dropDownButtonTextStyle}
                    renderDropdownIcon={() => {
                      return (
                        <Icon
                          type={'font-awesome'}
                          name="chevron-down"
                          color={'#898989'}
                          size={14}
                        />
                      );
                    }}
                    rowTextStyle={styles.dropDownButtonTextStyle}
                    renderCustomizedButtonChild={item => {
                      return (
                        <View style={commonStyle.marginHorizontal(8)}>
                          <Text style={styles.dropDownButtonTextStyle}>
                            {item?.title}
                          </Text>
                        </View>
                      );
                    }}
                    data={documentTypes}
                    onSelect={t => setDocumentType(t.value.charAt(0))}
                    buttonTextAfterSelection={selectedItem => {
                      return selectedItem?.title;
                    }}
                    rowTextForSelection={item => {
                      return item?.title;
                    }}
                  />
                </View>
                <View style={commonStyle.marginVertical(8)}>
                  <Input
                    placeholder={'Passport Number'}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.inputTextStyle}
                    value={passportNumber}
                    onChangeText={t => setPassportNumber(t)}
                  />
                </View>
                <View style={commonStyle.marginVertical(8)}>
                  <SelectDropdown
                    defaultValueByIndex={0}
                    defaultButtonText={'Issuing Country'}
                    buttonStyle={styles.dropDownButtonStyle}
                    buttonTextStyle={styles.dropDownButtonTextStyle}
                    renderDropdownIcon={() => {
                      return (
                        <Icon
                          type={'font-awesome'}
                          name="chevron-down"
                          color={'#898989'}
                          size={14}
                        />
                      );
                    }}
                    rowTextStyle={styles.dropDownButtonTextStyle}
                    renderCustomizedButtonChild={item => {
                      return (
                        <View style={commonStyle.marginHorizontal(8)}>
                          <Text style={styles.dropDownButtonTextStyle}>
                            {item?.name}
                          </Text>
                        </View>
                      );
                    }}
                    data={countries}
                    onSelect={() => {}}
                    buttonTextAfterSelection={selectedItem => {
                      return selectedItem?.name;
                    }}
                    rowTextForSelection={item => {
                      return item?.name;
                    }}
                  />
                </View>
                <View style={[commonStyle.marginVertical(8)]}>
                  <Input
                    placeholder={'Expiry Date'}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.inputTextStyle}
                    rightIcon={<CalenderSvg />}
                    value={expiryDate}
                    onChangeText={t => setExpiryDate(t)}
                  />
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
    paddingHorizontal: 10,
    width: '100%',
  },
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
  canvasContent: {
    width: '100%',
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
    paddingHorizontal: 15,
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
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
  },
  inputTextStyle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#898989',
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
    paddingHorizontal: 8,
    marginVertical: 15,
    backgroundColor: Colors.white,
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
    marginVertical: 16,
  },
  inputStyle: {
    marginHorizontal: 20,
  },
  dropDownButtonStyle: {
    width: '100%',
    height: 35,
    backgroundColor: 'white',
    borderBottomColor: '#D9D9D9',
    borderWidth: 0,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 5,
  },
  dropDownButtonTextStyle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#898989',
    textAlign: 'left',
  },
});

export default MyTravelers;
