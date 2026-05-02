import { useDispatch, useSelector } from "react-redux"
import { selectCartItems, selectCartTotalPrice, selectCartTotalQuantity } from "../features/cart/cartSelector";
import { addToCart, decreaseQuantity, removeFromCart } from "../features/cart/cartSlice";




export const useCart = () => {
    const dispatch = useDispatch();

    // select data from the store
    const items = useSelector(selectCartItems);
    const totalPrice = useSelector(selectCartTotalPrice);
    const totalQuantity = useSelector(selectCartTotalQuantity);

    // dispatch actions to the store
    const addItemToCart = (product : any) => dispatch(addToCart(product));
    const descreaseItemQuantity = (product : any) => dispatch(decreaseQuantity({id : product.id}));
    const removeItemFromCart = (product : any) => dispatch(removeFromCart({id : product.id}));

    return{
        items,
        totalPrice,
        totalQuantity,
        addItemToCart,
        descreaseItemQuantity,
        removeItemFromCart
    }
}