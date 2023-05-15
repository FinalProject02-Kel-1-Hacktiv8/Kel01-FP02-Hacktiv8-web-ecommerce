import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "@/Utils/fetch";

export const fetchDataProduct = createAsyncThunk(
  "product/getProducts",
  async (url) => {
    const response = await getData(url);
    return response;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    status: "idle",
    loading: false,
    data: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataProduct.pending, (state) => {
      state.status = "pending";
      state.loading = true;
    });
    builder.addCase(fetchDataProduct.fulfilled, (state, action) => {
      return {
        ...state,
        status: "success",
        loading: false,
        data: action.payload,
      };
    });
    builder.addCase(fetchDataProduct.rejected, (state, action) => {
      (state.status = "error"),
        (state.error = action.error.message),
        (state.loading = false);
    });
  },
});

export default productSlice.reducer;
