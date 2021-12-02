import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from 'react-native';
import commonStyle from '../../layout/Style';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../layout/Colors';
import Font from '../../layout/Font';
import CustomStatusBar from '../../components/CustomStatusBar';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';
import Cheapest from '../../components/Flight/RoundTrip/SearchResults/Cheapest';
import Fastest from '../../components/Flight/RoundTrip/SearchResults/Fastest';
import Best from '../../components/Flight/RoundTrip/SearchResults/Best';
import PlaneSmall from '../../components/Svg/PlaneSmall.svg';

import {TabView} from 'react-native-tab-view';
import SortFilter from '../../components/Flight/FlightResults/SortFilter';

function FlightResult({navigation}) {
  const [shortVisible, setShortVisible] = useState(false);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'cheapest', title: 'Cheapest', price: 'QAR 170'},
    {key: 'fastest', title: 'Fastest', price: 'QAR 273'},
    {key: 'best', title: 'Best', price: 'QAR 170'},
  ]);

  const renderScene = ({route, jumpTo}) => {
    switch (route.key) {
      case 'cheapest':
        return <Cheapest jumpTo={jumpTo} />;
      case 'fastest':
        return <Fastest jumpTo={jumpTo} />;
      case 'best':
        return <Best jumpTo={jumpTo} />;
      default:
        return <Cheapest jumpto={jumpTo} />;
    }
  };

  const _handleIndexChange = i => setIndex(i);

  const _renderTabBar = props => {
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const isActive = i === index;
          return (
            <TouchableOpacity
              key={i?.toString()}
              style={styles.tabItem(isActive)}
              onPress={() => setIndex(i)}>
              <Animated.Text style={styles.tabTitle}>
                {route.title}
              </Animated.Text>
              <View>
                <Text style={styles.price}>{route?.price}</Text>
              </View>
              {i === index ? (
                <View style={styles.underline} />
              ) : (
                <View style={styles.underlineTransparent} />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
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
                    <View>
                      <Text style={styles.title}>Doha</Text>
                    </View>
                    <View style={commonStyle.marginHorizontal(8)}>
                      <PlaneSmall />
                    </View>
                    <View>
                      <Text style={styles.title}>Dubai</Text>
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
          <View style={commonStyle.flex(1)}>
            <TabView
              navigationState={{index, routes}}
              renderScene={renderScene}
              renderTabBar={_renderTabBar}
              onIndexChange={_handleIndexChange}
              initialLayout={{width: wp('100%')}}
            />
          </View>
        </View>
      </View>
      {shortVisible && <SortFilter onClose={() => setShortVisible(false)} />}
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
  price: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#242A37',
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
  topBarContainer: {
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 74, 74, 0.2)',
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
  tabTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
  },
  tabBar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBarText: {
    fontSize: 14,
    color: '#F15922',
    marginVertical: 5,
    fontFamily: Font.AvenirHeavy,
    marginHorizontal: 9,
  },

  underline: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#3F8815',
    marginTop: 10,
  },
  underlineTransparent: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#DDDDDD',
    marginTop: 10,
  },
  tabItem(isActive) {
    return {
      width: '33.33%',
      alignItems: 'center',
      borderLeftWidth: 0.5,
      borderRightWidth: 0.5,
      borderLeftColor: '#707070',
      borderRightColor: '#707070',
      backgroundColor: isActive ? '#CFD7E0' : Colors.white,
    };
  },
});

export default FlightResult;

//
// <View style={styles.DataContainer(moreOptionsVisible.index1)}>
//   <View style={styles.subHeaderContainer}>
//     <View style={styles.flexCenter}>
//       <Deer />
//       <Text style={styles.titleBlack}>Qatar Airways</Text>
//     </View>
//     <View style={styles.flexEnd}>
//       <Text style={styles.moneyText}>
//         <Text style={styles.lightText}>QAR </Text>
//         170.00
//       </Text>
//       <Text style={styles.redText}>
//         4 Seats Left{' '}
//         <Text style={{color: 'green'}}> Refundable</Text>
//       </Text>
//     </View>
//   </View>
//   <View style={styles.divider} />
//   <View
//       style={[
//         {flexDirection: 'row'},
//         commonStyle.marginHorizontal(10),
//       ]}>
//     <View style={{flex: 0.5}}>
//       <View style={styles.rowSpaceBetween}>
//         <View style={commonStyle.rowCenter}>
//           <Icon
//               style={commonStyle.marginHorizontal(5)}
//               name={'flight-takeoff'}
//               type={'material'}
//               size={20}
//               color={'red'}
//           />
//           <Text style={styles.redTextBig}>Departing</Text>
//         </View>
//         <Text style={styles.smallLightText}>QR - 3801</Text>
//       </View>
//       <View style={styles.rowSpaceBetween}>
//         <View
//             style={[
//               commonStyle.rowCenter,
//               commonStyle.marginHorizontal(5),
//             ]}>
//           <Text style={styles.TimeText}>10:00</Text>
//           <Icon
//               style={commonStyle.marginHorizontal(5)}
//               name={'arrowright'}
//               type={'antdesign'}
//               size={16}
//               color={'black'}
//           />
//           <Text style={styles.TimeText}>12:15</Text>
//         </View>
//         <Text style={styles.smallLightText}>5h 30m</Text>
//       </View>
//       <View style={styles.locationContainer}>
//         <Text style={styles.smallLightText}>DOH</Text>
//         <Text style={styles.smallLightText}>DXB</Text>
//         <View style={commonStyle.rowCenter}>
//           <Bag style={commonStyle.paddingHorizontal(10)} />
//           <Text style={styles.smallLightText}>23 kgs</Text>
//         </View>
//       </View>
//       <View style={styles.stopsContainer}>
//         <Text style={styles.smallLightText}>1 Stop</Text>
//         <TouchableOpacity
//             onPress={() => navigation.navigate('Review')}
//             style={commonStyle.rowCenter}>
//           <Text style={styles.DetailsText}>Details</Text>
//           <Icon
//               name={'caretright'}
//               type={'antdesign'}
//               size={15}
//               color={Colors.primary}
//           />
//         </TouchableOpacity>
//       </View>
//     </View>
//     <View style={styles.dividerV} />
//     <View style={{flex: 0.5}}>
//       <View style={styles.rowSpaceBetween}>
//         <View style={commonStyle.rowCenter}>
//           <Icon
//               style={commonStyle.marginHorizontal(5)}
//               name={'flight-takeoff'}
//               type={'material'}
//               size={20}
//               color={'red'}
//           />
//           <Text style={styles.redTextBig}>Returning</Text>
//         </View>
//         <Text style={styles.smallLightText}>QR - 3801</Text>
//       </View>
//       <View style={styles.rowSpaceBetween}>
//         <View
//             style={[
//               commonStyle.rowCenter,
//               commonStyle.marginHorizontal(5),
//             ]}>
//           <Text style={styles.TimeText}>15:45</Text>
//           <Icon
//               style={commonStyle.marginHorizontal(5)}
//               name={'arrowright'}
//               type={'antdesign'}
//               size={16}
//               color={'black'}
//           />
//           <Text style={styles.TimeText}>16:00</Text>
//         </View>
//         <Text style={styles.smallLightText}>5h 30m</Text>
//       </View>
//       <View style={styles.locationContainer}>
//         <Text style={styles.smallLightText}>DXB</Text>
//         <Text style={styles.smallLightText}>DOH</Text>
//         <View style={commonStyle.rowCenter}>
//           <Bag style={commonStyle.paddingHorizontal(10)} />
//           <Text style={styles.smallLightText}>23 kgs</Text>
//         </View>
//       </View>
//       <View style={styles.stopsContainer}>
//         <Text style={styles.smallLightText}>1 Stop</Text>
//         <TouchableOpacity
//             onPress={() => navigation.navigate('Review')}
//             style={commonStyle.rowCenter}>
//           <Text style={styles.DetailsText}>Details</Text>
//           <Icon
//               name={'caretright'}
//               type={'antdesign'}
//               size={15}
//               color={Colors.primary}
//           />
//         </TouchableOpacity>
//       </View>
//     </View>
//   </View>
//   <View
//       style={{
//         marginTop: 10,
//         alignItems: 'center',
//       }}>
//     <TouchableOpacity
//         onPress={() =>
//             setMoreOptionsVisible({
//               ...moreOptionsVisible,
//               index1: !moreOptionsVisible.index1,
//             })
//         }
//         style={styles.moreOptionsContainer}>
//       <Text style={styles.moreOptionsText}>
//         {moreOptionsVisible.index1
//             ? 'Less Flight Options'
//             : 'More Options'}
//       </Text>
//       <View style={commonStyle.marginHorizontal(5)} />
//       <Icon
//           name={
//             moreOptionsVisible.index1
//                 ? 'angle-double-up'
//                 : 'angle-double-down'
//           }
//           type={'font-awesome'}
//           size={16}
//           color={Colors.black}
//       />
//     </TouchableOpacity>
//   </View>
//   {moreOptionsVisible.index1 && <MoreOptions />}
// </View>
// {moreOptionsVisible.index1 && (
//     <View style={styles.SelectContainer}>
//       <View>
//         <Text style={styles.moneyText}>
//           <Text style={styles.lightText}>QAR </Text>
//           170.00
//         </Text>
//         <Text
//             style={[styles.smallLightText, commonStyle.margin(5)]}>
//           (For 1 Travellers)
//         </Text>
//       </View>
//       <TouchableOpacity
//           onPress={() => navigation.navigate('Checkout')}
//           style={styles.Button}>
//         <Text style={styles.WhiteText}>Select</Text>
//       </TouchableOpacity>
//     </View>
// )}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F7FB',
//   },
//   wrapper: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   flexCenter: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//   },
//   content: {
//     width: '100%',
//     backgroundColor: '#F5F7FB',
//   },
//   canvas: {
//     width: '100%',
//     height: hp('11%'),
//   },
//   rowSpaceBetween: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   titleSection: {
//     marginTop: 10,
//   },
//   BorderRight: {
//     height: '100%',
//     borderRightWidth: 0.5,
//     borderColor: Colors.lightText,
//   },
//   header: {
//     paddingHorizontal: 10,
//   },
//   date: {
//     fontSize: 14,
//     color: '#90E0FF',
//     fontFamily: Font.AvenirLight,
//   },
//   title: {
//     fontSize: 18,
//     color: Colors.white,
//     fontFamily: Font.AvenirRegular,
//   },
//   divider: {
//     width: '100%',
//     borderWidth: 0.5,
//     borderColor: '#D9D9D9',
//     marginVertical: 8,
//   },
//   dividerV: {
//     height: '100%',
//     borderWidth: 0.5,
//     borderColor: '#D9D9D9',
//     marginHorizontal: 4,
//   },
//   topbarContainer: {
//     flexDirection: 'row',
//     borderBottomWidth: 0.3,
//     borderColor: Colors.border,
//   },
//   Button: {
//     borderRadius: 8,
//     paddingVertical: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: Colors.secondary,
//     marginHorizontal: 10,
//     paddingHorizontal: 40,
//   },
//   topbarItem(index, name) {
//     return {
//       padding: 10,
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       borderColor: 'green',
//       borderBottomWidth: index == name ? 3 : 0,
//       backgroundColor: index == name ? '#F2F2F2' : Colors.white,
//     };
//   },
//   WhiteText: {
//     fontFamily: Font.AvenirMedium,
//     fontSize: 16,
//     color: Colors.white,
//   },
//   locationContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginLeft: 5,
//   },
//   stopsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginLeft: 5,
//     marginTop: 10,
//   },
//   smallLightText: {
//     fontSize: 12,
//     color: Colors.lightText,
//     fontFamily: Font.AvenirLight,
//   },
//   TimeText: {
//     fontSize: 14,
//     color: Colors.black,
//     marginVertical: 5,
//     fontFamily: Font.AvenirRegular,
//   },
//   DataContainer(bo) {
//     return {
//       backgroundColor: Colors.white,
//       elevation: 4,
//       marginVertical: 10,
//       borderRadius: bo ? 8 : 0,
//       borderWidth: bo ? 2 : 0,
//       marginHorizontal: 5,
//       borderColor: Colors.secondary,
//       paddingTop: 10,
//     };
//   },
//   moneyText: {
//     color: Colors.black,
//     marginHorizontal: 5,
//     fontSize: 16,
//     fontFamily: Font.AvenirHeavy,
//   },
//   moreOptionsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     backgroundColor: 'rgba(61, 181, 255, 0.15)',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     alignItems: 'center',
//   },
//   subTitle: {
//     fontSize: 14,
//     color: Colors.lightText,
//     fontFamily: Font.AvenirLight,
//   },
//   titleBlack: {
//     fontSize: 14,
//     color: Colors.black,
//     fontFamily: Font.AvenirMedium,
//   },
//   flexEnd: {
//     flex: 1,
//     alignItems: 'flex-end',
//   },
//   lightText: {
//     fontSize: 12,
//     color: Colors.lightText,
//     fontFamily: Font.AvenirLight,
//   },
//   redText: {
//     fontSize: 12,
//     color: 'red',
//     marginVertical: 5,
//     fontFamily: Font.AvenirLight,
//   },
//   DetailsText: {
//     fontSize: 12,
//     color: Colors.primary,
//     fontFamily: Font.AvenirLight,
//   },
//   redTextBig: {
//     fontSize: 14,
//     color: 'red',
//     marginVertical: 5,
//     fontFamily: Font.AvenirRegular,
//   },
//   moreOptionsText: {
//     fontSize: 14,
//     color: Colors.black,
//     marginVertical: 5,
//     fontFamily: Font.AvenirRegular,
//   },
//
//   subHeaderContainer: {
//     alignSelf: 'flex-end',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginHorizontal: 10,
//   },
//   SelectContainer: {
//     padding: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: Colors.white,
//     elevation: 5,
//   },
// });
