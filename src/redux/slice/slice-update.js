import { createSlice } from "@reduxjs/toolkit";

export const updateSlice = createSlice({
  name: "updateProduct",
  initialState: {
    productItems: [],
  },
  reducers: {
    addStock: (state, action) => {
      const products = action.payload;
      const existingItem = state.productItems.find(
        (item) => item.id === products.id
      );

      if (existingItem) {
        existingItem.stock--;
      } else {
        state.productItems.push({
          ...products,
        });
      }
    },
    updateStock: (state, action) => {
      const products = action.payload;
      const existingItem = state.productItems.find(
        (item) => item.id === products.id
      );

      if (existingItem) {
        existingItem.stock = Number(products.stock);
      }
    },
  },
});

export const { addStock, updateStock, generateStock } = updateSlice.actions;
export default updateSlice.reducer;
