export interface cartItems {
  id: string;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
  image: string;
}

export interface cartState {
  items: cartItems[];
  totalPrice: number;
  totalQuantity: number;
}

export interface CartItemsCardProps {
  item: cartItems;
  onAdd: (item: cartItems) => void;
}
