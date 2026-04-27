import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, acttion) => {
      const newItem = acttion.payload;
    
      // চেক করা: আইটেমটি কি আগে থেকেই items অ্যারেতে আছে?
      const exitingItem = state.items.find((item) => item.id === newItem.id);

      if(!exitingItem){
       // যদি না থাকে, তবে নতুন অবজেক্ট হিসেবে পুশ করা
        state.items.push({
            id: newItem.id,
            name: newItem.name,
            price: newItem.price,
            image: newItem.image,
            quantity: 1,
            totalPrice: newItem.price,
        })
      }else{
       // যদি থাকে, তবে ওই স্পেসিফিক আইটেমের quantity এবং totalPrice বাড়ানো
        exitingItem.quantity++;
        exitingItem.totalPrice = exitingItem.price * exitingItem.quantity;
      }

      state.totalAmount += newItem.price;

      // মোট কোয়ান্টিটি বাড়ানো (কার্ট আইকনের জন্য)
      state.totalQuantity++;
    },

    removeFromCart:(state, action) => {
        const id = action.payload;
        const exitingItem = state.items.find((item) => item.id === id);

        if(exitingItem){
            state.totalAmount -= exitingItem.price;

            // মোট কোয়ান্টিটি কমানো (কার্ট আইকনের জন্য)
            state.totalQuantity--;
            state.items = state.items.filter((item) => item.id !== id);

            
        }
    }
  },
});
