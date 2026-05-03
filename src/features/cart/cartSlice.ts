import { createSlice } from "@reduxjs/toolkit";
import { cartState } from "../../types/cart";

const initialState:cartState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      }

      ((state.totalPrice += newItem.price), (state.totalQuantity += 1));
    },

    decreaseQuantity: (state, action) => {
      const newItem = action.payload.id;
      const existingItem = state.items.find((item) => item.id === newItem);

      if (existingItem) {
        // existing items thakle 1st a total quantity and total price theke 1 item er price minus kore dibo
        state.totalQuantity -= 1;
        state.totalPrice -= existingItem.price;

        // tarpor jodi existing item er quantity 1 theke beshi hoy tahole quantity theke 1 minus kore dibo and total price theke os minus kore dibo
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          existingItem.totalPrice -= existingItem.price;
        } else {
          // jodi existing item er quantity 1 er kom hoy tahole seta ke cart theke remove kore dibo
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id,
          );
        }
      }
    },

    removeFromCart: (state, action) => {
      const newItem = action.payload.id;
      const existingItem = state.items.find((item) => item.id === newItem);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.totalPrice;
        state.items = state.items.filter((item) => item.id !== existingItem.id);
      }
    },
  },
});

export const { addToCart, decreaseQuantity, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
