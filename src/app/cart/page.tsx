"use client";
import CartItemsCard from "../../components/cartItemCard/CartItemsCard";
import Wrapperr from "../../components/wrapper/Wrapperr";
import { useCart } from "../../hooks/useCart";
import { RiDeleteBin6Line } from "react-icons/ri";

const page = () => {
  const {
    items,
    totalPrice,
    totalQuantity,
    addItemToCart,
    descreaseItemQuantity,
    removeItemFromCart,
  } = useCart();
  return (
    <div className="min-h-screen p-5">
      <Wrapperr>
        <div>
          {items.length > 0 ? (
            <div className="flex flex-col lg:flex-row gap-8 p-5">
              {/* cart section  */}
              <div className="bg-white p-4 flex-1">
                {/* cart header  */}
                <div className="flex justify-between items-center px-5 mb-5">
                  <div className="flex items-center gap-5">
                    <h4 className="text-2xl">
                      My Cart ({totalQuantity}{" "}
                      {totalQuantity === 1 ? "item" : "items"})
                    </h4>
                    <div className="flex items-center gap-2 ">
                      <input type="checkbox" className="w-5 h-4 " />
                      <p className="text-xl">Select All ({items.length})</p>
                    </div>
                  </div>

                  {/* delete all */}
                  <div className="flex items-center gap-1 text-gray-400 cursor-pointer">
                    {/* icon */}
                    <button>
                      <RiDeleteBin6Line />
                    </button>
                    <p>Delete</p>
                  </div>
                </div>

                {/* main cart items section  */}
                <div className="bg-cyan-100/50 rounded-2xl p-6 shadow-md mb-8 flex-1">
                  {items.map((item) => (
                    <CartItemsCard
                      key={item.id}
                      item={item}
                      onAdd={() => addItemToCart(item)}
                      onRemove={() => removeItemFromCart(item.id)}
                      descreaseQuantity={() => descreaseItemQuantity(item.id)}
                    />
                  ))}
                </div>
              </div>

              {/* order summary section  */}
              <div className=" bg-white border border-gray-200 p-6 rounded-md shadow-md w-full lg:w-1/3 space-y-5">
                <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
                <div className="border-t "></div>

                <div className="flex items-center justify-between">
                  <p>Total Items: </p>
                  <p>{totalQuantity}</p>
                </div>
                <div className="border border-dotted border-gray-300 "></div>

                {/* subtotal fee  */}
                <div className="flex items-center justify-between">
                  <p> Subtotal:</p>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>

                {/* ceckout button */}
                <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300 cursor-pointer">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-20">
              <h2 className="text-3xl font-semibold mb-4">
                Your Cart is Empty
              </h2>
              <p className="text-gray-500">
                Looks like you haven't added anything to your cart yet.
              </p>
            </div>
          )}
        </div>
      </Wrapperr>
    </div>
  );
};

export default page;
