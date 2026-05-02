import { RootState } from "../../lib/store";

// selctors for cart
export const selectCart = (state: RootState) => state.cart;

// selectors for cart items
export const selectCartItems = (state: RootState) => state.cart.items;

// selectors for total price
export const selectCartTotalPrice = (state: RootState) => state.cart.totalPrice;

// selectors for total quantity
export const selectCartTotalQuantity = (state: RootState) =>
  state.cart.totalQuantity;
