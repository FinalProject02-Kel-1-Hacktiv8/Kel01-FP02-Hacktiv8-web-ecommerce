import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../utils/fetch";

export const fetchData = createAsyncThunk(
  "product/getProducts",
  async (url) => {
    const res = await getData(url);
    return res;
  }
);

const sliceProduct = createSlice({
  name: "product",
  initialState: {
    status: "idle",
    data: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.status = "pendding";
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      return {
        ...state,
        status: "success",
        data: action.payload,
      };
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });
  },
});

export default sliceProduct.reducer;
