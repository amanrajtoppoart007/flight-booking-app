import React, {useState} from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../../layout/Colors';
import commonStyle from '../../layout/Style';
import LinearGradient from 'react-native-linear-gradient';
import CustomStatusBar from '../../components/CustomStatusBar';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import SortFilter from '../../components/Flight/FlightResults/SortFilter';
import Icons from '../../components/Svg/FlightResultsIcons.svg';
import Deer from '../../components/Svg/Deer.svg';
import Bag from '../../components/Svg/Bag.svg';
import Font from '../../layout/Font';
function MoreOptions() {
  const navigation = useNavigation();
  return (
    <View style={styleOptions.container}>
      <View style={[commonStyle.rowSpaceBetween]}>
        <View style={commonStyle.rowFlexStart}>
          <Icon
            name={'flight-takeoff'}
            type={'material'}
            size={20}
            color={'red'}
          />
          <View style={commonStyle.marginHorizontal(2)} />
          <Text style={styles.redTextBig}>Departing</Text>
          <View
            style={[commonStyle.rowCenter, commonStyle.marginHorizontal(5)]}>
            <Text style={styleOptions.smallBlueText}>Doha (DOH)</Text>
            <Icon
              style={commonStyle.marginHorizontal(5)}
              name={'arrowright'}
              type={'antdesign'}
              size={12}
              color={'gray'}
            />
            <Text style={styleOptions.smallBlueText}>Dubai (DXB)</Text>
          </View>
        </View>
        <Text style={styleOptions.timeText}>Wed, 15 Sep</Text>
      </View>
      <View style={commonStyle.padding(4)}>
        <View style={styleOptions.card(true)}>
          <View style={[commonStyle.rowSpaceBetween, commonStyle.padding(10)]}>
            <Icon
              name={'dot-circle-o'}
              type={'font-awesome'}
              size={26}
              color={Colors.primary}
            />
            <View>
              <Text style={styles.titleBlack}>
                Qatar Airways
                <Text style={styles.smallLightText}> | QR - 3801 </Text>
              </Text>
              <Text style={styleOptions.smallBlueText}>
                Operated by FlyDubai
              </Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={styles.smallLightText}>Economy</Text>
              <Text style={styleOptions.smallGreenText}>Refundable</Text>
            </View>
          </View>
          <View style={[commonStyle.rowSpaceBetween, commonStyle.padding(10)]}>
            <View>
              <Text style={styles.timetext}>
                10:00{'\n'}
                <Text style={styles.smallLightText}>DOH</Text>
              </Text>
            </View>
            <View style={commonStyle.rowFlexStart}>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.smallLightText}>AMM</Text>
                <View style={commonStyle.rowFlexStart}>
                  <Icon
                    name={'circle'}
                    type={'entypo'}
                    size={12}
                    color={'#D9D9D9'}
                  />
                  <View
                    style={[
                      {width: 80, borderWidth: 1, borderColor: '#D9D9D9'},
                    ]}
                  />
                  <Icon
                    name={'circle'}
                    type={'entypo'}
                    size={12}
                    color={'#D9D9D9'}
                  />
                </View>
                <Text style={[styles.smallLightText]}>2h 30m</Text>
              </View>
            </View>
            <View>
              <Text style={styles.timetext}>
                12:00{'\n'}
                <Text style={styles.smallLightText}>DXB</Text>
              </Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={styles.smallLightText}>Total Duration</Text>
              <Text style={styles.smallLightText}>5h 30m</Text>
            </View>
          </View>
          <View style={[commonStyle.rowSpaceBetween, commonStyle.padding(10)]}>
            <View style={commonStyle.rowFlexStart}>
              <Text style={styleOptions.timeText}>1 Stop |</Text>
              <Bag style={commonStyle.marginHorizontal(8)} />
              <Text style={styleOptions.timeText}>Check In: 1 piece</Text>
            </View>
            <Text style={styleOptions.timeText}>Cabin: 7 Kg</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Review')}
              style={commonStyle.rowCenter}>
              <Text style={styles.DetailsText}>Details</Text>
              <Icon
                name={'caretright'}
                type={'antdesign'}
                size={15}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styleOptions.card(false)}>
          <View style={[commonStyle.rowSpaceBetween, commonStyle.padding(10)]}>
            <Icon
              name={'circle-o'}
              type={'font-awesome'}
              size={26}
              color={Colors.primary}
            />
            <View>
              <Text style={styles.titleBlack}>
                Qatar Airways
                <Text style={styles.smallLightText}> | QR - 3801 </Text>
              </Text>
              <Text style={styleOptions.smallBlueText}>
                Operated by FlyDubai
              </Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={styles.smallLightText}>Economy</Text>
              <Text style={styleOptions.smallGreenText}>Refundable</Text>
            </View>
          </View>
          <View style={[commonStyle.rowSpaceBetween, commonStyle.padding(10)]}>
            <View>
              <Text style={styles.timetext}>
                10:00{'\n'}
                <Text style={styles.smallLightText}>DOH</Text>
              </Text>
            </View>
            <View style={commonStyle.rowFlexStart}>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.smallLightText}>AMM</Text>
                <View style={commonStyle.rowFlexStart}>
                  <Icon
                    name={'circle'}
                    type={'entypo'}
                    size={12}
                    color={'#D9D9D9'}
                  />
                  <View
                    style={[
                      {width: 80, borderWidth: 1, borderColor: '#D9D9D9'},
                    ]}
                  />
                  <Icon
                    name={'circle'}
                    type={'entypo'}
                    size={12}
                    color={'#D9D9D9'}
                  />
                </View>
                <Text style={[styles.smallLightText]}>2h 30m</Text>
              </View>
            </View>
            <View>
              <Text style={styles.timetext}>
                12:00{'\n'}
                <Text style={styles.smallLightText}>DXB</Text>
              </Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={styles.smallLightText}>Total Duration</Text>
              <Text style={styles.smallLightText}>5h 30m</Text>
            </View>
          </View>
          <View style={[commonStyle.rowSpaceBetween, commonStyle.padding(10)]}>
            <View style={commonStyle.rowFlexStart}>
              <Text style={styleOptions.timeText}>1 Stop |</Text>
              <Bag style={commonStyle.marginHorizontal(8)} />
              <Text style={styleOptions.timeText}>Check In: 1 piece</Text>
            </View>
            <Text style={styleOptions.timeText}>Cabin: 7 Kg</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Review')}
              style={commonStyle.rowCenter}>
              <Text style={styles.DetailsText}>Details</Text>
              <Icon
                name={'caretright'}
                type={'antdesign'}
                size={15}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={[commonStyle.rowSpaceBetween]}>
        <View style={commonStyle.rowFlexStart}>
          <Icon
            name={'flight-takeoff'}
            type={'material'}
            size={20}
            color={'red'}
          />
          <View style={commonStyle.marginHorizontal(2)} />
          <Text style={styles.redTextBig}>Returning</Text>
          <View
            style={[commonStyle.rowCenter, commonStyle.marginHorizontal(5)]}>
            <Text style={styleOptions.smallBlueText}>Dubai (DXB)</Text>
            <Icon
              style={commonStyle.marginHorizontal(5)}
              name={'arrowright'}
              type={'antdesign'}
              size={12}
              color={'gray'}
            />
            <Text style={styleOptions.smallBlueText}>Doha (DOH)</Text>
          </View>
        </View>
        <Text style={styleOptions.timeText}>Mon, 20 Sep</Text>
      </View>
      <View style={commonStyle.padding(4)}>
        <View style={styleOptions.card(true)}>
          <View style={[commonStyle.rowSpaceBetween, commonStyle.padding(10)]}>
            <Icon
              name={'dot-circle-o'}
              type={'font-awesome'}
              size={26}
              color={Colors.primary}
            />
            <View>
              <Text style={styles.titleBlack}>
                Qatar Airways
                <Text style={styles.smallLightText}> | QR - 3801 </Text>
              </Text>
              <Text style={styleOptions.smallBlueText}>
                Operated by FlyDubai
              </Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={styles.smallLightText}>Economy</Text>
              <Text style={styleOptions.smallGreenText}>Refundable</Text>
            </View>
          </View>
          <View style={[commonStyle.rowSpaceBetween, commonStyle.padding(10)]}>
            <View>
              <Text style={styles.timetext}>
                10:00{'\n'}
                <Text style={styles.smallLightText}>DOH</Text>
              </Text>
            </View>
            <View style={commonStyle.rowFlexStart}>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.smallLightText}>AMM</Text>
                <View style={commonStyle.rowFlexStart}>
                  <Icon
                    name={'circle'}
                    type={'entypo'}
                    size={12}
                    color={'#D9D9D9'}
                  />
                  <View
                    style={[
                      {width: 80, borderWidth: 1, borderColor: '#D9D9D9'},
                    ]}
                  />
                  <Icon
                    name={'circle'}
                    type={'entypo'}
                    size={12}
                    color={'#D9D9D9'}
                  />
                </View>
                <Text style={[styles.smallLightText]}>2h 30m</Text>
              </View>
            </View>
            <View>
              <Text style={styles.timetext}>
                12:00{'\n'}
                <Text style={styles.smallLightText}>DXB</Text>
              </Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={styles.smallLightText}>Total Duration</Text>
              <Text style={styles.smallLightText}>5h 30m</Text>
            </View>
          </View>
          <View style={[commonStyle.rowSpaceBetween, commonStyle.padding(10)]}>
            <View style={commonStyle.rowFlexStart}>
              <Text style={styleOptions.timeText}>1 Stop |</Text>
              <Bag style={commonStyle.marginHorizontal(8)} />
              <Text style={styleOptions.timeText}>Check In: 1 piece</Text>
            </View>
            <Text style={styleOptions.timeText}>Cabin: 7 Kg</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Review')}
              style={commonStyle.rowCenter}>
              <Text style={styles.DetailsText}>Details</Text>
              <Icon
                name={'caretright'}
                type={'antdesign'}
                size={15}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styleOptions.card(false)}>
          <View style={[commonStyle.rowSpaceBetween, commonStyle.padding(10)]}>
            <Icon
              name={'circle-o'}
              type={'font-awesome'}
              size={26}
              color={Colors.primary}
            />
            <View>
              <Text style={styles.titleBlack}>
                Qatar Airways
                <Text style={styles.smallLightText}> | QR - 3801 </Text>
              </Text>
              <Text style={styleOptions.smallBlueText}>
                Operated by FlyDubai
              </Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={styles.smallLightText}>Economy</Text>
              <Text style={styleOptions.smallGreenText}>Refundable</Text>
            </View>
          </View>
          <View style={[commonStyle.rowSpaceBetween, commonStyle.padding(10)]}>
            <View>
              <Text style={styles.timetext}>
                10:00{'\n'}
                <Text style={styles.smallLightText}>DOH</Text>
              </Text>
            </View>
            <View style={commonStyle.rowFlexStart}>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.smallLightText}>AMM</Text>
                <View style={commonStyle.rowFlexStart}>
                  <Icon
                    name={'circle'}
                    type={'entypo'}
                    size={12}
                    color={'#D9D9D9'}
                  />
                  <View
                    style={[
                      {width: 80, borderWidth: 1, borderColor: '#D9D9D9'},
                    ]}
                  />
                  <Icon
                    name={'circle'}
                    type={'entypo'}
                    size={12}
                    color={'#D9D9D9'}
                  />
                </View>
                <Text style={[styles.smallLightText]}>2h 30m</Text>
              </View>
            </View>
            <View>
              <Text style={styles.timetext}>
                12:00{'\n'}
                <Text style={styles.smallLightText}>DXB</Text>
              </Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={styles.smallLightText}>Total Duration</Text>
              <Text style={styles.smallLightText}>5h 30m</Text>
            </View>
          </View>
          <View style={[commonStyle.rowSpaceBetween, commonStyle.padding(10)]}>
            <View style={commonStyle.rowFlexStart}>
              <Text style={styleOptions.timeText}>1 Stop |</Text>
              <Bag style={commonStyle.marginHorizontal(8)} />
              <Text style={styleOptions.timeText}>Check In: 1 piece</Text>
            </View>
            <Text style={styleOptions.timeText}>Cabin: 7 Kg</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Review')}
              style={commonStyle.rowCenter}>
              <Text style={styles.DetailsText}>Details</Text>
              <Icon
                name={'caretright'}
                type={'antdesign'}
                size={15}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default function FlightResults() {
  const navigation = useNavigation();
  const [topbar, setTopbar] = useState('cheapest');
  const [moreOptionsVissible, setMoreOptionsVissible] = useState(false);
  const [SortVissible, setSortVissible] = useState(false);

  function Header() {
    return (
      <View>
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
                <View style={{marginHorizontal: 5}}>
                  <View style={commonStyle.rowCenter}>
                    <Text style={styles.title}>Doha </Text>
                    <Icon
                      name={'swap'}
                      type={'antdesign'}
                      size={20}
                      color={Colors.white}
                    />
                    <Text style={styles.title}> Dubai</Text>
                  </View>
                </View>
              </View>
              <View style={commonStyle.rowCenter}>
                <View>
                  <Icon
                    onPress={() => navigation.navigate('ModifySearch')}
                    name={'edit'}
                    type={'feather'}
                    size={18}
                    color={Colors.white}
                  />
                </View>
                <View style={{marginHorizontal: 5}}>
                  <Icon
                    onPress={() => setSortVissible(!SortVissible)}
                    name={'filter-variant'}
                    type={'material-community'}
                    size={18}
                    color={Colors.white}
                  />
                </View>
              </View>
            </View>
            <View style={{marginLeft: 32}}>
              <Text style={styles.date}>
                15 Sep - 20 Sep | 4 Travellers | Economy
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }

  function TopBar() {
    return (
      <View style={styles.topbarContainer}>
        <TouchableOpacity
          onPress={() => setTopbar('cheapest')}
          style={styles.topbarItem('cheapest', topbar)}>
          <Text style={styles.subTitle}>Cheapest</Text>
          <Text style={styles.titleBlack}>QAR 170</Text>
        </TouchableOpacity>
        <View style={styles.BorderRight} />
        <TouchableOpacity
          onPress={() => setTopbar('fastest')}
          style={styles.topbarItem('fastest', topbar)}>
          <Text style={styles.subTitle}>Fastest</Text>
          <Text style={styles.titleBlack}>QAR 273</Text>
        </TouchableOpacity>
        <View style={styles.BorderRight} />
        <TouchableOpacity
          onPress={() => setTopbar('best')}
          style={styles.topbarItem('best', topbar)}>
          <Text style={styles.subTitle}>Best</Text>
          <Text style={styles.titleBlack}>QAR 170</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={commonStyle.container}>
      <CustomStatusBar backgroundColor={'#1C8CCC'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <View style={styles.content}>
            <Header />
            <TopBar />
            <View>
              <View style={styles.DataContainer(moreOptionsVissible)}>
                <View style={styles.subHeaderConatiner}>
                  <View style={styles.flexcenter}>
                    <Deer />
                    <Text style={styles.titleBlack}>Qatar Airways</Text>
                  </View>
                  <View style={styles.flexEnd}>
                    <Text style={styles.moneyText}>
                      <Text style={styles.lightText}>QAR </Text>
                      170.00
                    </Text>
                    <Text style={styles.redText}>
                      4 Seats Left{' '}
                      <Text style={{color: 'green'}}> Refundable</Text>
                    </Text>
                  </View>
                </View>
                <View style={styles.divider} />
                <View
                  style={[
                    {flexDirection: 'row'},
                    commonStyle.marginHorizontal(10),
                  ]}>
                  <View style={{flex: 0.5}}>
                    <View style={styles.rowSpaceBetween}>
                      <View style={commonStyle.rowCenter}>
                        <Icon
                          style={commonStyle.marginHorizontal(5)}
                          name={'flight-takeoff'}
                          type={'material'}
                          size={20}
                          color={'red'}
                        />
                        <Text style={styles.redTextBig}>Departing</Text>
                      </View>
                      <Text style={styles.smallLightText}>QR - 3801</Text>
                    </View>
                    <View style={styles.rowSpaceBetween}>
                      <View
                        style={[
                          commonStyle.rowCenter,
                          commonStyle.marginHorizontal(5),
                        ]}>
                        <Text style={styles.timetext}>10:00</Text>
                        <Icon
                          style={commonStyle.marginHorizontal(5)}
                          name={'arrowright'}
                          type={'antdesign'}
                          size={16}
                          color={'black'}
                        />
                        <Text style={styles.timetext}>12:15</Text>
                      </View>
                      <Text style={styles.smallLightText}>5h 30m</Text>
                    </View>
                    <View style={styles.locationContainer}>
                      <Text style={styles.smallLightText}>DOH</Text>
                      <Text style={styles.smallLightText}>DXB</Text>
                      <View style={commonStyle.rowCenter}>
                        <Bag style={commonStyle.paddingHorizontal(10)} />
                        <Text style={styles.smallLightText}>23 kgs</Text>
                      </View>
                    </View>
                    <View style={styles.stopsContainer}>
                      <Text style={styles.smallLightText}>1 Stop</Text>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Review')}
                        style={commonStyle.rowCenter}>
                        <Text style={styles.DetailsText}>Details</Text>
                        <Icon
                          name={'caretright'}
                          type={'antdesign'}
                          size={15}
                          color={Colors.primary}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.dividerV} />
                  <View style={{flex: 0.5}}>
                    <View style={styles.rowSpaceBetween}>
                      <View style={commonStyle.rowCenter}>
                        <Icon
                          style={commonStyle.marginHorizontal(5)}
                          name={'flight-takeoff'}
                          type={'material'}
                          size={20}
                          color={'red'}
                        />
                        <Text style={styles.redTextBig}>Returning</Text>
                      </View>
                      <Text style={styles.smallLightText}>QR - 3801</Text>
                    </View>
                    <View style={styles.rowSpaceBetween}>
                      <View
                        style={[
                          commonStyle.rowCenter,
                          commonStyle.marginHorizontal(5),
                        ]}>
                        <Text style={styles.timetext}>15:45</Text>
                        <Icon
                          style={commonStyle.marginHorizontal(5)}
                          name={'arrowright'}
                          type={'antdesign'}
                          size={16}
                          color={'black'}
                        />
                        <Text style={styles.timetext}>16:00</Text>
                      </View>
                      <Text style={styles.smallLightText}>5h 30m</Text>
                    </View>
                    <View style={styles.locationContainer}>
                      <Text style={styles.smallLightText}>DXB</Text>
                      <Text style={styles.smallLightText}>DOH</Text>
                      <View style={commonStyle.rowCenter}>
                        <Bag style={commonStyle.paddingHorizontal(10)} />
                        <Text style={styles.smallLightText}>23 kgs</Text>
                      </View>
                    </View>
                    <View style={styles.stopsContainer}>
                      <Text style={styles.smallLightText}>1 Stop</Text>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Review')}
                        style={commonStyle.rowCenter}>
                        <Text style={styles.DetailsText}>Details</Text>
                        <Icon
                          name={'caretright'}
                          type={'antdesign'}
                          size={15}
                          color={Colors.primary}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    marginTop: 10,
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => setMoreOptionsVissible(!moreOptionsVissible)}
                    style={styles.moreOptionsContainer}>
                    <Text style={styles.moreOptionsText}>
                      {moreOptionsVissible
                        ? 'Less Flight Options'
                        : 'More Options'}
                    </Text>
                    <View style={commonStyle.marginHorizontal(5)} />
                    <Icon
                      name={
                        moreOptionsVissible
                          ? 'angle-double-up'
                          : 'angle-double-down'
                      }
                      type={'font-awesome'}
                      size={16}
                      color={Colors.black}
                    />
                  </TouchableOpacity>
                </View>
                {moreOptionsVissible && <MoreOptions />}
              </View>
              {moreOptionsVissible && (
                <View style={styles.SelectContainer}>
                  <View>
                    <Text style={styles.moneyText}>
                      <Text style={styles.lightText}>QAR </Text>
                      170.00
                    </Text>
                    <Text
                      style={[styles.smallLightText, commonStyle.margin(5)]}>
                      (For 1 Travellers)
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Checkout')}
                    style={styles.Button}>
                    <Text style={styles.WhiteText}>Select</Text>
                  </TouchableOpacity>
                </View>
              )}

              {
                // second element
              }
              <View style={styles.DataContainer(moreOptionsVissible)}>
                <View style={styles.subHeaderConatiner}>
                  <View style={styles.flexcenter}>
                    <Deer />
                    <Text style={styles.titleBlack}>
                      Qatar Airways{'\n'}
                      <View style={commonStyle.marginVertical(5)}>
                        <Icons />
                      </View>
                    </Text>
                  </View>
                  <View style={styles.flexEnd}>
                    <Text style={styles.moneyText}>
                      <Text style={styles.lightText}>QAR </Text>
                      145.00
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: 'tomato',
                        marginVertical: 5,
                      }}>
                      Non Refundable
                    </Text>
                  </View>
                </View>
                <View style={styles.divider} />
                <View
                  style={[
                    {flexDirection: 'row'},
                    commonStyle.marginHorizontal(10),
                  ]}>
                  <View style={{flex: 0.5}}>
                    <View style={styles.rowSpaceBetween}>
                      <View style={commonStyle.rowCenter}>
                        <Icon
                          style={commonStyle.marginHorizontal(5)}
                          name={'flight-takeoff'}
                          type={'material'}
                          size={20}
                          color={'red'}
                        />
                        <Text style={styles.redTextBig}>Departing</Text>
                      </View>
                      <Text style={styles.smallLightText}>QR - 3803</Text>
                    </View>
                    <View style={styles.rowSpaceBetween}>
                      <View
                        style={[
                          commonStyle.rowCenter,
                          commonStyle.marginHorizontal(5),
                        ]}>
                        <Text style={styles.timetext}>21:25</Text>
                        <Icon
                          style={commonStyle.marginHorizontal(5)}
                          name={'arrowright'}
                          type={'antdesign'}
                          size={16}
                          color={'black'}
                        />
                        <Text style={styles.timetext}>21:50</Text>
                      </View>
                      <Text style={styles.smallLightText}>5h 30m</Text>
                    </View>
                    <View style={styles.locationContainer}>
                      <Text style={styles.smallLightText}>DOH</Text>
                      <Text style={styles.smallLightText}>DXB</Text>
                      <View style={commonStyle.rowCenter}>
                        <Bag style={commonStyle.paddingHorizontal(10)} />
                        <Text style={styles.smallLightText}>1 Piece</Text>
                      </View>
                    </View>
                    <View style={styles.stopsContainer}>
                      <Text style={styles.smallLightText}>2 Stop</Text>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Review')}
                        style={commonStyle.rowCenter}>
                        <Text style={styles.DetailsText}>Details</Text>
                        <Icon
                          name={'caretright'}
                          type={'antdesign'}
                          size={15}
                          color={Colors.primary}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.dividerV} />
                  <View style={{flex: 0.5}}>
                    <View style={styles.rowSpaceBetween}>
                      <View style={commonStyle.rowCenter}>
                        <Icon
                          style={commonStyle.marginHorizontal(5)}
                          name={'flight-takeoff'}
                          type={'material'}
                          size={20}
                          color={'red'}
                        />
                        <Text style={styles.redTextBig}>Returning</Text>
                      </View>
                      <Text style={styles.smallLightText}>QR - 3804</Text>
                    </View>
                    <View style={styles.rowSpaceBetween}>
                      <View
                        style={[
                          commonStyle.rowCenter,
                          commonStyle.marginHorizontal(5),
                        ]}>
                        <Text style={styles.timetext}>23:50</Text>
                        <Icon
                          style={commonStyle.marginHorizontal(5)}
                          name={'arrowright'}
                          type={'antdesign'}
                          size={16}
                          color={'black'}
                        />
                        <Text style={styles.timetext}>08:45</Text>
                      </View>
                      <Text style={styles.smallLightText}>5h 30m</Text>
                    </View>
                    <View style={styles.locationContainer}>
                      <Text style={styles.smallLightText}>DXB</Text>
                      <Text style={styles.smallLightText}>DOH</Text>
                      <View style={commonStyle.rowCenter}>
                        <Bag style={commonStyle.paddingHorizontal(10)} />
                        <Text style={styles.smallLightText}>1 Piece</Text>
                      </View>
                    </View>
                    <View style={styles.stopsContainer}>
                      <Text style={styles.smallLightText}>2 Stop</Text>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Review')}
                        style={commonStyle.rowCenter}>
                        <Text style={styles.DetailsText}>Details</Text>
                        <Icon
                          name={'caretright'}
                          type={'antdesign'}
                          size={15}
                          color={Colors.primary}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    marginTop: 10,
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => setMoreOptionsVissible(!moreOptionsVissible)}
                    style={styles.moreOptionsContainer}>
                    <Text style={styles.moreOptionsText}>
                      {moreOptionsVissible
                        ? 'Less Flight Options'
                        : 'More Flight Options'}
                    </Text>
                    <View style={commonStyle.marginHorizontal(5)} />
                    <Icon
                      name={
                        moreOptionsVissible
                          ? 'angle-double-up'
                          : 'angle-double-down'
                      }
                      type={'font-awesome'}
                      size={16}
                      color={Colors.black}
                    />
                  </TouchableOpacity>
                </View>
                {moreOptionsVissible && <MoreOptions />}
              </View>
              {moreOptionsVissible && (
                <View style={styles.SelectContainer}>
                  <View>
                    <Text style={styles.moneyText}>
                      <Text style={styles.lightText}>QAR </Text>
                      170.00
                    </Text>
                    <Text
                      style={[styles.smallLightText, commonStyle.margin(5)]}>
                      (For 1 Travellers)
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Checkout')}
                    style={styles.Button}>
                    <Text style={styles.WhiteText}>Select</Text>
                  </TouchableOpacity>
                </View>
              )}

              {
                // second element
              }
              <View style={styles.DataContainer(moreOptionsVissible)}>
                <View style={styles.subHeaderConatiner}>
                  <View style={styles.flexcenter}>
                    <Deer />
                    <Text style={styles.titleBlack}>
                      Qatar Airways{'\n'}
                      <View style={commonStyle.marginVertical(5)}>
                        <Icons />
                      </View>
                    </Text>
                  </View>
                  <View style={styles.flexEnd}>
                    <Text style={styles.moneyText}>
                      <Text style={styles.lightText}>QAR </Text>
                      273.00
                    </Text>
                    <Text style={styles.redText}>
                      2 Seats Left{' '}
                      <Text style={{color: 'green'}}> Refundable</Text>
                    </Text>
                  </View>
                </View>
                <View style={styles.divider} />
                <View
                  style={[
                    {flexDirection: 'row'},
                    commonStyle.marginHorizontal(10),
                  ]}>
                  <View style={{flex: 0.5}}>
                    <View style={styles.rowSpaceBetween}>
                      <View style={commonStyle.rowCenter}>
                        <Icon
                          style={commonStyle.marginHorizontal(5)}
                          name={'flight-takeoff'}
                          type={'material'}
                          size={20}
                          color={'red'}
                        />
                        <Text style={styles.redTextBig}>Departing</Text>
                      </View>
                      <Text style={styles.smallLightText}>QR - 3803</Text>
                    </View>
                    <View style={styles.rowSpaceBetween}>
                      <View
                        style={[
                          commonStyle.rowCenter,
                          commonStyle.marginHorizontal(5),
                        ]}>
                        <Text style={styles.timetext}>17:00</Text>
                        <Icon
                          style={commonStyle.marginHorizontal(5)}
                          name={'arrowright'}
                          type={'antdesign'}
                          size={16}
                          color={'black'}
                        />
                        <Text style={styles.timetext}>19:15</Text>
                      </View>
                      <Text style={styles.smallLightText}>5h 30m</Text>
                    </View>
                    <View style={styles.locationContainer}>
                      <Text style={styles.smallLightText}>DOH</Text>
                      <Text style={styles.smallLightText}>DXB</Text>
                      <View style={commonStyle.rowCenter}>
                        <Bag style={commonStyle.paddingHorizontal(10)} />
                        <Text style={styles.smallLightText}>30 kgs</Text>
                      </View>
                    </View>
                    <View style={styles.stopsContainer}>
                      <Text style={styles.smallLightText}>2 Stop</Text>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Review')}
                        style={commonStyle.rowCenter}>
                        <Text style={styles.DetailsText}>Details</Text>
                        <Icon
                          name={'caretright'}
                          type={'antdesign'}
                          size={15}
                          color={Colors.primary}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.dividerV} />
                  <View style={{flex: 0.5}}>
                    <View style={styles.rowSpaceBetween}>
                      <View style={commonStyle.rowCenter}>
                        <Icon
                          style={commonStyle.marginHorizontal(5)}
                          name={'flight-takeoff'}
                          type={'material'}
                          size={20}
                          color={'red'}
                        />
                        <Text style={styles.redTextBig}>Returning</Text>
                      </View>
                      <Text style={styles.smallLightText}>QR - 3804</Text>
                    </View>
                    <View style={styles.rowSpaceBetween}>
                      <View
                        style={[
                          commonStyle.rowCenter,
                          commonStyle.marginHorizontal(5),
                        ]}>
                        <Text style={styles.timetext}>12:00</Text>
                        <Icon
                          style={commonStyle.marginHorizontal(5)}
                          name={'arrowright'}
                          type={'antdesign'}
                          size={16}
                          color={'black'}
                        />
                        <Text style={styles.timetext}>20:05</Text>
                      </View>
                      <Text style={styles.smallLightText}>5h 30m</Text>
                    </View>
                    <View style={styles.locationContainer}>
                      <Text style={styles.smallLightText}>DXB</Text>
                      <Text style={styles.smallLightText}>DOH</Text>
                      <View style={commonStyle.rowCenter}>
                        <Bag style={commonStyle.paddingHorizontal(10)} />
                        <Text style={styles.smallLightText}>30 kgs</Text>
                      </View>
                    </View>
                    <View style={styles.stopsContainer}>
                      <Text style={styles.smallLightText}>2 Stop</Text>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Review')}
                        style={commonStyle.rowCenter}>
                        <Text style={styles.DetailsText}>Details</Text>
                        <Icon
                          name={'caretright'}
                          type={'antdesign'}
                          size={15}
                          color={Colors.primary}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    marginTop: 10,
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => setMoreOptionsVissible(!moreOptionsVissible)}
                    style={styles.moreOptionsContainer}>
                    <Text style={styles.moreOptionsText}>
                      {moreOptionsVissible
                        ? 'Less Flight Options'
                        : 'More Flight Options'}
                    </Text>
                    <View style={commonStyle.marginHorizontal(5)} />
                    <Icon
                      name={
                        moreOptionsVissible
                          ? 'angle-double-up'
                          : 'angle-double-down'
                      }
                      type={'font-awesome'}
                      size={16}
                      color={Colors.black}
                    />
                  </TouchableOpacity>
                </View>
                {moreOptionsVissible && <MoreOptions />}
              </View>
              {moreOptionsVissible && (
                <View style={styles.SelectContainer}>
                  <View>
                    <Text style={styles.moneyText}>
                      <Text style={styles.lightText}>QAR </Text>
                      170.00
                    </Text>
                    <Text
                      style={[styles.smallLightText, commonStyle.margin(5)]}>
                      (For 1 Travellers)
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Checkout')}
                    style={styles.Button}>
                    <Text style={styles.WhiteText}>Select</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
      {SortVissible && <SortFilter onClose={() => setSortVissible(false)} />}
    </SafeAreaView>
  );
}

const styleOptions = StyleSheet.create({
  container: {
    backgroundColor: '#F5F7FB',
    paddingHorizontal: 7,
  },
  smallGreenText: {
    fontSize: 12,
    color: 'green',
    fontFamily: Font.AvenirLight,
  },
  smallBlueText: {
    fontSize: 12,
    color: Colors.primary,
    fontFamily: Font.AvenirLight,
  },
  timeText: {
    fontSize: 12,
    color: Colors.border,
    fontFamily: Font.AvenirRegular,
  },
  card(isSelected) {
    return {
      backgroundColor: isSelected ? 'rgba(225, 225, 225, 0.4)' : Colors.white,
      borderRadius: 10,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: isSelected ? Colors.primary : Colors.border,
    };
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexcenter: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  content: {
    width: '100%',
    backgroundColor: '#F5F7FB',
  },
  canvas: {
    width: '100%',
    height: hp('11%'),
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleSection: {
    marginTop: 10,
  },
  BorderRight: {
    height: '100%',
    borderRightWidth: 0.5,
    borderColor: Colors.lightText,
  },
  header: {
    paddingHorizontal: 10,
  },
  date: {
    fontSize: 14,
    color: '#90E0FF',
    fontFamily: Font.AvenirLight,
  },
  title: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: Font.AvenirRegular,
  },
  divider: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#D9D9D9',
    marginVertical: 8,
  },
  dividerV: {
    height: '100%',
    borderWidth: 0.5,
    borderColor: '#D9D9D9',
    marginHorizontal: 4,
  },
  topbarContainer: {
    flexDirection: 'row',
    borderBottomWidth: 0.3,
    borderColor: Colors.border,
  },
  Button: {
    borderRadius: 8,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    marginHorizontal: 10,
    paddingHorizontal: 40,
  },
  topbarItem(index, name) {
    return {
      padding: 10,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'green',
      borderBottomWidth: index == name ? 3 : 0,
      backgroundColor: index == name ? '#F2F2F2' : Colors.white,
    };
  },
  WhiteText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: Colors.white,
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 5,
  },
  stopsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 5,
    marginTop: 10,
  },
  smallLightText: {
    fontSize: 12,
    color: Colors.lightText,
    fontFamily: Font.AvenirLight,
  },
  timetext: {
    fontSize: 15,
    color: Colors.black,
    marginVertical: 5,
    fontFamily: Font.AvenirRegular,
  },
  DataContainer(bo) {
    return {
      backgroundColor: Colors.white,
      elevation: 4,
      marginVertical: 10,
      borderRadius: bo ? 8 : 0,
      borderWidth: bo ? 2 : 0,
      marginHorizontal: 5,
      borderColor: Colors.secondary,
      paddingTop: 10,
    };
  },
  moneyText: {
    color: Colors.black,
    marginHorizontal: 5,
    fontSize: 18,
    fontFamily: Font.AvenirHeavy,
  },
  moreOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'rgba(61, 181, 255, 0.15)',
    borderRadius: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  subTitle: {
    fontSize: 16,
    color: Colors.lightText,
    fontFamily: Font.AvenirLight,
  },
  titleBlack: {
    fontSize: 18,
    color: Colors.black,
    fontFamily: Font.AvenirMedium,
  },
  flexEnd: {
    flex: 1,
    alignItems: 'flex-end',
  },
  lightText: {
    fontSize: 14,
    color: Colors.lightText,
    fontFamily: Font.AvenirLight,
  },
  redText: {
    fontSize: 12,
    color: 'red',
    marginVertical: 5,
    fontFamily: Font.AvenirLight,
  },
  DetailsText: {
    fontSize: 12,
    color: Colors.primary,
    fontFamily: Font.AvenirLight,
  },
  redTextBig: {
    fontSize: 15,
    color: 'red',
    marginVertical: 5,
    fontFamily: Font.AvenirRegular,
  },
  moreOptionsText: {
    fontSize: 14,
    color: Colors.black,
    marginVertical: 5,
    fontFamily: Font.AvenirRegular,
  },

  subHeaderConatiner: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  SelectContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
    elevation: 5,
  },
});
