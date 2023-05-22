import { createSlice } from "@reduxjs/toolkit";

const sliceUpdateProduct = createSlice({
  name: "update",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push({
        ...action.payload,
        stock: 10,
        terjual: 15,
      });
    },
    updateStock: (state, action) => {
      const id = action.payload.id;
      const existingProduct = state.items.find((e) => e.id === id);
      const addStock = Number(action.payload.stock);
      existingProduct.stock += addStock;
    },
  },
});

export const { addItem, updateStock } = sliceUpdateProduct.actions;
export default sliceUpdateProduct.reducer;
