import { createAsyncThunk } from "@reduxjs/toolkit";
import { setToken } from "../../../config/goitApi";

export const registerThunk = createAsyncThunk(
  "register",
  async (credentials, thunkAPI) => {
    // setToken()
  }
);
export const loginThunk = createAsyncThunk(
  "login",
  async (credentials, thunkAPI) => {
    // setToken()
  }
);

export const logoutThunk = createAsyncThunk("logout", async (_, thunkAPI) => {
  // clearToken()
});
// export const getMeThunk = createAsyncThunk("getMe", async (_, thunkAPI) => {
//   // clearToken()
//   try {
//     const { data } = await goitApi.get("users/current");
//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });
