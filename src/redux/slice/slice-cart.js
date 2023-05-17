import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    subTotal: 0,
    shipping: 1.01,
  },
  reducers: {
    addCart: (state, action) => {
      const cartItem = action.payload;
      const existingItem = state.items.find((item) => item.id === cartItem.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...cartItem, quantity: 1 });
      }
      state.totalQuantity++;
      state.subTotal += cartItem.price;
    },
    removeItem: (state, action) => {
      const id = action.payload.id;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
      state.totalQuantity--;
      if (state.totalQuantity === 0) {
        state.subTotal = 0;
      } else {
        state.subTotal -= action.payload.price;
      }
    },
    clearItem: (state) => {
      state.totalQuantity = 0;
      state.subTotal = 0;
      state.items = [];
    },
  },
});

export const { addCart, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
