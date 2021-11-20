import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {api, FETCH_CATEGORY_URL, GET_PRODUCTS} from '../services/api';

export const fetchProducts = createAsyncThunk(
  GET_PRODUCTS,
  async (params, {dispatch}) => {
    dispatch(toggleLoading());
    const response = await api.get(GET_PRODUCTS, params);
    return response.data;
  },
);

export const fetchCategories = createAsyncThunk(
  FETCH_CATEGORY_URL,
  async (params, {dispatch}) => {
    dispatch(toggleLoading());
    const response = await api.get(FETCH_CATEGORY_URL);
    return response.data;
  },
);

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    loading: false,
  },
  reducers: {
    toggleLoading: state => {
      state.loading = !state.loading;
    },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = false;

      // Add user to the state array
      const res = action.payload;
      if (res?.response === 'success') {
        state.loading = false;
        state.products = res?.data?.list;
        state.loading = false;
      }
    },
    [fetchProducts.rejected]: (state, action) => {
      // Add user to the state array
      state.loading = false;
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.categories = action?.payload?.data?.list;
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setLatestProducts, toggleLoading} = productSlice.actions;

export default productSlice.reducer;
