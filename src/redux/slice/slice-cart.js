import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    subTotal: 0,
    shipping: 2.35,
  },
  reducers: {
    addCart: (state, action) => {
      const itemCart = action.payload;
      const existingItem = state.items.find(
        (item) => item.productId === itemCart.productId
      );
      if (existingItem) {
        existingItem.quantity += itemCart.quantity;
        existingItem.subTotalPrice += Number(
          Number.parseFloat(itemCart.price).toFixed(2)
        );
      } else {
        state.items.push(itemCart);
      }

      state.totalQuantity += itemCart.quantity;
      state.subTotal += itemCart.subTotalPrice;
    },
    removeItem: (state, action) => {
      const itemCart = action.payload;
      const existingItem = state.items.find(
        (item) => item.productId === itemCart.productId
      );
      if (existingItem) {
        existingItem.quantity -= itemCart.quantity;
        existingItem.subTotalPrice -= itemCart.price;
      }

      state.totalQuantity -= itemCart.quantity;
      state.subTotal -= itemCart.subTotalPrice;
    },
    clearItem: (state, action) => {
      const itemCart = action.payload;
      const existingItem = state.items.find(
        (item) => item.productId === itemCart.productId
      );
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.subTotal -= existingItem.subTotalPrice;
        state.items = state.items.filter(
          (item) => item.productId !== itemCart.productId
        );
      }

      //   state.items.find((item, index) => {
      //     if (item.productId === itemCart.productId) {
      //       delete state.items[index];
      //     }
      //   });
    },
  },
});

export const { addCart, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
