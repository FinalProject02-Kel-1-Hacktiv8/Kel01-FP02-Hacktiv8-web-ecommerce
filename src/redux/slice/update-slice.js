import { createSlice } from "@reduxjs/toolkit";

const sliceUpdateProduct = createSlice({
  name: "update",
  initialState: {
    items: [],
    message: "",
  },
  reducers: {
    addItem: (state, action) => {
      const existingProduct = state.items.find(
        (e) => e.id === action.payload.id
      );
      if (existingProduct) {
        return;
      } else {
        state.items.push({
          ...action.payload,
          stock: 10,
          terjual: 15,
        });
      }
    },
    updateStock: (state, action) => {
      const id = action.payload.id;
      const existingProduct = state.items.find((e) => e.id === id);
      if (existingProduct) {
        const addStock = Number(action.payload.stock);
        existingProduct.stock += addStock;
        state.message = `Berhasil Update Stock "${existingProduct.title}"`;
      }
    },
    messageChange: (state) => {
      state.message = "";
    },
  },
});

export const { addItem, updateStock, messageChange } =
  sliceUpdateProduct.actions;
export default sliceUpdateProduct.reducer;
