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
const Button = ({count, setCount}) => {
  return (
    <View style={styles.card}>
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
  return (
    <View style={[commonStyle.rowSpaceBetween, commonStyle.marginVertical(10)]}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subtitle}</Text>
      </View>
      <Button count={count} setCount={setCount} />
    </View>
  );
}

function TravellerAndClass({Visible, setVisible, data, setData}) {
  const [Class, setClass] = useState('Economy');
  const [child, setChild] = useState(data?.child);
  const [adult, setAdult] = useState(data?.adult);
  const [infant, setInfant] = useState(data?.infant);
  console.log(data.class);

  return (
    <BottomSheet isVisible={Visible}>
      <View style={styles.bottomSheet}>
        <View style={[commonStyle.flex(1), commonStyle.marginTop(5)]}>
          <View style={commonStyle.rowSpaceBetween}>
            <View>
              <Text style={styles.title}>Select Travellers & Class</Text>
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
          <View style={[commonStyle.flex(1), commonStyle.marginTop(10)]}>
            <Item
              title="Adults"
              subtitle="12 yrs & above"
              count={adult}
              setCount={setAdult}
            />
            <Item
              title="Children"
              subtitle="2-12 yrs"
              count={child}
              setCount={setChild}
            />
            <Item
              title="Infant"
              subtitle="Below 2 yrs"
              count={infant}
              setCount={setInfant}
            />
            <View>
              <Text style={[styles.title, commonStyle.marginVertical(10)]}>
                Select Cabin Class
              </Text>
              <View style={commonStyle.rowFlexStart}>
                <Pressable
                  onPress={() => setClass('Economy')}
                  style={styles.selectContainer(Class === 'Economy')}>
                  <Text style={styles.selectText(Class === 'Economy')}>
                    Economy
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setClass('Business')}
                  style={styles.selectContainer(Class === 'Business')}>
                  <Text style={styles.selectText(Class === 'Business')}>
                    Business
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setClass('First Class')}
                  style={styles.selectContainer(Class === 'First Class')}>
                  <Text style={styles.selectText(Class === 'First Class')}>
                    First Class
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
