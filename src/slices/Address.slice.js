import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Toast} from '../components/Toast';
import {
  ADD_ADDRESS,
  api,
  GET_ADDRESS,
  UPDATE_ADDRESS,
  DELETE_ADDRESS,
  SET_DEFAULT_ADDRESS,
} from '../services/api';

export const getAddress = createAsyncThunk(GET_ADDRESS, async params => {
  const response = await api.get(GET_ADDRESS);
  return response.data;
});

export const addAddress = createAsyncThunk(
  ADD_ADDRESS,
  async (params, {dispatch}) => {
    dispatch(toggleLoading());
    const response = await api.post(ADD_ADDRESS, params);
    dispatch(getAddress());
    return response.data;
  },
);

export const updateAddress = createAsyncThunk(
  UPDATE_ADDRESS,
  async (params, {dispatch}) => {
    dispatch(toggleLoading());
    const response = await api.post(UPDATE_ADDRESS, params);
    dispatch(getAddress());
    return response.data;
  },
);
export const deleteAddress = createAsyncThunk(
  DELETE_ADDRESS,
  async (params, {dispatch}) => {
    dispatch(toggleLoading());
    const response = await api.post(DELETE_ADDRESS, params);
    dispatch(getAddress());
    return response.data;
  },
);

export const setDefaultAddress = createAsyncThunk(
  SET_DEFAULT_ADDRESS,
  async (params, {dispatch}) => {
    dispatch(toggleLoading());
    const response = await api.post(SET_DEFAULT_ADDRESS, params);
    dispatch(getAddress());
    return response.data;
  },
);

export const addressSlice = createSlice({
  name: 'address',
  initialState: {
    loading: false,
    address: [],
  },
  reducers: {
    toggleLoading: state => {
      state.loading = !state.loading;
    },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [addAddress.fulfilled]: (state, action) => {
      const res = action?.payload;
      state.loading = false;
      if (res?.response === 'success') {
        Toast.show(res?.message);
      } else {
        if (typeof res?.message === 'string') {
          Toast.show(res?.message);
        } else {
          if (typeof res?.message === 'object') {
            let messages = Object.values(res?.message);
            messages.map(function (item) {
              const msg = Object.values(item);
              Toast.show(msg[0]);
            });
          }
        }
      }
    },
    [getAddress.fulfilled]: (state, action) => {
      const res = action?.payload;
      if (res?.response === 'success') {
        state.address = res?.data;
        state.loading = false;
      }
    },
    [updateAddress.fulfilled]: (state, action) => {
      const res = action?.payload;
      state.loading = false;
      if (res?.response === 'success') {
      }
    },
    [deleteAddress.fulfilled]: (state, action) => {
      const res = action?.payload;
      state.loading = false;
      if (res?.response === 'success') {
        Toast.show(res?.message);
      } else {
        if (typeof res?.message === 'string') {
          Toast.show(res?.message);
        } else {
          if (typeof res?.message === 'object') {
            let messages = Object.values(res?.message);
            messages.map(function (item) {
              const msg = Object.values(item);
              Toast.show(msg[0]);
            });
          }
        }
      }
    },
    [setDefaultAddress.fulfilled]: (state, action) => {
      const res = action?.payload;
      state.loading = false;
      if (res?.response === 'success') {
        Toast.show(res?.message);
      } else {
        if (typeof res?.message === 'string') {
          Toast.show(res?.message);
        } else {
          if (typeof res?.message === 'object') {
            let messages = Object.values(res?.message);
            messages.map(function (item) {
              const msg = Object.values(item);
              Toast.show(msg[0]);
            });
          }
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {toggleLoading} = addressSlice.actions;

export default addressSlice.reducer;
