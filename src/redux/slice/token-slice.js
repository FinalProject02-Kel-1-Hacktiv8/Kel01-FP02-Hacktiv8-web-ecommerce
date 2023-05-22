import { createSlice } from "@reduxjs/toolkit";

const sliceToken = createSlice({
  name: "user",
  initialState: {
    email: "",
  },
  reducers: {
    addtoken: (state, action) => {
      state.email = btoa(action.payload);
      if (state.email !== "") {
        const payload = JSON.stringify(btoa(action.payload));
        localStorage.setItem("tkn", payload);
      }
    },
    deleteToken: (state) => {
      if (state.email !== "") {
        localStorage.removeItem("tkn");
        state.email = "";
      }
    },
  },
});

export const { addtoken, deleteToken } = sliceToken.actions;
export default sliceToken.reducer;
