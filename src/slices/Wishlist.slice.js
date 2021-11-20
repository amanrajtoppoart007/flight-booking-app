import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Toast} from '../components/Toast';
import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  api,
  GET_WISHLIST,
} from '../services/api';

export const getWishList = createAsyncThunk(GET_WISHLIST, async () => {
  const response = await api.get(GET_WISHLIST);
  return response.data;
});

export const addToWishList = createAsyncThunk(
  ADD_TO_WISHLIST,
  async (params, {dispatch}) => {
    dispatch(toggleLoading());
    const response = await api.post(ADD_TO_WISHLIST, params);
    dispatch(getWishList());
    return response.data;
  },
);

export const removeFromWishList = createAsyncThunk(
  REMOVE_FROM_WISHLIST,
  async (params, {dispatch}) => {
    dispatch(toggleLoading());
    const response = await api.post(REMOVE_FROM_WISHLIST, params);
    dispatch(getWishList());
    return response.data;
  },
);

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    wishlist: [],
    loading: false,
  },
  reducers: {
    toggleLoading: state => {
      state.loading = !state.loading;
    },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [addToWishList.fulfilled]: (state, action) => {
      state.loading = false;
      const res = action?.payload;
      if (res?.response === 'success') {
        Toast.show(res?.message);
      } else {
        if (typeof res?.message === 'string') {
          Toast.show(res?.message);
        }
      }
    },
    [removeFromWishList.fulfilled]: (state, action) => {
      state.loading = false;
      const res = action?.payload;
      console.log(res);
      if (res?.response === 'success') {
        Toast.show(res?.message);
      } else {
        if (typeof res?.message === 'string') {
          Toast.show(res?.message);
        }
      }
    },
    [getWishList.fulfilled]: (state, action) => {
      state.loading = false;
      const res = action?.payload;
      if (res?.response === 'success') {
        state.wishlist = res?.data;
      } else {
        state.wishlist = {};
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {toggleLoading} = wishlistSlice.actions;

export default wishlistSlice.reducer;
