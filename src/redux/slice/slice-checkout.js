import { createSlice } from "@reduxjs/toolkit";

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    checkoutItems: [],
    totalQuantity: 0,
    subTotal: 0,
    shipping: 1.01,
  },
  reducers: {
    addItemCheckout: (state, action) => {
      const cartItem = action.payload;
      const existingItem = state.checkoutItems.find((item) =>
        cartItem.items.find((value) => value.id === item.id)
      );
      const existingCart = cartItem.items.find((value) =>
        state.checkoutItems.find((item) => value.id === item.id)
      );

      if (existingItem) {
        existingItem.quantity += existingCart.quantity;
        existingItem.stock -= existingCart.quantity;
      } else {
        state.checkoutItems = cartItem.items;
      }

      state.totalQuantity += cartItem.totalQuantity;
      state.subTotal += cartItem.subTotal;
    },
    // updateStockCart: (state, action) => {
    //   const products = action.payload;
    //   const existingItem = state.items.find((item) => item.id === products.id);

    //   if (existingItem) {
    //     existingItem.stock = Number(products.stock) - existingItem.quantity;
    //   }
    // },
    // removeItem: (state, action) => {
    //   const id = action.payload.id;
    //   const existingItem = state.items.find((item) => item.id === id);

    //   if (existingItem.quantity === 1) {
    //     state.items = state.items.filter((item) => item.id !== id);
    //   } else {
    //     existingItem.quantity--;
    //     existingItem.stock++;
    //   }

    //   state.totalQuantity--;

    //   if (state.totalQuantity === 0) {
    //     state.subTotal = 0;
    //   } else {
    //     state.subTotal -= action.payload.price;
    //   }
    // },
    removeCheckout: (state, action) => {
      const id = action.payload;
      const existingItem = state.checkoutItems.find((item) => item.id === id);
      if (existingItem) {
        state.checkoutItems = state.checkoutItems.filter(
          (item) => item.id !== id
        );
        state.totalQuantity = state.totalQuantity - existingItem.quantity;

        if (state.totalQuantity === 0) {
          state.subTotal = 0;
        } else {
          const priceAndQuantity = existingItem.price * existingItem.quantity;
          state.subTotal -= priceAndQuantity;
        }
      }
    },
    // clearItemCheckout: (state) => {
    //   state.totalQuantity = 0;
    //   state.subTotal = 0;
    //   state.checkoutItems = [];
    // },
  },
});

export const { addItemCheckout, clearItemCheckout, removeCheckout } =
  checkoutSlice.actions;
export default checkoutSlice.reducer;
