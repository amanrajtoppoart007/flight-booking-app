import React from 'react';
import {FlatList, View} from 'react-native';

import SliderItem from './SliderItem';

function Slider() {
  const sliders = [
    {
      id: 'offer-slider-item-one',
      image: require('../../../assets/images/temp/hotels/slider/slider-image-one.png'),
    },
    {
      id: 'offer-slider-item-two',
      image: require('../../../assets/images/temp/hotels/slider/slider-image-two.png'),
    },
    {
      id: 'offer-slider-item-three',
      image: require('../../../assets/images/temp/hotels/slider/slider-image-one.png'),
    },
    {
      id: 'offer-slider-item-four',
      image: require('../../../assets/images/temp/hotels/slider/slider-image-two.png'),
    },
  ];

  const _renderItem = ({item}) => {
    return <SliderItem item={item} />;
  };

  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        initialNumToRender={3}
        horizontal={true}
        keyExtractor={item => item?.id?.toString()}
        data={sliders}
        renderItem={_renderItem}
      />
    </View>
  );
}

export default Slider;
