"use client";

import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItemsCard = () => {
  return (
    <div className="bg-white flex justify-between items-center p-4 rounded-md shadow-md">
      {/* image */}
      <div
        className="border px-18 py-10 rounded-md
      "
      ></div>

      {/* details */}
      <div>
        <p>product name</p>

        <div>
          <p>color</p>
          <p>Fulfilled by Seller</p>
        </div>

        {/* increment decrement buttons */}
        <div className="flex border border-zinc-300 rounded-lg overflow-hidden w-fit">
          {/* কমানোর বাটন */}
          <button className="px-3 py-1 bg-gray-100 hover:bg-zinc-200 transition-colors text-black">
            -
          </button>

          {/* বর্তমান সংখ্যা */}
          <p className="px-4 py-1 bg-white border-x text-black min-w-10 text-center">
            {}2
          </p>

          {/* বাড়ানোর বাটন */}
          <button className="px-3 py-1 bg-gray-100 hover:bg-zinc-200 transition-colors text-black">
            +
          </button>
        </div>
      </div>

      {/* price */}
      <div className="space-y-10">
        <div className="text-lg">
          <p>300</p>
          <p className="text-gray-400 line-through text-sm">450</p>
        </div>

        {/* remove and wishlist buttons */}
        <div className="space-x-2 text-gray-500">
          <button>
            <RiDeleteBin6Line className="text-xl"/>
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
