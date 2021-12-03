import React, {useRef} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import AppInfo from '../storage/intro';

import Colors from '../layout/Colors';
import Font from '../layout/Font';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import commonStyle from '../layout/Style';
import CustomStatusBar from '../components/CustomStatusBar';

const Welcome = ({navigation}) => {
  const slider = useRef(null);
  function onDone() {
    AppInfo.setIntro().then(() => {
      navigation.navigate('AppNavigator');
    });
  }

  const slides = [
    {
      key: 'welcome-screen-slider-item-one',
      title: 'Pick a destination & get assistance on flight & hotel bookings',
      image: require('../assets/images/welcome/laptop.png'),
    },
    {
      key: 'welcome-screen-slider-item-two',
      title: 'Explore activities',
      image: require('../assets/images/welcome/laptop.png'),
    },
    {
      key: 'welcome-screen-slider-item-three',
      title: 'Organise all your travel plans in one itinerary',
      image: require('../assets/images/welcome/laptop.png'),
    },
    {
      key: 'welcome-screen-slider-item-four',
      title: 'Organise all your travel plans in one itinerary',
      image: require('../assets/images/welcome/laptop.png'),
    },
  ];

  const _renderPagination = (activeIndex: number) => {
    return (
      <View style={styles.paginationContainer}>
        <SafeAreaView>
          <View style={styles.paginationDots}>
            {slides.length > 1 &&
              slides.map((_, i) => (
                <TouchableOpacity
                  key={i}
                  style={[
                    styles.dot,
                    i === activeIndex
                      ? commonStyle.backgroundColor(Colors.primary)
                      : commonStyle.backgroundColor('#DDDDDD'),
                  ]}
                  onPress={() => slider.current?.goToSlide(i, true)}
                />
              ))}
          </View>
        </SafeAreaView>
      </View>
    );
  };

  const _renderItem = ({item}) => {
    return (
      <View key={item.key.toString()}>
        <View style={styles.slide}>
          <View style={styles.sliderUpperSection}>
            <View style={styles.titleSection}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <View>
              <_renderPagination />
            </View>
          </View>
          <View style={styles.sliderBottomSection}>
            <Image
              resizeMode={'cover'}
              style={styles.image}
              source={item.image}
            />
          </View>
        </View>
      </View>
    );
  };
  const _renderNextButton = () => {
    return (
      <View style={[styles.controlButton, styles.nextButton]}>
        <Text style={styles.controlButtonText}>Next</Text>
      </View>
    );
  };

  const _renderPrevButton = () => {
    return (
      <View style={[styles.controlButton, styles.prevButton]}>
        <Text style={styles.controlButtonText}>Previous</Text>
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <View style={[styles.controlButton, styles.doneButton]}>
        <Text style={styles.controlButtonText}>Done</Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={[
        commonStyle.container,
        commonStyle.backgroundColor(Colors.white),
      ]}>
      <CustomStatusBar backgroundColor={'white'} />
      <View style={[commonStyle.flex(1), commonStyle.wrapper]}>
        <View style={[commonStyle.flex(1), commonStyle.content]}>
          <View style={commonStyle.flex(1)}>
            <AppIntroSlider
              ref={slider}
              renderItem={_renderItem}
              onSkip={() => onDone()}
              onDone={() => onDone()}
              data={slides}
              renderNextButton={_renderNextButton}
              renderPrevButton={_renderPrevButton}
              renderDoneButton={_renderDoneButton}
              pagingEnabled={false}
              renderPagination={false}
              dotStyle={{backgroundColor: 'transparent'}}
              activeDotStyle={{backgroundColor: 'transparent'}}
              dotClickEnabled={false}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  skipButton: {},

  slide: {
    flex: 1,
  },
  sliderUpperSection: {
    justifyContent: 'center',
    alignItems: 'center',
    height: heightPercentageToDP('50%'),
    width: widthPercentageToDP('100%'),
  },
  sliderBottomSection: {
    height: heightPercentageToDP('50%'),
    width: widthPercentageToDP('100%'),
  },
  image: {
    height: heightPercentageToDP('50%'),
    width: widthPercentageToDP('100%'),
  },
  title: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 24,
    color: '#242A37',
  },

  titleSection: {
    height: 300,
    padding: 40,
  },

  paginationContainer: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 92,
    height: 5,
    borderRadius: 5,
  },
  controlButton: {
    bottom: 20,
    width: 80,
    height: 40,
    backgroundColor: '#F15922',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 999,
  },
  prevButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 999,
  },
  doneButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 999,
  },
  controlButtonText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: Colors.white,
  },
});

export default Welcome;
