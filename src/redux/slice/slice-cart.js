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
    addItem: (state, action) => {
      const cartItem = action.payload;
      const existingItem = state.items.find((item) => item.id === cartItem.id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.stock--;
      } else {
        state.items.push({
          ...cartItem,
          quantity: 1,
          stock: 20 - 1,
        });
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
        existingItem.stock++;
      }

      state.totalQuantity--;

      if (state.totalQuantity === 0) {
        state.subTotal = 0;
      } else {
        state.subTotal -= action.payload.price;
      }
    },
    removeCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
        state.subTotal = state.subTotal - existingItem.price;
      }
    },
    clearItem: (state) => {
      state.totalQuantity = 0;
      state.subTotal = 0;
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearItem, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
