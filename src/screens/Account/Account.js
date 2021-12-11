import React from 'react';
import {
  Platform,
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
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

import EditProfileSvg from '../../components/Svg/Profile/EditProfile.svg';
import UserSvg from '../../components/Svg/Profile/User.svg';
import LockSvg from '../../components/Svg/Profile/Lock.svg';
import SignOut from '../../components/Svg/Profile/SignOut.svg';
import CustomStatusBar from '../../components/CustomStatusBar';
import ChipSection from '../../components/Account/ChipSection';
import OfferSlider from '../../components/Account/OfferSlider';

function Account({navigation}) {
  const menus = [
    {
      title: 'My Profile',
      Svg: EditProfileSvg,
      type: 'function',
      action: 'EditProfile',
    },
    {
      title: 'My Travelers',
      Svg: UserSvg,
      type: 'link',
      action: 'MyTravelers',
    },
    {
      title: 'Password Reset',
      Svg: LockSvg,
      type: 'link',
      action: 'PasswordReset',
    },
    {
      title: 'Sign Out',
      Svg: SignOut,
      type: 'link',
      action: 'SignOut',
    },
  ];
  return (
    <SafeAreaView style={commonStyle.container}>
      <CustomStatusBar backgroundColor={Colors.primary} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={commonStyle.wrapper}>
          <View style={commonStyle.content}>
            <LinearGradient
              colors={['#1C8CCC', '#015F95']}
              style={styles.canvas}>
              <View style={styles.contentWrapper}>
                <View style={styles.canvasContent}>
                  <View style={[commonStyle.marginVertical(10)]}>
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
                  <View style={[commonStyle.marginVertical(15)]}>
                    <View style={styles.infoSection}>
                      <View
                        style={[
                          styles.infoColumn,
                          styles.infoColumnBorderRight,
                        ]}>
                        <Text style={styles.counterText}>08</Text>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('MyTrips')}>
                          <Text style={styles.infoText}>All Trips</Text>
                        </TouchableOpacity>
                      </View>
                      <View
                        style={[
                          styles.infoColumn,
                          styles.infoColumnBorderLeft,
                        ]}>
                        <Text style={styles.counterText}>02</Text>
                        <Text style={styles.infoText}>Upcoming Trips</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </LinearGradient>
            <View style={styles.contentWrapper}>
              <View style={[commonStyle.marginVertical(15)]}>
                <Text style={styles.menuSectionTitle}>Account details</Text>
              </View>
              <View style={commonStyle.marginVertical(4)}>
                <View style={styles.menuRow}>
                  {menus &&
                    menus.map((Item, index) => {
                      return (
                        <View key={index} style={styles.menuWrapper}>
                          <TouchableOpacity
                            onPress={() => navigation.navigate(Item?.action)}
                            style={styles.menu}>
                            <View>
                              <Item.Svg />
                            </View>
                            <View style={styles.menuTitleSection}>
                              <Text style={styles.menuTitle}>
                                {Item?.title}
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      );
                    })}
                </View>
              </View>
              <View style={commonStyle.marginVertical(15)}>
                <ChipSection />
              </View>
              <View style={styles.sliderSection}>
                <OfferSlider />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    width: '100%',
    paddingHorizontal: 20,
  },
  canvas: {
    width: '100%',
    height: hp('30%'),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  canvasContent: {
    width: '100%',
  },
  menuSectionTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: '#242A37',
  },
  title: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: '#242A37',
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
  infoSection: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  infoColumn: {
    width: '50%',
    height: '85%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoColumnBorderLeft: {
    borderLeftWidth: 1,
    borderLeftColor: Colors.primary,
  },
  infoColumnBorderRight: {
    borderRightWidth: 1,
    borderRightColor: Colors.primary,
  },
  counterText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 24,
    color: '#242A37',
  },
  infoText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#242A37',
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  menuRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuWrapper: {
    marginVertical: 8,
  },
  menu: {
    width: wp('40%'),
    height: 100,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#DDDDDD',
  },
  menuTitleSection: {
    marginTop: 20,
  },
  menuTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
  },
  sliderSection: {
    marginBottom: 20,
  },
});

export default Account;
