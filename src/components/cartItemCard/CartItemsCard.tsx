"use client";

import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CartItemsCardProps } from "../../types/cart";
import Image from "next/image";
import { useCart } from "../../hooks/useCart";

const CartItemsCard = ({
  item,
  onAdd,
}: CartItemsCardProps) => {
  const {removeItemFromCart, descreaseItemQuantity} = useCart();
  return (
    <div className="bg-white flex gap-5 justify-between items-center p-4 rounded-md shadow-md">
      {/* image */}
      <div
        className="border px-18 py-10 rounded-md relative w-32 h-32 
      "
      >
        <Image
          src={item.f || "/placeholder.png"}
          fill
          sizes="200px"
          className="object-cover rounded"
          alt={item.name}
        />
      </div>

      {/* details */}
      <div className="flex-1 space-y-2">
        <h3 className="font-semibold text-zinc-800">{item.name}</h3>
        <div className="text-sm text-gray-500">
          <p>Color: Default</p>
          <p className="text-orange-600">Fulfilled by ShopCraft</p>
        </div>

        {/* increment decrement buttons */}
        <div className="flex border border-zinc-300 rounded-lg overflow-hidden w-fit">
          {/* কমানোর বাটন */}
          <button
            onClick={() => descreaseItemQuantity(item)}
            className="px-3 py-1 bg-gray-100 hover:bg-zinc-200 transition-colors text-black"
          >
            -
          </button>

          {/* বর্তমান সংখ্যা */}
          <p className="px-4 py-1 bg-white border-x text-black min-w-10 text-center">
            {item.quantity}
          </p>

          {/* বাড়ানোর বাটন */}
          <button
            onClick={() => onAdd(item)}
            className="px-3 py-1 bg-gray-100 hover:bg-zinc-200 transition-colors text-black"
          >
            +
          </button>
        </div>
      </div>

      {/* price */}
      <div className="space-y-10">
        <div className="text-lg">
          <p>{item.price}</p>
          <p className="text-gray-400 line-through text-sm">450</p>
        </div>

        {/* remove and wishlist buttons */}
        <div className="space-x-2 text-gray-500">
          <button onClick={() => removeItemFromCart(item)}>
            <RiDeleteBin6Line className="text-xl" />
          </button>
          <button>
            <FaRegHeart className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemsCard;
