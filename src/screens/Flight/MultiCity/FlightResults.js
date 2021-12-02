import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import commonStyle from '../../../layout/Style';

import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../../../layout/Colors';
import Font from '../../../layout/Font';

import CustomStatusBar from '../../../components/CustomStatusBar';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';

import FlightSvg from '../../../components/Svg/Flight/FlightWhite.svg';
import FlightCard from '../../../components/Flight/MultiCity/FlightResult/FlightCard';

function FlightResult({navigation}) {
  const [shortVisible, setShortVisible] = useState(false);
  const [index, setIndex] = React.useState(0);

  const [flights] = useState([
    {
      id: 'flight-list-id-one',
    },
    {
      id: 'flight-list-id-two',
    },
    {
      id: 'flight-list-id-three',
    },
    {
      id: 'flight-list-id-four',
    },
    {
      id: 'flight-list-id-five',
    },
  ]);

  const _renderItem = () => <FlightCard />;

  return (
    <SafeAreaView style={commonStyle.container}>
      <CustomStatusBar backgroundColor={Colors.primary} />
      <View style={[commonStyle.flex(1), commonStyle.wrapper]}>
        <View style={[commonStyle.flex(1), commonStyle.content]}>
          <LinearGradient colors={['#1C8CCC', '#015F95']} style={styles.canvas}>
            <View style={styles.header}>
              <View style={[styles.titleSection, styles.rowSpaceBetween]}>
                <View style={commonStyle.rowCenter}>
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
                    <View style={commonStyle.rowSpaceBetween}>
                      <View>
                        <Text style={styles.title}>DOH</Text>
                      </View>
                      <View style={commonStyle.marginHorizontal(8)}>
                        <FlightSvg />
                      </View>
                      <View>
                        <Text style={styles.title}>DXB,</Text>
                      </View>
                    </View>
                    <View
                      style={[
                        commonStyle.rowSpaceBetween,
                        commonStyle.marginHorizontal(8),
                      ]}>
                      <View>
                        <Text style={styles.title}>DOH</Text>
                      </View>
                      <View style={commonStyle.marginHorizontal(8)}>
                        <FlightSvg />
                      </View>
                      <View>
                        <Text style={styles.title}>DXB</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={commonStyle.rowCenter}>
                  <View style={commonStyle.marginHorizontal(5)}>
                    <Icon
                      name={'edit'}
                      type={'feather'}
                      size={18}
                      color={Colors.white}
                    />
                  </View>
                  <View style={commonStyle.marginHorizontal(5)}>
                    <Icon
                      onPress={() => setShortVisible(true)}
                      name={'filter-variant'}
                      type={'material-community'}
                      size={18}
                      color={Colors.white}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.subTitleSection}>
                <Text style={styles.subTitle}>
                  15 Sep - 20 Sep | 4 Travellers | Economy
                </Text>
              </View>
            </View>
          </LinearGradient>
          <View>
            <FlatList
              keyExtractor={item => item?.id?.toString()}
              data={flights}
              renderItem={_renderItem}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
  },
  canvas: {
    width: '100%',
    height: hp('14%'),
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleSection: {
    marginVertical: 10,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 18,
    color: Colors.white,
  },
  subTitleSection: {marginVertical: 3, marginLeft: 32},
  subTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#90E0FF',
  },
  price: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#242A37',
  },
});

export default FlightResult;
