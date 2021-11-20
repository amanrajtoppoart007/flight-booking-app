import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
  api,
  FETCH_CATEGORY_URL,
  FETCH_LATEST_PRODUCTS,
  FETCH_TOP_RATED_PRODUCT,
  FETCH_SINGLE_PRODUCT,
} from '../services/api';

export const fetchLatestProducts = createAsyncThunk(
  FETCH_LATEST_PRODUCTS,
  async (params = {}, {dispatch}) => {
    dispatch(toggleLoading());
    const response = await api.get(FETCH_LATEST_PRODUCTS, params);
    return response.data;
  },
);

export const fetchTopRatedProducts = createAsyncThunk(
  FETCH_TOP_RATED_PRODUCT,
  async (params = {}, {dispatch}) => {
    dispatch(toggleLoading());
    const response = await api.get(FETCH_TOP_RATED_PRODUCT, params);
    return response.data;
  },
);

export const fetchCategories = createAsyncThunk(
  FETCH_CATEGORY_URL,
  async (_, {dispatch}) => {
    dispatch(toggleLoading());
    const response = await api.get(FETCH_CATEGORY_URL);
    return response.data;
  },
);

export const fetchSingleProduct = createAsyncThunk(
  FETCH_SINGLE_PRODUCT,
  async (params, {dispatch}) => {
    dispatch(toggleLoading());
    const response = await api.get(FETCH_SINGLE_PRODUCT, params);
    return response.data;
  },
);

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    categories: [],
    latestProducts: [],
    topRatedProducts: [],
    allProducts: {},
    product: {},
    loading: false,
  },
  reducers: {
    setLatestProducts: state => {},
    toggleLoading: state => {
      state.loading = !state.loading;
    },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchLatestProducts.fulfilled]: (state, action) => {
      // Add user to the state array
      state.loading = false;
      state.latestProducts = action.payload?.data?.list;
      state.loading = false;
    },
    [fetchLatestProducts.rejected]: (state, action) => {
      state.loading = false;
      // Add user to the state array
    },
    [fetchTopRatedProducts.fulfilled]: (state, action) => {
      // Add top rated products  to the state array
      const result = action?.payload;
      if (result.response === 'success') {
        state.topRatedProducts = result?.data?.list;
      }

      state.loading = false;
    },
    [fetchTopRatedProducts.rejected]: (state, action) => {
      state.loading = false;
      // Add user to the state array
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.loading = false;
      state.categories = action?.payload?.data?.list;
    },
    [fetchSingleProduct.fulfilled]: (state, action) => {
      state.loading = false;
      if (action.payload?.response === 'success') {
        state.allProducts[action.payload?.data?.id] = action?.payload?.data;
        state.product = action?.payload?.data;
      } else {
        state.product = [];
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {setLatestProducts, toggleLoading} = productSlice.actions;

export default productSlice.reducer;
