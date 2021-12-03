import AsyncStorage from '@react-native-async-storage/async-storage';
const setIntro = async () => {
  try {
    await AsyncStorage.setItem('appIntro', `${Date.now()}`);
  } catch (err) {
    return false;
  }
};

const getIntroStatus = async () => {
  try {
    return await AsyncStorage.getItem('appIntro');
  } catch (err) {
    return false;
  }
};

const resetIntro = async () => {
  try {
    await AsyncStorage.removeItem('appIntro');
  } catch (err) {
    return false;
  }
};

export default {
  setIntro,
  getIntroStatus,
  resetIntro,
};
