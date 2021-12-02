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

function Item({title, subtitle}) {
  return (
    <View style={[commonStyle.rowSpaceBetween, commonStyle.marginVertical(10)]}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subtitle}</Text>
      </View>
      <Button />
    </View>
  );
}

function TravellerAndClass({Visible, setVisible}) {
  const [select, setSelect] = useState('Economy');

  return (
    <BottomSheet isVisible={Visible}>
      <View style={styles.bottomSheet}>
        <View style={commonStyle.flex(1)}>
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
            <Item title="Adults" subtitle="12 yrs & above" />
            <Item title="Children" subtitle="2-12 yrs" />
            <Item title="Infant" subtitle="Below 2 yrs" />
            <View>
              <Text style={[styles.title, commonStyle.marginVertical(10)]}>
                Select Cabin Class
              </Text>
              <View style={commonStyle.rowFlexStart}>
                <Pressable
                  onPress={() => setSelect('Economy')}
                  style={styles.selectContainer(select === 'Economy')}>
                  <Text style={styles.selectText(select === 'Economy')}>
                    Economy
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setSelect('Business')}
                  style={styles.selectContainer(select === 'Business')}>
                  <Text style={styles.selectText(select === 'Business')}>
                    Business
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setSelect('First Class')}
                  style={styles.selectContainer(select === 'First Class')}>
                  <Text style={styles.selectText(select === 'First Class')}>
                    First Class
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.center}>
          <TouchableOpacity
            onPress={() => setVisible(false)}
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
  center: {justifyContent: 'center', alignItems: 'center'},
  title: {
    fontSize: 18,
    color: Colors.black,
    fontFamily: Font.AvenirHeavy,
  },
  helper: {
    fontSize: 16,
    color: Colors.black,
    fontFamily: Font.AvenirRegular,
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
      borderColor: value ? 'darkorange' : Colors.primary,
    };
  },
  selectText(value) {
    return {
      marginHorizontal: 10,
      marginVertical: 8,
      fontSize: 14,
      color: value ? 'darkorange' : Colors.primary,
    };
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
export default TravellerAndClass;
