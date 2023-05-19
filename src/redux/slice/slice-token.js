import { createSlice } from "@reduxjs/toolkit";

const sliceUser = createSlice({
  name: "user",
  initialState: {
    token: null,
  },
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload;
    },
    deleteToken: (state) => {
      state.token = null;
    },
  },
});

export const { addToken, deleteToken } = sliceUser.actions;
export default sliceUser.reducer;
