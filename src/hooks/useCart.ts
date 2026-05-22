import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotalPrice,
  selectCartTotalQuantity,
} from "../features/cart/cartSelector";

import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "../features/cart/cartSlice";

import { cartItems } from "../types/cart";

export const useCart = () => {
  const dispatch = useDispatch();

  // select data from the store
  const items = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  const totalQuantity = useSelector(selectCartTotalQuantity);

  // dispatch actions to the store
  const addItemToCart = (item: cartItems) => dispatch(addToCart(item));
  const descreaseItemQuantity = (id: string) => dispatch(decreaseQuantity(id));
  const removeItemFromCart = (id: string) => dispatch(removeFromCart(id));

  return {
    items,
    totalPrice,
    totalQuantity,
    addItemToCart,
    descreaseItemQuantity,
    removeItemFromCart,
  };
};
