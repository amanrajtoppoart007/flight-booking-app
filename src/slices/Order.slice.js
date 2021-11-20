import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Toast} from '../components/Toast';
import {api, CANCEL_ORDER, FETCH_ORDERS} from '../services/api';

export const getOrders = createAsyncThunk(
  FETCH_ORDERS,
  async (params, {dispatch}) => {
    dispatch(toggleLoading());
    const response = await api.get(FETCH_ORDERS);
    return response.data;
  },
);

export const cancelOrders = createAsyncThunk(
  CANCEL_ORDER,
  async (order_number, {dispatch}) => {
    dispatch(toggleLoading());
    const response = await api.post(CANCEL_ORDER, {order_number});
    dispatch(getOrders());
    return response.data;
  },
);

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
    loading: false,
  },
  reducers: {
    toggleLoading: state => {
      state.loading = !state.loading;
    },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [getOrders.fulfilled]: (state, action) => {
      const res = action?.payload;
      state.loading = false;
      state.orders = res?.data || [];
      if (res?.response === 'success') {
      } else {
        Toast.show(res?.message);
      }
    },
    [cancelOrders.fulfilled]: (state, action) => {
      const res = action?.payload;
      state.loading = false;
      if (res?.response === 'success') {
        Toast.show(res?.message);
      } else {
        Toast.show(res?.message);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {toggleLoading} = ordersSlice.actions;

export default ordersSlice.reducer;
