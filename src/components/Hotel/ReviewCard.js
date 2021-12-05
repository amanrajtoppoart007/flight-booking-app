import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import commonStyle from '../../layout/Style';
import Plane from '../Svg/Hotel/Plane.svg';
import Font from '../../layout/Font';

const ReadMore = ({text}) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <Text style={styles.commentText}>
      {isReadMore ? text.slice(0, 150) : text}
      <Text onPress={toggleReadMore} style={styles.readMoreButtonText}>
        {isReadMore ? '...Read More' : ' Show Less'}
      </Text>
    </Text>
  );
};

function ReviewCard({item}) {
  return (
    <View style={styles.card}>
      <View style={commonStyle.rowSpaceBetween}>
        <View style={commonStyle.rowFlexStart}>
          <Text style={styles.userName}>{item?.name} |</Text>
          <Plane style={commonStyle.marginHorizontal(5)} />
          <Text style={styles.textLight}>Expedia</Text>
        </View>
        <Text style={styles.date}>{item?.date}</Text>
      </View>
      <View style={[commonStyle.rowFlexStart, commonStyle.marginBottom(5)]}>
        <Text style={styles.progressBarRatingText}>{item?.rating}</Text>
        <Text style={styles.airBnbRatingText}> Excellent</Text>
      </View>
      <ReadMore text={item?.message} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  card: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 8,
    elevation: 5,
    marginVertical: 12,
  },

  ratingParameterText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#242A37',
  },
  commentText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#242A37',
  },

  date: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#6C6C6C',
  },
  textLight: {
    fontFamily: Font.AvenirMedium,
    fontSize: 12,
    color: '#6C6C6C',
  },
  progressBarRatingText: {
    fontSize: 12,
    fontFamily: Font.AvenirHeavy,
    color: '#1DAD81',
  },
  ratingText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 24,
    color: '#1DAD81',
  },
  userName: {
    fontSize: 12,
    fontFamily: Font.AvenirHeavy,
    color: '#26698E',
  },
  airBnbRatingText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#26698E',
  },
  readMoreButtonText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 12,
    color: '#1D8CCC',
  },
});

export default ReviewCard;
