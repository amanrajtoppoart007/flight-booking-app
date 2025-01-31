import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon, Overlay} from 'react-native-elements';
import Colors from '../../../layout/Colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import commonStyle from '../../../layout/Style';
import CloseSvg from '../../Svg/Close.svg';
import Font from '../../../layout/Font';
import SelectDropdown from 'react-native-select-dropdown';
function SendRequestModal({visible, setVisible}) {
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const [types] = useState([
    {
      id: 'request-type-id-one',
      title: 'Request Type',
      value: '',
    },
    {
      id: 'request-type-id-two',
      title: 'Cancel my booking',
      value: 'cancel-my-booking',
    },
    {
      id: 'request-type-id-three',
      title: 'Change my booking',
      value: 'change-my-booking',
    },
    {
      id: 'request-type-id-four',
      title: 'Other Queries',
      value: 'other-queries',
    },
  ]);

  return (
    <>
      <Overlay
        overlayStyle={styles.overLayStyle}
        fullScreen={true}
        isVisible={visible}
        onBackdropPress={toggleOverlay}>
        <View style={styles.card}>
          <View style={commonStyle.rowSpaceBetween}>
            <View>
              <Text style={styles.title}>Send a Request</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <CloseSvg />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.dropDownSection}>
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
                  <View>
                    <Text style={styles.dropDownButtonTextStyle}>
                      {item?.title}
                    </Text>
                  </View>
                );
              }}
              data={types}
              onSelect={() => {}}
              buttonTextAfterSelection={selectedItem => {
                return selectedItem?.title;
              }}
              rowTextForSelection={item => {
                return item?.title;
              }}
            />
          </View>
          <View style={styles.textBoxSection}>
            <TextInput
              style={styles.textInputBox}
              placeholder={'Description…'}
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={styles.button}>
              <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Overlay>
    </>
  );
}

const styles = StyleSheet.create({
  overLayStyle: {backgroundColor: 'rgba(0,0,0,0.3)', alignItems: 'center'},
  card: {
    top: hp('15%'),
    width: 345,
    height: 250,
    borderRadius: 8,
    backgroundColor: Colors.white,
    padding: 15,
    paddingVertical: 10,
  },
  title: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#242A37',
  },
  dropDownSection: {
    marginTop: 20,
  },
  dropDownButtonStyle: {
    width: '100%',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: '#C3C3C3',
    borderRadius: 4,
  },
  dropDownButtonTextStyle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
  },
  textBoxSection: {
    marginVertical: 15,
  },
  textInputBox: {
    height: 60,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: '#C3C3C3',
    borderRadius: 4,
    paddingHorizontal: 5,
  },
  button: {
    width: '100%',
    height: 45,
    backgroundColor: '#F15922',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  buttonText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: Colors.white,
  },
});

export default SendRequestModal;
