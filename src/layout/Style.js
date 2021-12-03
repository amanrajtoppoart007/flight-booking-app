import {StyleSheet} from 'react-native';
import Colors from './Colors';
const commonStyle = StyleSheet.create({
  flex(flex) {
    return {
      flex,
    };
  },
  height(height) {
    return {
      height,
    };
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignFlexEnd: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  alignItemCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowSpaceEven: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  rowFlexStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rowFlexEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rowSpaceAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  marginVertical(value) {
    return {
      marginVertical: value,
    };
  },
  marginRight(value) {
    return {
      marginRight: value,
    };
  },
  marginLeft(value) {
    return {
      marginLeft: value,
    };
  },
  marginHorizontal(value) {
    return {
      marginHorizontal: value,
    };
  },
  margin(margin) {
    return {
      margin: margin,
    };
  },
  marginTop(margin) {
    return {
      marginTop: margin,
    };
  },
  marginBottom(margin) {
    return {
      marginBottom: margin,
    };
  },
  paddingVertical(value) {
    return {
      paddingVertical: value,
    };
  },
  paddingHorizontal(value) {
    return {
      paddingHorizontal: value,
    };
  },
  padding(padding) {
    return {
      padding: padding,
    };
  },
  justifyContent(type) {
    return {
      justifyContent: `${type}`,
    };
  },
  backgroundColor(bgColor) {
    return {
      backgroundColor: `${bgColor}`,
    };
  },
  width(width) {
    return {
      width,
    };
  },
});
export default commonStyle;
