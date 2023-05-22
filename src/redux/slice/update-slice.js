import { createSlice } from "@reduxjs/toolkit";

const sliceUpdateProduct = createSlice({
  name: "update",
  initialState: {
    items: [],
    message: "",
  },
  reducers: {
    addItem: (state, action) => {
      const currentProduct = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (currentProduct) {
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
      const currentProduct = state.items.find((item) => item.id === id);
      if (currentProduct) {
        const addStock = Number(action.payload.stock);
        currentProduct.stock += addStock;
        state.message = `Berhasil Update Stock "${currentProduct.title}"`;
      }
    },
    deleteMessage: (state) => {
      state.message = "";
    },
  },
});

export const { addItem, updateStock, deleteMessage } =
  sliceUpdateProduct.actions;
export default sliceUpdateProduct.reducer;
