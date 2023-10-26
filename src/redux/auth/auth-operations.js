import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Notify from 'simple-notify'
import 'simple-notify/dist/simple-notify.min.css'

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/login", credentials);
      token.set(data.token);
      return data;
    } catch (err) {
      new Notify({
            status: 'error',
            text: `Wrong email or password`,
            effect: 'slide',
            type: 3,
            autoclose: 2000,
          })
      return rejectWithValue(err.message);;
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/users/logout");
      token.unset();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      token.set(data.token);
      return data;
    } catch (err) {
      new Notify({
            status: 'error',
            text: `This email is already using`,
            effect: 'slide',
            type: 3,
            autoclose: 2000,
          })
      return rejectWithValue(err.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue();
    }
  }
);
