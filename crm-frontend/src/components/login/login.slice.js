import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  isAuth: false,
  error: "",
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginPending: (state, { payload }) => {
      state.isLoading = true;
    },
    loginSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = "";
    },
    loginFail: (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = payload;
    },
  },
});

const { reducer, actions } = loginSlice;
export const { loginPending, loginSuccess, loginFail } = actions;
export default reducer;
