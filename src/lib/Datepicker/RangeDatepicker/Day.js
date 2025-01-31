'use strict';
import React from 'react';
import {View, Text, TouchableWithoutFeedback, Dimensions} from 'react-native';
import moment from 'moment';

const DEVICE_WIDTH = Dimensions.get('window').width;

export default class Day extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.day.type !== this.props.day.type;
  }

  render() {
    let {day, dayProps} = this.props;
    let dayStyle = {
      backgroundColor: 'transparent',
      position: 'relative',
      width: '14.28%',
    };
    let textDayStyle = {color: 'black'};

    switch (day.type) {
      case 'single':
        dayStyle = {
          backgroundColor: dayProps.selectedBackgroundColor,
          borderRadius: 6,
          width: '14.28%',
        };
        textDayStyle = {color: dayProps.selectedTextColor};
        break;
      case 'first':
        dayStyle = {
          backgroundColor: dayProps.selectedBackgroundColor,
          borderBottomLeftRadius: 6,
          borderTopLeftRadius: 6,
          width: '14.28%',
        };
        textDayStyle = {color: dayProps.selectedTextColor};
        break;
      case 'last':
        dayStyle = {
          backgroundColor: dayProps.selectedBackgroundColor,
          borderBottomRightRadius: 6,
          borderTopRightRadius: 6,
          width: '14.28%',
        };
        textDayStyle = {color: dayProps.selectedTextColor};
        break;
      case 'between':
        dayStyle = {
          backgroundColor: 'rgba(241, 89, 34, 0.15)',
          width: '14.28%',
        };
        textDayStyle = {color: 'black'};
        break;
      case 'disabled':
      case 'blockout':
        textDayStyle = {color: '#ccc'};
    }

    if (day.date) {
      if (day.type === 'disabled') {
        return (
          <TouchableWithoutFeedback activeOpacity={1} style={dayStyle}>
            <View
              style={{
                ...dayStyle,
                height: Math.floor(DEVICE_WIDTH / 7),
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  ...textDayStyle,
                  textAlign: 'center',
                  backgroundColor: 'transparent',
                  fontSize: Math.floor(DEVICE_WIDTH / 26),
                }}>
                {moment(day.date, 'YYYYMMDD').date()}
              </Text>
              {day.date === moment().format('YYYYMMDD') ? (
                <View
                  style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    justifyContent: 'center',
                    backgroundColor: 'transparent',
                  }}>
                  <Text
                    style={{
                      fontSize: Math.floor(DEVICE_WIDTH / 17),
                      fontWeight: 'bold',
                      color: '#ccc',
                      textAlign: 'center',
                    }}>
                    __
                  </Text>
                </View>
              ) : null}
            </View>
          </TouchableWithoutFeedback>
        );
      } else if (day.type === 'blockout') {
        const strikeTop = Math.floor(DEVICE_WIDTH / -22);
        return (
          <TouchableWithoutFeedback activeOpacity={1} style={dayStyle}>
            <View
              style={{
                ...dayStyle,
                height: Math.floor(DEVICE_WIDTH / 7),
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  ...textDayStyle,
                  textAlign: 'center',
                  backgroundColor: 'transparent',
                  fontSize: Math.floor(DEVICE_WIDTH / 26),
                }}>
                {moment(day.date, 'YYYYMMDD').date()}
              </Text>
              <View
                style={{
                  position: 'absolute',
                  top: strikeTop,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  justifyContent: 'center',
                  backgroundColor: 'transparent',
                }}>
                <Text
                  style={{
                    fontSize: Math.floor(DEVICE_WIDTH / 17),
                    color: '#ccc',
                    textAlign: 'center',
                  }}>
                  __
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        );
      } else {
        return (
          <TouchableWithoutFeedback
            activeOpacity={1}
            style={dayStyle}
            onPress={() =>
              this.props.onSelectDate(moment(day.date, 'YYYYMMDD'))
            }>
            <View
              style={{
                ...dayStyle,
                height: Math.floor(DEVICE_WIDTH / 7),
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  ...textDayStyle,
                  textAlign: 'center',
                  backgroundColor: 'transparent',
                  fontSize: Math.floor(DEVICE_WIDTH / 26),
                }}>
                {moment(day.date, 'YYYYMMDD').date()}
              </Text>
              {day.date === moment().format('YYYYMMDD') ? (
                <View
                  style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    justifyContent: 'center',
                    backgroundColor: 'transparent',
                  }}>
                  <Text
                    style={{
                      fontSize: Math.floor(DEVICE_WIDTH / 17),
                      fontWeight: 'bold',
                      color: dayProps.selectedBackgroundColor,
                      textAlign: 'center',
                    }}>
                    __
                  </Text>
                </View>
              ) : null}
            </View>
          </TouchableWithoutFeedback>
        );
      }
    } else {
      return (
        <TouchableWithoutFeedback activeOpacity={1} style={dayStyle}>
          <View
            style={{
              ...dayStyle,
              height: Math.floor(DEVICE_WIDTH / 7),
              justifyContent: 'center',
            }}>
            <Text
              style={{
                ...textDayStyle,
                textAlign: 'center',
                backgroundColor: 'transparent',
                fontSize: Math.floor(DEVICE_WIDTH / 26),
              }}>
              {null}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      );
    }
  }
}
