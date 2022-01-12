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
import commonStyle from '../../layout/Style';
import {strings} from '../../Localization/LocalizedConstants';
import {useRtlContext} from 'react-native-easy-localization-and-rtl';
const Button = ({count, setCount}) => {
  const {RtlStyles} = useRtlContext();

  return (
    <View style={[styles.card, RtlStyles.containerRow]}>
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
        <Text style={styles.title}>{count}</Text>
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

function Item({title, subtitle, count, setCount}) {
  const {RtlStyles} = useRtlContext();

  return (
    <View
      style={[
        commonStyle.rowSpaceBetween,
        commonStyle.marginVertical(10),
        RtlStyles.containerRow,
      ]}>
      <View>
        <Text style={[styles.title, RtlStyles.text]}>{title}</Text>
        <Text style={[styles.subTitle, RtlStyles.text]}>{subtitle}</Text>
      </View>
      <Button count={count} setCount={setCount} />
    </View>
  );
}

function TravellerAndClass({Visible, setVisible, data, setData}) {
  const [Class, setClass] = useState(strings.economy);
  const [child, setChild] = useState(data?.child);
  const [adult, setAdult] = useState(data?.adult);
  const [infant, setInfant] = useState(data?.infant);
  const {RtlStyles} = useRtlContext();

  return (
    <BottomSheet isVisible={Visible}>
      <View style={styles.bottomSheet}>
        <View style={[commonStyle.flex(1), commonStyle.marginTop(5)]}>
          <View style={[commonStyle.rowSpaceBetween, RtlStyles.containerRow]}>
            <View>
              <Text style={[styles.title, RtlStyles.text]}>
                {strings.select} {strings.travellersClass}
              </Text>
            </View>
            <View>
              <Icon
                onPress={() => setVisible(false)}
                name={'close'}
                type={'antdesign'}
                size={18}
                color={Colors.lightText}
              />
            </View>
          </View>
          <View style={[commonStyle.flex(1), commonStyle.marginTop(30)]}>
            <Item
              title={strings.adult}
              subtitle="12 yrs & above"
              count={adult}
              setCount={setAdult}
            />
            <Item
              title={strings.children}
              subtitle="2-12 yrs"
              count={child}
              setCount={setChild}
            />
            <Item
              title={strings.infant}
              subtitle="Below 2 yrs"
              count={infant}
              setCount={setInfant}
            />
            <View>
              <Text
                style={[
                  styles.title,
                  commonStyle.marginTop(30),
                  commonStyle.marginBottom(20),
                  RtlStyles.text,
                ]}>
                {strings.select} {strings.cabinClass}
              </Text>
              <View style={[commonStyle.rowFlexStart, RtlStyles.containerRow]}>
                <Pressable
                  onPress={() => setClass('Economy')}
                  style={styles.selectContainer(Class === 'Economy')}>
                  <Text style={styles.selectText(Class === 'Economy')}>
                    {strings.economy}
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setClass('Business')}
                  style={styles.selectContainer(Class === 'Business')}>
                  <Text style={styles.selectText(Class === 'Business')}>
                    {strings.business}
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setClass('FirstClass')}
                  style={styles.selectContainer(Class === 'FirstClass')}>
                  <Text style={styles.selectText(Class === 'FirstClass')}>
                    {strings.firstClass}
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.center}>
          <TouchableOpacity
            onPress={() => {
              setData({
                adult: adult,
                child: child,
                infant: infant,
                class: Class,
              });
              setVisible(false);
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>{strings.done}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  bottomSheet: {
    width: wp('100%'),
    height: hp('66%'),
    backgroundColor: Colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 15,
  },
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
  center: {justifyContent: 'center', alignItems: 'center'},
  title: {
    fontSize: 18,
    color: Colors.black,
    fontFamily: Font.AvenirHeavy,
  },

  subTitle: {
    fontSize: 12,
    color: Colors.lightText,
    fontFamily: Font.AvenirMedium,
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
    fontSize: 14,
    color: Colors.white,
    fontFamily: Font.AvenirHeavy,
  },
  selectContainer(value) {
    return {
      borderWidth: 2,
      borderRadius: 8,
      marginHorizontal: 5,
      marginVertical: 5,
      backgroundColor: Colors.white,
      elevation: 5,
      borderColor: value ? 'darkorange' : '#163D68',
    };
  },
  selectText(value) {
    return {
      marginHorizontal: 10,
      marginVertical: 8,
      fontSize: 14,
      color: value ? 'darkorange' : '#163D68',
    };
  },
});

export default TravellerAndClass;
