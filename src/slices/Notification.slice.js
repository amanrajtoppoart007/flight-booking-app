import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
  FETCH_USER_NOTIFICATION,
  api,
  DELETE_NOTIFICATION,
} from '../services/api';

export const getNotificationList = createAsyncThunk(
  FETCH_USER_NOTIFICATION,
  async params => {
    const response = await api.get(FETCH_USER_NOTIFICATION);
    return response.data;
  },
);
export const deleteNotification = createAsyncThunk(
  DELETE_NOTIFICATION,
  async (params, {dispatch}) => {
    const response = await api.post(DELETE_NOTIFICATION, params);
    dispatch(getNotificationList());
    return response.data;
  },
);

export const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    notifications: [],
    loading: false,
  },
  reducers: {
    toggleLoading: state => {
      state.loading = !state.loading;
    },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [getNotificationList.fulfilled]: (state, action) => {
      state.loading = false;
      const res = action?.payload;
      if (res?.response === 'success') {
        state.notifications = res?.data;
      } else {
        state.notifications = {};
      }
    },
    [deleteNotification.fulfilled]: (state, action) => {
      state.loading = false;
      const res = action?.payload;
      if (res?.response === 'success') {
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {toggleLoading} = notificationSlice.actions;

export default notificationSlice.reducer;
