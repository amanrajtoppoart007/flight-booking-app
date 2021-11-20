import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import Colors from '../layout/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

function FullScreenActivityIndicator({loading, color, size}) {
  return (
    <>
      {loading && (
        <View style={styles.container}>
          <ActivityIndicator
            animating={loading}
            color={color ?? Colors.primary}
            size={size ?? 40}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('100%'),
    height: hp('100%'),
    position: 'absolute',
    zIndex: 9999,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
});

export default FullScreenActivityIndicator;
