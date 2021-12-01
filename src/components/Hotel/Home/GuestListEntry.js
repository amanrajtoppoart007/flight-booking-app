import React, {useState} from 'react';
import {
  Image,
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
import SelectDropdown from 'react-native-select-dropdown';
import commonStyle from '../../../layout/Style';

const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={buttonStyle.card}>
      <View>
        <Icon
          onPress={() => setCount(count - 1)}
          name={'minus'}
          type={'font-awesome'}
          size={18}
          color={Colors.lightText}
        />
      </View>
      <View>
        <Text style={buttonStyle.text}>{count}</Text>
      </View>
      <View>
        <Icon
          onPress={() => setCount(count + 1)}
          name={'plus'}
          type={'font-awesome'}
          size={18}
          color={Colors.lightText}
        />
      </View>
    </View>
  );
};

const Card = ({item}) => {
  const [ageRange, setAgeRange] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ]);

  return (
    <View style={cardStyle.card}>
      <View>
        <View style={cardStyle.rowFlexStart}>
          <View>
            <Image
              style={{width: 15, height: 15}}
              source={require('../../../assets/images/icons/open-door.png')}
            />
          </View>
          <View style={{marginHorizontal: 10}}>
            <Text style={styles.helper}>{item?.title} </Text>
          </View>
        </View>
        <View style={cardStyle.divider} />
      </View>

      <View>
        <View style={cardStyle.rowSpaceBetween}>
          <View>
            <Text style={styles.ageSelectorText}>Adults</Text>
            <Text style={styles.ageSelectorHelperText}>12 yrs & above</Text>
          </View>
          <View>
            <Button />
          </View>
        </View>
        <View style={cardStyle.rowSpaceBetween}>
          <View>
            <Text style={styles.ageSelectorText}>Children</Text>
            <Text style={styles.ageSelectorHelperText}>2-12 yrs</Text>
          </View>
          <View>
            <Button />
          </View>
        </View>
      </View>

      <View style={{marginVertical: 10}}>
        <View style={cardStyle.selectSection}>
          <View>
            <Text>Specify each child’s age</Text>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 10,
              }}>
              <View>
                <SelectDropdown
                  defaultButtonText={'Select Age'}
                  buttonStyle={cardStyle.dropDownButtonStyle}
                  buttonTextStyle={cardStyle.dropDownButtonTextStyle}
                  dropdownIconPosition={'right'}
                  data={ageRange}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem + ' Years';
                  }}
                  rowTextForSelection={(item, index) => {
                    return item + ' Years';
                  }}
                />
              </View>
              <View>
                <SelectDropdown
                  defaultButtonText={'Select Age'}
                  buttonStyle={cardStyle.dropDownButtonStyle}
                  buttonTextStyle={cardStyle.dropDownButtonTextStyle}
                  dropdownIconPosition={'right'}
                  data={ageRange}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem + ' Years';
                  }}
                  rowTextForSelection={(item, index) => {
                    return item + ' Years';
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={cardStyle.divider} />
      </View>
    </View>
  );
};

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
        <View style={{flex: 1}}>
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
                    return <Card key={index?.toString()} item={item} />;
                  })}
              </View>

              <View>
                <View
                  style={{justifyContent: 'center', alignItems: 'flex-end'}}>
                  <Pressable
                    onPress={() => addMore()}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View>
                      <Icon
                        name={'plus'}
                        type={'font-awesome'}
                        size={14}
                        color={Colors.secondary}
                      />
                    </View>
                    <View style={{marginHorizontal: 5}}>
                      <Text style={{fontSize: 14, color: Colors.secondary}}>
                        Add Room
                      </Text>
                    </View>
                  </Pressable>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
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
    fontSize: 18,
    color: Colors.black,
  },
  helper: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: 'bold',
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
const buttonStyle = StyleSheet.create({
  card: {
    width: 110,
    height: 45,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.border,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 5,
  },
  text: {
    fontSize: 18,
    color: Colors.lightText,
  },
});

const cardStyle = StyleSheet.create({
  rowFlexStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },

  ageSelectorText: {
    fontSize: 18,
    color: Colors.black,
  },
  ageSelectorHelperText: {
    fontSize: 12,
    color: Colors.lightText,
  },
  pickerHelper: {
    fontSize: 14,
    color: Colors.lightText,
  },
  card: {
    marginVertical: 15,
  },
  divider: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#D9D9D9',
    marginVertical: 8,
  },
  selectSection: {
    width: 345,
    height: 111,
    borderRadius: 6,
    backgroundColor: '#F5F5F5',
    padding: 15,
  },
  dropDownButtonStyle: {
    width: 150,
    height: 45,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#FFF',
  },
  dropDownButtonTextStyle: {
    fontSize: 18,
    color: Colors.lightText,
  },
});

export default GuestListEntry;
