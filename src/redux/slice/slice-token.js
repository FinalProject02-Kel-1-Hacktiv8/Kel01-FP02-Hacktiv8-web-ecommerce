import { createSlice } from "@reduxjs/toolkit";

const sliceUser = createSlice({
  name: "user",
  initialState: {
    status: "idle",
    token: null,
    error: null,
  },
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload;
      state.status = "success";
    },
    deleteToken: (state) => {
      state.token = null;
    },
  },
});

export const { addToken, deleteToken } = sliceUser.actions;
export default sliceUser.reducer;
