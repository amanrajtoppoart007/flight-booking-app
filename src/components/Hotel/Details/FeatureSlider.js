import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Font from '../../../layout/Font';
import commonStyle from '../../../layout/Style';

function FeatureSlider() {
  const [features, setFeatures] = useState([
    {
      id: 'feature-id-one',
      title: 'Breakfast Buffet',
      isActive: true,
    },
    {
      id: 'feature-id-two',
      title: 'Room Only',
      isActive: false,
    },
    {
      id: 'feature-id-three',
      title: 'Refundable',
      isActive: false,
    },
    {
      id: 'feature-id-four',
      title: 'Non-Refundable',
      isActive: false,
    },
    {
      id: 'feature-id-five',
      title: 'Swimming Pool',
      isActive: false,
    },
    {
      id: 'feature-id-six',
      title: 'Entertainment Lounge',
      isActive: false,
    },
  ]);

  function setActive(index) {
    const newFeatureList = features.map((item, i) => {
      if (index === i) {
        return {
          ...item,
          isActive: !item?.isActive,
        };
      }
      return item;
    });
    setFeatures(newFeatureList);
  }

  const _renderItem = ({item, index}) => {
    return (
      <View style={commonStyle.marginHorizontal(5)}>
        <TouchableOpacity
          onPress={() => setActive(index)}
          style={styles.sliderItem(item?.isActive)}>
          <Text style={styles.title(item?.isActive)}>{item?.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        horizontal={true}
        data={features}
        initialNumToRender={4}
        renderItem={_renderItem}
        keyExtractor={item => item?.id?.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  slider: {},
  sliderItem(isActive) {
    return {
      height: 32,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: isActive ? '#F15922' : '#242A37',
      justifyContent: 'center',
      alignItems: 'center',
    };
  },
  title(isActive) {
    return {
      fontFamily: Font.AvenirHeavy,
      fontSize: 12,
      color: isActive ? '#F15922' : '#242A37',
    };
  },
});

export default FeatureSlider;
