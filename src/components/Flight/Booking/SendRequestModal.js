import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Overlay} from 'react-native-elements';
import Colors from '../../../layout/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import commonStyle from '../../../layout/Style';
import CloseSvg from '../../Svg/Close.svg';
function SendRequestModal({visible, setVisible}) {
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <>
      <Overlay
        overlayStyle={{
          backgroundColor: 'rgba(0,0,0,0.3)',
          alignItems: 'center',
        }}
        fullScreen={true}
        isVisible={visible}
        onBackdropPress={toggleOverlay}>
        <View style={styles.card}>
          <View style={commonStyle.rowSpaceBetween}>
            <View>
              <Text>Send a Request</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <CloseSvg />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Overlay>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    top: hp('15%'),
    width: 345,
    height: 250,
    borderRadius: 8,
    backgroundColor: Colors.white,
    padding: 15,
    paddingVertical: 10,
  },
});

export default SendRequestModal;
