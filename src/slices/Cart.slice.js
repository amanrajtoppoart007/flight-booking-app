import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Toast} from '../components/Toast';
import {
  ADD_TO_CART,
  api,
  FETCH_CART,
  REMOVE_TO_CART,
  UPDATE_TO_CART,
} from '../services/api';

export const getCart = createAsyncThunk(FETCH_CART, async params => {
  const response = await api.get(FETCH_CART);
  return response.data;
});

export const addToCart = createAsyncThunk(
  ADD_TO_CART,
  async (params, {dispatch}) => {
    dispatch(toggleLoading());
    const response = await api.post(ADD_TO_CART, params);
    dispatch(getCart());
    return response.data;
  },
);

export const removeToCart = createAsyncThunk(
  REMOVE_TO_CART,
  async (id, {dispatch}) => {
    dispatch(toggleLoading());

    const response = await api.post(REMOVE_TO_CART, {cart_id: id});
    dispatch(getCart());
    return response.data;
  },
);

export const updateToCart = createAsyncThunk(
  UPDATE_TO_CART,
  async ({id, quantity}, {dispatch}) => {
    dispatch(toggleLoading());
    const response = await api.post(UPDATE_TO_CART, {cart_id: id, quantity});
    dispatch(getCart());
    return response.data;
  },
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    loading: false,
    total: 0,
  },
  reducers: {
    toggleLoading: state => {
      state.loading = !state.loading;
    },
    getTotal: state => {
      state.total = state.cart.reduce((acc, next) => {
        const amount = next.amount ? next.amount : 0;
        const quantity = next.quantity ? parseInt(next.quantity, 10) : 0;
        return (acc += amount * quantity);
      }, 0);
    },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [addToCart.fulfilled]: (state, action) => {
      const res = action?.payload;
      state.loading = false;
      if (res?.response === 'success') {
        Toast.show(res?.message);
      } else {
        Toast.show(res?.message);
      }
    },
    [getCart.fulfilled]: (state, action) => {
      const res = action?.payload;
      state.loading = false;

      if (res?.response === 'success') {
      }
      state.cart = res?.data;
    },
    [removeToCart.fulfilled]: (state, action) => {
      const res = action?.payload;
      state.loading = false;

      if (res?.response === 'success') {
      }
    },
    [updateToCart.fulfilled]: (state, action) => {
      const res = action?.payload;
      state.loading = false;

      if (res?.response === 'success') {
        Toast.show(res?.message);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {toggleLoading, getTotal} = cartSlice.actions;

export default cartSlice.reducer;
