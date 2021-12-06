import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BottomSheet} from 'react-native-elements';
import commonStyle from '../../../layout/Style';
import CloseSvg from '../../Svg/Close.svg';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../../../layout/Colors';
import AmenitiesList from './AmenitiesList';
import Font from '../../../layout/Font';

import ResizeSvg from '../../Svg/Hotel/Resize.svg';
import BedSvg from '../../Svg/Hotel/Bed.svg';
import UsersXlSvg from '../../Svg/Hotel/UsersXl.svg';

function RoomInfo({isRoomInfoVisible, setIsRoomInfoVisible}) {
  const toggleOverlay = () => {
    setIsRoomInfoVisible(!isRoomInfoVisible);
  };
  return (
    <>
      <BottomSheet
        containerStyle={styles.bottomSheetStyle}
        fullScreen={true}
        isVisible={isRoomInfoVisible}
        onBackdropPress={toggleOverlay}>
        <View style={styles.card}>
          <View style={commonStyle.rowSpaceBetween}>
            <View>
              <Text style={styles.mainTitle}>Room Information</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => setIsRoomInfoVisible(false)}>
                <CloseSvg />
              </TouchableOpacity>
            </View>
          </View>
          <View style={commonStyle.marginVertical(15)}>
            <Text style={styles.subTitle}>
              Spectacular Room, Room, 1 King Bed, Non Smoking, City View
            </Text>
          </View>
          <View>
            <View style={commonStyle.rowFlexStart}>
              <View
                style={[commonStyle.rowFlexStart, commonStyle.width('50%')]}>
                <View>
                  <ResizeSvg />
                </View>
                <View style={commonStyle.marginHorizontal(5)}>
                  <View style={commonStyle.rowFlexStart}>
                    <View>
                      <Text style={styles.text('#242A37')}>Room Size :</Text>
                    </View>
                    <View style={commonStyle.marginHorizontal(5)}>
                      <Text style={styles.text('#26698E')}> 474 sq feet</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={[
                  commonStyle.rowFlexStart,
                  commonStyle.width('50%'),
                  commonStyle.marginHorizontal(30),
                ]}>
                <View>
                  <BedSvg />
                </View>
                <View style={commonStyle.marginHorizontal(5)}>
                  <Text style={styles.text('#26698E')}>1 King Bed</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={commonStyle.marginVertical(12)}>
            <View style={commonStyle.rowFlexStart}>
              <View>
                <Text style={styles.text('#242A37')}>Room Occupancy -</Text>
              </View>
              <View style={commonStyle.marginHorizontal(5)}>
                <UsersXlSvg />
              </View>
            </View>
          </View>
          <View>
            <AmenitiesList />
          </View>
        </View>
      </BottomSheet>
    </>
  );
}
const styles = StyleSheet.create({
  bottomSheetStyle: {
    flex: 1,
    backgroundColor: Colors.bottomSheet,
  },
  card: {
    height: hp('75%'),
    backgroundColor: Colors.white,
    padding: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  mainTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 18,
    color: '#383838',
  },
  subTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#1D8CCC',
  },
  text(color) {
    return {
      fontFamily: Font.AvenirHeavy,
      fontSize: 14,
      color,
    };
  },
});

export default RoomInfo;
