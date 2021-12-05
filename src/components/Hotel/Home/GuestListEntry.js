import React, {useState} from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BottomSheet, Icon} from 'react-native-elements';
import Colors from '../../../layout/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import commonStyle from '../../../layout/Style';

import Font from '../../../layout/Font';
import GuestCard from './GuestCard';

function GuestListEntry({
  isGuestBottomSheetVisible,
  setIsGuestBottomSheetVisible,
}) {
  const [rooms, setRooms] = useState([
    {
      index: 0,
      id: 'room-item-1',
      title: 'Room 1',
    },
  ]);

  const addMore = () => {
    const newRoom = {
      index: rooms?.length,
      id: `room-item-${rooms?.length + 1}`,
      title: `Room ${rooms?.length + 1}`,
    };
    const roomArray = rooms.map(item => {
      return item;
    });
    roomArray.push(newRoom);
    setRooms(roomArray);
  };

  return (
    <BottomSheet isVisible={isGuestBottomSheetVisible}>
      <View style={styles.bottomSheet}>
        <View style={commonStyle.flex(1)}>
          <View style={commonStyle.rowSpaceBetween}>
            <View>
              <Text style={styles.title}>Select Room & Guests</Text>
            </View>
            <View>
              <Icon
                onPress={() => setIsGuestBottomSheetVisible(false)}
                name={'close'}
                type={'font-awesome'}
                size={18}
                color={Colors.lightText}
              />
            </View>
          </View>
          <View>
            <ScrollView
              style={{height: hp('70%')}}
              showsVerticalScrollIndicator={false}>
              <View>
                {rooms &&
                  rooms.map((item, index) => {
                    return (
                      <GuestCard
                        key={index?.toString()}
                        index={index}
                        item={item}
                      />
                    );
                  })}
              </View>

              <View>
                <View style={styles.buttonWrapper}>
                  <Pressable
                    onPress={() => addMore()}
                    style={commonStyle.rowCenter}>
                    <View>
                      <Icon
                        name={'plus'}
                        type={'font-awesome'}
                        size={14}
                        color={Colors.secondary}
                      />
                    </View>
                    <View style={commonStyle.marginHorizontal(5)}>
                      <Text style={styles.addRoomButtonText}>Add Room</Text>
                    </View>
                  </Pressable>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>

        <View style={commonStyle.center}>
          <TouchableOpacity
            onPress={() => setIsGuestBottomSheetVisible(false)}
            style={styles.button}>
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  bottomSheet: {
    width: wp('100%'),
    height: hp('90%'),
    backgroundColor: Colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
  },
  title: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 18,
    color: Colors.black,
  },
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  addRoomButtonText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#F15922',
  },
  button: {
    width: 335,
    height: 45,
    borderRadius: 6,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 12,
    color: Colors.white,
  },
});

export default GuestListEntry;
