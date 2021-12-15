import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {api, FETCH_USER_URL, UPDATE_USER_URL} from '../redux/api';

export const fetchUser = createAsyncThunk(
  FETCH_USER_URL,
  async (_, {dispatch}) => {
    dispatch(toggleLoading());
    const response = await api.get(FETCH_USER_URL);
    return response.data;
  },
);

export const updateUser = createAsyncThunk(
  UPDATE_USER_URL,
  async (params, {dispatch}) => {
    dispatch(toggleLoading());
    const response = await api.post(UPDATE_USER_URL, params);
    dispatch(fetchUser());
    return response.data;
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    loading: false,
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.user = action.payload;
      state.token = action.payload?.access_token;
    },
    setTokenAction: (state, action) => {
      state.token = action.payload;
    },
    toggleLoading: state => {
      state.loading = !state.loading;
    },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchUser.fulfilled]: (state, action) => {
      state.user = action.payload?.data;
      state.loading = false;
    },
    [fetchUser.rejected]: (state, action) => {
      state.token = null;
      state.user = null;
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setAuthUser, setTokenAction, toggleLoading} = authSlice.actions;

export default authSlice.reducer;
