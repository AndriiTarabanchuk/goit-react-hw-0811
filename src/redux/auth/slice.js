import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: "",
  isLoggedIn: false,
};
const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: builder => { 
    builder.addCase(register)
  }
});
