import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPriceQuantity: 0,
    changed: false,
  },
  reducers: {
    // replaceCart(state, action) {
    //   state.totalQuantity = action.payload.totalQuantity;
    //   state.totalPrice= action.payload.totalPrice;
    //   state.items = action.payload.items;
    // },

    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          image: newItem.image,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });

        state.totalPriceQuantity = state.totalPriceQuantity + newItem.price;
        // state.totalPriceQuantity = newItem.totalPrice;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        state.totalPriceQuantity =
          state.totalPriceQuantity + existingItem.price;
      }
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.totalPriceQuantity =
          state.totalPriceQuantity - existingItem.totalPrice;
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        state.totalPriceQuantity =
          state.totalPriceQuantity - existingItem.price;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;
