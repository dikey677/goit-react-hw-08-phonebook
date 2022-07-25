import { createSlice } from "@reduxjs/toolkit/";
// import authOperations from "./auth-operations";

const initialState = {
  user: { name: null, email: null, password: null },
  token: null,
  isLoggedIn: false,
};

// console.log(initialState);

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    // [authOperations.register.fulfilled](state, action) {},
  },
});

export default authSlice.reducer;
