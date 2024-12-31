import { createSlice } from '@reduxjs/toolkit';
import API from '../src/Http';
import STATUSES from '../src/Global/Status/Statuses';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    status: null,
  },
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const { setStatus, setUser, setToken } = authSlice.actions;

export default authSlice.reducer;

export function register(data) {
  return async function registerThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.post('register', data);
      if (response.status === 201) {
        dispatch(setUser(response.data.user || data));
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
    //   console.error("Register Error:", error.response?.data || error.message);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

export function login(data) {
  return async function loginThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.post('login', data);
      if (response.status === 201 && response.data?.token) {
        dispatch(setToken(response.data.token));
        dispatch(setUser(response.data.user));
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
