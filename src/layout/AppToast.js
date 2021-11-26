import Toast from 'react-native-simple-toast';

function bottomToast(message) {
  Toast.showWithGravity(message, Toast.LONG, Toast.BOTTOM);
}

function topToast(message) {
  Toast.showWithGravity(message, Toast.LONG, Toast.TOP);
}

export default {
  bottomToast,
  topToast,
};
