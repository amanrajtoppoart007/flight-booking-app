import AsyncStorage from '@react-native-async-storage/async-storage';

export const setToken = async token => {
  return await AsyncStorage.setItem('token', token);
};
export const removeToken = async () => {
  return await AsyncStorage.removeItem('token');
};

export const getToken = async () => {
  return await AsyncStorage.getItem('token');
};

export const setAreaStorage = async key => {
  return await AsyncStorage.setItem('area', key);
};

export const getAreaStorage = async () => {
  return await AsyncStorage.getItem('area');
};

export const setPincodeStorage = async key => {
  return await AsyncStorage.setItem('pincode', key);
};

export const removePincodeStorage = async () => {
  return await AsyncStorage.removeItem('pincode');
};

export const removeAreaStorage = async () => {
  return await AsyncStorage.removeItem('area');
};

export const getPincodeStorage = async () => {
  return await AsyncStorage.getItem('pincode');
};

export const setItem = async (key, value) => {
  return await AsyncStorage.setItem(key, value);
};

export const getItem = async key => {
  return await AsyncStorage.getItem(key);
};
