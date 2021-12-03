import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AppInfo from '../storage/intro';

import Colors from '../layout/Colors';
import Font from '../layout/Font';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import commonStyle from '../layout/Style';

const _renderItem = ({item}) => {
  return (
    <View key={item.key.toString()} style={styles.whiteBgColor}>
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image
          resizeMethod={'scale'}
          resizeMode={'contain'}
          style={styles.image}
          source={item.image}
        />
      </View>
    </View>
  );
};
const _renderNextButton = () => {
  return (
    <View style={styles.buttonCircle}>
      <Entypo name="chevron-right" color={Colors.white} size={24} />
    </View>
  );
};

const _renderPrevButton = () => {
  return (
    <View style={styles.buttonCircle}>
      <Entypo name="chevron-left" color={Colors.white} size={24} />
    </View>
  );
};

const _renderDoneButton = () => {
  return (
    <View style={styles.buttonCircle}>
      <FontAwesome name="check" color={Colors.white} size={24} />
    </View>
  );
};

const Welcome = ({navigation}) => {
  function onDone() {
    AppInfo.setIntro().then(() => {
      navigation.navigate('AppNavigator');
    });
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.primary} barStyle="light" />
      <View style={commonStyle.flex(1)}>
        <AppIntroSlider
          renderItem={_renderItem}
          onSkip={() => onDone()}
          onDone={() => onDone()}
          data={slides}
          showSkipButton={true}
          showPrevButton={true}
          showNextButton={true}
          bottomButton={false}
          renderNextButton={_renderNextButton}
          renderPrevButton={_renderPrevButton}
          renderDoneButton={_renderDoneButton}
        />
      </View>
    </SafeAreaView>
  );
};
const slides = [
  {
    key: 'welcome-screen-slider-item-one',
    title: 'Pick a destination & get assistance on flight & hotel bookings',
    image: require('../assets/images/welcome/laptop.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'welcome-screen-slider-item-two',
    title: 'Explore activities',
    image: require('../assets/images/welcome/laptop.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'welcome-screen-slider-item-three',
    title: 'Organise all your travel plans in one itinerary',
    image: require('../assets/images/welcome/laptop.png'),
    backgroundColor: '#22bcb5',
  },
];
const styles = StyleSheet.create({
  skipButton: {},
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  whiteBgColor: {
    backgroundColor: Colors.white,
  },
  slide: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('100%') - heightPercentageToDP('100%') * 0.05,
    marginTop: heightPercentageToDP('100%') * 0.05,
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  image: {
    width: (heightPercentageToDP('100%') * 35) / 100,
    height: (heightPercentageToDP('100%') * 35) / 100,
  },
  title: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 25,
    color: Colors.primary,
    textAlign: 'center',
  },
  text: {
    fontFamily: Font.AvenirHeavy,
    color: Colors.google,
    fontSize: 14,
    lineHeight: 30,
    textTransform: 'uppercase',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  buttonCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
});

export default Welcome;
