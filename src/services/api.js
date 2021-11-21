import axios from 'axios';
import {getToken} from './storage';

export const BASE_URL = 'https://65.0.46.253:3005/att/userb2c/';
export const REGISTER_URL = 'signup';
export const LOGIN_URL = 'login';
export const CHANGE_PASSWORD = 'change-password';
export const UPDATE_PROFILE = 'updateprofile';
export const FORGOT_PASSWORD = 'forgot-password';
export const ADD_TRAVELER = 'addtraveller';
export const UPDATE_TRAVELER = 'updatetraveller/';
export const FETCH_TRAVELER = 'fetchtraveller/';
export const DELETE_TRAVELER = 'deletetraveller/';

export const api = {
  get: async (url, params) => {
    const token = await getToken();
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params,
    };
    return axios.get(url, config);
  },
  post: async (url, params) => {
    const token = await getToken();
    let config = {
      method: 'post',
      url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: params,
    };
    return axios(config);
  },
  endpoints: {},
};
