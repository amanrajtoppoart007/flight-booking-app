import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import commonStyle from '../../../layout/Style';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';
import Colors from '../../../layout/Colors';
import RoundTripFlightSvg from '../../../components/Svg/Flight/RoundTripFlight.svg';
import Font from '../../../layout/Font';
import CustomStatusBar from '../../../components/CustomStatusBar';
import Accordion from '../../../components/Flight/AddServices/Accordion';
import UserService from '../../../components/Flight/AddServices/UserService';

function AddServices({navigation}) {
  return (
    <SafeAreaView style={commonStyle.container}>
      <CustomStatusBar backgroundColor={Colors.primary} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[commonStyle.flex(1), commonStyle.wrapper]}>
          <View style={[commonStyle.flex(1), commonStyle.content]}>
            <View style={commonStyle.flex(1)}>
              <LinearGradient
                colors={['#1C8CCC', '#015F95']}
                style={styles.canvas}>
                <View style={styles.header}>
                  <View style={styles.titleSection}>
                    <View style={commonStyle.rowFlexStart}>
                      <View>
                        <Icon
                          onPress={() => navigation.goBack()}
                          name={'arrow-back'}
                          type={'material-icon'}
                          size={30}
                          color={Colors.white}
                        />
                      </View>
                      <View style={styles.titleWrapper}>
                        <View>
                          <Text style={styles.title}>Doha</Text>
                        </View>
                        <View style={commonStyle.marginHorizontal(8)}>
                          <RoundTripFlightSvg />
                        </View>
                        <View>
                          <Text style={styles.title}>Dubai</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </LinearGradient>
              <View>
                <Accordion
                  title={'Departing'}
                  subTitle={'DOH - DXB'}
                  visible={true}
                  Content={<UserService />}
                />
              </View>
              <View>
                <Accordion
                  title={'Returning'}
                  subTitle={'DOH - DXB'}
                  visible={true}
                  Content={<UserService />}
                />
              </View>
              <View
                style={[commonStyle.center, commonStyle.marginVertical(20)]}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Confirm Selection</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  canvas: {
    width: '100%',
    height: hp('10%'),
    justifyContent: 'center',
  },
  titleSection: {
    marginVertical: 10,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  header: {
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 18,
    color: Colors.white,
  },
  button: {
    width: wp('80%'),
    height: 45,
    backgroundColor: '#F15922',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: Colors.white,
  },
});

export default AddServices;
