import axios from 'axios';
import {getToken} from './storage';

export const BASE_URL = 'https://65.0.46.253:3005/att/userb2c/';
export const SEARCH_API_BASE_URL = 'https://hotel-content.ezytrip.com/ezytrip/';

export const REGISTER_URL = BASE_URL + 'signup';
export const LOGIN_URL = BASE_URL + 'login';
export const CHANGE_PASSWORD = BASE_URL + 'change-password';
export const UPDATE_PROFILE = BASE_URL + 'updateprofile';
export const FORGOT_PASSWORD = BASE_URL + 'forgot-password';
export const ADD_TRAVELER = BASE_URL + 'addtraveller';
export const UPDATE_TRAVELER = BASE_URL + 'updatetraveller/';
export const FETCH_TRAVELER = BASE_URL + 'fetchtraveller/';
export const DELETE_TRAVELER = BASE_URL + 'deletetraveller/';

//Hotel section api

export const HOTEL_API_BASE_URL = 'http://65.0.46.253:3008/ezytrip/';

export const PREDECTIVE_SEARCH = SEARCH_API_BASE_URL + 'search';
export const SEARCH_SRP_CONTENT = SEARCH_API_BASE_URL + 'properties';
export const HOTEL_AVAILABILITY = HOTEL_API_BASE_URL + 'hotelavailability';
export const HOTEL_DETAIL_CONTENT = HOTEL_API_BASE_URL + 'properties';
export const PROPERTY_ID_SEARCH =
  HOTEL_API_BASE_URL + 'hotelavailability/check';
export const HOTE_PRICE_CHECK = HOTEL_API_BASE_URL + 'hotelpricing/pricecheck';
export const HOTEL_PRICE_CHECK_SAVE =
  HOTEL_API_BASE_URL + 'common/hotelpricechecksave';
export const HOTEL_PRE_BOOK = HOTEL_API_BASE_URL + 'hotel/prebook';

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
