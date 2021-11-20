import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BottomSheet, Icon} from 'react-native-elements';
import Colors from '../../layout/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Font from '../../layout/Font';
const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={buttonStyle.card}>
      <View>
        <Icon
          onPress={() => (count <= 0 ? null : setCount(count - 1))}
          name={'minus'}
          type={'antdesign'}
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
          type={'antdesign'}
          size={18}
          color={Colors.lightText}
        />
      </View>
    </View>
  );
};

function Item({title, subtitle}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
      }}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text
          style={{
            fontSize: 14,
            color: Colors.lightText,
          }}>
          {subtitle}
        </Text>
      </View>
      <Button />
    </View>
  );
}

function TravellerandClass({
  isTravellerandClassVisible,
  setIsTravellerandClassVisible,
}) {
  const [select, setSelect] = useState('Economy');

  return (
    <BottomSheet isVisible={isTravellerandClassVisible}>
      <View style={styles.bottomSheet}>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text style={styles.title}>Select Travellers & Class</Text>
            </View>
            <View>
              <Icon
                onPress={() => setIsTravellerandClassVisible(false)}
                name={'close'}
                type={'antdesign'}
                size={18}
                color={Colors.lightText}
              />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 10,
            }}>
            <Item title="Adults" subtitle="12 yrs & above" />
            <Item title="Children" subtitle="2-12 yrs" />
            <Item title="Infant" subtitle="Below 2 yrs" />
            <View>
              <Text style={[styles.title, {marginVertical: 10}]}>
                Select Cabin Class
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                }}>
                <Pressable
                  onPress={() => setSelect('Economy')}
                  style={[
                    styles.selectContainer,
                    {
                      borderColor:
                        select == 'Economy' ? 'darkorange' : Colors.primary,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.selectText,
                      {
                        color:
                          select == 'Economy' ? 'darkorange' : Colors.primary,
                      },
                    ]}>
                    Economy
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setSelect('Business')}
                  style={[
                    styles.selectContainer,
                    {
                      borderColor:
                        select == 'Business' ? 'darkorange' : Colors.primary,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.selectText,
                      {
                        color:
                          select == 'Business' ? 'darkorange' : Colors.primary,
                      },
                    ]}>
                    Business
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setSelect('First Class')}
                  style={[
                    styles.selectContainer,
                    {
                      borderColor:
                        select == 'First Class' ? 'darkorange' : Colors.primary,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.selectText,
                      {
                        color:
                          select == 'First Class'
                            ? 'darkorange'
                            : Colors.primary,
                      },
                    ]}>
                    First Class
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => setIsTravellerandClassVisible(false)}
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
    height: hp('60%'),
    backgroundColor: Colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
  },
  title: {
    fontSize: 18,
    color: Colors.black,
    fontFamily: Font.AvenirRegular,
  },
  helper: {
    fontSize: 16,
    color: Colors.black,
    fontFamily: Font.AvenirRegular,
  },

  button: {
    height: 45,
    borderRadius: 6,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 12,
    color: Colors.white,
    fontFamily: Font.AvenirRegular,
  },
  selectContainer: {
    borderWidth: 2,
    borderRadius: 8,
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: Colors.white,
    elevation: 5,
  },
  selectText: {
    marginHorizontal: 10,
    marginVertical: 8,
    fontSize: 16,
    color: 'black',
  },
});
const buttonStyle = StyleSheet.create({
  card: {
    width: 110,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 5,
    backgroundColor: Colors.white,
    elevation: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    color: Colors.lightText,
    fontFamily: Font.AvenirLight,
  },
});
export default TravellerandClass;
