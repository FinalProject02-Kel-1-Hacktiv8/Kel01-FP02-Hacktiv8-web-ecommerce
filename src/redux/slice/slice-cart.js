import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
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
    },
  },
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
