import axios from 'axios';
import {getToken} from './storage';

export const BASE_URL = 'https://krishakvikas.com/api/v1/';

// PRODUCTS
export const FETCH_LATEST_PRODUCTS = BASE_URL + 'user/get-latest-products';
export const FETCH_TOP_RATED_PRODUCT = BASE_URL + 'user/get-top-rated-products';
export const FETCH_CATEGORY_URL = BASE_URL + 'user/get-categories';
export const GET_PRODUCTS = BASE_URL + 'user/get-products';
// wishlist
export const ADD_TO_WISHLIST = BASE_URL + 'user/add-to-wishlist';
export const REMOVE_FROM_WISHLIST = BASE_URL + 'user/remove-from-wishlist';
export const GET_WISHLIST = BASE_URL + 'user/get-wishlists';

// auth
export const STEP_1_SEND_OTP = BASE_URL + 'user/access_step_one';
export const STEP_2_CONFIRM_OTP = BASE_URL + 'user/access_step_two';
export const STEP_3_USER_SIGN_UP = BASE_URL + 'user/access_step_three';

// user
export const FETCH_USER_URL = BASE_URL + 'user/get-profile-details';
export const UPDATE_USER_URL = BASE_URL + 'user/update-profile';
// cart
export const FETCH_CART = BASE_URL + 'user/get-carts';
export const FETCH_SINGLE_PRODUCT = BASE_URL + 'user/get-product-details';
export const ADD_TO_CART = BASE_URL + 'user/add-to-cart';
export const REMOVE_TO_CART = BASE_URL + 'user/remove-from-cart';
export const UPDATE_TO_CART = BASE_URL + 'user/update-cart-quantity';

// category
export const GET_SUBCATEGORY = BASE_URL + 'user/get-sub-categories';
// orders
export const FETCH_ORDERS = BASE_URL + 'user/get-orders';
export const ADD_ORDER = BASE_URL + 'user/place-order';
export const GET_ORDER_DETAILS = BASE_URL + 'user/get-order-details';
export const CANCEL_ORDER = BASE_URL + 'user/cancel-order';
// location
export const FETCH_STATES = BASE_URL + 'user/get-states';
export const FETCH_PINCODE = BASE_URL + 'user/get-pincodes';
export const FETCH_AREA = BASE_URL + 'user/get-areas';
export const FETCH_CITY = BASE_URL + 'user/get-districts';
export const FETCH_BLOCK = BASE_URL + 'user/get-blocks';
export const FETCH_DISTRICT = BASE_URL + 'user/get-districts';

//address
export const ADD_ADDRESS = BASE_URL + 'user/add-address';
export const UPDATE_ADDRESS = BASE_URL + 'user/update-address';
export const GET_ADDRESS = BASE_URL + 'user/get-addresses';
export const DELETE_ADDRESS = BASE_URL + 'user/remove-address';
export const SET_DEFAULT_ADDRESS = BASE_URL + 'user/make-default-address';

//other
export const FETCH_PRODUCT_LIST_URL = BASE_URL + 'user/get-products';
export const FETCH_POPULAR_PRODUCT_LIST_URL = BASE_URL + 'user/get-products';

export const FETCH_USER_NOTIFICATION = BASE_URL + 'user/get-push-notifications';
export const DELETE_NOTIFICATION = BASE_URL + 'user/delete-push-notification';

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
