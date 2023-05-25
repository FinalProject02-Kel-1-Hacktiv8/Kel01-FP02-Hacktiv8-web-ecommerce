import { createSlice } from "@reduxjs/toolkit";

export const adminAccount = {
  username: "admin",
  password: "admin123",
  token: "abcdAdmin123$#",
  role: "admin",
};

const sliceUser = createSlice({
  name: "user",
  initialState: {
    token: null,
    role: null,
  },
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload.token;
      state.role = action.payload.role;
    },
    deleteToken: (state) => {
      state.token = null;
      state.role = null;
    },
  },
});

export const { addToken, deleteToken } = sliceUser.actions;
export default sliceUser.reducer;
