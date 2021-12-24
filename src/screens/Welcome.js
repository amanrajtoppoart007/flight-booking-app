import React, {useRef, useState} from 'react';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Font from '../layout/Font';
import Colors from '../layout/Colors';
import commonStyle from '../layout/Style';
import CustomStatusBar from '../components/CustomStatusBar';
import {setAppIntro} from '../reducers/Intro.slice';
import {useDispatch} from 'react-redux';

function Welcome() {
  const dispatch = useDispatch();
  const slider = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onDone = () => {
    dispatch(setAppIntro(true));
  };

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
  ];

  const _renderItem = ({item, index}) => {
    return (
      <View key={item.key.toString()}>
        <View style={styles.slide}>
          <View style={styles.sliderUpperSection}>
            <View style={styles.titleSection}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <View>
              <RenderPagination activeIndex={index} />
            </View>
          </View>
          <View style={styles.sliderBottomSection}>
            <ImageBackground
              resizeMode={'cover'}
              style={styles.image}
              source={item.image}>
              <View style={styles.controlButtonSection}>
                <View>
                  {index !== 0 && <RenderPrevButton prevIndex={index - 1} />}
                </View>
                <View>
                  {index !== 2 && <RenderNextButton nextIndex={index + 1} />}
                  {index === 2 && <RenderDoneButton />}
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      </View>
    );
  };

  const RenderNextButton = ({nextIndex}) => {
    return (
      <TouchableOpacity
        onPress={() => changeSliderListIndex(nextIndex)}
        style={styles.controlButton}>
        <Text style={styles.controlButtonText}>Next</Text>
      </TouchableOpacity>
    );
  };

  const RenderPrevButton = ({prevIndex}) => {
    return (
      <TouchableOpacity
        onPress={() => changeSliderListIndex(prevIndex)}
        style={styles.controlButton}>
        <Text style={styles.controlButtonText}>Previous</Text>
      </TouchableOpacity>
    );
  };

  const RenderDoneButton = () => {
    return (
      <TouchableOpacity onPress={() => onDone()} style={styles.controlButton}>
        <Text style={styles.controlButtonText}>Done</Text>
      </TouchableOpacity>
    );
  };

  const RenderPagination = () => {
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
                    i === currentIndex
                      ? commonStyle.backgroundColor(Colors.primary)
                      : commonStyle.backgroundColor('#DDDDDD'),
                  ]}
                />
              ))}
          </View>
        </SafeAreaView>
      </View>
    );
  };
  const itemWidth = widthPercentageToDP('100%');

  const changeSliderListIndex = index => {
    setCurrentIndex(index);
    slider.current.scrollToIndex({
      index: index,
      animated: true,
    });
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
            <FlatList
              ref={slider}
              getItemLayout={(data, index) => ({
                length: itemWidth,
                offset: itemWidth * index,
                index,
              })}
              snapToInterval={itemWidth}
              horizontal={true}
              data={slides}
              renderItem={_renderItem}
              scrollEnabled={false}
              decelerationRate="fast"
              bounces={false}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

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
  controlButtonSection: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  controlButton: {
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
