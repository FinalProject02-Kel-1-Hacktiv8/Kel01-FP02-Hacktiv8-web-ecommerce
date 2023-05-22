import { createSlice } from "@reduxjs/toolkit";

const sliceToken = createSlice({
  name: "user",
  initialState: {
    email: "",
  },
  reducers: {
    addtoken: (state, action) => {
      state.email = action.payload;
      if (state.email !== "") {
        const parseData = JSON.stringify(action.payload);
        localStorage.setItem("tkn", parseData);
      }
    },
    deleteToken: (state) => {
      if (state.email !== "") {
        localStorage.removeItem("tkn");
      }
    },
  },
});

export const { addtoken, deleteToken } = sliceToken.actions;
export default sliceToken.reducer;
